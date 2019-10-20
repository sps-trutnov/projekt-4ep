<?php
if(isset($_POST["username"]) && $_POST["username"] != ""){
    include("../base/db.php");

    $username = $_POST["username"];
    $firstName = $_POST["firstName"];
    $lastName = $_POST["lastName"];
    $password = password_hash($_POST["password"],PASSWORD_BCRYPT);

    $query = $db->prepare("INSERT INTO users (username,password,firstname,lastname,account_type) VALUES (?,?,?,?,2)");
    $query->execute([$username,$password,$firstName,$lastName]);

    header("Location: ../index.php");
    //print_r($db->errorInfo());
}
else die("username not set");
?>
