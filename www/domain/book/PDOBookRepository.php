<?php
namespace domain\book;


class PDOBookRepository implements BookRepositoryInterface {
    private $_connection;

    public function __construct(\PDO $connection) {
        $this->_connection = $connection;
    }

    public function getAll(int $offset = 0, int $limit = 0): iterable{
        if($offset == 0 && $limit == 0)
            $statement = $this->_connection->prepare("SELECT books.*, CONCAT_WS(' ', authors.lastname, authors.firstname) as authorName, CONCAT_WS(' ', users.lastname, users.firstname) as borrowedByName, genres.genre as genreName, conditions.condition as conditionName, places.place as placeName FROM books 
            LEFT JOIN authors ON books.author_id = authors.id
            LEFT JOIN users ON books.borrowed_by = users.id
            LEFT JOIN genres ON books.genre_id = genres.id
            LEFT JOIN conditions ON books.condition_id = conditions.id
            LEFT JOIN places ON books.place_id = places.id");
        else {
            $statement = $this->_connection->prepare("SELECT books.*, CONCAT_WS(' ', authors.lastname, authors.firstname) as authorName, CONCAT_WS(' ', users.lastname, users.firstname) as borrowedByName, genres.genre as genreName, conditions.condition as conditionName, places.place as placeName FROM books 
            LEFT JOIN authors ON books.author_id = authors.id
            LEFT JOIN users ON books.borrowed_by = users.id
            LEFT JOIN genres ON books.genre_id = genres.id
            LEFT JOIN conditions ON books.condition_id = conditions.id
            LEFT JOIN places ON books.place_id = places.id
            LIMIT ?, ?");
            $statement->bindValue(1, $offset, \PDO::PARAM_INT);
            $statement->bindValue(2, $limit, \PDO::PARAM_INT);
        }
        $statement->execute();
        $statement = $statement->fetchAll(\PDO::FETCH_ASSOC);
        foreach ($statement as $row) {
            yield new Book($row["id"], $row["ISBN"], $row["name"], $row["author_id"], $row["description"], $row["page_count"], $row["year"], $row["condition_id"], $row["place_id"], $row["genre_id"], $row["administrator"], $row["borrowed_by"], $row["borrow_time"], $row["maturita_ready"], $row["authorName"], $row["borrowedByName"], $row["genreName"] ?? "");
        }
    }
    public function search(string $text): iterable{
        $statement = $this->_connection->prepare("SELECT b.*, CONCAT_WS(' ', a.lastname, a.firstname) as authorName, CONCAT_WS(' ', u.lastname, u.firstname) as borrowedByName, g.genre as genreName, c.condition as conditionName, p.place as placeName FROM books b
        LEFT JOIN authors a ON b.author_id = a.id
        LEFT JOIN users u ON b.borrowed_by = u.id
        LEFT JOIN genres g ON b.genre_id = g.id
        LEFT JOIN conditions c ON b.condition_id = c.id
        LEFT JOIN places p ON b.place_id = p.id
        WHERE b.name LIKE :keywords OR CONCAT_WS(' ', a.lastname, a.firstname) LIKE :keywords");
        $statement->bindValue(':keywords', '%'.$text.'%');
        $statement->execute();
        $statement = $statement->fetchAll(\PDO::FETCH_ASSOC);
        foreach ($statement as $row) {
            yield new Book($row["id"], $row["ISBN"], $row["name"], $row["author_id"], $row["description"], $row["page_count"], $row["year"], $row["condition_id"], $row["place_id"], $row["genre_id"], $row["administrator"], $row["borrowed_by"], $row["borrow_time"], $row["maturita_ready"], $row["authorName"], $row["borrowedByName"], $row["genreName"] ?? "");
        }
    }
    public function getAllWithAuthor(int $author_id): iterable{
    }
    public function getById(int $id): ?Book{
        $statement = $this->_connection->prepare("SELECT b.*, CONCAT_WS(' ', a.lastname, a.firstname) as authorName, CONCAT_WS(' ', u.lastname, u.firstname) as borrowedByName, g.genre as genreName, c.condition as conditionName, p.place as placeName FROM books b
        LEFT JOIN authors a ON b.author_id = a.id
        LEFT JOIN users u ON b.borrowed_by = u.id
        LEFT JOIN genres g ON b.genre_id = g.id
        LEFT JOIN conditions c ON b.condition_id = c.id
        LEFT JOIN places p ON b.place_id = p.id
        WHERE b.id = ?");
        $statement->execute([$id]);
        $row = $statement->fetch();

        return new Book($row["id"], $row["ISBN"], $row["name"], $row["author_id"], $row["description"], $row["page_count"], $row["year"], $row["condition_id"], $row["place_id"], $row["genre_id"], $row["administrator"], $row["borrowed_by"], $row["borrow_time"], $row["maturita_ready"], $row["authorName"], $row["borrowedByName"], $row["genreName"] ?? "");
    }
    public function add(string $isbn, string $name, int $autorId, string $description, int $pageCount, int $year, int $conditionId, int $placeId, int $genreId, int $admin, bool $maturita): Book {
        $statement = $this->_connection->prepare("INSERT INTO books (`ISBN`, `name`, `author_id`, `description`, `page_count`, `year`, `condition_id`, `place_id`, `genre_id`, `administrator`, `maturita_ready`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $statement->execute([$isbn, $name, $autorId, $description, $pageCount, $year, $conditionId, $placeId, $genreId, $admin, $maturita]);
        $id = (int)$this->_connection->lastInsertId();

        return $this->getById($id);
    }
    public function update(Book $book){
    }
    public function removeById(int $id){
    }
    public function count(): int{
        $statement = $this->_connection->query("SELECT COUNT(*) FROM books");
        return intval($statement->fetchColumn());
    }
}