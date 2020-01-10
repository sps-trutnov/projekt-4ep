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
        parent::__construct();
        $this->_bookRepository = $bookRepository;
        $this->_conditionRepository = $conditionRepository;
        $this->_genreRepository = $genreRepository;
        $this->_authorRepository = $authorRepository;
        $this->_placeRepository = $placeRepository;
        $this->_bookRequestRepository = $bookRequestRepository;
    }

    public function index(int $page = 0, string $search = ""): ActionResultInterface {

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
            "returnUrl" => $this->returnUrl,
            "errors" => $this->errors,
            "messages" => $this->messages
        ]);
    }

    public function requests(): ActionResultInterface {
        $bookRequests = $this->_bookRequestRepository->getRequested();

        return parent::view("views/book/requests.phtml",[
            "bookRequests" => $bookRequests,
            "returnUrl" => $this->returnUrl,
            "errors" => $this->errors,
            "messages" => $this->messages
        ]);
    }

    public function handleRequest($id, $act): ActionResultInterface {

        if(empty($id) || empty($act)) {
            return parent::redirectToAction("Book", "Requests", [
                "errors" => ["Chyba: Nebylo zadáno Id nebo akce. Obraťte se na správce aplikace."]
            ]);
        }

        $bookRequest = $this->_bookRequestRepository->getById($id);

        if($act == "accept"){
            $bookRequest->setState(1);
            $messages = ["Žádost byla potvrzena a přesunuta mezi rezervované."];
        }
        else if($act == "decline"){
            $bookRequest->setState(4);
            $messages = ["Žádost byla zamítnuta."];
        }

        $this->_bookRequestRepository->update($bookRequest);
        
        return parent::redirectToAction("Book", "Requests", [
            "messages" => $messages
        ]);
    }

    public function reservations(): ActionResultInterface {
        $bookRequests = $this->_bookRequestRepository->getConfirmed();

        return parent::view("views/book/reservations.phtml",[
            "bookRequests" => $bookRequests,
            "returnUrl" => $this->returnUrl,
            "errors" => $this->errors,
            "messages" => $this->messages
        ]);
    }

    public function passBook($id): ActionResultInterface {
        if(empty($id)) {
            return parent::redirectToAction("Book", "Reservations", [
                "errors" => ["Chyba: Nebylo zadáno Id. Obraťte se na správce aplikace."]
            ]);
        }

        $bookRequest = $this->_bookRequestRepository->getById($id);

        $borrowed = $this->_bookRequestRepository->getBorrowed();
        foreach($borrowed as $alreadyBorrowed)
            if($alreadyBorrowed->getBookId() == $bookRequest->getBookId())
                return parent::redirectToAction("Book", "Reservations", [
                    "errors" => ["Kniha je již zapůjčena"]
                ]);

        $bookRequest->setBookBorrowed(new \DateTime());
        $bookRequest->setState(2);
        $messages = ["Kniha je předána uživateli. Teď čeká na vrácení."];

        $this->_bookRequestRepository->update($bookRequest);

        return parent::redirectToAction("Book", "Reservations",[
            "messages" => $messages
        ]);
    }

    public function return(): ActionResultInterface {

        $bookRequests = $this->_bookRequestRepository->getBorrowed();

        return parent::view("views/book/return.phtml",[
            "bookRequests" => $bookRequests,
            "returnUrl" => $this->returnUrl,
            "errors" => $this->errors,
            "messages" => $this->messages
        ]);
    }

    public function returnPost($id): ActionResultInterface {
        if(empty($id)) {
            return parent::redirectToAction("Book", "Return", [
                "errors" => ["Chyba: Nebylo zadáno Id. Obraťte se na správce aplikace."]
            ]);
        }

        $bookRequest = $this->_bookRequestRepository->getById($id);

        $bookRequest->setBookReturned(new \DateTime());
        $bookRequest->setState(3);
        $messages = ["Kniha byla vrácena a je opět dostupná."];

        $this->_bookRequestRepository->update($bookRequest);

        return parent::redirectToAction("Book", "Return",[
            "messages" => $messages
        ]);
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
            "genres" => $genres,
            "returnUrl" => $this->returnUrl,
            "errors" => $this->errors
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

        return parent::view("views/book/edit.phtml", [
            "book" => $book,
            "authors" => $authors,
            "places" => $places,
            "conditions" => $conditions,
            "genres" => $genres,
            "returnUrl" => $this->returnUrl,
            "errors" => $this->errors
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

        $book = $this->_bookRepository->getById($id);
        if($book == null)
            return parent::redirectToAction("Book", "Index");

        $bookRequests = $this->_bookRequestRepository->getByBookId($id);

        return parent::view("views/book/detail.phtml", [
            "book" => $book,
            "bookRequests" => $bookRequests,
            "returnUrl" => $this->returnUrl,
            "errors" => $this->errors
        ]);
    }

    public function print(): ActionResultInterface {

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
            "returnUrl" => $this->returnUrl,
            "errors" => $this->errors
        ]);
    }
}