<?php if(pathinfo($_SERVER["SCRIPT_FILENAME"], PATHINFO_FILENAME) != "index") die("error, no dirrect access aproved"); ?>

<h1 class="stranka_nadpis">Seznam knih</h1>


<!-- Připraveno pro případný PHP Ajax

<form method="post" action="./?p=list">

    <input type="text" name="list_input" id="list_input" placeholder="Vyhledat knihu">
    <input type="submit" name="list_search" id="list_search" value="Vyhledat">
</form>

-->

<input type="text" name="searchbox" id="searchbox" onkeyup="searchByName()" placeholder="Vyhledat knihu podle názvu nebo autora" title="Vyhledat knihu podle názvu nebo autora">


<?php
    echoList();
    
    /*
    if(isset($_POST['list_input']) && ($_POST['list_input'] != "") && isset($_POST['list_search'])){
        echo 'Hello World';
    }
    else
    {
        echo "vyplnte";
    }
    */

?>
