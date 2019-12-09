<?php
namespace article;

class ArticleWithAuthor {
    private $_article;
    private $_author;

    public function __construct(Article $article, ArticleAuthor $author) {
        $this->_article = $article;
        $this->_author = $author;
    }

    public function setArticle(Article $article) {
        $this->_article = $article;
    }

    public function setAuthor(ArticleAuthor $author) {
        $this->_author = $author;
    }

    public function getArticle(): Article {
        return $this->_article;
    }

    public function getAuthor(): ArticleAuthor {
        return $this->_author;
    }
}