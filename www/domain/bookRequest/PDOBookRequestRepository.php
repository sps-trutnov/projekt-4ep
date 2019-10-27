<?php
namespace domain\bookrequest;

class PDOBookRequestRepository implements BookRequestRepositoryInterface {
    private $_connection;

    public function __construct(\PDO $connection) {
        $this->_connection = $connection;
    }


    function add(int $user_id, int $book_id): BookRequest {
        $time = time();
        $statement = $this->_connection->prepare("INSERT INTO book_requests(user_ID, book_ID, confirmed, request_added) VALUES(?, ?, ?, ?)");
        $statement->execute($user_id, $book_id, false, $time);

        $id = (int)$this->_connection->lastInsertId();

        return new BookRequest($id, $user_id, $book_id, false, $time);
    }

    function getById(int $id): ?BookRequest {
        $statement = $this->_connection->prepare("SELECT * FROM book_requests WHERE id = ?");
        $statement->execute($id);

        $row = $statement->fetch();

        if($row === false)
            return null;

        return new BookRequest($row["id"], $row["user_ID"], $row["book_ID"], $row["confirmed"], $row["request_added"]);
    }

    function update(BookRequest $book) {
        $id = $book->getId();
        $confirmed = $book->getConfirmed();

        $statement = $this->_connection->prepare("UPDATE book_requests SET confirmed = ? WHERE id = ?");
        $statement->execute($confirmed, $id);
    }

    function removeById(int $id) {
        $statement = $this->_connection->prepare("DELETE FROM book_requests WHERE id = ?");
        $statement->execute([$id]);
    }
    function getAll(): iterable {
        $statement = $this->_connection->query("SELECT * FROM book_requests");

        foreach ($statement as $row) {
            yield new BookRequest($row["id"], $row["user_ID"], $row["book_ID"], $row["confirmed"], $row["request_added"]);
        }
    }
}