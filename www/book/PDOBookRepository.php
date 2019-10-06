<?php
namespace book;

class PDOBookRepository implements BookRepositoryInterface {
    public function getAllWithAuthor(){
    }
    public function getById(int $id){
    }
    public function add(string $isbn, string $name, int $autorId, string $description, int $pageCount, int $year, int $conditionId, int $placeId, int $genreId, int $admin, int $maturita){
    }
    public function update(Book $book){
    }
    public function removeById(int $id){
    }
}