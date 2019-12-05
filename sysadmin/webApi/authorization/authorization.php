<?php

namespace authorization;

use Firebase\JWT\JWT;

use function http\exitWithHttpCode;
use function users\getUserById;

use const settings\AUTHORIZATION_TOKEN_SECRET;

require_once "../vendor/autoload.php";
require_once "../settings/settings.php";
require_once "../users/users.php";
require_once "../http/http.php";

function authorize(\PDO $databaseConnection, bool $requireAdministrator) 
{
    if (!isAuthorized($databaseConnection, $requireAdministrator))
        exitWithHttpCode(401);
}

function isAuthorized(\PDO $databaseConnection, bool $requireAdministrator): bool
{
    $token = getHttpAuthorizationToken();

    if ($token === null)
        return false;

    $userId = $token["sub"];
    $user = getUserById($databaseConnection, $userId);

    if ($user == null)
        return false;
    if ($requireAdministrator && !$user->isAdministrator())
        return false;

    return true;
}

function getHttpAuthorizationToken(): ?array
{
    $requestHeaders = getallheaders();

    if (!array_key_exists("Authorization", $requestHeaders))
        return null;

    $authorizationHeader = $requestHeaders["Authorization"];

    if (strlen($authorizationHeader) < 7 || substr($authorizationHeader, 0, 7) !== "Bearer ")
        return null;

    $tokenEncoded = substr($authorizationHeader, 7);
    try
    {
        $token = JWT::decode($tokenEncoded, AUTHORIZATION_TOKEN_SECRET, ["HS256"]);
    }
    catch (\Exception $exception)
    {
        return null;
    }
    return (array)$token;
}