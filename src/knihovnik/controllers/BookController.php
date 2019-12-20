<?php
namespace controllers;

use domain\book\BookRepositoryInterface;
use domain\condition\ConditionRepositoryInterface;
use domain\genre\GenreRepositoryInterface;
use domain\author\AuthorRepositoryInterface;
use domain\place\PlaceRepositoryInterface;
use domain\bookRequest\BookRequestRepositoryInterface;
use actionResults\ActionResultInterface;
use validation\Validator;

class BookController extends AbstractController {
    private $_bookRepository;
    private $_conditionRepository;
    private $_genreRepository;
    private $_authorRepository;
    private $_placeRepository;
    private $_bookRequestRepository;

    public function __construct(BookRepositoryInterface $bookRepository, BookRequestRepositoryInterface $bookRequestRepository, ConditionRepositoryInterface $conditionRepository, GenreRepositoryInterface $genreRepository, AuthorRepositoryInterface $authorRepository, PlaceRepositoryInterface $placeRepository) {
        $this->_bookRepository = $bookRepository;
        $this->_conditionRepository = $conditionRepository;
        $this->_genreRepository = $genreRepository;
        $this->_authorRepository = $authorRepository;
        $this->_placeRepository = $placeRepository;
        $this->_bookRequestRepository = $bookRequestRepository;
    }

    public function index(int $page = 0, string $search = ""): ActionResultInterface {
        $returnUrl = $_GET["returnUrl"] ?? $_POST["returnUrl"] ?? "/";

        if($search != ""){
            $allBooks = $this->_bookRepository->search($search);
        }
        else{
            $allBooks = $this->_bookRepository->getAll($page * 20, 20);
        }
        $bookCount = $this->_bookRepository->count();

        return parent::view("views/book/index.phtml", [
            "books" => $allBooks,
            "bookCount" => $bookCount,
            "page" => $page,
            "search" => $search,
            "returnUrl" => $returnUrl
        ]);
    }

    public function borrow(): ActionResultInterface {
        $bookRequests = $this->_bookRequestRepository->getAll();

        return parent::view("views/book/borrow.phtml",[
            "bookRequests" => $bookRequests
        ]);
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

        $returnUrl = $_GET["returnUrl"] ?? $_POST["returnUrl"] ?? "/";

        return parent::view("views/book/add.phtml", [
            "authors" => $authors,
            "places" => $places,
            "conditions" => $conditions,
            "genres" => $genres,
            "returnUrl" => $returnUrl
        ]);
    }

    public function addPost($isbn, $name, $authorId, $description, $pageCount, $year, $conditionId, $placeId, $genreId): ActionResultInterface {
        if(!empty($_POST["maturita"]))
            $maturita = 1;
        else
            $maturita = 0;
        if(
            empty($isbn) ||
            empty($name) ||
            empty($authorId) ||
            empty($pageCount) ||
            empty($year) ||
            empty($conditionId) ||
            empty($placeId) ||
            empty($genreId)
        )
        {
            return $this->add();
        }
        else{
            $book = $this->_bookRepository->add($isbn, $name, $authorId, $description, $pageCount, $year, $conditionId, $placeId, $genreId, FALSE, $maturita);
            return parent::view("views/book/added.phtml", [
                "book" => $book
            ]);
        }
    }

    public function edit(int $id): ActionResultInterface {
        $book = $this->_bookRepository->getById($id);
        $authors = $this->_authorRepository->getAll();
        $places = $this->_placeRepository->getAll();
        $conditions = $this->_conditionRepository->getAll();
        $genres = $this->_genreRepository->getAll();

        $returnUrl = $_GET["returnUrl"] ?? $_POST["returnUrl"] ?? "/";

        return parent::view("views/book/edit.phtml", [
            "book" => $book,
            "authors" => $authors,
            "places" => $places,
            "conditions" => $conditions,
            "genres" => $genres,
            "returnUrl" => $returnUrl
        ]);
    }

    public function editPost(int $id, $isbn, $name, $authorId, $description, $pageCount, $year, $conditionId, $placeId, $genreId){
        if(!empty($_POST["maturita"]))
            $maturita = 1;
        else
            $maturita = 0;

        $book = $this->_bookRepository->getById($id);
        if(empty($book)) {
            return parent::redirectToAction("Home", "Index", [
                "errors" => ["Upravená kniha nebyla v databázi."]
            ]);
        }

        $book->setISBN($isbn);
        $book->setName($name);
        $book->setAuthorId($authorId);
        $book->setDescription($description);
        $book->setPageCount($pageCount);
        $book->setYear($year);
        $book->setConditionId($conditionId);
        $book->setPlaceId($placeId);
        $book->setGenreId($genreId);
        $book->setMaturitaReady($maturita);

        $this->_bookRepository->update($book);

        return parent::redirectToAction("Book", "Detail", [
            "id" => $book->getId(),
            "message" => "Informace o knize byly upraveny."
        ]);
    }

    public function detail(int $id): ActionResultInterface {
        $returnUrl = $_GET["returnUrl"] ?? $_POST["returnUrl"] ?? "/";

        $book = $this->_bookRepository->getById($id);
        if($book == null)
            return parent::redirectToAction("Book", "Index");

        return parent::view("views/book/detail.phtml", [
            "book" => $book,
            "returnUrl" => $returnUrl
        ]);
    }

    public function print(): ActionResultInterface {
        $returnUrl = $_GET["returnUrl"] ?? $_POST["returnUrl"] ?? "/";

        $books = $this->_bookRepository->getAll();
        $places = $this->_placeRepository->getAll();

        $booksArray = [];
        $placesArray = [];

        foreach($books as $book)
            array_push($booksArray, [$book->getId(), $book->getName(), $book->getPlaceId()]);
        
        foreach($places as $place)
            array_push($placesArray, [$place->getId(), $place->getPlace()]);

        return parent::view("views/book/print.phtml", [
            "books" => $booksArray,
            "places" => $placesArray,
            "returnUrl" => $returnUrl
        ]);
    }
}