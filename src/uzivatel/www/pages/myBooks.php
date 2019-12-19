<?php if(pathinfo($_SERVER["SCRIPT_FILENAME"], PATHINFO_FILENAME) != "index") die("error, no dirrect access aproved"); ?>

<h1 class="stranka_nadpis">Moje knihy</h1>
<p>Zde se budou zobrazovat knihy, o jejichž zapůjčení jste zažádali nebo je máte vypůjčené. Standartní doba zapůjčení je 30 dnů.</p>


<?php
echoMyBooks();

?>
