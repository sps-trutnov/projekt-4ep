<?php
namespace domain\condition;

class Condition {
    private $_id;
    private $_condition;
    
    public function __construct(int $id, string $condition) {
        $this->_id = $id;
        $this->_condition = $condition;
    }
    
    public function setId(int $id) {
        $this->_id = $id;
    }
    
    public function setCondition(string $condition) {
        $this->_condition = $condition;
    }

    public function getId(): int {
        return $this->_id;
    }

    public function getCondition(): string {
        return $this->_condition;
    }
}