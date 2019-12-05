<?php

namespace users;

use const settings\ACCESS_CONTROL_ALLOWED_ORIGIN;

use function authorization\authorize;
use function database\createPDOConection;
use function http\exitWithHttpCode;

require_once "../authorization/authorization.php";
require_once "../database/database.php";
require_once "./User.php";
require_once "./users.php";
require_once "../settings/settings.php";
require_once "../http/http.php";

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
        getSingle($databaseConnection);
    else
        getMultiple($databaseConnection);
}

function getSingle(\PDO $databaseConnection)
{
    $id = $_GET["id"];

    if (!isIntegerValid($id))
        exitWithHttpCode(400);

    $user = getUserById($databaseConnection, $id);

    if ($user == null)
        exitWithHttpCode(404);

    $dataModel = toDataModel($user);
    echo(json_encode($dataModel));
}

function getMultiple(\PDO $databaseConnection)
{
    $userNameFilter = isset($_GET["user-name-filter"]) ? $_GET["user-name-filter"] : null;
    $firstNameFilter = isset($_GET["first-name-filter"]) ? $_GET["first-name-filter"] : null;
    $lastNameFilter = isset($_GET["last-name-filter"]) ? $_GET["last-name-filter"] : null;
    $emailFilter = isset($_GET["email-filter"]) ? $_GET["email-filter"] : null;
    if (isset($_GET["id-filter"]))
    {
        $idFilterRaw = $_GET["id-filter"];
        if (!isIntegerValid($idFilterRaw))
            exitWithHttpCode(400);
        $idFilter = (int)$idFilterRaw;
    }
    else
        $idFilter = null;
    if (isset($_GET["is-librarian-filter"]))
    {
        $isLibrarianFilterRaw = $_GET["is-librarian-filter"];
        if (!isBoolValid($isLibrarianFilterRaw))
            exitWithHttpCode(400);
        $isLibrarianFilter = (bool)$isLibrarianFilterRaw;
    }
    else
        $isLibrarianFilter = null;
    if (isset($_GET["is-administrator-filter"]))
    {
        $isAdministratorFilterRaw = $_GET["is-administrator-filter"];
        if (!isBoolValid($isAdministratorFilterRaw))
            exitWithHttpCode(400);
        $isAdministratorFilter = (bool)$isAdministratorFilterRaw;
    }
    else
        $isAdministratorFilter = null;

    $users = getUsers($databaseConnection, $idFilter, $userNameFilter, $firstNameFilter, $lastNameFilter, $emailFilter, $isLibrarianFilter, 
        $isAdministratorFilter);

    $dataModel = array_map(function ($u) {
        return toDataModel($u);
    }, iterator_to_array($users));
    echo(json_encode($dataModel));
}

function post(\PDO $databaseConnection)
{
    $bodyContent = file_get_contents('php://input');
    $dataModel = json_decode($bodyContent, true);

    if ($dataModel === null || !hasDataModelValidSyntax($dataModel, false, true))
        exitWithHttpCode(400);

    if (!hasDataModelValidSemantics($dataModel))
        exitWithHttpCode(422);

    $namesakeUser = getUserByUserName($databaseConnection, $dataModel["userName"]);
    if ($namesakeUser !== null)
        exitWithHttpCode(409);

    $passwordHash = password_hash($dataModel["password"], PASSWORD_DEFAULT);
    $user = new User(0, $dataModel["userName"], $dataModel["firstName"], $dataModel["lastName"], $dataModel["email"], $passwordHash, 
        $dataModel["isLibrarian"], $dataModel["isAdministrator"]);

    $newUser = addUser($databaseConnection, $user);

    $newDataModel = toDataModel($newUser);
    echo(json_encode($newDataModel));
}

function put(\PDO $databaseConnection) 
{
    $bodyContent = file_get_contents('php://input');
    $dataModel = json_decode($bodyContent, true);

    if ($dataModel === null || !hasDataModelValidSyntax($dataModel, true, false))
        exitWithHttpCode(400);

    if (!hasDataModelValidSemantics($dataModel))
        exitWithHttpCode(422);

    $namesakeUser = getUserByUserName($databaseConnection, $dataModel["userName"]);
    if ($namesakeUser !== null && $namesakeUser->getId() !== $dataModel["id"])
        exitWithHttpCode(409);

    if (!array_key_exists("password", $dataModel))
        $passwordHash = getUserById($databaseConnection, $dataModel["id"])->getPasswordHash();
    else
        $passwordHash = password_hash($dataModel["password"], PASSWORD_DEFAULT);

    $user = new User($dataModel["id"], $dataModel["userName"], $dataModel["firstName"], $dataModel["lastName"], $dataModel["email"], $passwordHash, 
        $dataModel["isLibrarian"], $dataModel["isAdministrator"]);

    $newUser = updateUser($databaseConnection, $user);

    $newDataModel = toDataModel($newUser);
    echo(json_encode($newDataModel));
}

function delete(\PDO $databaseConnection) 
{
    if (!isset($_GET["id"]) || !isIntegerValid($_GET["id"]))
        exitWithHttpCode(400);

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
        "firstName" => $user->getFirstName(),
        "lastName" => $user->getLastName(),
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

function isIntegerValid(string $integer): bool
{
    return preg_match("/^(0|(-?[1-9][0-9]*))$/", $integer);
}

function isBoolValid(string $bool): bool
{
    $boolLower = strtolower($bool);
    return $boolLower === "true" || $boolLower === "false";
}

function hasDataModelValidSyntax(array $dataModel, bool $idRequired, bool $passwordRequired): bool
{
    return 
        array_key_exists("userName", $dataModel) && 
        array_key_exists("firstName", $dataModel) && 
        array_key_exists("lastName", $dataModel) && 
        array_key_exists("email", $dataModel) && 
        array_key_exists("isLibrarian", $dataModel) && 
        array_key_exists("isAdministrator", $dataModel) && 
        (array_key_exists("id", $dataModel) || !$idRequired) &&
        (array_key_exists("password", $dataModel) || !$passwordRequired) &&
        is_string($dataModel["userName"]) && 
        is_string($dataModel["firstName"]) && 
        is_string($dataModel["lastName"]) && 
        is_string($dataModel["email"]) && 
        is_bool($dataModel["isLibrarian"]) &&
        is_bool($dataModel["isAdministrator"]) &&
        (!array_key_exists("id", $dataModel) || is_int($dataModel["id"])) &&
        (!array_key_exists("password", $dataModel) || is_string($dataModel["password"]));
}

function hasDataModelValidSemantics(array $dataModel): bool
{
    return 
        isUserNameValid($dataModel["userName"]) &&
        isEmailValid($dataModel["email"]) &&
        (!array_key_exists("password", $dataModel) || isPasswordValid($dataModel["password"]));
}