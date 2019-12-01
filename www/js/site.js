function renderBookQR(elementId, bookId){
    var qrcode = new QRCode(elementId, {
        text: window.location.protocol + window.location.hostname + "/?controller=Book&action=Detail&id=" + bookId,
        width: $(".card")[0].clientWidth,
        height: $(".card")[0].clientWidth,
        correctLevel : QRCode.CorrectLevel.L,
        useSVG: true
    });
}

function printBookQR(elementId, bookId, bookName) 
{
    var printContents = document.getElementById(elementId).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = "<div id='qr-code-print' style='margin-left: auto; margin-right: auto; width: auto; height: auto;'>" + bookName + printContents + "<span class='bookId'>" + bookId + "</span>  " + "</div>";

    window.print();

    document.body.innerHTML = originalContents;
}