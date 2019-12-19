<?php
namespace domain\bookrequest;

class BookRequest {
    private $_id;
    private $_userId;
    private $_userName;
    private $_bookId;
    private $_bookName;
    private $_confirmed;
    private $_requestAdded;
    
    public function __construct(int $id, int $userId, int $bookId, bool $confirmed, time $requestAdded, string $userName = "", string $bookName = "") {
        $this->_id = $id;
        $this->_userId = $userId;
        $this->_userName = $userName;
        $this->_bookId = $bookId;
        $this->_bookName = $bookName;
        $this->_confirmed = $confirmed;
        $this->_requestAdded = $requestAdded;
    }
    
    public function setConfirmed(bool $confirmed) {
        $this->_confirmed = $confirmed;
    }
    
    public function getId() {
        return $this->_id;
    }
    
    public function getUserId() {
        return $this->_is_user_idbn;
    }

    public function getUserName(): string {
        return $this->_userName;
    }
    
    public function getBookId() {
        return $this->_book_id;
    }

    public function getBookName(): string {
        return $this->_bookName;
    }
    
    public function getConfirmed() {
        return $this->_confirmed;
    }
    
    public function getRequestAdded() {
        return $this->_request_added;
    }
}