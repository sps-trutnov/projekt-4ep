document.ready=getNotificationNumber();
        

function sbalit() {
    var x = document.getElementById("horninavigace");
    if (x.className === "horninav") {
        x.className += " responsive";
    } else {
        x.className = "horninav";
    }
}


function getNotificationNumber()
{
    var not_number = document.getElementById("number_div").innerHTML;

    //console.log(not_number);
    

    if(not_number !=0)
    {
        var not_bar = document.getElementById("notification_bar");

        not_bar.classList.add("enable_notification");
        document.getElementById("notification_number").innerHTML = not_number;
    }

}
