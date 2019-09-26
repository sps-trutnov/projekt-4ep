<?php
namespace actionResults;

use routing\RouterInterface;
use dependencyInjection\DependencyProviderInterface;

class ViewActionResult implements ActionResultInterface {
    private $_viewPath;
    private $_data;
    private $_router;
    private $_dependencyProvider;

    public function __construct(string $viewPath, array $data = [], RouterInterface $router, DependencyProviderInterface $dependencyProvider) {
        $this->checkViewFileExistence($viewPath);
        $this->_viewPath = $viewPath;
        $this->_data = $data;
        $this->_router = $router;
        $this->_dependencyProvider = $dependencyProvider;
    }
    
    public function process() {
        echo($this->processView($this->_viewPath, $this->_data));
    }

    private function processView(string $viewPath, array $data): string {
        $this->checkViewFileExistence($viewPath);

        extract($data);
        $parentData = [];
        $parentPath = null;
        $getActionUrl = function(string $controllerName, string $actionName, array $parameters = []) { 
            return $this->getActionUrl($controllerName, $actionName, $parameters); 
        };
        $getUrl = function(array $parameters = []) { 
            return $this->getUrl($parameters);
        };
        $provideDependency = function(string $className) { 
            return $this->provideDependency($className);
        };

        ob_start();
        require($viewPath);
        $content = ob_get_clean();

        if ($parentPath !== null) {
            $parentData["child"] = $content;
            return $this->processView($parentPath, $parentData);
        }
        return $content;
    }

    private function getUrl(array $parameters = []): string {
        return $this->_router->getUrl($parameters);
    }

    private function getActionUrl(string $controllerName, string $actionName, array $parameters = []): string {
        $parameters["controller"] = $controllerName;
        $parameters["action"] = $actionName;
        return $this->_router->getUrl($parameters);
    }

    private function provideDependency(string $className) {
        return $this->_dependencyProvider->provide($className);
    }

    private function checkViewFileExistence(string $viewPath) {
        if (!file_exists($viewPath))
            throw new \Exception("View file '$viewPath' does not exist.");
    }
}