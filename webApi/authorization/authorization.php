<?php

namespace authorization;

use Firebase\JWT\JWT;

use const settings\AUTHORIZATION_TOKEN_SECRET;

require_once "../vendor/autoload.php";
require_once "../settings/settings.php";

function authorize() {
    if (!isAuthorized())
    {
        http_response_code(401);
        exit;
    }
}

function isAuthorized(): bool
{
    $authorizationHeader = getallheaders()["Authorization"];
    $tokenEncoded = substr($authorizationHeader, 7);
    try
    {
        JWT::decode($tokenEncoded, AUTHORIZATION_TOKEN_SECRET, ["HS256"]);
    }
    catch (\Exception $exception)
    {
        return false;
    }
    return true;
}