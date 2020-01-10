<?php
namespace domain\book;


class PDOBookRepository implements BookRepositoryInterface {
    private $_connection;

    public function __construct(\PDO $connection) {
        $this->_connection = $connection;
    }

    public function getAll(int $offset = 0, int $limit = 0): iterable{
        if($offset == 0 && $limit == 0)
            $statement = $this->_connection->prepare("SELECT b.*, CONCAT_WS(' ', a.lastname, a.firstname) as authorName, CONCAT_WS(' ', u.lastname, u.firstname) as borrowedByName, g.genre as genreName, c.condition as conditionName, p.place as placeName FROM books b
            LEFT JOIN authors a ON b.author_id = a.id
            LEFT JOIN (
                SELECT u.*, br.book_id, br.state FROM book_requests br
                LEFT JOIN users u ON br.user_id = u.id
                ORDER BY br.request_added DESC
                ) u ON u.book_id = b.id AND u.state = 2
            LEFT JOIN genres g ON b.genre_id = g.id
            LEFT JOIN conditions c ON b.condition_id = c.id
            LEFT JOIN places p ON b.place_id = p.id");
        else {
            $statement = $this->_connection->prepare("SELECT b.*, CONCAT_WS(' ', a.lastname, a.firstname) as authorName, CONCAT_WS(' ', u.lastname, u.firstname) as borrowedByName, g.genre as genreName, c.condition as conditionName, p.place as placeName FROM books b
            LEFT JOIN authors a ON b.author_id = a.id
            LEFT JOIN (
                SELECT u.*, br.book_id, br.state FROM book_requests br
                LEFT JOIN users u ON br.user_id = u.id
                ORDER BY br.request_added DESC
                ) u ON u.book_id = b.id AND u.state = 2
            LEFT JOIN genres g ON b.genre_id = g.id
            LEFT JOIN conditions c ON b.condition_id = c.id
            LEFT JOIN places p ON b.place_id = p.id
            LIMIT ?, ?");
            $statement->bindValue(1, $offset, \PDO::PARAM_INT);
            $statement->bindValue(2, $limit, \PDO::PARAM_INT);
        }
        $statement->execute();
        $statement = $statement->fetchAll(\PDO::FETCH_ASSOC);

        foreach ($statement as $row) {
            yield new Book($row["id"], $row["ISBN"], $row["name"], $row["author_id"], $row["description"], $row["page_count"], $row["year"], $row["condition_id"], $row["place_id"], $row["genre_id"], $row["maturita_ready"], $row["authorName"], $row["borrowedByName"], $row["genreName"] ?? "", $row["conditionName"] ?? "", $row["placeName"] ?? "");
        }
    }
    public function search(string $text): iterable{
        $statement = $this->_connection->prepare("SELECT b.*, CONCAT_WS(' ', a.lastname, a.firstname) as authorName, CONCAT_WS(' ', u.lastname, u.firstname) as borrowedByName, g.genre as genreName, c.condition as conditionName, p.place as placeName FROM books b
        LEFT JOIN authors a ON b.author_id = a.id
        LEFT JOIN (
            SELECT u.*, br.book_id, br.state FROM book_requests br
            LEFT JOIN users u ON br.user_id = u.id
            ORDER BY br.request_added DESC
            ) u ON u.book_id = b.id AND u.state = 2
        LEFT JOIN genres g ON b.genre_id = g.id
        LEFT JOIN conditions c ON b.condition_id = c.id
        LEFT JOIN places p ON b.place_id = p.id
        WHERE b.name LIKE :keywords OR CONCAT_WS(' ', a.lastname, a.firstname) LIKE :keywords OR b.id = :id");
        $statement->bindValue(':keywords', '%'.$text.'%');
        $statement->bindValue(':id', $text);
        $statement->execute();
        $statement = $statement->fetchAll(\PDO::FETCH_ASSOC);
        foreach ($statement as $row) {
            yield new Book($row["id"], $row["ISBN"], $row["name"], $row["author_id"], $row["description"], $row["page_count"], $row["year"], $row["condition_id"], $row["place_id"], $row["genre_id"], $row["maturita_ready"], $row["authorName"], $row["borrowedByName"], $row["genreName"] ?? "", $row["conditionName"] ?? "", $row["placeName"] ?? "");
        }
    }
    public function getAllWithAuthor(int $author_id): iterable{
    }
    public function getById(int $id): ?Book{
        $statement = $this->_connection->prepare("SELECT b.*, CONCAT_WS(' ', a.lastname, a.firstname) as authorName, CONCAT_WS(' ', u.lastname, u.firstname) as borrowedByName, g.genre as genreName, c.condition as conditionName, p.place as placeName FROM books b
        LEFT JOIN authors a ON b.author_id = a.id
        LEFT JOIN (
            SELECT u.*, br.book_id, br.state FROM book_requests br
            LEFT JOIN users u ON br.user_id = u.id
            ORDER BY br.request_added DESC
            ) u ON u.book_id = b.id AND u.state = 2
        LEFT JOIN genres g ON b.genre_id = g.id
        LEFT JOIN conditions c ON b.condition_id = c.id
        LEFT JOIN places p ON b.place_id = p.id
        WHERE b.id = ?");
        $statement->execute([$id]);
        $row = $statement->fetch();

        return new Book($row["id"], $row["ISBN"], $row["name"], $row["author_id"], $row["description"], $row["page_count"], $row["year"], $row["condition_id"], $row["place_id"], $row["genre_id"], $row["maturita_ready"], $row["authorName"], $row["borrowedByName"], $row["genreName"] ?? "", $row["conditionName"] ?? "", $row["placeName"] ?? "");
    }
    public function add(string $isbn, string $name, int $autorId, string $description, int $pageCount, int $year, int $conditionId, int $placeId, int $genreId, int $maturita): Book {
        $statement = $this->_connection->prepare("INSERT INTO books (`ISBN`, `name`, `author_id`, `description`, `page_count`, `year`, `condition_id`, `place_id`, `genre_id`, `maturita_ready`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $statement->execute([$isbn, $name, $autorId, $description, $pageCount, $year, $conditionId, $placeId, $genreId, $maturita]);
        $id = (int)$this->_connection->lastInsertId();

        return $this->getById($id);
    }
    public function update(Book $book){
        $id = $book->getId();

        $statement = $this->_connection->prepare("UPDATE books SET ISBN=?, name=?, author_id=?, description=?, page_count=?, year=?, condition_id=?, place_id=?, genre_id=?, maturita_ready=? WHERE id = ?");
        $statement->execute([$book->getISBN(), $book->getName(), $book->getAuthorId(), $book->getDescription(), $book->getPageCount(), $book->getYear(), $book->getConditionId(), $book->getPlaceId(), $book->getGenreId(), $book->getMaturitaReady(), $id]);
    }
    public function removeById(int $id){
    }
    public function count(): int{
        $statement = $this->_connection->query("SELECT COUNT(*) FROM books");
        return intval($statement->fetchColumn());
    }
}