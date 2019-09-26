<?php
namespace passwordHashing;

class PasswordHasher implements PasswordHasherInterface{
    public function hash(string $password): string {
        return password_hash($password, PASSWORD_DEFAULT);
    }

    public function verify(string $password, string $passwordHash): bool {
        return password_verify($password, $passwordHash);
    }
}