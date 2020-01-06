<?php
if(isset($_POST["current_pass"]) && $_POST["current_pass"] !="" && isset($_POST["new_pass"]) && $_POST["new_pass"] != "" && isset($_POST["new_control_pass"]) && $_POST["new_control_pass"] != ""){
    include("../../base/db.php");

    session_start();
    $actual_user_id = $_SESSION["user_ID"];


    $query=$db->prepare("SELECT * FROM users WHERE id='$actual_user_id'");

    $query->execute();

    $user = $query->fetch();


    
    if($query->rowCount()>0){

        if(password_verify($_POST["current_pass"],$user["password"])){

           if($_POST["new_pass"] == $_POST["new_control_pass"])
           {
                $new_hash = password_hash($_POST["new_pass"], PASSWORD_DEFAULT);

            $change_query=$db->prepare("UPDATE users SET password='$new_hash' WHERE id='$actual_user_id'");

            $change_query->execute();

            header("Location: ../../?p=pass_change&e=0");
            exit();
            
           }
           else
           {
            header("Location: ../../?p=pass_change&e=1");
            exit();
           }
     
        }
        else
        {
            header("Location: ../../?p=pass_change&e=2");
            exit();
        }
    }
}
else
{
    header("Location: ../../?p=pass_change&e=3");
    exit();
}
