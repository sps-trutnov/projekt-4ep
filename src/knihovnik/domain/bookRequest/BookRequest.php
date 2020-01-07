<?php
namespace domain\bookRequest;

class BookRequest {
    private $_id;
    private $_userId;
    private $_userName;
    private $_bookId;
    private $_bookName;
    private $_bookAuthorName;
    private $_state;
    private $_bookBorrowed;
    private $_bookReturned;
    private $_requestAdded;
    private $_placeName;
    
    public function __construct(int $id, int $userId, int $bookId, int $state, DateTime $bookBorrowed, DateTime $bookReturned, DateTime $requestAdded, string $userName = "", string $bookName = "", string $bookAuthorName = "", string $placeName = "") {
        $this->_id = $id;
        $this->_userId = $userId;
        $this->_userName = $userName;
        $this->_bookId = $bookId;
        $this->_bookName = $bookName;
        $this->_state = $state;
        $this->_bookBorrowed = $bookBorrowed;
        $this->_bookReturned = $bookReturned;
        $this->_requestAdded = $requestAdded;
        $this->_bookAuthorName = $bookAuthorName;
        $this->_placeName = $placeName;
    }
    
    public function setState(bool $state) {
        $this->_state = $state;
    }

    public function setBookBorrowed(DateTime $dateTime){
        $this->_bookBorrowed = $dateTime;
    }

    public function setBookReturned(DateTime $dateTime){
        $this->_bookReturned = $dateTime;
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
    
    public function getRequestAdded(): DateTime {
        return $this->_request_added;
    }

    public function getBookBorrowed(): DateTime {
        return $this->_bookBorrowed;
    }

    public function getBookReturned(): DateTime {
        return $this->_bookReturned;
    }
}