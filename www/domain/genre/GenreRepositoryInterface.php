<?php
namespace domain\genre;

interface GenreRepositoryInterface {
    function getAll(): iterable;
    function getById(int $id): ?Genre;
    function add(int $id, string $genre): Genre;
    function update(Genre $genre);
    function removeById(int $id);
}