<?php

require("../renderer.php");
include('../user.php');
session_start();


if(!renderer::isUserLogged())
  returnFail("Not logged in");

if(empty($_FILES['usersFile']))
  returnFail("Selected file is not valid");

$file = $_FILES['usersFile'];

$parsed = array();
if ($file = fopen($file['tmp_name'], "r")) {
    while(!feof($file)) {
        $line = fgets($file);
        $arr = explode(",",$line);

        if(sizeof($arr) < 3)
          continue;

        foreach ($arr as $value) {
          if(empty($value))
            continue;
        }

        if(empty($arr[3]))
           $arr[3] = defaultPassword;

        array_push($parsed, $arr);
    }
    fclose($file);
}

User::RegisterUsers($parsed);

$return['success'] = true;
$return['message'] = "Uživatele byli přidáni";
echo json_encode($return);
