<?php
namespace controllers;

use domain\genre\GenreRepositoryInterface;
use controllers\BookController;
use actionResults\ActionResultInterface;
use validation\Validator;

class GenreController extends AbstractController {
    private $_genreRepository;
    private $_userAuthenticationService;

    public function __construct(GenreRepositoryInterface $genreRepository) {
        parent::__construct();
        $this->_genreRepository = $genreRepository;
    }

    public function Add(): ActionResultInterface {
        return parent::view("views/genre/add.phtml", [
            "returnUrl" => $this->returnUrl,
            "errors" => $this->errors
            ]);
    }
    
    public function AddPost($genre): ActionResultInterface {

        if(empty($genre))
            return parent::view("views/genre/add.phtml", [
                "errors" => [
                    "Žánr musí mít název."
                ]
            ]);
            
        $genres = $this->_genreRepository->GetAll();
        foreach($genres as $existingGenre){
            if($existingGenre->getGenre() == $genre)
                return parent::view("views/genre/add.phtml", [
                    "errors" => [
                        "Žánr s tímto názvem již existuje."
                    ]
                ]);
        }
        $genre = $this->_genreRepository->add($genre);

        return parent::redirectToAction("Book", "Add");
    }
}