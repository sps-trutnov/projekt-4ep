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
        $this->_genreRepository = $genreRepository;
    }

    public function Add(): ActionResultInterface {
        $returnUrl = $_GET["returnUrl"] ?? $_POST["returnUrl"] ?? \BASE_URL."/knihovnik/";

        return parent::view("views/genre/add.phtml", [
            "returnUrl" => $returnUrl
            ]);
    }
    
    public function AddPost(): ActionResultInterface {
        $formData = $_POST;
        $genre = $formData["_genre"];
        if(empty($genre)) {
            return parent::view("views/genre/add.phtml", [
                "errors" => [
                    "Žánr musí mít název."
                ]
            ]);
        }
        else {
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
}