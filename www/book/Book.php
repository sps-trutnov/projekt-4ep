<?php
namespace kniha;

class Kniha {
    private $_id;
    private $_isbn;
    private $_autorId;
    private $_description;
    private $_name;
    private $_year;
    private $_conditionId;
    private $_admin;
    private $_placeId;
    private $_genreId;
    private $borrowedBy;
    private $borrowTime;
    private $maturita;
    private $pageCount;
    
    public function __construct(int $id, string $isbn, string $name, int $autorId, string $description, int $pageCount, int $year, int $conditionId, int $placeId, int $genreId, int $admin, int $borrowedBy, string $borrowedTime, int $maturita) {
        $this->_id = $id;
        $this->_isbn = $isbn;
        $this->_autorId = $autorId;
        $this->_name = $name;
        $this->_year = $year;
        $this->_conditionId = $conditionId;
        $this->_admin = $admin;
        $this->_placeId = $placeId;
        $this->_genreId = $genreId;
        $this->_borrowedBy = $borrowedBy;
        $this->_borrowTime = $borrowTime;
        $this->_maturita = $maturita;
        $this->_pageCount = $pageCount;
    }
    
    public function setId() {
        $this->_id = $id;
    }
    
    public function setIsbn() {
        $this->_isbn = $isbn;
    }
    
    public function setAutorId() {
        $this->_autorId = $autorId;
    }
    
    public function setName() {
        $this->_name = $name;
    }
    
    public function setYear() {
        $this->_year = $year;
    }
    
    public function setConditionId() {
        $this->_conditionId = $conditionId;
    }
    
    public function setAdmin() {
        $this->_admin = $admin;
    }
    
    public function setPlaceId() {
        $this->_placeId = $placeId;
    }
    
    public function setGenreId() {
        $this->_genreId = $genreId;
    }
    
    public function setBorrowedBy() {
        $this->_borrowedBy = $borrowedBy;
    }
    
    public function setBorrowTime() {
        $this->_borrowTime = $borrowTime;
    }
    
    public function setMaturita() {
        $this->_maturita = $maturita;
    }
    
    public function setPageCount() {
        $this->_pageCount = $pageCount;
    }
}