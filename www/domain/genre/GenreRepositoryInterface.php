<?php
namespace domain\genre;

interface GenreRepositoryInterface {
    function getAll(): iterable;
    function getById(int $id): ?Genre;
    function add(string $genre): Genre;
    function update(Genre $genre);
    function removeById(int $id);
}