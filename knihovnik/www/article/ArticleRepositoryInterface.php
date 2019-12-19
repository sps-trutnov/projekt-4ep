<?php
namespace article;

interface ArticleRepositoryInterface {
    function getAllWithAuthor(): iterable;
    function getById(int $id): ?Article;
    function create(string $title, string $content, int $authorId): Article;
    function update(Article $article);
    function removeById(int $id);
}