<?php
namespace domain\user;

class User {
    private $_id;
    private $_name;
    private $_passwordHash;
    private $_is_administrator;
    private $_is_librarian;

    public function __construct(int $id, string $name, string $passwordHash, int $is_administrator, int $is_librarian) {
        $this->_id = $id;
        $this->_name = $name;
        $this->_passwordHash = $passwordHash;
        $this->_is_administrator = $is_administrator;
        $this->_is_librarian = $is_librarian;
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

    public function getIsLibrarian(): int {
        return $this->_is_librarian;
    }
}