<?php
namespace domain\author;

class PDOAuthorRepository implements AuthorRepositoryInterface {
    private $_connection;

    public function __construct(\PDO $connection) {
        $this->_connection = $connection;
    }


    function add(int $firstname, int $lastname): Author {
        $statement = $this->_connection->prepare("INSERT INTO authors(firstname, lastname) VALUES(?, ?)");
        $statement->execute($firstname, $lastname);

        $id = (int)$this->_connection->lastInsertId();

        return new Author($id, $firstname, $lastname);
    }

    function getById(int $id): ?Author {
        $statement = $this->_connection->prepare("SELECT * FROM authors WHERE id = ?");
        $statement->execute($id);

        $row = $statement->fetch();

        if($row === false)
            return null;

        return new Author($row["id"], $row["firstname"], $row["lastname"]);
    }

    function update(Author $author) {
        $id = $author->getId();
        $firstname = $author->getFirstname();
        $lastname = $author->getLastame();

        $statement = $this->_connection->prepare("UPDATE authors SET firstname = ?, lastname = ? WHERE id = ?");
        $statement->execute([$firstname, $lastname, $id]);
    }

    function removeById(int $id) {
        $statement = $this->_connection->prepare("DELETE FROM authors WHERE id = ?");
        $statement->execute([$id]);
    }
    function getAll(): iterable {
        $statement = $this->_connection->query("SELECT * FROM authors ORDER BY lastname");
        $statement = $statement->fetchAll(\PDO::FETCH_ASSOC);
        
        foreach ($statement as $row) {
            yield new Author($row["id"], $row["firstname"], $row["lastname"]);
        }
    }
}