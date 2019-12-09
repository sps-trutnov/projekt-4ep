window.onload=function(){
    borrowedIcon();
    renameStatus();
    dateCheck();
}

function borrowedIcon() {

var borrowed = document.getElementsByClassName("borrowedIcon");

    var i;
    console.log(borrowed[0].innerHTML);

    for (i = 0; i < borrowed.length; i++) {
        
        if (borrowed[i].innerHTML == 0)
        {
        borrowed[i].innerHTML = "";
        borrowed[i].classList.add("requested_icon");
        }
        else if (borrowed[i].innerHTML == 1)
        {
        borrowed[i].innerHTML = "";
        borrowed[i].classList.add("accepted_icon");
        }
        else
        {
        borrowed[i].innerHTML = "";
        borrowed[i].classList.add("borrowed_icon");
        }
    }

    
}




function renameStatus() {

    var status = document.getElementsByClassName("renameStatus");
    
        var j;
    
        for (j = 0; j < status.length; j++) {
            
            if (status[j].innerHTML == 0)
            {
            status[j].innerHTML = "Zažádáno";
            }
            else if (status[j].innerHTML == 1)
            {
            status[j].innerHTML = "Schváleno";
            }
            else
            {
            status[j].innerHTML = "Vypůjčeno";
            }
        }
    }



function dateCheck() {

    var status = document.getElementsByClassName("remaining_days");
    
        var j;
    
        for (j = 0; j < status.length; j++) {
            
            if (status[j].innerHTML.includes("-"))
            {
            status[j].innerHTML = "Po termínu!";
            }
            else if (status[j].innerHTML.includes("+"))
            {
            status[j].innerHTML = status[j].innerHTML.substring(1);
            }
        }
    }