<?php

namespace users;

function getUsers(\PDO $databaseConnection): array
{
    $statement = $databaseConnection->prepare("SELECT * FROM users");
    $statement->execute();

    $users = [];
    while ($row = $statement->fetch())
        $users[] = new User($row["id"], $row["user_name"], $row["email"], $row["password_hash"]);

    return $users;
}

function getUser(\PDO $databaseConnection, int $id): ?User
{
    $statement = $databaseConnection->prepare("SELECT * FROM users WHERE id = ?");
    $statement->execute([$id]);

    $row = $statement->fetch();

    if ($row == false)
        return null;

    return new User($row["id"], $row["user_name"], $row["email"], $row["password_hash"]);
}

function addUser(\PDO $databaseConnection, User $user): User
{
    $statement = $databaseConnection->prepare("INSERT INTO users(`user_name`, email, password_hash) VALUES(?, ?, ?)");
    $statement->execute([$user->getUserName(), $user->getEmail(), $user->getPasswordHash()]);

    return new User((int)$databaseConnection->lastInsertId(), $user->getUserName(), $user->getEmail(), $user->getPasswordHash());
}

function updateUser(\PDO $databaseConnection, User $user): User
{
    $statement = $databaseConnection->prepare("UPDATE users SET `user_name` = ?, email = ?, password_hash = ? WHERE id = ?");
    $statement->execute([$user->getUserName(), $user->getEmail(), $user->getPasswordHash(), $user->getId()]);

    return new User($user->getId(), $user->getUserName(), $user->getEmail(), $user->getPasswordHash());
}

function removeUser(\PDO $databaseConnection, int $id): bool
{
    $statement = $databaseConnection->prepare("DELETE FROM users WHERE id = ?");
    $statement->execute([$id]);

    return $statement->rowCount() > 0;
}

function existsUserByUserName(\PDO $databaseConnection, string $userName): bool
{
    $statement = $databaseConnection->prepare("SELECT COUNT(*) FROM users WHERE `user_name` = ?");
    $statement->execute([$userName]);

    return $statement->fetch()[0][0] > 0;
}