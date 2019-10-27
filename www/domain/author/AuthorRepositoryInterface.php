<?php
namespace domain\author;

interface AuthorRepositoryInterface {
    function add(int $firstname, int $lastname): Author;
    function getById(int $id): ?Author;
    function update(Author $author);
    function removeById(int $id);
    function getAll(): iterable;
}