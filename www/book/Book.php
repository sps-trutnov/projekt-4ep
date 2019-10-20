<?php
namespace book;

class Book {
    private $_id;
    private $_isbn;
    private $_authorId;
    private $_description;
    private $_name;
    private $_year;
    private $_conditionId;
    private $_administrator;
    private $_placeId;
    private $_genreId;
    private $_borrowedBy;
    private $_borrowTime;
    private $_maturitaReady;
    private $_pageCount;
	private $_authorName;
	private $_borrowedByName;
    
    public function __construct(int $id, string $isbn, string $name, int $authorId, string $description, int $pageCount, int $year, int $conditionId, int $placeId, int $genreId, int $administrator, int $borrowedBy, string $borrowTime, int $maturita) {
        $this->_id = $id;
        $this->_isbn = $isbn;
        $this->_authorId = $authorId;
        $this->_name = $name;
        $this->_year = $year;
        $this->_conditionId = $conditionId;
        $this->_administrator = $administrator;
        $this->_placeId = $placeId;
        $this->_genreId = $genreId;
        $this->_borrowedBy = $borrowedBy;
        $this->_borrowTime = $borrowTime;
        $this->_maturitaReady = $maturita;
        $this->_pageCount = $pageCount;
    }
    
    public function setId(int $id) {
        $this->_id = $id;
    }
    
    public function setIsbn(string $isbn) {
        $this->_isbn = $isbn;
    }
    
    public function setAuthorId(int $authorId) {
        $this->_authorId = $authorId;
    }
    
    public function setName(string $name) {
        $this->_name = $name;
    }
    
    public function setYear(int $year) {
        $this->_year = $year;
    }
    
    public function setConditionId(int $conditionId) {
        $this->_conditionId = $conditionId;
    }
    
    public function setAdmin(int $administrator) {
        $this->_administrator = $administrator;
    }
    
    public function setPlaceId(int $placeId) {
        $this->_placeId = $placeId;
    }
    
    public function setGenreId(int $genreId) {
        $this->_genreId = $genreId;
    }
    
    public function setBorrowedBy(int $borrowedBy) {
        $this->_borrowedBy = $borrowedBy;
    }
    
    public function setBorrowTime(string $borrowTime) {
        $this->_borrowTime = $borrowTime;
    }
    
    public function setMaturitaReady(boolean $maturitaReady) {
        $this->_maturita = $maturitaReady;
    }
    
    public function setPageCount(int $pageCount) {
        $this->_pageCount = $pageCount;
    }

    public function getName(): string {
        return $this->_name;
    }

    public function getAuthorId(): int {
        return $this->_authorId;
    }

    public function getBorrowedBy(): int {
        return $this->_borrowedBy;
    }

    public function getAuthorName(): string {
        return $this->_authorName;
    }

    public function getBorrowedName(): string {
        return $this->_borrowedByName;
    }
}