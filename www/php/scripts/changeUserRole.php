<?php


require("../renderer.php");
include('../user.php');
session_start();


if(!renderer::isUserLogged())
  returnFail("User is not logged in");


$type = intval(User::GetAccountTypeStatic($_SESSION['email']));

if($type > 0)
  returnFail("Do not have permission");

if(isset($_POST['json']))
{
  $json = $_POST['json'];
  $json = json_decode($json);

  if(isset($json->email) && isset($json->newrole)){

    $return = array();
    $return['success'] = User::SetNewRoleStatic($json->email, $json->newrole);
    $return['role'] = User::GetAccountTypeNameStatic($json->newrole);
    echo json_encode($return);
  }else {
    returnFail("One of fields is not defined");
  }
}else{
  returnFail("Insufficient params");
}
