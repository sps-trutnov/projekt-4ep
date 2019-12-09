<?php
namespace controllers;

use article\ArticleRepositoryInterface;
use actionResults\ActionResultInterface;
use validation\Validator;
use authentication\UserAuthenticationServiceInterface;

class ArticleController extends AbstractController {
    private $_articleRepository;
    private $_userAuthenticationService;

    public function __construct(ArticleRepositoryInterface $articleRepository, UserAuthenticationServiceInterface $userAuthenticationService) {
        $this->_articleRepository = $articleRepository;
        $this->_userAuthenticationService = $userAuthenticationService;
    }

    public function list(): ActionResultInterface {
        $articlesWithAuthor = $this->_articleRepository->getAllWithAuthor();
        $loggedUserId = $this->_userAuthenticationService->getLoggedUserId();

        return parent::view("views/article/list.phtml", [
            "articlesWithAuthor" => $articlesWithAuthor,
            "loggedUserId" => $loggedUserId
        ]);
    }

    public function create(): ActionResultInterface {
        if (!$this->_userAuthenticationService->isLogged())
            throw new \Exception("Article can not be created by anonymous user.");

        return parent::view("views/article/create.phtml");
    }

    public function createPost(string $title, string $content): ActionResultInterface {
        if (!$this->_userAuthenticationService->isLogged())
            throw new \Exception("Article can not be created by anonymous user.");

        $errors = [];
        Validator::stringLength($title, 3, 300, $errors, "Title must have at least 3 characters.", "Title can not have more than 300 characters.");
        Validator::stringLength($content, 50, 20000, $errors, "Title must have at least 50 characters.", "Title can not have more than 20,000 characters.");

        if (count($errors) === 0) {
            $loggedUserId = $this->_userAuthenticationService->getLoggedUserId();

            $this->_articleRepository->create($title, $content, $loggedUserId);

            return parent::redirectToAction("Article", "list");
        }
        else {
            return parent::view("views/article/create.phtml", [
                "title" => $title,
                "content" => $content,
                "errors" => $errors
            ]);
        }
    }

    public function update(int $id): ActionResultInterface {
        $article = $this->_articleRepository->getById($id);
        $loggedUserId = $this->_userAuthenticationService->getLoggedUserId();

        if ($article === null)
            throw new \Exception("Article does not exist.");
        if ($article->getAuthorId() !== $loggedUserId)
            throw new \Exception("Just article author can update it.");
        
        return parent::view("views/article/update.phtml", [
            "id" => $article->getId(),
            "title" => $article->getTitle(),
            "content" => $article->getContent()
        ]);
    }

    public function updatePost(int $id, string $title, string $content): ActionResultInterface {
        $article = $this->_articleRepository->getById($id);
        $loggedUserId = $this->_userAuthenticationService->getLoggedUserId();

        if ($article === null)
            throw new \Exception("Article does not exist.");
        if ($article->getAuthorId() !== $loggedUserId)
            throw new \Exception("Just article author can update it.");

        $errors = [];
        Validator::stringLength($title, 3, 300, $errors, "Title must have at least 3 characters.", "Title can not have more than 300 characters.");
        Validator::stringLength($content, 50, 20000, $errors, "Title must have at least 50 characters.", "Title can not have more than 20,000 characters.");

        if (count($errors) === 0) {
            $article->setTitle($title);
            $article->setContent($content);
            $this->_articleRepository->update($article);
    
            return parent::redirectToAction("Article", "list");
        }
        else {
            return parent::view("views/article/update.phtml", [
                "id" => $id,
                "title" => $title,
                "content" => $content,
                "errors" => $errors
            ]);
        }
    }

    public function delete(int $id): ActionResultInterface {
        $article = $this->_articleRepository->getById($id);
        $loggedUserId = $this->_userAuthenticationService->getLoggedUserId();

        if ($article !== null && $article->getAuthorId() !== $loggedUserId)
            throw new \Exception("Just article author can delete it.");

        $this->_articleRepository->removeById($id);

        return parent::redirectToAction("Article", "list");
    }
}