<?php if(pathinfo($_SERVER["SCRIPT_FILENAME"], PATHINFO_FILENAME) != "index") die("error, no dirrect access aproved"); ?>
<div id="formular">
    <form action="./script/form/login.php" class="login_form" method="POST">


        <div class="login">

            <div class="login-form">
                
                <h1>Přihlášení</h1><br>

                <input type="text" input name="name" id="username" placeholder="Uživatel"/><br>
                <input type="password" input name="pass" id="password" placeholder="Heslo"/>
                <br>

                <?php if(isset($_GET["e"])) writeErr($_GET["e"]); ?>
                <br>

                <div id="submit"><input type="submit" class="login-button" id="login" value="Přihlásit se"></div>

            </div>
        </div>
     

    </form>
</div>