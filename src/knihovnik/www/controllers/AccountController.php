<?php
namespace controllers;

use actionResults\ActionResultInterface;
use authentication\UserAuthenticationServiceInterface;
use validation\Validator;
use user\UserRepositoryInterface;
use passwordHashing\PasswordHasherInterface;

class AccountController extends AbstractController {
    private $_userRepository;
    private $_passwordHasher;
    private $_userAuthenticationService;

    public function __construct(UserRepositoryInterface $userRepository, PasswordHasherInterface $passwordHasher, UserAuthenticationServiceInterface $userAuthenticationService) {
        $this->_userRepository = $userRepository;
        $this->_passwordHasher = $passwordHasher;
        $this->_userAuthenticationService = $userAuthenticationService;
    }

    public function register(): ActionResultInterface {
        return parent::view("views/account/register.phtml");
    }

    public function registerPost($name, $password, $passwordCheck): ActionResultInterface {
        $errors = [];
        Validator::stringLength($name, 3, 100, $errors, "Name must have at least 3 characters.", "Name can not have more than 100 characters.");
        Validator::stringLength($password, 8, null, $errors, "Password must have at least 8 characters.");
        Validator::stringEquivalency($password, $passwordCheck, $errors, "Passwords do not match.");

        if (count($errors) === 0) {
            $passwordHash = $this->_passwordHasher->hash($password);
            $this->_userRepository->create($name, $passwordHash);

            return parent::redirectToAction("Account", "login");
        }
        else {
            return parent::view("views/account/register.phtml", [
                "name" => $name,
                "password" => $password,
                "passwordCheck" => $passwordCheck,
                "errors" => $errors
            ]);
        }
    }

    public function login(): ActionResultInterface {
        return parent::view("views/account/login.phtml");
    }

    public function loginPost($name, $password): ActionResultInterface {
        $user = $this->_userRepository->getByName($name);

        if ($user !== null && $this->_passwordHasher->verify($password, $user->getPasswordHash())) {
            $userId = $user->getId();
            $userName = $user->getName();
            $this->_userAuthenticationService->login($userId, $userName);

            return parent::redirectToAction("Home", "index");
        }
        else {
            return parent::view("views/account/login.phtml", [
                "name" => $name,
                "password" => $password,
                "errors" => ["Login failed."]
            ]);
        }
    }

    public function logout(): ActionResultInterface {
        $this->_userAuthenticationService->logout();

        return parent::redirectToAction("Account", "login");
    }
}