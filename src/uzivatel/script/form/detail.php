<?php

if(isset($_POST["request_userID"]) && isset($_POST["request_bookID"]) && isset($_POST['submit_request']))
{
    $request_userID = $_POST["request_userID"];
    $request_bookID = $_POST["request_bookID"];
    $action;

    if($_POST["submit_request"]=="Zažádat o zapůjčení") $action="add";
    else $action = "remove";

    //echo $request_userID;
    //echo $request_bookID;

    include("../../base/db.php");
    session_start();

    $query=$db->prepare("SELECT * FROM book_requests WHERE user_ID='$request_userID' AND book_ID='$request_bookID'");
    $query->execute();

    $request = $query->fetch();

    if($action == "add")
    {
        if($query->rowCount()==0){

            /*
            if(password_verify($_POST["current_pass"],$user["password"])){

            if($_POST["new_pass"] == $_POST["new_control_pass"])
            {
                    $new_hash = password_hash($_POST["new_pass"], PASSWORD_DEFAULT);

                $change_query=$db->prepare("UPDATE users SET password='$new_hash' WHERE id='$actual_user_id' AND account_type=2");

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
            }*/

            $insert_query=$db->prepare("INSERT INTO book_requests (user_ID, book_ID) VALUES (?, ?)");
            $insert_query->execute(array($request_userID,$request_bookID));

        }
    }
    else{
        if($query->rowCount()!=0){
            


            $remove_query=$db->prepare("DELETE FROM book_requests WHERE user_ID=? AND book_ID=?");
            $remove_query->execute(array($request_userID,$request_bookID));
        }
    }
    //echo "Location: ../../?p=detail&id=".$request_bookID;
    header("Location: ../../?p=detail&id=".$request_bookID);
    
} 

echo($request_userID." ".$request_bookID." ".$action);
