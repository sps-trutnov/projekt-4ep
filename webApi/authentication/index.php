<?php

namespace authentication;

use Firebase\JWT\JWT;

use const settings\AUTHORIZATION_TOKEN_SECRET;

use function database\createPDOConection;
use function users\getUserByUserName;

require_once "../vendor/autoload.php";
require_once "../database/database.php";
require_once "../users/User.php";
require_once "../users/users.php";
require_once "../settings/settings.php";

header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === "OPTIONS")
    exit;

if ($_SERVER['REQUEST_METHOD'] === "POST")
    post();
else 
{
    http_response_code(405);
    header("Allow: POST, OPTIONS");
}

function post()
 {
    $databaseConnection = createPDOConection();

    $bodyContent = file_get_contents('php://input');
    $dataModel = json_decode($bodyContent, true);

    if (!array_key_exists("userName", $dataModel) || !array_key_exists("password", $dataModel))
    {
        http_response_code(400);
        return;
    }

    $userName = $dataModel["userName"];
    $password = $dataModel["password"];

    $user = getUserByUserName($databaseConnection, $userName);

    if ($user === null || !$user->isAdministrator())
    {
        http_response_code(401);
        return;
    }

    $passwordValid = password_verify($password, $user->getPasswordHash());

    if (!$passwordValid)
    {
        http_response_code(401);
        return;
    }

    $token = [
        "sub" => $user->getId()
    ];
    $tokenEncoded = JWT::encode($token, AUTHORIZATION_TOKEN_SECRET);

    $result = [
        "id" => $user->getId(),
        "token" => $tokenEncoded
    ];
    
    echo(json_encode($result));
}