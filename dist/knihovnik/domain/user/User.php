<?php
namespace domain\user;

class User {
    private $_id;
    private $_userName;
    private $_firstName;
    private $_lastName;
    private $_email;
    private $_password;
    private $_is_administrator;
    private $_is_librarian;

    public function __construct(int $id, string $userName, string $firstName, string $lastName, string $email, string $password, int $is_administrator, int $is_librarian) {
        $this->_id = $id;
        $this->_userName = $userName;
        $this->_firstName = $firstName;
        $this->_lastName = $lastName;
        $this->_email = $email;
        $this->_password = $password;
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

    public function getEmail(): string {
        return $this->_email;
    }

    public function getPassword(): string {
        return $this->_passwordHash;
    }

    public function getIsLibrarian(): bool {
        return (bool) $this->_is_librarian;
    }

    public function getFullName(): string {
        $fullName = trim($this->_firstName." ".$this->_lastName);
        return (!empty($fullName)) ? $fullName : $this->_userName;
    }
}