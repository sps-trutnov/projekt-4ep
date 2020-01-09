<?php
namespace controllers;

use routing\RouterInterface;
use actionResults\ViewActionResult;
use actionResults\RedirectActionResult;
use dependencyInjection\DependencyProviderInterface;

abstract class AbstractController {
    private $_router;
    private $_dependencyProvider;

    protected $returnUrl;
    protected $errors;

    public function __construct() {
        $this->returnUrl = $_GET["returnUrl"] ?? $_POST["returnUrl"] ?? \BASE_URL."/knihovnik/";
        $this->errors = $_GET["errors"] ?? $_POST["errors"] ?? [];
    }

    protected function getRouter(): RouterInterface {
        return $this->_router;
    }

    protected function getDependencyProvider(): DependencyProviderInterface {
        return $this->_dependencyProvider;
    }

    protected function view(string $viewPath, array $data = []): ViewActionResult {
        return new ViewActionResult($viewPath, $data, $this->_router, $this->_dependencyProvider);
    }

    protected function redirect(string $url): RedirectActionResult {
        return new RedirectActionResult($url);
    }

    protected function redirectToAction(string $controllerName, string $actionName, array $parameters = []): RedirectActionResult {
        $parameters["controller"] = $controllerName;
        $parameters["action"] = $actionName;

        return new RedirectActionResult($this->_router->getUrl($parameters));
    }
}