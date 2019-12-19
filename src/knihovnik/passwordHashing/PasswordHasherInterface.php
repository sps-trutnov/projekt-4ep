<?php
namespace passwordHashing;

interface PasswordHasherInterface {
    public function hash(string $password): string;
    public function verify(string $password, string $passwordHash): bool;
}