<?php

function writeErr($code){
    $err=["EASTER🥚","Nebylo zadáno ID knihy!","Kniha s tímto ID se nenachází v seznamu!"];

    echo("<div style='color:red'>".$err[$code].'</div>');

  }

function echoList()
{
    include "./base/db.php";

    $dotaz = $db->prepare("SELECT book_id, state FROM book_requests ORDER BY book_id DESC");
    $dotaz->execute();
    $data = $dotaz->fetchAll();
    $pole = array_fill(0,$data[0][0] + 1,0);
    
    foreach ($data as $mujRequest){
        if($mujRequest['state'] == 2){
            $reserved = $mujRequest['state'];
        }
        else if($mujRequest['state'] > 2){
            $reserved = 0;
        }
        else{
            $reserved = $mujRequest['state'] + 1;
        }

        if($reserved > $pole[$mujRequest['book_id']])
             $pole[$mujRequest['book_id']] = $reserved;    
    }

    $dotaz = $db->prepare(" SELECT books.id,books.ISBN,books.name,books.year,authors.firstname,authors.lastname,conditions.condition,places.place, genres.genre 
                            FROM books 
                            INNER JOIN authors on books.author_id=authors.id 
                            INNER JOIN conditions on books.condition_id=conditions.id 
                            INNER JOIN places on books.place_id=places.id 
                            INNER JOIN genres ON books.genre_id=genres.id
                            "); 
    $dotaz->execute();

    if($dotaz->rowCount() == 0)
    {
        echo("Nenalezena žádná kniha v databázi.");
        print_r($db->errorinfo());
    }
    else
    {
        $booklist = $dotaz->fetchAll();

        

        echo "<div id='booklist'>";
        echo "<table id='booklisttable'>";
        echo "<tr><th>Název knihy</th><th>Autor</th><th>Rok vydání</th><th>Stav</th><th>Umístění</th><th>Žánr</th><th>Dostupnost</th><th>Přejít na detail knihy</th></tr>";

        foreach ($booklist as $book) 
        {
            $ID_knihy = $book["id"];
            $ISBN_knihy = $book["ISBN"];
            $nazev_knihy = $book["name"];
            $autor_knihy = $book["firstname"]." ".$book["lastname"];
            $rok_knihy = $book["year"];
            $stav_knihy = $book["condition"];
            $umisteni_knihy = $book["place"];
            $zanr = $book["genre"];
            if(!isset($pole[$book["id"]])){
                $dostupnost_knihy = 0;
            }
            else{
            $dostupnost_knihy = $pole[$book["id"]];
        }
            echo "<tr>";

            echo "<td>" . $nazev_knihy . "</td><td>" . $autor_knihy . "</td><td>" . $rok_knihy . "</td><td>" . 
                $stav_knihy . "</td><td>" . $umisteni_knihy . "</td><td>" . $zanr . "</td><td class='availabilityIcon tooltip'>" . $dostupnost_knihy . "</td><td>" . "<form method='post' action='./?p=detail&id=$ID_knihy'><input class='detail_input' type='submit' value='Přejít na detail'></form>";

            echo "</tr>";
        }
    echo "</table></div>";
    }

}
  
?>

