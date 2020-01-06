<?php
namespace middlewares;

use dependencyInjection\DependencyContainer;
use controllers\AbstractController;
use domain\user\UserRepositoryInterface;

class AuthorizationMiddleware implements MiddlewareInterface {
    private $_dependencyContainer;
    private $_userRepository;

    public function __construct(DependencyContainer $dependencyContainer, UserRepositoryInterface $userRepository) {
        $this->_dependencyContainer = $dependencyContainer;
        $this->_userRepository = $userRepository;
    }

    public function process(callable $next) {
        $userId = $_SESSION["userId"];
        
        if(empty($userId) || $userId == 0){
            header("Location: ".\BASE_URL."/authentication/signIn.php?redirectUrl=".$_SERVER["REQUEST_URI"]);
            exit();
        }

        $user = $this->_userRepository->getById($userId);
        if($user == null){
            header("Location: ".\BASE_URL."/authentication/signIn.php?redirectUrl=".$_SERVER["REQUEST_URI"]);
            exit();
        }
        else if(!$user->getIsLibrarian()){
            header("Location: ".\BASE_URL."/uzivatel/www/");
            exit();
        }
        
        $this->_dependencyContainer->for("\domain\user\User")->useInstance($user);
        $next();
    }
}