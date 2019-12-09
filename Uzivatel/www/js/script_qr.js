document.ready=ziskatIDknihy();

function openQRCamera(node) {
    var reader = new FileReader();
    reader.onload = function() {
      node.value = "";
      qrcode.callback = function(res) {
        if(res instanceof Error) {
          alert("Nenalezen žádný QR kód. Opakujte nahrání.");
        } else {
          node.parentNode.previousElementSibling.value = res;
        }
      };
      qrcode.decode(reader.result);
    };
    reader.readAsDataURL(node.files[0]);
    

    ajaxDotaz(document.getElementById("obsahQRKodu").value);
    console.log(document.getElementById("obsahQRKodu").value);
  }
  
  function showQRIntro() {
    return confirm("Pomocí fotoaparátu načtěte QR kód.");
  }

  function zobrazitObsah()
  {
    console.log(document.getElementById("obsahQRKodu").value);
  }



  function ajaxDotaz(vstup)
  {
    var vstup = vstup;
    console.log(vstup);

    if (vstup.length == 0) {
        document.getElementById("obsahQRKodu").innerHTML = "";
        return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {

                var text = this.responseText;
                console.log(text);
            }

            if(text != '')
            {
                document.getElementById("vypis").innerHTML=text;
            }
            else
            {
                document.getElementById("vypis").innerHTML='';
            }
        }


        xmlhttp.open("POST", "./script/qr_ajax.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("js_data=" + vstup);
    }
  }


  function ziskatIDknihy()
  {
    var idKnihy = document.getElementById("idKnihy").value;
    var detailLink = "./?p=detail&id=" + idKnihy;

    document.getElementById('qr_form').action = detailLink;


    //console.log(idKnihy);
    console.log(detailLink);

  }