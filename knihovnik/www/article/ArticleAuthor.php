<?php
namespace article;

class ArticleAuthor {
    private $_id;
    private $_name;

    public function __construct(int $id, string $name) {
        $this->_id = $id;
        $this->_name = $name;
    }

    public function setId(int $id) {
        $this->_id = $id;
    }

    public function setName(string $name) {
        $this->_name = $name;
    }

    public function getId(): int {
        return $this->_id;
    }

    public function getName(): string {
        return $this->_name;
    }
}