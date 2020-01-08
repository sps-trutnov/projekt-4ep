<?php
namespace domain\bookRequest;

class PDOBookRequestRepository implements BookRequestRepositoryInterface {
    private $_connection;

    public function __construct(\PDO $connection) {
        $this->_connection = $connection;
    }


    function add(int $user_id, int $book_id): BookRequest {
        $statement = $this->_connection->prepare("INSERT INTO book_requests(user_ID, book_ID) VALUES(?, ?)");
        $statement->execute([$user_id, $book_id]);

        $id = (int)$this->_connection->lastInsertId();

        return $this->getById($id);
    }

    function getById(int $id): ?BookRequest {
        $statement = $this->_connection->prepare("SELECT br.*, b.name as bookName, CONCAT_WS(' ', u.lastname, u.firstname) as userName FROM book_requests br 
        LEFT JOIN books b on b.id = br.book_ID
        LEFT JOIN users u on u.id = br.user_ID
        WHERE br.id = ?");
        $statement->execute([$id]);

        $row = $statement->fetch();

        if($row === false)
            return null;

        return new BookRequest($row["id"], $row["user_id"], $row["book_id"], $row["state"], $row["book_borrowed"], $row["book_returned"], new \DateTime($row["request_added"]));
    }

    function update(BookRequest $book) {


        $statement = $this->_connection->prepare("UPDATE book_requests SET state = ?, book_borrowed = ?, book_returned = ? WHERE id = ?");
        $statement->execute([$book->getState(), ($book->getBookBorrowed()) ? $book->getBookBorrowed()->format('Y-m-d H:i:s') : null, ($book->getBookReturned()) ? $book->getBookReturned()->format('Y-m-d H:i:s') : null, $book->getId()]);
    }

    function removeById(int $id) {
        $statement = $this->_connection->prepare("DELETE FROM book_requests WHERE id = ?");
        $statement->execute([$id]);
    }

    function getAll(): iterable {
        $statement = $this->_connection->query("SELECT br.*, b.name as bookName, CONCAT_WS(' ', u.lastname, u.firstname) as userName, CONCAT_WS(' ', a.lastname, a.firstname) as authorName, p.place as placeName FROM book_requests br 
        LEFT JOIN books b
        LEFT JOIN authors a on b.author_id = a.id
        LEFT JOIN places p on b.place_id = p.id
        on b.id = br.book_ID
        LEFT JOIN users u on u.id = br.user_ID
        ");

        foreach ($statement as $row) {
            yield new BookRequest($row["id"], $row["user_id"], $row["book_id"], $row["state"], $row["book_borrowed"], $row["book_returned"], new \DateTime($row["request_added"]), $row["userName"], $row["bookName"], $row["authorName"], $row["placeName"]);
        }
    }

    function getRequested(): iterable {
        $statement = $this->_connection->query("SELECT br.*, b.name as bookName, CONCAT_WS(' ', u.lastname, u.firstname) as userName, CONCAT_WS(' ', a.lastname, a.firstname) as authorName, p.place as placeName FROM book_requests br 
        LEFT JOIN books b
        LEFT JOIN authors a on b.author_id = a.id
        LEFT JOIN places p on b.place_id = p.id
        on b.id = br.book_ID
        LEFT JOIN users u on u.id = br.user_ID
        WHERE br.state = 0
        ");

        foreach ($statement as $row) {
            yield new BookRequest($row["id"], $row["user_id"], $row["book_id"], $row["state"], $row["book_borrowed"], $row["book_returned"], new \DateTime($row["request_added"]), $row["userName"], $row["bookName"], $row["authorName"], $row["placeName"]);
        }
    }

    function getConfirmed(): iterable {
        $statement = $this->_connection->query("SELECT br.*, b.name as bookName, CONCAT_WS(' ', u.lastname, u.firstname) as userName, CONCAT_WS(' ', a.lastname, a.firstname) as authorName, p.place as placeName FROM book_requests br 
        LEFT JOIN books b
        LEFT JOIN authors a on b.author_id = a.id
        LEFT JOIN places p on b.place_id = p.id
        on b.id = br.book_ID
        LEFT JOIN users u on u.id = br.user_ID
        WHERE br.state = 1
        ");

        foreach ($statement as $row) {
            yield new BookRequest($row["id"], $row["user_id"], $row["book_id"], $row["state"], $row["book_borrowed"], $row["book_returned"], new \DateTime($row["request_added"]), $row["userName"], $row["bookName"], $row["authorName"], $row["placeName"]);
        }
    }

    function getBorrowed(): iterable {
        $statement = $this->_connection->query("SELECT br.*, b.name as bookName, CONCAT_WS(' ', u.lastname, u.firstname) as userName, CONCAT_WS(' ', a.lastname, a.firstname) as authorName, p.place as placeName FROM book_requests br 
        LEFT JOIN books b
        LEFT JOIN authors a on b.author_id = a.id
        LEFT JOIN places p on b.place_id = p.id
        on b.id = br.book_ID
        LEFT JOIN users u on u.id = br.user_ID
        WHERE br.state = 2
        ");

        foreach ($statement as $row) {
            yield new BookRequest($row["id"], $row["user_id"], $row["book_id"], $row["state"], $row["book_borrowed"], $row["book_returned"], new \DateTime($row["request_added"]), $row["userName"], $row["bookName"], $row["authorName"], $row["placeName"]);
        }
    }
}