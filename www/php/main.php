<?php
include_once("renderer.php");
function renderPage()
{
  if(isset($_GET['p']) && !empty($_GET['p']))
     $renderer = new renderer($_GET['p']);
   else
      $renderer = new renderer("index");

  $renderer->render();

}
?>
