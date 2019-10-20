<?php
namespace place;

interface PlaceRepositoryInterface {
    function add(int $place): Place;
    function getById(int $id): ?Place;
    function update(Place $author);
    function removeById(int $id);
    function getAll(): iterable;
}