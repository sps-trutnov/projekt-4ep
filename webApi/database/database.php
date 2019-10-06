<?php

namespace database;

function createPDOConection(): \PDO
{
    $hostname = "localhost";
    $databaseName = "sysadmin";
    $username = "root";
    $password = "";
    $options = [
        \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION,
        \PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"
    ];

    return @new \PDO("mysql:host=$hostname;dbname=$databaseName", $username, $password, $options);
}