<?php
namespace domain\user;

use passwordHashing\PasswordHasherInterface;

class PDOUserRepository implements UserRepositoryInterface {
    private $_connection;
    private $_passwordHasher;

    public function __construct(\PDO $connection, PasswordHasherInterface $passwordHasher) {
        $this->_connection = $connection;
        $this->_passwordHasher = $passwordHasher;
    }

    public function getById(int $id): ?User {
        $statement = $this->_connection->prepare("SELECT * FROM users WHERE id = ?");
        $statement->execute([$id]);
        $row = $statement->fetch();

        if ($row === false)
             return null;
        
        return new User($row["id"], $row["name"], $row["password_hash"], $row["is_administrator"], $row["is_librarian"]);
    }

    public function getByName(string $name): ?User {
        $statement = $this->_connection->prepare("SELECT * FROM users WHERE `name` = ?");
        $statement->execute([$name]);
        $row = $statement->fetch();

        if ($row === false)
             return null;
        
        return new User($row["id"], $row["name"], $row["password_hash"]);
    }

    public function create(string $name, string $passwordHash): User {
        $statement = $this->_connection->prepare("INSERT INTO users(`name`, password_hash) VALUES(?, ?)");
        $statement->execute([$name, $passwordHash]);

        $id = (int)$this->_connection->lastInsertId();

        return new User($id, $name, $passwordHash);
    }

    public function update(User $user) {
        $id = $user->getId();
        $name = $user->getName();
        $passwordHash = $user->getPasswordHash();

        $statement = $this->_connection->prepare("UPDATE users SET `name` = ?, password_hash = ? WHERE id = ?");
        $statement->execute([$name, $passwordHash, $id]);
    }
}