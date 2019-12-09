<?php
require("../renderer.php");
include('../user.php');
session_start();


if(!renderer::isUserLogged())
  returnFail("Not logged in");


$type = intval(User::Getaccount_typeStatic($_SESSION['username']));

if($type > 0)
  returnFail("Do not have permission");

if(isset($_POST['json']))
{
  $json = $_POST['json'];
  $json = json_decode($json);

  if(isset($json->username) && isset($json->newpassword))
  {
    $username = $json->username;
    $password = $json->newpassword;

    $user = new User($username);

    $return['success'] = $user->ChangePassword($password);
    echo json_encode($return);
  }else{
    returnFail("One of fields is not defined");
  }
}else {
  returnFail("Insufficient params");
}



?>
