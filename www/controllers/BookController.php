<?php
namespace controllers;

use book\BookRepositoryInterface;
use actionResults\ActionResultInterface;
use validation\Validator;
use authentication\UserAuthenticationServiceInterface;

class BookController extends AbstractController {
    private $_bookRepository;
    private $_userAuthenticationService;

    public function __construct(BookRepositoryInterface $bookRepository, UserAuthenticationServiceInterface $userAuthenticationService) {
        $this->_bookRepository = $bookRepository;
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
        return parent::view("views/book/add.phtml");
    }

    public function addPost(string $isbn, string $name, int $autorId, string $description, int $pageCount, int $year, int $conditionId, int $placeId, int $genreId, int $admin, int $borrowedBy, string $borrowedTime, int $maturita): ActionResultInterface {
        
        return parent::view("views/book/add.phtml");
    } 

}