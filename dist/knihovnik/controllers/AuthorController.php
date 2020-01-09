<?php
namespace controllers;

use domain\author\AuthorRepositoryInterface;
use actionResults\ActionResultInterface;
use validation\Validator;

class AuthorController extends AbstractController {
    private $_authorRepository;
    private $_userAuthenticationService;

    public function __construct(AuthorRepositoryInterface $authorRepository) {
        parent::__construct();
        $this->_authorRepository = $authorRepository;
    }

    public function Add(): ActionResultInterface {
        return parent::view("views/author/add.phtml", [
            "returnUrl" => $this->returnUrl
        ]);
    }
    
    public function AddPost($firstname, $lastname): ActionResultInterface {

        if(empty($firstname) || empty($lastname))
        {
            return parent ::view("views/author/add.phtml",[
                "returnUrl" => $this->returnUrl,
                "errors" => ["Autor musí mít jméno a příjmení"]
                ]);
        }
        else
        {
            $authors = $this->_authorRepository->GetAll();
            foreach($authors as $existingAuthor){
                if($existingAuthor->getFullName() == "$lastname $firstname")
                    return parent::view("views/author/add.phtml", [ "errors" =>["Autor s tímto jménem již existuje"]] );}
        }

        $author = $this->_authorRepository->add($firstname, $lastname);

        return parent::redirectToAction("Book", "Add");
    }
}