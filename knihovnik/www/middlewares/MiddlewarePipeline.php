<?php
namespace middlewares;

class MiddlewarePipeline {
    private $_middlewares;

    public function __construct() {
        $this->_middlewares = [];
    }

    public function add(MiddlewareInterface $middleware) {
        $this->_middlewares[] = $middleware;
    }

    public function process() {
        $i = -1;
        $middlewares = &$this->_middlewares;
        $next = function() use(&$i, &$middlewares, &$next) {
            $i++;
            if ($i < count($middlewares))
                $middlewares[$i]->process($next);
        };
        $next();
    }
}