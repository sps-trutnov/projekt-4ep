<?php
namespace domain\bookrequest;

class BookRequest {
    private $_id;
    private $_userId;
    private $_userName;
    private $_bookId;
    private $_bookName;
    private $_bookAuthorName;
    private $_confirmed;
    private $_requestAdded;
    private $_placeName;
    
    public function __construct(int $id, int $userId, int $bookId, bool $confirmed, int $requestAdded, string $userName = "", string $bookName = "", string $bookAuthorName = "", string $placeName = "") {
        $this->_id = $id;
        $this->_userId = $userId;
        $this->_userName = $userName;
        $this->_bookId = $bookId;
        $this->_bookName = $bookName;
        $this->_confirmed = $confirmed;
        $this->_requestAdded = $requestAdded;
        $this->_bookAuthorName = $bookAuthorName;
        $this->_placeName = $placeName;
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
        return $this->_bookId;
    }

    public function getBookName(): string {
        return $this->_bookName;
    }

    public function getBookAuthorName(): string {
        return $this->_bookAuthorName;
    }

    public function getPlaceName(): string{
        return $this->_placeName;
    }
    
    public function getConfirmed() {
        return $this->_confirmed;
    }
    
    public function getRequestAdded(): int {
        return $this->_request_added;
    }
}