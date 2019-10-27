<?php
namespace controllers;

use book\BookRepositoryInterface;
use condition\ConditionRepositoryInterface;
use genre\GenreRepositoryInterface;
use author\AuthorRepositoryInterface;
use place\PlaceRepositoryInterface;
use actionResults\ActionResultInterface;
use validation\Validator;
use authentication\UserAuthenticationServiceInterface;

class BookController extends AbstractController {
    private $_bookRepository;
    private $_conditionRepository;
    private $_genreRepository;
    private $_authorRepository;
    private $_placeRepository;
    private $_userAuthenticationService;

    public function __construct(BookRepositoryInterface $bookRepository, ConditionRepositoryInterface $conditionRepository, GenreRepositoryInterface $genreRepository, AuthorRepositoryInterface $authorRepository, PlaceRepositoryInterface $placeRepository, UserAuthenticationServiceInterface $userAuthenticationService) {
        $this->_bookRepository = $bookRepository;
        $this->_conditionRepository = $conditionRepository;
        $this->_genreRepository = $genreRepository;
        $this->_authorRepository = $authorRepository;
        $this->_placeRepository = $placeRepository;
        $this->_userAuthenticationService = $userAuthenticationService;
    }

    public function index(int $page = 0): ActionResultInterface {
        $allBooks = $this->_bookRepository->getAll($page * 20, 20);

        return parent::view("views/book/index.phtml", [
            "books" => $allBooks
        ]);
    }

    public function borrow(): ActionResultInterface {
        return parent::view("views/book/borrow.phtml");
    }

    public function return(): ActionResultInterface {
        return parent::view("views/book/return.phtml");
    }

    public function reservations(): ActionResultInterface {
        return parent::view("views/book/reservations.phtml");
    }

    public function add(): ActionResultInterface {
        $authors = $this->_authorRepository->getAll();
        $places = $this->_placeRepository->getAll();
        $conditions = $this->_conditionRepository->getAll();
        $genres = $this->_genreRepository->getAll();

        return parent::view("views/book/add.phtml", [
            "authors" => $authors,
            "places" => $places,
            "conditions" => $conditions,
            "genres" => $genres
        ]);
    }

    public function addPost(): ActionResultInterface {
        print json_encode($_POST);
        return parent::view("views/book/add.phtml");
    } 

}