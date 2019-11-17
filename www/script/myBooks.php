<?php

function echoMyBooks()
{
    //echo $_SESSION["user_ID"];

include "./base/db.php";

    $dotaz = $db->prepare(" SELECT book_requests.id,book_requests.user_id,book_requests.book_id,book_requests.confirmed,book_requests.request_added,books.id,books.name,authors.id,authors.firstname,authors.lastname/*,authors.firstname,authors.lastname*/
                            FROM book_requests

                            INNER JOIN books on book_requests.book_id=books.id 
                            INNER JOIN authors on books.author_id=authors.id

                            WHERE book_requests.user_id = ?
                            ORDER BY book_requests.request_added"); 
                            
    $dotaz->execute(array($_SESSION["user_ID"]));


    if($dotaz->rowCount() == 0)
    {
        echo("Nenalezena žádná zapůjčená kniha. Pro zapůjčení přejděte na seznam knih." . "<br>" . "<a class='myBooks_button' href='./?p=list'>Přejít na seznam</a>");
        //print_r($db->errorinfo());
    }
    else
    {
        $booklist = $dotaz->fetchAll();

        echo "<div id='borrowed_list_div'><ul class='borrowed_list'>";

        foreach ($booklist as $book) 
        {
            $ID_knihy = $book["book_id"];
            
            $potvrzeno = $book["confirmed"];
            $nazev_knihy = $book["name"];
            $autor_knihy = $book["firstname"]." ".$book["lastname"];
            $datum_zadosti = $book["request_added"];

            

            $date = date_create($datum_zadosti);
            date_add($date, date_interval_create_from_date_string('30 days'));
            
            if($potvrzeno !=0)
            {
                $datum_vraceni = date_format($date, 'd.m.Y');

                $date_now = date_create(date("Y-m-d"));
                $interval = date_diff($date_now, $date);
                $pocet_dnu = ($interval->format('%R%a'));
            }
            else
            {
                $datum_vraceni = "Zatím neschváleno";
                $pocet_dnu = "Zatím neschváleno";
            }


            

                        
           echo "<div class='myBook'><div class='borrowed_status'>Stav: <b><span class='renameStatus'>$potvrzeno</b></span><span class='borrowedIcon'>$potvrzeno</span></div><div class='myBook_main'><span>Kniha: <b>$nazev_knihy</b></span><br><span>Autor knihy: <b>$autor_knihy</b></span><br><span>Zapůjčeno do: <b>";
           echo $datum_vraceni;
           echo "</b></span><br><span>Zbývá dnů: <b><span class='remaining_days'>" . $pocet_dnu .
                "</span></b><form method='post' action='./?p=detail&id=$ID_knihy'><input class='myBooks_button' type='submit' value='Přejít na detail'></form>" . 
                "</div></div>";
                
        }
        echo "</ul></div>";
            
        
    }
}

?>
