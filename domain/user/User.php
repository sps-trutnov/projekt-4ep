<?php
namespace domain\user;

class User {
    private $_id;
    private $_name;
    private $_passwordHash;

    public function __construct(int $id, string $name, string $passwordHash) {
        $this->_id = $id;
        $this->_name = $name;
        $this->_passwordHash = $passwordHash;
    }

    public function setId(int $id) {
        $this->_id = $id;
    }

    public function setName(string $name) {
        $this->_name = $name;
    }

    public function setPasswordHash(string $passwordHash) {
        $this->_passwordHash = $passwordHash;
    }

    public function getId(): int {
        return $this->_id;
    }

    public function getName(): string {
        return $this->_name;
    }

    public function getPasswordHash(): string {
        return $this->_passwordHash;
    }
}