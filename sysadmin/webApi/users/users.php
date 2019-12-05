<?php

namespace users;

function getUsers(\PDO $databaseConnection, int $idFilter = null, string $userNameFilter = null, string $firstNameFilter = null, 
    string $lastNameFilter = null, string $emailFilter = null, bool $isLibrarianFilter = null, bool $isAdministratorFilter = null): iterable
{
    $conditions = [];
    $parameters = [];

    if ($idFilter !== null)
    {
        $conditions[] = "id = ?";
        $parameters[] = $idFilter;
    }
    if ($userNameFilter !== null)
    {
        $conditions[] = "user_name LIKE ?";
        $parameters[] = "%$userNameFilter%";
    }
    if ($firstNameFilter !== null)
    {
        $conditions[] = "first_name LIKE ?";
        $parameters[] = "%$firstNameFilter%";
    }
    if ($lastNameFilter !== null)
    {
        $conditions[] = "last_name LIKE ?";
        $parameters[] = "%$lastNameFilter%";
    }
    if ($emailFilter !== null)
    {
        $conditions[] = "email LIKE ?";
        $parameters[] = "%$emailFilter%";
    }
    if ($isLibrarianFilter !== null)
    {
        $conditions[] = "is_librarian = ?";
        $parameters[] = (int)$isLibrarianFilter;
    }
    if ($isAdministratorFilter !== null)
    {
        $conditions[] = "is_administrator = ?";
        $parameters[] = (int)$isAdministratorFilter;
    }

    $statementText = "SELECT * FROM users" . (count($conditions) > 0 ? " WHERE " : "") . join(" AND ", $conditions);

    $statement = $databaseConnection->prepare($statementText);
    $statement->execute($parameters);

    while ($row = $statement->fetch())
        yield rowToUser($row);
}

function getUserById(\PDO $databaseConnection, int $id): ?User
{
    $statement = $databaseConnection->prepare("SELECT * FROM users WHERE id = ?");
    $statement->execute([$id]);

    $row = $statement->fetch();

    if ($row == false)
        return null;

    return rowToUser($row);
}

function getUserByUserName(\PDO $databaseConnection, string $userName): ?User
{
    $statement = $databaseConnection->prepare("SELECT * FROM users WHERE user_name = ?");
    $statement->execute([$userName]);

    $row = $statement->fetch();

    if ($row == false)
        return null;

    return rowToUser($row);
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

function rowToUser(array $row): User
{
    return new User($row["id"], $row["user_name"], $row["first_name"], $row["last_name"], $row["email"], $row["password_hash"], 
        (bool)$row["is_librarian"], (bool)$row["is_administrator"]);
}