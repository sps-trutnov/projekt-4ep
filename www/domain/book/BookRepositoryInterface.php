<?php
namespace domain\book;

interface BookRepositoryInterface {
    function getAll(int $offset = 0, int $count = 0): iterable;
    function getAllWithAuthor(int $author_id): iterable;
    function getById(int $id): ?Book;
    function add(string $isbn, string $name, int $autorId, string $description, int $pageCount, int $year, int $conditionId, int $placeId, int $genreId, int $admin, int $maturita): Book;
    function update(Book $book);
    function removeById(int $id);
    function count(): int;
    function search(string $text): iterable;
}