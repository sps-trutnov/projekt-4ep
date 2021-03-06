<?php
namespace domain\genre;


class PDOGenreRepository implements GenreRepositoryInterface {
    private $_connection;

    public function __construct(\PDO $connection) {
        $this->_connection = $connection;
    }

    public function getAll(): iterable{
        $statement = $this->_connection->query("SELECT * FROM genres ORDER BY genre");
        $statement = $statement->fetchAll(\PDO::FETCH_ASSOC);
        foreach ($statement as $row) {
            yield new Genre($row["id"], $row["genre"]);
        }
    }

    public function getById(int $id): ?Genre{
    }
    public function add(string $genre): Genre {
        $statement = $this->_connection->prepare("INSERT INTO genres(genre) VALUES(?)");
        $statement->execute([$genre]);

        $id = (int)$this->_connection->lastInsertId();

        return new Genre($id, $genre);
    }
    public function update(Genre $genre){
    }
    public function removeById(int $id){
    }
}