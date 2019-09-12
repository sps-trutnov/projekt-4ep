<?php
require("../renderer.php");
include('../user.php');
session_start();


if(!renderer::isUserLogged())
  returnFail("Not logged in");


$type = intval(User::GetAccountTypeStatic($_SESSION['email']));

if($type > 0)
  returnFail("Do not have permission");

if(isset($_POST['json']))
{
  $json = $_POST['json'];
  $json = json_decode($json);

  if(isset($json->email) && isset($json->newpassword))
  {
    $email = $json->email;
    $password = $json->newpassword;

    $user = new User($email);

    $return['success'] = $user->ChangePassword($password);
    echo json_encode($return);
  }else{
    returnFail("One of fields is not defined");
  }
}else {
  returnFail("Insufficient params");
}



?>
