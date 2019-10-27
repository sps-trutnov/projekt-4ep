<?php
use routing\QueryParametersRouter;
use middlewares\MVCMiddleware;
use middlewares\MiddlewarePipeline;
use dependencyInjection\DependencyProviderInterface;
use dependencyInjection\DependencyConfigurationInterface;

class Startup {
    public function configureDependencies(DependencyConfigurationInterface $config) {
        $config->for("\PDO")->useInstance($this->createPDOConnection());

        $config->for("\article\ArticleRepositoryInterface")->useClass("\article\PDOArticleRepository");
        $config->for("\book\BookRepositoryInterface")->useClass("\book\PDOBookRepository");
        $config->for("\author\AuthorRepositoryInterface")->useClass("\author\PDOAuthorRepository");
        $config->for("\place\PlaceRepositoryInterface")->useClass("\place\PDOPlaceRepository");
        $config->for("\condition\ConditionRepositoryInterface")->useClass("\condition\PDOConditionRepository");
        $config->for("\genre\GenreRepositoryInterface")->useClass("\genre\PDOGenreRepository");

        $config->for("\user\UserRepositoryInterface")->useClass("\user\PDOUserRepository");

        $config->for("\passwordHashing\PasswordHasherInterface")->useClass("\passwordHashing\PasswordHasher");
        $config->for("\authentication\UserAuthenticationServiceInterface")->useClass("\authentication\SessionUserAuthenticationService");
    }
    
    public function configurePipeline(MiddlewarePipeline $pipeline, DependencyProviderInterface $provider) {
        $router = new QueryParametersRouter("/", [
            "controller" => "Home",
            "action" => "index"
        ]);
        $mvc = new MVCMiddleware($router, $provider);
        $pipeline->add($mvc);
    }
    
    private function createPDOConnection(): \PDO {
        $hostname = "localhost";
        $databaseName = "knihovna";
        $username = "knihovna";
        $password = "Heslo96321";
        $options = [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"
        ];
        
        $PDO = new PDO("mysql:host=$hostname;dbname=$databaseName", $username, $password, $options);

        return @$PDO;
    }
}