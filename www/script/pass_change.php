<?php


function writeErr($code){
    $err=["Heslo bylo úspěšně změneno.","Zadaná hesla se neshodují.","Původní heslo není správné.","Vyplňte všechna pole."];

    echo('<div class="pass_change_form_err">'.$err[$code].'</div>');
}