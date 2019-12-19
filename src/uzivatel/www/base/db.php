<?php

include_once('../../config.php');
$hostname = DB_HOST;
$databaseName = DB_NAME;
$username = DB_USER;
$password = DB_PASS;

$db = new PDO('mysql:host=' . $hostname .';dbname='.$databaseName , $username ,$password);
//$db = new PDO('mysql:host=localhost;dbname=6ep_prouzav', "prouzav", "Fact0ri0j3sup3r");

?>