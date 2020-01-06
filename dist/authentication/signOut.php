<?php

session_start();

unset($_SESSION["userId"]);
session_destroy();

if (isset($_GET["redirectUrl"])) {
    $redirectUrl = $_GET["redirectUrl"];

    header("Location: $redirectUrl");
    exit;
}
