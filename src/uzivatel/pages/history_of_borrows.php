<?php if(pathinfo($_SERVER["SCRIPT_FILENAME"], PATHINFO_FILENAME) != "index") die("error, no dirrect access aproved"); ?>
    <h1 class="stranka_nadpis">Historie výpůjček</h1>
    
    <?php
    echoList();

?>

