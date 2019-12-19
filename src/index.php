<?php

session_start();

if(empty($_SESSION["userId"])){
    header("Location: /authentication/signIn.php?redirectUrl=/");
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
    <a href="/uzivatel/www/">Uživatel</a>
    <a href="/knihovnik/www/">Knihovník</a>
    <a href="/sysadmin/www/">Sysadmin</a>
</body>
</html>