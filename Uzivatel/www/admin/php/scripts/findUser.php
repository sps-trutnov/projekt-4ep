<?php
//include('../dbconn.php');
include('../user.php');

if(isset($_POST['json']) && !empty($_POST['json']))
{
  session_start();
  $value = json_decode($_POST['json'] ,true);

  $lookFor = $value['json'];
  $selectAll = trim($lookFor) == "";

  $userArray = array();
  if($selectAll)
    $userArray = User::GetAllUsers();
  else
    $userArray = User::GetUsersLike($lookFor);




  $users = array();

  foreach($userArray as $value) {
    $data = $value->GetData();


    $data['account_type'] = $value->Getaccount_typeName();



    unset($data['id']); // remove id
    unset($value); // unset user obj
    array_push($users, $data);
  }

  // 2 == true == root
  $outputArray['modify'] = User::Getaccount_typeStatic($_SESSION['username']) == 0;
  $outputArray['users'] = $users;

  echo json_encode($outputArray);

}





 ?>
