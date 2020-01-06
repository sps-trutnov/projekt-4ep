<?php 
session_start();
if(pathinfo($_SERVER["SCRIPT_FILENAME"], PATHINFO_FILENAME) != "index") die("error, no dirrect access aproved"); 

if($_SESSION['userId']){
    header("location: ./script/form/login.php");
}else{
   header("location: ../authentication/signIn.php?redirectUrl=" .  $_SERVER['REQUEST_URI']);
}
?>
