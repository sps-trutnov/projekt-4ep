<?php

if(isset($_GET["f"]) & isset($_POST["action"])){
    include "../base/db.php";

    $f = $_GET["function"];
    $a = $_POST["action"];

    if($f="editGenre"){
        if($a="Vložit"){
            $statement = $db->prepare("INSERT INTO genres (genre) VALUES (?)");
            $statement->execute(array($_POST["genre_name"]));
        }
    }
    if($f="editAuthor"){
        if($a="Vložit"){
            $statement = $db->prepare("INSERT INTO authors (firstname, lastname) VALUES (:firstname,:lastname)");
            $statement->execute(array(":firstname" => $_POST["author_firstname"],":lastname" => $_POST["author_lastname"] ));
        }
    }
   // header("Location: ./insertBook.php");
}
else
    die("error");


?>