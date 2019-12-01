function renderBookQR(elementId, bookId, width = $(".card")[0].clientWidth){
    var qrcode = new QRCode(elementId, {
        text: window.location.protocol + window.location.hostname + "/?controller=Book&action=Detail&id=" + bookId,
        width: width,
        height: width,
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

function printBookQRs(books, elementId, placeId = $("#placeId")[0].value) 
{
    let contentsElement = $("#"+elementId);
    var originalContents = contentsElement.html();

    for(let i = 0; i < books.length; i++){
        if(placeId && books[i][2] != placeId)
            continue;
        let element = $.parseHTML("<div id='qr-code-print'>" + books[i][1] + "<div id='" + books[i][0] + "'></div>" + "<span class='bookId'>" + books[i][0] + "</span>  " + "</div>");
        contentsElement.append(element);
        renderBookQR(document.getElementById(books[i][0]), books[i][0], 384);
    }

    setTimeout(function(){
        window.print();
        window.onafterprint = function() { contentsElement.html(originalContents); };
    }, 2000);
}