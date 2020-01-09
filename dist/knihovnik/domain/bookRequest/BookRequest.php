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
    private $_stateText;
    private $_bookBorrowed;
    private $_bookReturned;
    private $_requestAdded;
    private $_placeName;
    
    public function __construct(int $id, int $userId, int $bookId, int $state, ?string $bookBorrowed, ?string $bookReturned, \DateTime $requestAdded, string $userName = "", string $bookName = "", string $bookAuthorName = "", string $placeName = "", string $stateText = "") {
        $this->_id = $id;
        $this->_userId = $userId;
        $this->_userName = $userName;
        $this->_bookId = $bookId;
        $this->_bookName = $bookName;
        $this->_state = $state;
        $this->_stateText = $stateText;
        $this->_bookBorrowed = $bookBorrowed == null ? null : new \DateTime($bookBorrowed);
        $this->_bookReturned = $bookReturned == null ? null : new \DateTime($bookReturned);
        $this->_requestAdded = $requestAdded;
        $this->_bookAuthorName = $bookAuthorName;
        $this->_placeName = $placeName;
    }
    
    public function setState(int $state) {
        $this->_state = $state;
    }

    public function setBookBorrowed(\DateTime $dateTime){
        $this->_bookBorrowed = $dateTime;
    }

    public function setBookReturned(\DateTime $dateTime){
        $this->_bookReturned = $dateTime;
    }
    
    public function getId(): int {
        return $this->_id;
    }
    
    public function getUserId(): int {
        return $this->_userId;
    }

    public function getUserName(): string {
        return $this->_userName;
    }
    
    public function getBookId(): int {
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
    
    public function getState(): int {
        return $this->_state;
    }

    public function getStateText(): string {
        return $this->_stateText;
    }
    
    public function getRequestAdded(): \DateTime {
        return $this->_request_added;
    }

    public function getBookBorrowed(): ?\DateTime {
        return $this->_bookBorrowed;
    }

    public function getBookReturned(): ?\DateTime {
        return $this->_bookReturned;
    }
}