<?php if(pathinfo($_SERVER["SCRIPT_FILENAME"], PATHINFO_FILENAME) != "index") die("error, no dirrect access aproved"); ?>
    <h1 class="stranka_nadpis">Historie výpůjček</h1>
    
    <input type="text" name="searchbox" id="searchbox" onkeyup="searchByName()" placeholder="Vyhledat knihu podle názvu, autora nebo stavu" title="Vyhledat knihu podle názvu, autora nebo stavu">
    <?php
    echoList();

?>

