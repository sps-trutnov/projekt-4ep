document.addEventListener("DOMContentLoaded", function()
{
  document.getElementById("findUser").onkeydown = onTextBoxKeyDown;
  document.getElementById("addUser").onclick = OnAddUserClick;

  FindUsers("");


});

function OnAddUserClick()
{
  window.location = "?p=adduser";
}

function onTextBoxKeyDown()
{
  let length = this.value.length + 1;

  let lookFor = this.value;

  if(length > 2)
  {
    FindUsers(this.value);
  }else if(length == 1){
    FindUsers("");
  }
}


function FindUsers(lookFor)
{
  ajax('findUser.php',
    JSON.stringify({json: lookFor}),
    'onFindComplete'
    );
}


function onFindComplete(e)
{
  document.getElementById("load").style.display = "none";

  var table = document.getElementById("foundUsers").getElementsByTagName('tbody')[0];

  table.innerHTML ="";
  var json = JSON.parse(e);

  if(json.length == 0)
  {
    let newRow = table.insertRow(0);
    let newCell = newRow.insertCell(0);
    newCell.colSpan = "3";
    newCell.innerHTML = "Nic tu není";
    return;
  }

  /*
    {
    modify: <bool>,
    users: [
    {name: dsadas, dsadasdas},
    {name: dasdas, dsadadamjdksjd}
  ]
  }

  */



  for (var i = 0; i < json.users.length; i++) {
    let obj = json.users[i];

    var newRow = table.insertRow(0);
    newRow.className = "user";

    let nameCell = newRow.insertCell(0);
    let accTypeCell = newRow.insertCell(1);
    let operations = newRow.insertCell(2);

    nameCell.innerHTML = obj.firstname + " " + obj.lastname;
    accTypeCell.innerHTML = obj.accountType;


    // is root? (can change password, remove user)
    if(!json.modify)
      return;

    let removeButton = document.createElement("a");
    removeButton.href= "#";
    removeButton.innerHTML = "Odstranit";

    let changePasswordButton = document.createElement("a");
    changePasswordButton.href= "#";
    changePasswordButton.innerHTML = "Změna hesla";

    let changeRoleButton = document.createElement("a");
    changeRoleButton.href = "#";
    changeRoleButton.innerHTML = "Změna role";

    // messageBox element


    removeButton.onclick = function()
    {

      let elem = showMessageBox();
      let message = document.createElement("div");
      message.innerHTML = "Opravdu chcete odstranit uživatele: ";

      elem.appendChild(message);

      let nameDiv = document.createElement("h2");
      nameDiv.innerHTML = obj.firstname + " " + obj.lastname;

      elem.appendChild(nameDiv);

      let confirmButton = document.createElement("a");
      confirmButton.href = "#";
      confirmButton.innerHTML = "Odstranit";

      confirmButton.onclick = function(){
        ajax('removeUser.php', JSON.stringify({email: obj.email}), function(e)
        {
          let parsedjson = JSON.parse(e);

          if(parsedjson.success)
          {
            $(newRow).slideUp();

            hideMessageBox();
            document.getElementById("load").style.display = "none";
          }
        });
      }
      elem.appendChild(confirmButton);
    }
    changePasswordButton.onclick = function(){

      let elem = showMessageBox();
      let name = document.createElement("h2");
      name.innerHTML = obj.firstname + " " + obj.lastname;

      let textElem = document.createElement("input");
      textElem.type = "text";
      textElem.placeholder = "Nové heslo...";

      let confirmButton = document.createElement("a");
      confirmButton.href = "#";
      confirmButton.innerHTML = "Změnit heslo";

      confirmButton.onclick = function()
      {
        let elem = showMessageBox();
        newPass = textElem.value;
        ajax('changeUserPassword.php', JSON.stringify({email: obj.email, newpassword: newPass}), function(e)
        {
          let parsedjson = JSON.parse(e);
          if(parsedjson.success)
          {
            alert("Heslo bylo změněno!");
            hideMessageBox();
            document.getElementById("load").style.display = "none";
          }
        });
      }
      elem.appendChild(name);
      elem.appendChild(textElem);
      elem.appendChild(confirmButton);
    }

    changeRoleButton.onclick = function(){
      let elem = showMessageBox();
      let message = document.createElement("div");
      message.innerHTML = "Vyberte z následujících rolí: ";

      elem.appendChild(message);

      let myArray = ["Root","Knihovník","User"];
      let selectBox = generateSelectBox(myArray);

      let confirmButton = document.createElement("a");
      confirmButton.href = "#";
      confirmButton.innerHTML = "Změnit roli";

      confirmButton.onclick = function(){
        let roleIndex = selectBox.selectedIndex;

        ajax("changeUserRole.php", JSON.stringify({email: obj.email, newrole: roleIndex}), function(e)
        {
          let parsedjson = JSON.parse(e);

          if(parsedjson.success)
          {
            accTypeCell.innerHTML = parsedjson.role;
            hideMessageBox();
            document.getElementById("load").style.display = "none";
          }
        });
      }
      elem.appendChild(selectBox);
      elem.appendChild(confirmButton);
    }

    operations.appendChild(changePasswordButton);
    operations.appendChild(changeRoleButton);
    operations.appendChild(removeButton);
  }
}

function showMessageBox()
{
  if (typeof(document.getElementById("notification")) != 'undefined' && document.getElementById("notification") != null)
  {
    $(document.getElementById("notification")).remove();
  }
  let div = document.createElement("div");
  div.id = "notification";
  document.body.appendChild(div);
  div.style.display = "block";


  let closeButton = document.createElement("a");
  closeButton.href = "#";
  closeButton.className = "close";

  closeButton.onclick = hideMessageBox;

  div.appendChild(closeButton);


  let wrapper = document.createElement("div");
  div.appendChild(wrapper);

  return wrapper;
}

function hideMessageBox()
{
  $("#notification").remove();
}

function generateSelectBox(data)
{
  let selectBox = document.createElement("select");
  for (var i = 0; i < data.length; i++) {
    let elem = document.createElement("option");
    elem.innerHTML = data[i];
    selectBox.appendChild(elem);
    console.log(elem);
  }
  return selectBox;
}
