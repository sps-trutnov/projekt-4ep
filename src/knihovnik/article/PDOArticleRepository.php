<?php
namespace article;

class PDOArticleRepository implements ArticleRepositoryInterface {
    private $_connection;

    public function __construct(\PDO $connection) {
        $this->_connection = $connection;
    }

    public function getAllWithAuthor(): iterable {
        $statement = $this->_connection->query("SELECT articles.*, users.name AS author_name FROM articles JOIN users ON articles.author_id = users.id");

        foreach ($statement as $row) {
            yield new ArticleWithAuthor(
                new Article($row["id"], $row["title"], $row["content"], $row["author_id"]),
                new ArticleAuthor($row["author_id"], $row["author_name"])
            );
        }
    }

    public function getById(int $id): ?Article {
        $statement = $this->_connection->prepare("SELECT * FROM articles WHERE id = ?");
        $statement->execute([$id]);
        $row = $statement->fetch();

        if ($row === false)
             return null;
        
        return new Article($row["id"], $row["title"], $row["content"], $row["author_id"]);
    }

    public function create(string $title, string $content, int $authorId): Article {
        $statement = $this->_connection->prepare("INSERT INTO articles(title, content, author_id) VALUES(?, ?, ?)");
        $statement->execute([$title, $content, $authorId]);

        $id = (int)$this->_connection->lastInsertId();

        return new Article($id, $title, $content, $authorId);
    }

    public function update(Article $article) {
        $id = $article->getId();
        $title = $article->getTitle();
        $content = $article->getContent();
        $authorId = $article->getAuthorId();

        $statement = $this->_connection->prepare("UPDATE articles SET title = ?, content = ?, author_id = ? WHERE id = ?");
        $statement->execute([$title, $content, $authorId, $id]);
    }

    public function removeById(int $id) {
        $statement = $this->_connection->prepare("DELETE FROM articles WHERE id = ?");
        $statement->execute([$id]);
    }
}