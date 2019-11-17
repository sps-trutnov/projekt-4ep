<?php
namespace controllers;

use domain\book\BookRepositoryInterface;
use domain\condition\ConditionRepositoryInterface;
use domain\genre\GenreRepositoryInterface;
use domain\author\AuthorRepositoryInterface;
use domain\place\PlaceRepositoryInterface;
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
        $bookCount = $this->_bookRepository->count();

        return parent::view("views/book/index.phtml", [
            "books" => $allBooks,
            "bookCount" => $bookCount,
            "page" => $page
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
        return $this->addForm(null);
    }

    public function addPost(): ActionResultInterface {
        $formData = $_POST;
        $isbn = $formData["_isbn"];
        $name = $formData["_name"];
        $autorId = $formData["_authorId"];
        $description = $formData["_description"];
        $pageCount = $formData["_pageCount"];
        $year = $formData["_year"];
        $conditionId = $formData["_conditionId"];
        $placeId = $formData["_placeId"];
        $genreId = $formData["_genreId"];
        if(!isset($formData["_maturita"]))
            $maturita = FALSE;
        else
            $maturita = $formData["_maturita"];
        if(
            empty($isbn) ||
            empty($name) ||
            empty($autorId) ||
            empty($pageCount) ||
            empty($year) ||
            empty($conditionId) ||
            empty($placeId) ||
            empty($genreId)
        )
        {
            return addForm($formData);
        }
        else{
            $book = $this->_bookRepository->add($isbn, $name, $autorId, $description, $pageCount, $year, $conditionId, $placeId, $genreId, FALSE, $maturita);
            return parent::view("views/book/added.phtml");
        }
    } 

    private function addForm($data): ActionResultInterface{
        $authors = $this->_authorRepository->getAll();
        $places = $this->_placeRepository->getAll();
        $conditions = $this->_conditionRepository->getAll();
        $genres = $this->_genreRepository->getAll();

        return parent::view("views/book/add.phtml", [
            "data" => $data,
            "authors" => $authors,
            "places" => $places,
            "conditions" => $conditions,
            "genres" => $genres
        ]);
    }
}