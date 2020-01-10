<?php
namespace domain\book;

class Book {
    private $_id;
    private $_isbn;
    private $_authorId;
    private $_description;
    private $_name;
    private $_year;
    private $_conditionId;
    private $_placeId;
    private $_genreId;
    private $_maturitaReady;
    private $_pageCount;
	private $_authorName;
    private $_borrowedByName;
    private $_genreName;
    private $_conditionName;
    private $_placeName;
    
    public function __construct(int $id, string $isbn, string $name, int $authorId, string $description, int $pageCount, int $year, int $conditionId, int $placeId, int $genreId, int $maturita, string $authorName = "", string $borrowedByName = "", string $genreName = "", string $conditionName = "", string $placeName = "") {
        $this->_id = $id;
        $this->_isbn = $isbn;
        $this->_authorId = $authorId;
        $this->_name = $name;
        $this->_year = $year;
        $this->_conditionId = $conditionId;
        $this->_placeId = $placeId;
        $this->_genreId = $genreId;
        $this->_maturitaReady = $maturita;
        $this->_pageCount = $pageCount;
        $this->_authorName = $authorName;
        $this->_borrowedByName = $borrowedByName;
        $this->_genreName = $genreName;
        $this->_conditionName = $conditionName;
        $this->_placeName = $placeName;
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
    
    public function setPageCount(int $pageCount) {
        $this->_pageCount = $pageCount;
    }

    public function setDescription(string $description) {
        $this->_description = $description;
    }

    public function setConditionId(int $conditionId) {
        $this->_conditionId = $conditionId;
    }
    
    public function setPlaceId(int $placeId) {
        $this->_placeId = $placeId;
    }
    
    public function setGenreId(int $genreId) {
        $this->_genreId = $genreId;
    }
    
    public function setMaturitaReady(bool $maturita) {
        $this->_maturita = $maturita;
    }
    

    public function getId(): int {
        return $this->_id;
    }

    public function getName(): string {
        return $this->_name;
    }

    public function getISBN(): string {
        return $this->_isbn;
    }

    public function getAuthorId(): int {
        return $this->_authorId;
    }

    public function getGenreId(): int {
        return $this->_genreId;
    }

    public function getConditionId(): int{
        return $this->_conditionId;
    }

    public function getPlaceId(): int{
        return $this->_placeId;
    }

    public function getYear(): int {
        return $this->_year;
    }
    public function getDescription(): string {
        return $this->_description ?? "";
    }

    public function getPageCount(): int {
        return $this->_pageCount;
    }

    public function getMaturitaReady(): int {
        return $this->_maturitaReady;
    }

    public function getConditionName(): string {
        return $this->_conditionName ?? "";
    }

    public function getPlaceName(): string {
        return $this->_placeName ?? "";
    }

    public function getAuthorName(): string {
        return $this->_authorName;
    }

    public function getBorrowedByName(): string {
        return $this->_borrowedByName;
    }

    public function getGenreName(): string {
        return $this->_genreName;
    }
}