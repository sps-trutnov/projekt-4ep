<?php

session_start();

unset($_SESSION["userId"]);

if (isset($_GET["redirectUrl"])) {
    $redirectUrl = $_GET["redirectUrl"];

    header("Location: $redirectUrl");
    exit;
}
