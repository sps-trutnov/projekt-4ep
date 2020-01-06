<?php

namespace database;

require_once "../../../config.php";

function createPDOConection(): \PDO
{
    $server = DB_HOST;
    $databaseName = DB_NAME;
    $username = DB_USER;
    $password = DB_PASS;
    $options = [
        \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION,
        \PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"
    ];

    return @new \PDO("mysql:host=$server;dbname=$databaseName", $username, $password, $options);
}