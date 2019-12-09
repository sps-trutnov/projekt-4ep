<?php
if(isset($_POST["name"]) && $_POST["name"] !="" && isset($_POST["pass"]) && $_POST["pass"] != ""){
    include("../../base/db.php");

    $query=$db->prepare("SELECT * FROM users WHERE username=? LIMIT 1");

    $query->execute([$_POST["name"]]);

    $user = $query->fetch();

    echo($user["password"]."<br>".$_POST["pass"]);

    var_dump(password_verify($_POST["pass"],$user["password"]));

    var_dump(password_get_info($user["password"]));

    if($query->rowCount()>0){

        echo password_verify($_POST["pass"],$user["password"]);

        if(password_verify($_POST["pass"],$user["password"])){
            session_start();
            $_SESSION["user_ID"] = $user["id"];
            $_SESSION["username"] = $user["username"];
            $_SESSION["name"]=$user["firstname"]." ".$user["lastname"];
            $_SESSION["isAdmin"]=$user['is_administrator'];
            $_SESSION["isLibrarian"]=$user["is_librarian"];
            /*echo $user["id"]."  ".$_SESSION["user_ID"];
            echo $user["account_type"];*/
          /*  switch($user["account_type"]){
                case 0:{
                    header("Location: ../../admin/");
                    break;
                }
                case 1:{
                    header("Location: ../../knihovnik/");
                    break;
                }
                case 2:{
                    header("Location: ../../");
                    break;
                }
                default: die("unexpected error");
            }
*/          if ($_SESSION["isAdmin"] == 1 && $_SESSION["isLibrarian"] == 0){
    header("Location: ../../admin/");
       
}
else if($_SESSION["isLibrarian"] == 1 && $_SESSION["isAdmin"] == 0){
    header("Location: ../../knihovnik/");
                    
}
else if ($_SESSION["isLibrarian"] == 1 && $_SESSION["isAdmin"] == 1)
{
    header("Location: ../../obojetny/");
}
else {
    header("Location: ../../");
}


            exit();
        }
    }

    header("Location: ../../?p=login&e=1");
    exit();
}
header("Location: ../../?p=login&e=0");