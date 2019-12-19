<?php
namespace domain\place;

class PDOPlaceRepository implements PlaceRepositoryInterface {
    private $_connection;

    public function __construct(\PDO $connection) {
        $this->_connection = $connection;
    }


    function add(int $place): Place {
        $statement = $this->_connection->prepare("INSERT INTO places(place) VALUES(?)");
        $statement->execute($place);

        $id = (int)$this->_connection->lastInsertId();

        return new Place($id, $place);
    }

    function getById(int $id): ?Place {
        $statement = $this->_connection->prepare("SELECT * FROM places WHERE id = ?");
        $statement->execute($id);

        $row = $statement->fetch();

        if($row === false)
            return null;

        return new Place($row["id"], $row["place"]);
    }

    function update(Place $place) {
        $id = $place->getId();
        $place = $place->getPlace();

        $statement = $this->_connection->prepare("UPDATE places SET place = ? WHERE id = ?");
        $statement->execute([$place, $id]);
    }

    function removeById(int $id) {
        $statement = $this->_connection->prepare("DELETE FROM places WHERE id = ?");
        $statement->execute([$id]);
    }
    function getAll(): iterable {
        $statement = $this->_connection->query("SELECT * FROM places");

        $statement = $statement->fetchAll(\PDO::FETCH_ASSOC);
        
        foreach ($statement as $row) {
            yield new Place($row["id"], $row["place"]);
        }
    }
}