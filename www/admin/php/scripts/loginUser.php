<?php
include('../dbconn.php');

if(isset($_POST['json']) && !empty($_POST['json']))
{
  $userLoginValues = json_decode($_POST['json'] ,true);

  if(isset($userLoginValues['name']) && isset($userLoginValues['password']))
  {
    $userLoginValues['name'] = htmlentities(trim($userLoginValues['name']));
    $userLoginValues['password'] = htmlentities(trim($userLoginValues['password']));

    if(strpos($userLoginValues['name'], '@') === false)
        $userLoginValues['name'] .="@spstrutnov.cz";

    $statement = $conn->prepare("SELECT * FROM users WHERE email=:email");
    $statement->execute(array("email" => $userLoginValues['name']));
    $user = $statement->fetch();

    if($user)
    {
      if(password_verify($userLoginValues['password'], $user['password']))
      {
        if($user['account_type'] > 0)
        {
          session_start();


            $_SESSION['id'] = $user['id'];
            $_SESSION['firstname'] = $user['firstname'];
            $_SESSION['email'] = $user['email'];
            $_SESSION['lastname'] = $user['lastname'];
            $_SESSION['account_type'] = $user['account_type'];

          echo "login succesfull";

        }
        else
          echo "unauthorized access";

      }
      else
        echo 'wrong password';

    }
    else
      echo 'user not found';
  }
  else
    echo "empty values";


}
