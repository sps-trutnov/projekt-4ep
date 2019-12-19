<?php

if(isset($_SESSION["user_ID"])) header("Location: ./");

function writeErr($code){
    $err=["Jméno nebo heslo nebylo vyplněno.","Jméno nebo heslo není zadáno správně."];

    echo('<div class="login_form_err">'.$err[$code].'</div>');
}