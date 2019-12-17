<?php

namespace http;

function exitWithHttpCode(int $httpCode)
{
    http_response_code($httpCode);
    exit;
}