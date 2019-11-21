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
        $formData = $_POST;
        $autorId = $formData["_authorId"];
        if(empty($autorId))
        {
            return parent ::view("views/author/add.phtml",["errors" => ["Autor musí mít jméno"]]);
        }
        else
        {
            $autorId = $this->_authorRepository->GetAll();
            foreach($autorId as $existingAuthor){
                if($existingAuthor->getAuthor() == $autorId)
                    return parent::view("views/author/add.phtml", [ "errors" =>["Autor s tímto jménem již existuje"]] );}
        }
        $autorId = $this->_authorRepository->add($autorId);
        return parent::view("views/author/add.phtml");
    }
}