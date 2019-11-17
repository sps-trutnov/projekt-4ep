<?php
namespace controllers;

use domain\genre\GenreRepositoryInterface;
use actionResults\ActionResultInterface;
use validation\Validator;
use authentication\UserAuthenticationServiceInterface;

class GenreController extends AbstractController {
    private $_genreRepository;
    private $_userAuthenticationService;

    public function __construct(GenreRepositoryInterface $genreRepository, UserAuthenticationServiceInterface $userAuthenticationService) {
        $this->_genreRepository = $genreRepository;
        $this->_userAuthenticationService = $userAuthenticationService;
    }

    public function Add(): ActionResultInterface {
        return parent::view("views/genre/add.phtml");
    }
    
    public function AddPost(): ActionResultInterface {
        

        return parent::view("views/genre/add.phtml");
    }
}