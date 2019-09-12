function searchByName() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("searchbox");
  filter = input.value.toUpperCase();
  table = document.getElementById("booklisttable");
  tr = table.getElementsByTagName("tr");
  
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    td2 = tr[i].getElementsByTagName("td")[1];

    if (td || td2) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } 
      else if (td2.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = ""; 
      }
      else {
        tr[i].style.display = "none";
      }
    }
  }
}


window.onload = function availabilityIcon() {

var availability = document.getElementsByClassName("availabilityIcon");
var tooltip = document.getElementsByClassName("tooltiptext");

  var i;
  console.log(availability[1].innerHTML);

  for (i = 0; i < availability.length; i++) {
      
      if (availability[i].innerHTML == 0)
      {
        availability[i].innerHTML = "";
        availability[i].classList.add("available_icon");
        tooltip[i].innerHTML = "Dostupné";
      }
      else if (availability[i].innerHTML == 1)
      {
        availability[i].innerHTML = "";
        availability[i].classList.add("resreved_icon");
        tooltip[i].innerHTML = "Rezervováno";
      }
      else
      {
        availability[i].innerHTML = "";
        availability[i].classList.add("unavailable_icon");
        tooltip[i].innerHTML = "Nedostupné";
      }
  }
  
}