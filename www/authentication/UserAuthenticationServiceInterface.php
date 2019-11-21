<?php
namespace authentication;

interface UserAuthenticationServiceInterface {
    public function login(int $userId, string $userName);
    public function logout();

    public function isLogged(): bool;

    public function getLoggedUserId(): ?int;
    public function getLoggedUserName(): ?string;
}