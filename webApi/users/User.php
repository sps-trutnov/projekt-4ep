<?php

namespace users;

class User
{
    private $id;
    private $userName;
    private $firstName;
    private $lastName;
    private $email;
    private $passwordHash;
    private $isLibrarian;
    private $isAdministrator;

    public function __construct(int $id, string $userName, string $firstName, string $lastName, string $email, string $passwordHash, bool $isLibrarian, 
        bool $isAdministrator)
    {
        $this->id = $id;
        $this->userName = $userName;
        $this->firstName = $firstName;
        $this->lastName = $lastName;
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

    public function getFirstName(): string
    {
        return $this->firstName;
    }

    public function getLastName(): string
    {
        return $this->lastName;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function getPasswordHash(): string
    {
        return $this->passwordHash;
    }

    public function isLibrarian(): bool
    {
        return $this->isLibrarian;
    }

    public function isAdministrator(): bool
    {
        return $this->isAdministrator;
    }
}