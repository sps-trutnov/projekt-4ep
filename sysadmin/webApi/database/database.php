<?php

namespace database;

use const settings\DATABASE_NAME;
use const settings\DATABASE_PASWORD;
use const settings\DATABASE_SERVER;
use const settings\DATABASE_USER_NAME;

require_once "../settings/settings.php";

function createPDOConection(): \PDO
{
    $server = DATABASE_SERVER;
    $databaseName = DATABASE_NAME;
    $username = DATABASE_USER_NAME;
    $password = DATABASE_PASWORD;
    $options = [
        \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION,
        \PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"
    ];

    return @new \PDO("mysql:host=$server;dbname=$databaseName", $username, $password, $options);
}