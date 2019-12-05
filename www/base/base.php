
<?php
if(isset($_SESSION["user_ID"])){
    if ($_SESSION["isAdmin"] == 1 && $_SESSION["isLibrarian"] == 0){
        header("Location: ./admin/");
           
    }
    else if($_SESSION["isLibrarian"] == 1 && $_SESSION["isAdmin"] == 0){
        header("Location: ./knihovnik/");
                        
    }
    else if ($_SESSION["isLibrarian"] == 1 && $_SESSION["isAdmin"] == 1)
    {
        header("Location: ./obojetny/");
    }
}

$page;
$pages = array(
    "home"=>"Hlavní stránka",
    "login"=>"Přihlášení",
    "register"=>"Registrace",
    "list"=>"Seznam knih",
    "detail"=>"Podrobnosti o knize",
    "404"=>"Stránka nebyla nalezena",
    "profile"=>"Profil",
    "myBooks"=>"Moje knihy",
    "qr_reader"=>"Čtečka QR",
    "qr_generator"=>"Generátor QR",
    "detail"=>"Detail knihy",
    "pass_change"=>"Změna hesla"
);

if(isset($_GET["a"])) {
    if(file_exists("./script/".$_GET["a"].".php"));
    header("Location: ./script/".$_GET["a"].".php");
}

if(!isset($_GET["p"]) || $_GET["p"] == ""){
    $page = "home";
}
else if(!isset($_SESSION["user_ID"])){
    $page="login";
}
else $page = $_GET["p"];

if(!isset($pages[$page])) header("Location: ./?p=404");

$title = $pages[$page];

function include_utility($page){
    if(file_exists("./css/".$page.".css")) echo '<link rel="stylesheet" href="'."./css/".$page.".css".'">';
    if(file_exists("./js/".$page.".js")){
        echo '<script src="'."./js/jquery-3.2.1.min.js".'"></script>';
        echo '<script src="'."./js/".$page.".js".'"></script>';
    } 
    if(file_exists("./script/".$page.".php")) include "./script/".$page.".php";

}
function include_page($page){
    if(file_exists("./pages/".$page.".php")){
        include "./pages/".$page.".php";
    }
    else header("Location: ./?p=404");
}
function include_head(){
    include "./base/head.php";
}
function include_footer(){
    include "./base/footer.php";
}
function isActive($href){
    global $page;
    if($page==$href) return "active";
}
function showProfileInfo(){
    $username = $_SESSION["name"];
    return $username;
}