document.addEventListener("DOMContentLoaded", function()
{
  document.getElementById("addUsersFromFile").onclick = AddUsersFromFile;
  document.getElementById("addUserForm").onclick = AddSingleUser;
});

function AddUsersFromFile(){
  let fileElement =document.getElementById("file");


  if(fileElement.files.length == 0)
  {

    console.log("Prosím zvolte soubor");
    return;
  }

  var formData = new FormData();
  formData.append('usersFile', fileElement.files[0]);

  console.log(formData);

  var response = $.ajax({
    url: 'php/scripts/addusers.php',
    type: 'POST',
    processData: false,
    contentType: false,
    data: formData
  });

  response.done(function(e)
  {
    let parsed = JSON.parse(e);
    if(parsed.success)
      alert(parsed.message);
  });
}

function AddSingleUser()
{
  let heslo = document.getElementById('heslo').value;

  if(heslo.trim().length == 0)
    heslo = null;


  let data = [
    document.getElementById('jmeno').value,
    document.getElementById('prijmeni').value,
    document.getElementById('username').value,
    heslo,
  ]



  ajax("addUser.php", JSON.stringify(data), function(e){
    let parsed = JSON.parse(e);
    alert(parsed.message);
  });
}
