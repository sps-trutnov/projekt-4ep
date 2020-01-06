<?php
namespace domain\bookRequest;

interface BookRequestRepositoryInterface {
    function add(int $user_id, int $book_id): BookRequest;
    function getById(int $id): ?BookRequest;
    function update(BookRequest $book);
    function removeById(int $id);
    function getAll(): iterable;
    function getUnconfirmed(): iterable;
    function getConfirmed(): iterable;
}