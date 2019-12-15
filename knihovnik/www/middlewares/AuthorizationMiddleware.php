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
            header("Location: /authentication/signIn.php?returnUrl=".$_SERVER["REQUEST_URI"]);
            exit();
        }

        $user = $userRepository->getById($userId);
        if($user == null){
            header("Location: /authentication/signIn.php?returnUrl=".$_SERVER["REQUEST_URI"]);
            exit();
        }
        else if($user->getIsLibrarian() == 0){
            header("Location: /uzivatel/");
            exit();
        }
        
        $_dependencyContainer->for("\domain\user\User")->useInstance($user);
        $next();
    }
}