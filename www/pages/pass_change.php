<?php if(pathinfo($_SERVER["SCRIPT_FILENAME"], PATHINFO_FILENAME) != "index") die("error, no dirrect access aproved"); ?>

<h1 class="stranka_nadpis">Změna hesla</h1>


<div id="formular">
    <form action="./script/form/pass_change.php" class="pass_change_form" method="POST">


        <div class="pass_change">

            <div class="pass_change-form">
                

                <input type="password" input name="current_pass" id="current_pass" placeholder="Současné heslo"/>
                <input type="password" input name="new_pass" id="new_pass" placeholder="Nové heslo"/>
                <input type="password" input name="new_control_pass" id="new_control_pass" placeholder="Nové heslo pro kontrolu"/>
                <br>

                <?php if(isset($_GET["e"])) writeErr($_GET["e"]); ?>
                <br>

                <div id="submit"><input type="submit" class="pass_change_button" id="pass_change_button" value="Změnit heslo"></div>

            </div>
        </div>
     

    </form>
</div>
