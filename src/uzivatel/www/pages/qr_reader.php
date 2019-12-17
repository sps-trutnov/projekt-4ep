<?php if(pathinfo($_SERVER["SCRIPT_FILENAME"], PATHINFO_FILENAME) != "index") die("error, no dirrect access aproved"); ?>
    <h1 class="stranka_nadpis">QR čtečka</h1>
    
    <p>Tato funkce umožňuje přejít na stránku s detailem knihy bez nutnosti vyhledávání.</p>

    <div>


    <div id="qr_readerForm">
    
    
    </div>

    <form id="qr_form" method="post" action="" >
        <input name="idKnihy" id="idKnihy" oninput="ajaxDotaz(this.value);ziskatIDknihy();" type=text size=30 class=qrcode-text>
        <label class=qrcode-text-btn><input type=file accept="image/*" capture=environment onclick="return showQRIntro();" onchange="openQRCamera(this);" tabindex=-1>Načíst QR kód</label> 
        
        <br>
        <input class='qr_button' name='prejitnadetail' type="submit" value="Přejít na detail knihy"><br>
        
    </form>


        <script src="./js/qr_packed.js"></script>
        <script src="./js/script_qr.js"></script>    
    </div>
    
    <br>
    <div id="vypis"></div>