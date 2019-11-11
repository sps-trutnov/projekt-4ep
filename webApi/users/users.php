<?php

namespace users;

function getUsers(\PDO $databaseConnection): array
{
    $statement = $databaseConnection->prepare("SELECT * FROM users");
    $statement->execute();

    $users = [];
    while ($row = $statement->fetch())
        $users[] = new User($row["id"], $row["user_name"], $row["first_name"], $row["last_name"], $row["email"], $row["password_hash"], 
            (bool)$row["is_librarian"], (bool)$row["is_administrator"]);

    return $users;
}

function getUserById(\PDO $databaseConnection, int $id): ?User
{
    $statement = $databaseConnection->prepare("SELECT * FROM users WHERE id = ?");
    $statement->execute([$id]);

    $row = $statement->fetch();

    if ($row == false)
        return null;

    return new User($row["id"], $row["user_name"], $row["first_name"], $row["last_name"], $row["email"], $row["password_hash"], 
        (bool)$row["is_librarian"], (bool)$row["is_administrator"]);
}

function getUserByUserName(\PDO $databaseConnection, string $userName): ?User
{
    $statement = $databaseConnection->prepare("SELECT * FROM users WHERE user_name = ?");
    $statement->execute([$userName]);

    $row = $statement->fetch();

    if ($row == false)
        return null;

    return new User($row["id"], $row["user_name"], $row["first_name"], $row["last_name"], $row["email"], $row["password_hash"], 
        (bool)$row["is_librarian"], (bool)$row["is_administrator"]);
}

function addUser(\PDO $databaseConnection, User $user): User
{
    $statement = $databaseConnection->prepare("INSERT INTO users(`user_name`, first_name, last_name, email, password_hash, is_librarian, is_administrator) VALUES(?, ?, ?, ?, ?, ?, ?)");
    $statement->execute([$user->getUserName(), $user->getFirstName(), $user->getLastName(), $user->getEmail(), $user->getPasswordHash(), 
        (int)$user->isLibrarian(), (int)$user->isAdministrator()]);

    return new User((int)$databaseConnection->lastInsertId(), $user->getUserName(), $user->getFirstName(), $user->getLastName(), $user->getEmail(), 
        $user->getPasswordHash(), $user->isLibrarian(), $user->isAdministrator());
}

function updateUser(\PDO $databaseConnection, User $user): User
{
    $statement = $databaseConnection->prepare("UPDATE users SET `user_name` = ?, first_name = ?, last_name = ?, email = ?, password_hash = ?, is_librarian = ?, is_administrator = ? WHERE id = ?");
    $statement->execute([$user->getUserName(), $user->getFirstName(), $user->getLastName(), $user->getEmail(), $user->getPasswordHash(), 
        (int)$user->isLibrarian(), (int)$user->isAdministrator(), $user->getId()]);

    return new User($user->getId(), $user->getUserName(), $user->getFirstName(), $user->getLastName(), $user->getEmail(), $user->getPasswordHash(), 
        $user->isLibrarian(), $user->isAdministrator());
}

function removeUser(\PDO $databaseConnection, int $id): bool
{
    $statement = $databaseConnection->prepare("DELETE FROM users WHERE id = ?");
    $statement->execute([$id]);

    return $statement->rowCount() > 0;
}