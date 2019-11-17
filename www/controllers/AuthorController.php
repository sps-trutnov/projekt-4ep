<?php
namespace controllers;

use domain\author\AuthorRepositoryInterface;
use actionResults\ActionResultInterface;
use validation\Validator;
use authentication\UserAuthenticationServiceInterface;

class AuthorController extends AbstractController {
    private $_authorRepository;
    private $_userAuthenticationService;

    public function __construct(AuthorRepositoryInterface $authorRepository, UserAuthenticationServiceInterface $userAuthenticationService) {
        $this->_authorRepository = $authorRepository;
        $this->_userAuthenticationService = $userAuthenticationService;
    }

    public function Add(): ActionResultInterface {
        return parent::view("views/author/add.phtml");
    }
    
    public function AddPost(): ActionResultInterface {
        

        return parent::view("views/author/add.phtml");
    }
}