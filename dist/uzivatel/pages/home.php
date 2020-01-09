<?php if(pathinfo($_SERVER["SCRIPT_FILENAME"], PATHINFO_FILENAME) != "index") die("error, no dirrect access aproved"); ?>
     
<h1 class="stranka_nadpis">Knihovna SPŠ Trutnov</h1>
<p>Vítejte v systému pro procházení knih a jejich rezervaci zapůjčení ze školní knihovny SPŠ Trutnov. Připravili jsme pro vás několik užitečných funkcí pro pohodlnější práci.</p>

<p>V sekci Seznam knih můžete prohlížet kompletní seznam knih včetně informací o nich a o jejich dostupnosti. Na stránce s detailem knihy
    naleznete podrobnější informace o knize, můžete zde také zažádat o zapůjčení knihy. V sekci Moje knihy naleznete knihy, o jejichž zapůjčení máte
    zažádáno či již zapůjčené knihy. Pro jednodušší vyhledávání využijte čtečku QR kódů.
</p>           
        
<h2>Profil uživatele</h2>

<div id="logged_user"><p>Přihlášený uživatel: <b> <?php echo $_SESSION["name"] ?> </b></p></div>

<ul class="list_profile">
    
    <a class='NormalHide' href="./?p=pass_change"><div class="zoom"><img src="./img/flaticon/010-pass.png" alt="zmena_hesla"><br>Změna hesla</div></a>
    <a href="./?p=list"><div class="zoom"><img src="./img/flaticon/014-folder.png" alt="seznam_knih"><br>Seznam knih</div></a>
    <a href="./?p=myBooks"><div class="zoom"><img src="./img/flaticon/003-bookmark.png" alt="moje_knihy"><br>Moje knihy</div></a>
    <a href="./?p=history_of_borrows"><div class="zoom"><img src="./img/flaticon/004-list.png" alt="historie_vypujcek"><br>Historie výpůjček</div></a>
    <a class='NormalHide' href="./?a=logout"><div class="zoom"><img src="./img/flaticon/013-exit.png" alt="log_out"><br>Odhlásit se</div></a>
    <?php 
    if ($_SESSION['isLibrarian']){
        echo(" 
    <a class='NormalHide' href='../knihovnik/'><div class='zoom'><img src='./img/flaticon/013-exit.png' alt='log_out'><br>Knihovník</div></a>");
}
if($_SESSION['isAdmin']){
 echo("   <a class='NormalHide' href='../sysadmin/'><div class='zoom'><img src='./img/flaticon/013-exit.png' alt='log_out'><br>Admin</div></a>");
 
 } ?>

    </ul>
