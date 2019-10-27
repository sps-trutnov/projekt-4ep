<?php
namespace domain\book;


class PDOBookRepository implements BookRepositoryInterface {
    private $_connection;

    public function __construct(\PDO $connection) {
        $this->_connection = $connection;
    }

    public function getAll(int $offset = 0, int $limit = 0): iterable{
        if($offset == 0 && $limit == 0)
            $statement = $this->_connection->prepare("SELECT * FROM books");
        else {
            $statement = $this->_connection->prepare("SELECT * FROM books LIMIT ?, ?");
            $statement->bindValue(1, $offset, \PDO::PARAM_INT);
            $statement->bindValue(2, $limit, \PDO::PARAM_INT);
        }
        $statement->execute();
        $statement = $statement->fetchAll(\PDO::FETCH_ASSOC);
        foreach ($statement as $row) {
            yield new Book($row["id"], $row["ISBN"], $row["name"], $row["author_id"], $row["description"], $row["page_count"], $row["year"], $row["condition_id"], $row["place_id"], $row["genre_id"], $row["administrator"], $row["borrowed_by"], $row["borrow_time"], $row["maturita_ready"]);
        }
    }
    public function getAllWithAuthor(int $author_id): iterable{
    }
    public function getById(int $id): ?Book{
    }
    public function add(string $isbn, string $name, int $autorId, string $description, int $pageCount, int $year, int $conditionId, int $placeId, int $genreId, int $admin, int $maturita): Book {
    }
    public function update(Book $book){
    }
    public function removeById(int $id){
    }
}