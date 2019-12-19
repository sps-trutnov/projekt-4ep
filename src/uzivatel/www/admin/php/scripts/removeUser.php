<?php

require("../renderer.php");
include('../user.php');
session_start();

if(!renderer::isUserLogged())
  returnFail();


if(User::Getaccount_typeStatic($_SESSION['username']) > 0){
  returnFail();
}

if(isset($_POST['json']))
{

  $json = $_POST['json'];
  $json = json_decode($json);

  if(empty($json->username))
    returnFail("Username field is not defined");

  $user = new User($json->username);
  $return['success'] = $user->RemoveUser();

  echo json_encode($return);
}



?>
