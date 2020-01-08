<?php
function echoList(){
include "./base/db.php";

$dotaz = $db->prepare("SELECT books.name,authors.firstname,authors.lastname,book_requests.request_added,book_requests.book_borrowed,book_requests.book_returned,book_states.state  
 FROM book_requests INNER JOIN books on books.id = book_requests.book_id INNER JOIN authors on authors.id = books.author_id  INNER JOIN book_states on book_requests.state = book_states.id  
 WHERE book_requests.state > 2 AND book_requests.user_id = ? ORDER BY book_requests.request_added DESC");




$dotaz->execute(array($_SESSION["user_ID"]));
$data = $dotaz->fetchAll();

echo "<div id='booklist'>";
echo "<table id='booklisttable'>";
echo "<tr><th>Název knihy</th><th>Autor</th><th>Čas žádosti</th><th>Stav</th><th>Čas půjčení</th><th>Čas vrácení</th>";

foreach( $data as $vypujcka){
    $NazevKnihy = $vypujcka['name'];
    $AutorKnihy = $vypujcka["firstname"]." ".$vypujcka["lastname"];
    $Stav = $vypujcka['state'];
    $Zadost = $vypujcka['request_added'];
    if(!isset($vypujcka['book_borrowed'])){
        $Vypujceni = '-';
    }
    else{

        $Vypujceni = $vypujcka['book_borrowed'];
    }

    if(!isset($vypujcka['book_returned'])){
        $Vraceni = '-';
    }
else{
    $Vraceni = $vypujcka['book_returned'];

}

    echo( "<tr><td>".$NazevKnihy." </td><td>".$AutorKnihy."</td><td>".$Zadost."</td><td>".$Stav."</td><td>".$Vypujceni."</td><td>".$Vraceni."</td></tr>");


}
echo "</table></div>";

}
?>