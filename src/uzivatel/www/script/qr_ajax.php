<?php

$zadano = $_POST["js_data"];

zjistitKnihu($zadano);

function zjistitKnihu($hodnota){


    include "../base/db.php";

    if(isset($hodnota))
    {
        $dotaz = $db->prepare("SELECT * FROM books WHERE ID = '$hodnota'"); 

        $dotaz->execute();

        $radek= $dotaz->fetch(PDO::FETCH_ASSOC);

        if($dotaz->rowCount() == 0)
        {
            return null;
        }
        else
        {
            $ISBN_knihy = ($radek)["ISBN"];
            $nazev_knihy = ($radek)["name"];
            $autor_knihy = ($radek)["author_id"];
            $rok_knihy = ($radek)["year"];
            $stav_knihy = ($radek)["condition_id"];
            $umisteni_knihy = ($radek)["place_id"];

            echo "Kniha: " . ($ISBN_knihy) . ", " . ($nazev_knihy) . ", " . ($autor_knihy) . ", " . ($rok_knihy) ."<br>";

        }   
    }
}
        
?>
