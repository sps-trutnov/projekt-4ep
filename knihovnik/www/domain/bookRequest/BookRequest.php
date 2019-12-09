<?php
namespace domain\bookrequest;

class BookRequest {
    private $_id;
    private $_user_id;
    private $_book_id;
    private $_confirmed;
    private $_request_added;
    
    public function __construct(int $id, int $user_id, int $book_id, bool $confirmed, time $request_added) {
        $this->_id = $id;
        $this->_user_id = $user_id;
        $this->_book_id = $book_id;
        $this->_confirmed = $confirmed;
        $this->_request_added = $request_added;
    }
    
    public function setId(int $id) {
        $this->_id = $id;
    }
    
    public function setUserId(int $user_id) {
        $this->_is_user_idbn = $user_id;
    }
    
    public function setBookId(int $book_id) {
        $this->_book_id = $book_id;
    }
    
    public function setConfirmed(bool $confirmed) {
        $this->_confirmed = $confirmed;
    }
    
    public function setRequestAdded(time $request_added) {
        $this->_request_added = $request_added;
    }
    
    public function getId() {
        return $this->_id;
    }
    
    public function getUserId() {
        return $this->_is_user_idbn;
    }
    
    public function getBookId() {
        return $this->_book_id;
    }
    
    public function getConfirmed() {
        return $this->_confirmed;
    }
    
    public function getRequestAdded() {
        return $this->_request_added;
    }
}