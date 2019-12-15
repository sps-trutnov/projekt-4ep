<?php
namespace domain\user;

class User {
    private $_id;
    private $_userName;
    private $_firstName;
    private $_lastName;
    private $_passwordHash;
    private $_is_administrator;
    private $_is_librarian;

    public function __construct(int $id, string $userName, string $firstName, string $lastName, string $passwordHash, int $is_administrator, int $is_librarian) {
        $this->_id = $id;
        $this->_userName = $userName;
        $this->_firstName = $firstName;
        $this->_lastName = $lastName;
        $this->_passwordHash = $passwordHash;
        $this->_is_administrator = $is_administrator;
        $this->_is_librarian = $is_librarian;
    }
    
    public function getId(): int {
        return $this->_id;
    }

    public function getUserName(): string {
        return $this->_userName;
    }

    public function getFirstName(): string {
        return $this->_firstName;
    }

    public function getLastName(): string {
        return $this->_lastName;
    }

    public function getPasswordHash(): string {
        return $this->_passwordHash;
    }

    public function getIsLibrarian(): int {
        return $this->_is_librarian;
    }
}