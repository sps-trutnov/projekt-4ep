<?php if(pathinfo($_SERVER["SCRIPT_FILENAME"], PATHINFO_FILENAME) != "index") die("error, no dirrect access aproved"); ?>
<h1>Generování QR kódu</h1>

<script src="./js/qrcodejs/qrcode.js"></script>

Obsah QR kódu: <input id="qr-text" oninput="vygenerovatQr(this.value)"><br><br>

<div id="qr-code"></div>

<div id="DivSObrazkem"></div><br><br>

<a id="odkazkestazeni" href="#" onmouseover="aktualizaceURL()" onclick="prepHref(this)" download=""><button>Stáhnout QR kód</button></a>


</main>

<script type="text/javascript">
var qrcode = new QRCode("qr-code", {
text: "",
width: 256,
height: 256,
colorDark : "#000000",
colorLight : "#ffffff",
correctLevel : QRCode.CorrectLevel.H
});

window.onload = function() {
  document.getElementById('qr-text').value = null;
}

function vygenerovatQr(text) {
qrcode.makeCode(text);
}

function vratitURL()
{
    return(document.getElementById('generovanyQRkod').src);
}

function aktualizaceURL()
{
    var odkaznakod=(document.getElementById('generovanyQRkod').src);
    var titulek = (document.getElementById('qr-text').value);

    console.log(odkaznakod);
    console.log(titulek);

    document.getElementById('DivSObrazkem').class=odkaznakod;
    document.getElementById('odkazkestazeni').download = titulek;
}

function prepHref(linkElement) {
    var myDiv = document.getElementById('DivSObrazkem');
    linkElement.href = myDiv.class;
}

</script>