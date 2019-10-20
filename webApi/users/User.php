<?php

namespace users;

class User
{
    private $id;
    private $userName;
    private $email;
    private $passwordHash;
    private $isLibrarian;
    private $isAdministrator;

    public function __construct(int $id, string $userName, string $email, string $passwordHash, bool $isLibrarian, bool $isAdministrator)
    {
        $this->id = $id;
        $this->userName = $userName;
        $this->email = $email;
        $this->passwordHash = $passwordHash;
        $this->isLibrarian = $isLibrarian;
        $this->isAdministrator = $isAdministrator;
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function getUserName(): string
    {
        return $this->userName;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function getPasswordHash(): string
    {
        return $this->passwordHash;
    }

    public function getIsLibrarian(): bool
    {
        return $this->isLibrarian;
    }

    public function getIsAdministrator(): bool
    {
        return $this->isAdministrator;
    }
}