<?php
namespace user;

interface UserRepositoryInterface {
    function getById(int $id): ?User;
    function getByName(string $name): ?User;
    function create(string $name, string $passwordHash): User;
    function update(User $user);
}