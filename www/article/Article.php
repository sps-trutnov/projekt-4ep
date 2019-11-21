<?php
namespace article;

class Article {
    private $_id;
    private $_title;
    private $_content;
    private $_authorId;

    public function __construct(int $id, string $title, string $content, int $authorId) {
        $this->_id = $id;
        $this->_title = $title;
        $this->_content = $content;
        $this->_authorId = $authorId;
    }

    public function setId(int $id) {
        $this->_id = $id;
    }

    public function setTitle(string $title) {
        $this->_title = $title;
    }

    public function setContent(string $content) {
        $this->_content = $content;
    }

    public function setAuthorId(int $authorId) {
        $this->_authorId = $authorId;
    }

    public function getId(): int {
        return $this->_id;
    }

    public function getTitle(): string {
        return $this->_title;
    }

    public function getContent(): string {
        return $this->_content;
    }

    public function getAuthorId(): int {
        return $this->_authorId;
    }
}