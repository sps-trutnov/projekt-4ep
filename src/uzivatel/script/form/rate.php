<?php
include("../../base/db.php");

$user_id=$_GET["user_id"];
$book_id=$_GET["book_id"];
$rating=$_POST["rating"];

$stmt = $db->prepare("SELECT * FROM ratings WHERE user_ID=? AND book_ID=?");
$stmt->execute(array($user_id, $book_id));

echo $stmt->rowCount();

if($stmt->rowCount()==0){
    $stmt = $db->prepare("INSERT INTO ratings (user_ID, book_ID, rating) VALUES (?, ?, ?)");
    $stmt->execute(array($user_id, $book_id, $rating));
}
else{
    $stmt = $db->prepare("UPDATE ratings SET rating=? WHERE user_ID=? AND book_ID=?");
    $stmt->execute(array($rating, $user_id, $book_id));
}

echo var_dump($db->errorInfo());

echo($user_id." ".$book_id." ".$rating);

header("Location: ../../?p=detail&id=$book_id");