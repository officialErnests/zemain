<?php

$uri = parse_url($_SERVER['REQUEST_URI'])['path'];
$routes = require "routers.php";
if (array_key_exists($uri, $routes)) 
{
    require $routes[$uri];
} else 
{
    http_response_code(404);
    echo '<style>html {background-color: black;} * {color: white;}</style><h1>404, <br> Page not found ;-;</h1><hr><a href="./">back</a>';
    die();
}