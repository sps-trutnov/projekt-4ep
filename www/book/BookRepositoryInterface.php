<?php
namespace book;

interface BookRepositoryInterface {
    function getAllWithAuthor(int $author_id): iterable;
    function getById(int $id): ?Book;
    function add(string $isbn, string $name, int $autorId, string $description, int $pageCount, int $year, int $conditionId, int $placeId, int $genreId, int $admin, int $maturita): Book;
    function update(Book $book);
    function removeById(int $id);
}