<?php
namespace middlewares;

use routing\RouterInterface;
use dependencyInjection\DependencyProviderInterface;
use controllers\AbstractController;

class MVCMiddleware implements MiddlewareInterface {
    private $_router;
    private $_dependencyProvider;
    private $_controllersNamespace;

    public function __construct(RouterInterface $router, DependencyProviderInterface $dependencyProvider, string $controllersNamespace = "\\controllers") {
        $this->_router = $router;
        $this->_dependencyProvider = $dependencyProvider;
        $this->_controllersNamespace = $controllersNamespace;
    }

    public function process(callable $next) {
        $url = $this->getRequestUrl();
        $parameters = $this->_router->getParameters($url);

        if (!array_key_exists("controller", $parameters) || !array_key_exists("action", $parameters))
            return;
        
        $actionResult = $this->invokeAction($parameters["controller"], $parameters["action"], $this->_router, $this->_dependencyProvider, $parameters, $_POST);
        if ($actionResult !== null)
            $actionResult->process();
        
        $next();
    }

    private function invokeAction(string $controllerName, string $actionName, RouterInterface $router, DependencyProviderInterface $dependencyProvider, array $urlParameters, array $postParameters) {
        $controllerClass = $this->_controllersNamespace . "\\$controllerName" . "Controller";
        $actionWithRequestMethod = $actionName . $this->toCamelCase($_SERVER['REQUEST_METHOD']);

        if (!class_exists($controllerClass))
            throw new \Exception("Controller class '$controllerClass' does not exist.");
        if (!method_exists($controllerClass, $actionName) && !method_exists($controllerClass, $actionWithRequestMethod))
            throw new \Exception("Action method '$actionName' or '$actionWithRequestMethod' does not exist on '$controllerClass'.");

        $controllerInstance = $this->_dependencyProvider->provide($controllerClass);

        if (!is_subclass_of($controllerInstance, "controllers\\AbstractController"))
            throw new \Exception("Controlller '$controllerClass' must be subclass of 'controllers\\AbstractController'.");
        
        $this->injectRouter($controllerInstance, $router);
        $this->injectDependencyProvider($controllerInstance, $dependencyProvider);

        $actionMethod = null;
        if (method_exists($controllerInstance, $actionWithRequestMethod))
            $actionMethod = new \ReflectionMethod($controllerClass, $actionWithRequestMethod);
        else
            $actionMethod = new \ReflectionMethod($controllerClass, $actionName);

        $actionMethodArguments = $this->resolveActionMethodArguments($actionMethod, $urlParameters, $postParameters);

        return $actionMethod->invokeArgs($controllerInstance, $actionMethodArguments);
    }

    private function injectRouter(AbstractController $controller, RouterInterface $router) {
        $routerProperty = new \ReflectionProperty("controllers\\AbstractController", "_router");

        $routerProperty->setAccessible(true);
        $routerProperty->setValue($controller, $router);
        $routerProperty->setAccessible(false);
    }

    private function injectDependencyProvider(AbstractController $controller, DependencyProviderInterface $dependencyProvider) {
        $routerProperty = new \ReflectionProperty("controllers\\AbstractController", "_dependencyProvider");

        $routerProperty->setAccessible(true);
        $routerProperty->setValue($controller, $dependencyProvider);
        $routerProperty->setAccessible(false);
    }

    private function resolveActionMethodArguments(\ReflectionMethod $actionMethod, array $urlParameters, array $postParameters): array {
        $actionParameters = $actionMethod->getParameters();
        $actionArguments = [];

        foreach ($actionParameters as $actionParameter) {
            $parameterType = $actionParameter->getType();
            $parameterName = $actionParameter->getName();

            if ($parameterType != null && $parameterType != "int" && $parameterType != "string")
                throw new \Exception("Action method parameter type '$parameterType' is not supported.");

            $existsInUrl = array_key_exists($parameterName, $urlParameters);
            $existsInPost = array_key_exists($parameterName, $postParameters);

            if (!$existsInUrl && !$existsInPost)
                throw new \Exception("No matching parameter in post or url for action parameter '$parameterName'.");
            
            if ($existsInUrl)
                $actionArguments[] = $urlParameters[$parameterName];
            else
                $actionArguments[] = $postParameters[$parameterName];
        }
        return $actionArguments;
    }

    private function getRequestUrl(): string {
        return (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
    }

    private function toCamelCase($text): string {
        return ucwords(strtolower($text));
    }
}