<?php

namespace users;

use function database\createPDOConection;

require_once "../vendor/autoload.php";
require_once "../database/database.php";
require_once "./User.php";
require_once "./users.php";

header("Access-Control-Allow-Origin: http://localhost:4200");

if ($_SERVER['REQUEST_METHOD'] === "GET")
    get();
elseif ($_SERVER['REQUEST_METHOD'] === "POST")
    post();
elseif ($_SERVER['REQUEST_METHOD'] === "PUT")
    put();
elseif ($_SERVER['REQUEST_METHOD'] === "DELETE")
    delete();
else 
{
    http_response_code(405);
    header("Allow: GET, POST, PUT, DELETE");
}

function get()
{
    $databaseConnection = createPDOConection();

    if (isset($_GET["id"]))
    {
        $id = $_GET["id"];

        $user = getUser($databaseConnection, $id);

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

function post()
{
    $databaseConnection = createPDOConection();

    $bodyContent = file_get_contents('php://input');
    $dataModel = json_decode($bodyContent, true);

    if (!array_key_exists("userName", $dataModel) || !array_key_exists("email", $dataModel) || !array_key_exists("password", $dataModel))
    {
        http_response_code(400);
        return;
    }

    $passwordHash = password_hash($dataModel["password"], PASSWORD_DEFAULT);
    $user = new User(0, $dataModel["userName"], $dataModel["email"], $passwordHash);

    $newUser = addUser($databaseConnection, $user);

    $newDataModel = toDataModel($newUser);

    echo(json_encode($newDataModel));
}

function put() 
{
    $databaseConnection = createPDOConection();

    $bodyContent = file_get_contents('php://input');
    $dataModel = json_decode($bodyContent, true);

    if (!array_key_exists("id", $dataModel) || !array_key_exists("userName", $dataModel) || !array_key_exists("email", $dataModel))
    {
        http_response_code(400);
        return;
    }

    if (!array_key_exists("password", $dataModel))
        $passwordHash = getUser($databaseConnection, $dataModel["id"])->getPasswordHash();
    else
        $passwordHash = password_hash($dataModel["password"], PASSWORD_DEFAULT);

    $user = new User($dataModel["id"], $dataModel["userName"], $dataModel["email"], $passwordHash);

    $newUser = updateUser($databaseConnection, $user);

    $newDataModel = toDataModel($newUser);

    echo(json_encode($newDataModel));
}

function delete() 
{
    $databaseConnection = createPDOConection();

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
        "email" => $user->getEmail()
    ];
}