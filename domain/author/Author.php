<?php
namespace domain\author;

class Author {
    private $_id;
    private $_firstname;
    private $_lastname;
    
    public function __construct(int $id, string $firstname, string $lastname) {
        $this->_id = $id;
        $this->_firstname = $firstname;
        $this->_lastname = $lastname;
    }
    
    public function setId(int $id) {
        $this->_id = $id;
    }
    
    public function setFirstname(int $firstname) {
        $this->_firstname = $firstname;
    }
    
    public function setLastname(int $lastname) {
        $this->_lastname = $lastname;
    }
    
    public function getId() {
        return $this->_id;
    }
    
    public function getFirstname(): string {
        return $this->_firstname;
    }
    
    public function getLastname(): string {
        return $this->_lastname;
    }

    public function getFullname(): string {
        return "$this->_lastname $this->_firstname";
    }
}