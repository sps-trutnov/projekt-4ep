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


    $data['accountType'] = $value->GetAccountTypeName();

    

    unset($data['id']); // remove id
    unset($value); // unset user obj
    array_push($users, $data);
  }

  $outputArray['modify'] = User::GetAccountTypeStatic($_SESSION['email']) == 0;
  $outputArray['users'] = $users;

  echo json_encode($outputArray);

}





 ?>
