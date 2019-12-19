<?php
require_once("config.php");


session_start();

if(empty($_SESSION["userId"])){
    header("Location: ".BASE_URL."/authentication/signIn.php?redirectUrl=/");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Knihovna</title>
</head>
<body>
    <a href="<?=BASE_URL?>/uzivatel/www/">Uživatel</a>
    <a href="<?=BASE_URL?>/knihovnik/www/">Knihovník</a>
    <a href="<?=BASE_URL?>/sysadmin/www/">Sysadmin</a>
</body>
</html>