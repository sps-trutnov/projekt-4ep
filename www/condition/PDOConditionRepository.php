<?php
namespace condition;


class PDOConditionRepository implements ConditionRepositoryInterface {
    private $_connection;

    public function __construct(\PDO $connection) {
        $this->_connection = $connection;
    }

    public function getAll(): iterable{
        $statement = $this->_connection->query("SELECT * FROM conditions");
        $statement = $statement->fetchAll(\PDO::FETCH_ASSOC);
        foreach ($statement as $row) {
            yield new Condition($row["id"], $row["condition"]);
        }
    }

    public function getById(int $id): ?Condition{
    }
    public function add(int $id, string $condition): Condition {
    }
    public function update(Condition $condition){
    }
    public function removeById(int $id){
    }
}