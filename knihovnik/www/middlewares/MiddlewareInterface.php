<?php
namespace middlewares;

interface MiddlewareInterface {
    public function process(callable $next);
}