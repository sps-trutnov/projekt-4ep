<?php
namespace domain\bookRequest;

interface BookRequestRepositoryInterface {
    function add(int $user_id, int $book_id): BookRequest;
    function getById(int $id): ?BookRequest;
    function update(BookRequest $book);
    function removeById(int $id);
    function getAll(): iterable;
    function getRequested(): iterable;
    function getConfirmed(): iterable;
    function getBorrowed(): iterable;
    function getByBookId(int $id): iterable;
    function getCountByState(int $state): int;
}