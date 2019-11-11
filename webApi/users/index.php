<?php

namespace users;

use const settings\ACCESS_CONTROL_ALLOWED_ORIGIN;

use function authorization\authorize;
use function database\createPDOConection;

require_once "../authorization/authorization.php";
require_once "../database/database.php";
require_once "./User.php";
require_once "./users.php";
require_once "../settings/settings.php";

header("Access-Control-Allow-Origin: " . ACCESS_CONTROL_ALLOWED_ORIGIN);
header("Access-Control-Allow-Methods: PUT, POST, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === "OPTIONS")
    exit;

$databaseConnection = createPDOConection();
authorize($databaseConnection, true);

if ($_SERVER['REQUEST_METHOD'] === "GET")
    get($databaseConnection);
elseif ($_SERVER['REQUEST_METHOD'] === "POST")
    post($databaseConnection);
elseif ($_SERVER['REQUEST_METHOD'] === "PUT")
    put($databaseConnection);
elseif ($_SERVER['REQUEST_METHOD'] === "DELETE")
    delete($databaseConnection);
else 
{
    http_response_code(405);
    header("Allow: GET, POST, PUT, DELETE, OPTIONS");
}

function get(\PDO $databaseConnection)
{
    if (isset($_GET["id"]))
    {
        $id = $_GET["id"];

        $user = getUserById($databaseConnection, $id);

        if ($user == null)
        {
            http_response_code(404);
            return;
        }

        $dataModel = toDataModel($user);

        echo(json_encode($dataModel));
    }
    else
    {
        $users = getUsers($databaseConnection);

        $dataModel = array_map(function ($u) {
            return toDataModel($u);
        }, $users);

        echo(json_encode($dataModel));
    }
}

function post(\PDO $databaseConnection)
{
    $bodyContent = file_get_contents('php://input');
    $dataModel = json_decode($bodyContent, true);

    if ($dataModel === null || !array_key_exists("userName", $dataModel) || !array_key_exists("email", $dataModel) || 
        !array_key_exists("password", $dataModel) || !array_key_exists("isLibrarian", $dataModel) || !array_key_exists("isAdministrator", $dataModel) ||
        !is_string($dataModel["userName"]) || !is_string($dataModel["email"]) || !is_string($dataModel["password"]) || !is_bool($dataModel["isLibrarian"]) ||
        !is_bool($dataModel["isAdministrator"]))
    {
        http_response_code(400);
        return;
    }
    if (!isUserNameValid($dataModel["userName"]) || !isEmailValid($dataModel["email"]) || !isPasswordValid($dataModel["password"]))
    {
        http_response_code(422);
        return;
    }
    $namesakeUser = getUserByUserName($databaseConnection, $dataModel["userName"]);
    if ($namesakeUser !== null)
    {
        http_response_code(409);
        return;
    }

    $passwordHash = password_hash($dataModel["password"], PASSWORD_DEFAULT);
    $user = new User(0, $dataModel["userName"], $dataModel["email"], $passwordHash, $dataModel["isLibrarian"], $dataModel["isAdministrator"]);

    $newUser = addUser($databaseConnection, $user);

    $newDataModel = toDataModel($newUser);

    echo(json_encode($newDataModel));
}

function put(\PDO $databaseConnection) 
{
    $bodyContent = file_get_contents('php://input');
    $dataModel = json_decode($bodyContent, true);

    if ($dataModel === null || !array_key_exists("id", $dataModel) || !array_key_exists("userName", $dataModel) || !array_key_exists("email", $dataModel) || 
        !array_key_exists("isLibrarian", $dataModel) || !array_key_exists("isAdministrator", $dataModel) || !is_string($dataModel["userName"]) || 
        !is_string($dataModel["email"]) || (array_key_exists("password", $dataModel) && !is_string($dataModel["password"])) || 
        !is_bool($dataModel["isLibrarian"]) || !is_bool($dataModel["isAdministrator"]))
    {
        http_response_code(400);
        return;
    }
    if (!isUserNameValid($dataModel["userName"]) || !isEmailValid($dataModel["email"]) || 
        (array_key_exists("password", $dataModel) && !isPasswordValid($dataModel["password"])))
    {
        http_response_code(422);
        return;
    }
    $namesakeUser = getUserByUserName($databaseConnection, $dataModel["userName"]);
    if ($namesakeUser !== null && $namesakeUser->getId() !== $dataModel["id"])
    {
        http_response_code(409);
        return;
    }

    if (!array_key_exists("password", $dataModel))
        $passwordHash = getUserById($databaseConnection, $dataModel["id"])->getPasswordHash();
    else
        $passwordHash = password_hash($dataModel["password"], PASSWORD_DEFAULT);

    $user = new User($dataModel["id"], $dataModel["userName"], $dataModel["email"], $passwordHash, $dataModel["isLibrarian"], 
        $dataModel["isAdministrator"]);

    $newUser = updateUser($databaseConnection, $user);

    $newDataModel = toDataModel($newUser);

    echo(json_encode($newDataModel));
}

function delete(\PDO $databaseConnection) 
{
    if (!isset($_GET["id"]))
    {
        http_response_code(400);
        return;
    }

    $id = $_GET["id"];

    $existed = removeUser($databaseConnection, $id);

    if (!$existed)
        http_response_code(404);
}

function toDataModel(User $user): array
{
    return [
        "id" => $user->getId(),
        "userName" => $user->getUserName(),
        "email" => $user->getEmail(),
        "isLibrarian" => $user->isLibrarian(),
        "isAdministrator" => $user->isAdministrator()
    ];
}

function isUserNameValid(string $userName): bool
{
    return strlen($userName) > 0;
}

function isEmailValid(string $email): bool
{
    return $email === "" || preg_match("/^(([^<>()\[\]\\\\.,;:\s@\"]+(\.[^<>()\[\]\\\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/", $email);
}

function isPasswordValid(string $password): bool
{
    return strlen($password) >= 8;
}