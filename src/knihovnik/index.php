<?php
require_once("../config.php");
ini_set('display_startup_errors', 1);
ini_set('display_errors', 1);
error_reporting(-1);
use middlewares\MiddlewarePipeline;
use dependencyInjection\DependencyContainer;

if (version_compare(PHP_VERSION, '7.1.0') < 0)
    exit("Please use at least PHP version '7.1.0' or higher.");

session_start();

spl_autoload_register(function ($className) {
    $classFile = str_replace("\\", "/", $className) . ".php";
    if (file_exists($classFile))
        require $classFile;
});

$startup = new Startup();
$container = new DependencyContainer();
$pipeline = new MiddlewarePipeline();

$startup->configureDependencies($container);
$startup->configurePipeline($pipeline, $container);

$pipeline->process();