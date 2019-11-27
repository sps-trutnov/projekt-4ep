<?php

namespace authentication;

use Firebase\JWT\JWT;

use const settings\ACCESS_CONTROL_ALLOWED_ORIGIN;
use const settings\AUTHORIZATION_TOKEN_EXPIRATION_TIME;
use const settings\AUTHORIZATION_TOKEN_SECRET;

use function database\createPDOConection;
use function http\exitWithHttpCode;
use function users\getUserByUserName;

require_once "../vendor/autoload.php";
require_once "../database/database.php";
require_once "../users/User.php";
require_once "../users/users.php";
require_once "../settings/settings.php";
require_once "../http/http.php";

header("Access-Control-Allow-Origin: " . ACCESS_CONTROL_ALLOWED_ORIGIN);
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === "OPTIONS")
    exit;

$databaseConnection = createPDOConection();

if ($_SERVER['REQUEST_METHOD'] === "POST")
    post($databaseConnection);
else 
{
    http_response_code(405);
    header("Allow: POST, OPTIONS");
}

function post(\PDO $databaseConnection)
{
    $bodyContent = file_get_contents('php://input');
    $dataModel = json_decode($bodyContent, true);

    if ($dataModel === null || !array_key_exists("userName", $dataModel) || !array_key_exists("password", $dataModel))
        exitWithHttpCode(400);

    $userName = $dataModel["userName"];
    $password = $dataModel["password"];

    $user = getUserByUserName($databaseConnection, $userName);

    if ($user === null || !$user->isAdministrator())
        exitWithHttpCode(401);

    $passwordValid = password_verify($password, $user->getPasswordHash());

    if (!$passwordValid)
        exitWithHttpCode(401);

    $currentTime = time();
    $token = [
        "sub" => $user->getId(),
        "iat" => $currentTime,
        "exp" => $currentTime + AUTHORIZATION_TOKEN_EXPIRATION_TIME
    ];
    $tokenEncoded = JWT::encode($token, AUTHORIZATION_TOKEN_SECRET);

    $result = [
        "id" => $user->getId(),
        "token" => $tokenEncoded
    ];
    echo(json_encode($result));
}