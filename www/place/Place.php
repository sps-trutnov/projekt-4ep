<?php
namespace place;

class Place {
    private $_id;
    private $_place;
    
    public function __construct(int $id, string $place) {
        $this->_id = $id;
        $this->_place = $place;
    }
    
    public function setId(int $id) {
        $this->_id = $id;
    }
    
    public function setPlace(int $place) {
        $this->_firstname = $place;
    }
    
    public function getId() {
        return $this->_id;
    }
    
    public function getPlace(): string {
        return $this->_place;
    }
}