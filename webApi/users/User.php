<?php

namespace users;

class User
{
    private $id;
    private $userName;
    private $email;
    private $passwordHash;

    public function __construct(int $id, string $userName, string $email, string $passwordHash)
    {
        $this->id = $id;
        $this->userName = $userName;
        $this->email = $email;
        $this->passwordHash = $passwordHash;
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
}