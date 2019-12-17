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

  $json = json_decode($_POST['json']);

  /*if(!filter_var($json[2], FILTER_VALIDATE_EMAIL))
    returnFail("Username is not valid");*/




  $arr = array(
    // jmeno, prijmeni, email, heslo
    array($json[0],$json[1],$json[2],$json[3])
  );

  $return['success'] = User::RegisterUsers($arr);
  $return['message'] = "Uživatel byl přidán.";
  echo json_encode($return);
  exit;
}else{
  returnFail("Insufficient params");
}
