<?php
if(isset($_POST["username"]) && $_POST["username"] != ""){
    include("../base/db.php");

    $username = $_POST["username"];
    $password = password_hash("12345",PASSWORD_BCRYPT);

    $query = $db->prepare("INSERT INTO users (username,password,firstname,lastname,accountType) VALUES (?,?,?,?,2)");
    $query->execute([$username,$password,"firstname","lastname"]);

    header("Location: ./registerForm.php");
    //print_r($db->errorInfo());
}
else die("username not set");
?>
