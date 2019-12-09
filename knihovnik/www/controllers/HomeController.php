<?php
namespace controllers;

use actionResults\ActionResultInterface;

class HomeController extends AbstractController {
    public function index(): ActionResultInterface {
        return parent::view("views/home/index.phtml");
    }
}