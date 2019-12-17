<?php

namespace cors;

function allowAllOrigins()
{
    header("Access-Control-Allow-Origin: *");
}

function allowOrigins(array $origins)
{
    $origin = $_SERVER["HTTP_ORIGIN"];
    if (in_array($origin, $origins))
        header("Access-Control-Allow-Origin: $origin");
}

function allowAllMethods()
{
    header("Access-Control-Allow-Methods: *");
}

function allowMethods(array $methods)
{
    header("Access-Control-Allow-Methods: " . join(", ", $methods));
}

function allowAllHeaders()
{
    header("Access-Control-Allow-Headers: *");
}

function allowHeaders(array $headers)
{
    header("Access-Control-Allow-Headers: " . join(", ", $headers));
}

function allowCredentials()
{
    header("Access-Control-Allow-Credentials: true");
}