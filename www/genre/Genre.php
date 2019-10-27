<?php
namespace genre;

class Genre {
    private $_id;
    private $_genre;
    
    public function __construct(int $id, string $genre) {
        $this->_id = $id;
        $this->_genre = $genre;
    }
    
    public function setId(int $id) {
        $this->_id = $id;
    }
    
    public function setGenre(string $genre) {
        $this->_genre = $genre;
    }

    public function getId(): int {
        return $this->_id;
    }

    public function getGenre(): string {
        return $this->_genre;
    }
}