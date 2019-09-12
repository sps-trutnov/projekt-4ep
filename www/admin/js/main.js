
function ajax(url,json, processFunction)
{
    var http = new XMLHttpRequest();

    var params = 'json='+json;
    http.open('POST', "php/scripts/"+url, true);

    let loadElem = document.getElementById('load');
    if(typeof(loadElem) != 'undefined' && loadElem != null)
      document.getElementById('load').style.display = "block";
    //Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    http.onreadystatechange = function() {
      if(http.readyState == 4 && http.status == 200)
      {

        if(typeof(processFunction) == "function")
        {
          processFunction(this.responseText);
        }else{
          window[processFunction](this.responseText);
        }
      }
    }
    http.send(params);
}
function login()
{

    var userLoginValues = { name : document.getElementById('name').value,
                            password : document.getElementById('password').value};
    if(userLoginValues.name == "doot")
    {
      doot();

    }

    if(userLoginValues.name !== "" && userLoginValues.password !== "")
        ajax('loginUser.php', JSON.stringify(userLoginValues), 'processLogin');
    else if(userLoginValues.name != "doot")
        alert("Jedno, nebo více polí není vyplněno!");
}
function processLogin(json)
{
console.log(json);
  if(json =='login failed')
    alert("Something went horribly wrong");
  if(json == 'empty values')
    alert("Jedno, nebo více polí není vyplněno!");
  if(json == "login succesfull")
    window.location.href = "?p=index";
  if(json == 'wrong password')
    alert("Špatné přihlašovací jméno, nebo heslo!");
  if(json == 'user not found')
    alert("Uživatel s těmito údaji neexistuje");
  if(json == 'unauthorized access')
    alert("Neautorizovaný přístup!");

    document.getElementById('load').style.display = "none";
}
function doot()
{
  console.log("doot 1");

  var div = document.createElement("div");
  div.style.width = "100vw";
  div.style.height = "100vh";
  div.style.position = "absolute";
  div.style.top = 0;
  div.style.zIndex = -2;
  div.innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/T2O7gAjeLOA?autoplay=1&showinfo=0&controls=0&start=10" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';

  document.getElementById("body").appendChild(div);
}

/**/
