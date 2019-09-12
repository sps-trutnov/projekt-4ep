<?php

require("../renderer.php");
include('../user.php');
session_start();

if(!renderer::isUserLogged())
  returnFail();


if(User::GetAccountTypeStatic($_SESSION['email']) > 0){
  returnFail();


  }

if(isset($_POST['json']))
{

  $json = $_POST['json'];
  $json = json_decode($json);

  if(empty($json->email))
    returnFail();

  $user = new User($json->email);
  $return['success'] = $user->RemoveUser();

  echo json_encode($return);
}



?>
