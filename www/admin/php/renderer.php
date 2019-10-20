<?php

/*class used for rendering pages hence ist's called renderer*/
class renderer
{

  function __construct($pageName)
  {
      if(self::isUserLogged())
      {
        if(self::hasPermissions())
          $this->page = $pageName;
        else
          header("Location: /knihovna");
      }
      else{
        header("Location: /knihovna");
        exit;
      }


  }


  function render()
  {
    $this->renderHead();

    $this->renderHeader();
    $this->renderBody();
  }
  function renderHead()
  {
    $head =  '<!DOCTYPE html>
    <html lang="cs" dir="ltr">
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>';
    $head .= $this->returnJS("main");
    $head .= $this->returnJS($this->page);
    $head .= $this->returnCSS();
    $head .= '<title>'.$this->returnTitle().'</title>
    </head>';

    echo $head;
  }
  function renderHeader()
  {

  }
  function renderBody()
  {
    if($this->page != "login")
      include("pages/menu.php");



    include("pages/".$this->page.".php");
  }
  function returnTitle()
  {
    $array = ["index"=>"Domovská stránka",
              "login"=>"Přihlášení",
              "show"=>"Výpis uživatelů",
              "adduser"=>"Přidání uživatele/uživatelů"
              ];

    if(isset($array[$this->page]))
        return $array[$this->page];
    else
      return "404 - Stránka nenalezena";
  }
  function returnCSS()
  {
    $finalCss = $this->returnCSSHTMLTag("master");
    switch ($this->page) {
      default:
          return $finalCss . $this->returnCSSHTMLTag($this->page);
        break;
    }
  }
  private function returnCSSHTMLTag($cssName)
  {
    return '<link rel="stylesheet" href="css/'.$cssName.'.css">';
  }

  function returnJS($jmeno)
  {
    if(file_exists("js/" . $jmeno . ".js"))
    {
        return '<script src="js/' . $jmeno . '.js" charset="utf-8"></script>';
    }
    return "";
  }

  public static function isUserLogged()
  {

    //if(isset($_SESSION['email']) && !empty($_SESSION['email']))
    if(isset($_SESSION["user_ID"]))
      return true;
    else {
      session_destroy();
      return false;
    }
  }

  public static function hasPermissions()
  {
    include(__DIR__ . "/user.php");
    return User::Getaccount_typeStatic($_SESSION['username']) == 0;
  }

  function renderTest()
  {
    echo '<h1>'.$this->returnTitle().'</h1>';
  }
}


function returnFail($message = "")
{
  $return['success'] = false;
  $return['message'] = $message;
  echo json_encode($return);
  exit;
}
