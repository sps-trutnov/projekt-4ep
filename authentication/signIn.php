<?php

ini_set('display_startup_errors', 1);
ini_set('display_errors', 1);
error_reporting(-1);

require_once "settings.php";
require_once "User.php";

session_start();

$invalidCredentials = false;

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    if (!isset($_POST["userName"]) || !isset($_POST["password"])) {
        http_response_code(400);
        exit;
    }

    $userName = $_POST["userName"];
    $password = $_POST["password"];

    $databaseConnection = createPDOConection();

    $invalidCredentials = !signIn($databaseConnection, $userName, $password);

    echo json_encode($invalidCredentials);

    if (!$invalidCredentials && isset($_GET["redirectUrl"])) {
        $redirectUrl = $_GET["redirectUrl"];

        header("Location: $redirectUrl");
        exit;
    }
}

function signIn(PDO $databaseConnection, string $userName, string $password): bool
{
    $user = getUserByUserName($databaseConnection, $userName);
    if ($user === null)
        return false;

    $passwordHash = $user->getPasswordHash();
    if (!password_verify($password, $passwordHash))
        return false;

    $_SESSION["userId"] = $user->getId();
    return true;
}

function createPDOConection(): PDO
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

function getUserByUserName(PDO $databaseConnection, string $userName): ?User
{
    $statement = $databaseConnection->prepare("SELECT * FROM users WHERE username = ?");
    $statement->execute([$userName]);

    $row = $statement->fetch();

    if ($row == false)
        return null;

    return new User(
        $row["id"],
        $row["username"],
        $row["firstname"],
        $row["lastname"],
        $row["email"],
        $row["password"],
        (bool) $row["is_librarian"],
        (bool) $row["is_administrator"]
    );
}

?>

<!DOCTYPE html>
<html lang="cs">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="dark.css">
    <link rel="stylesheet" href="signIn.css">
    <title>Přihlášení</title>
</head>
<body>
    <form class="form form-sign-in p-2" method="post">
        <h2 class="text-center">Přihlášení</h2>
        <div class="form-group">
            <label for="user-name-input">Uživatelské jméno</label>
            <input class="form-control" id="user-name-input" type="text" name="userName">
        </div>
        <div class="form-group">
            <label for="user-name-input">Heslo</label>
            <input class="form-control" id="password-input" type="password" name="password">
            <?php if ($invalidCredentials): ?>
                <div class="invalid-feedback d-block">
                    Špatné uživatelské jméno nebo heslo.
                </div>
            <?php endif; ?>
        </div>
        <button type="submit" class="btn btn-primary w-100">Přihlásit se</button>
    </form>

    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
</body>
</html>