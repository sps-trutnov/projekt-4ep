<?php

namespace authorization;

use function http\exitWithHttpCode;
use function users\getUserById;

require_once "../users/users.php";
require_once "../http/http.php";

function authorize(\PDO $databaseConnection, bool $requireAdministrator) 
{
    if (!isAuthorized($databaseConnection, $requireAdministrator))
        exitWithHttpCode(401);
}

function isAuthorized(\PDO $databaseConnection, bool $requireAdministrator): bool
{
    if (!isset($_SESSION["userId"]))
        return false;

    $userId = $_SESSION["userId"];
    $user = getUserById($databaseConnection, $userId);

    if ($user == null)
        return false;
    if ($requireAdministrator && !$user->isAdministrator())
        return false;

    return true;
}