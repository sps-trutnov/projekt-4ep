<?php
include "../base/db.php";

$statement=$db->prepare("SELECT id, firstname, lastname FROM authors ORDER BY lastname, firstname ASC");

$statement->execute(array());

$authors=$statement->fetchAll();

//var_dump($authors);

$statement=$db->prepare("SELECT id,genre FROM genres ORDER BY genre ASC");

$statement->execute(array());

$genres=$statement->fetchAll();

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="../js/jquery-3.2.1.min.js"></script>
</head>
<body>
    <form action="./insertBook_form.php?f=editAuthor" method="post">
	  <h2>Autoři</h2>
        <select name="author" id="">
            <?php 
            $length = count($authors);
            for($i=0;$i<$length;$i++){
                echo('<option firstname="'.$authors[$i]["firstname"].'" lastname="'.$authors[$i]["lastname"].'" value="'.$authors[$i]["id"].'">'.$authors[$i]["firstname"]." ".$authors[$i]["lastname"].'</option>');
            }
            ?>
        </select><br>
        <input type="text" name="author_firstname" placeholder="jméno">
        <input type="text" name="author_lastname" placeholder="příjmení"><br>
        <input type="submit" name="action" value="Upravit">
        <input type="submit" name="action" value="Odebrat">
        <input type="submit" name="action" value="Vložit">
    </form>
    <form action="./insertBook_form.php?f=editGenre" method="post">
	  <h2>Žánry</h2>
        <select name="genre" id="">
            <?php 
            $length = count($genres);
            for($i=0;$i<$length;$i++){
                echo('<option value="'.$genres[$i]["id"].'">'.$genres[$i]["genre"].'</option>');
            }
            ?>
        </select><br>
        <input type="text" name="genre_name" placeholder="název"><br>
        <input type="submit" name="action" value="Upravit">
        <input type="submit" name="action" value="Odebrat">
        <input type="submit" name="action" value="Vložit">
    </form>
    <form action="./insertBook_form.php?f=addBook" method="post">
    
    </form>
</body>
</html>

<script>
    $('[name="author"]').on('change',function(){
        $('[name="author_firstname"]').val($('[name="author"] option:selected').attr("firstname"));
        $('[name="author_lastname"]').val($('[name="author"] option:selected').attr("lastname"));
    });

    $('[name="genre"]').on('change',function(){
        $('[name="genre_name"]').val($('[name="genre"] option:selected').text());
    });
</script>