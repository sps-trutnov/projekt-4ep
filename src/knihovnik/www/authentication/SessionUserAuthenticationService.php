<?php
namespace authentication;

class SessionUserAuthenticationService implements UserAuthenticationServiceInterface {
    public function login(int $userId, string $userName) {
        if ($this->isLogged())
            throw new \Exception("Can not login more than 1 user, first logout recently logged user.");
        
        $_SESSION["loggedUserId"] = $userId;
        $_SESSION["loggedUserName"] = $userName;
    }

    public function logout() {
        unset($_SESSION["loggedUserId"]);
        unset($_SESSION["loggedUserName"]);
    }

    public function isLogged(): bool {
        return isset($_SESSION["loggedUserId"]);
    }

    public function getLoggedUserId(): ?int {
        if (!$this->isLogged())
            return null;

        return $_SESSION["loggedUserId"];
    }
    
    public function getLoggedUserName(): ?string {
        if (!$this->isLogged())
            return null;
        
        return $_SESSION["loggedUserName"];
    }
}