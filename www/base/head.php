<?php
    if(pathinfo($_SERVER["SCRIPT_FILENAME"], PATHINFO_FILENAME) != "index") die("error, no dirrect access aproved");
    if(isset($_SESSION["user_ID"])) $loggedIn = true;
    else $loggedIn = false;
?>
<header class="header">
 
   <!-- 
       <?php #if($loggedIn){  
        #echo '<a href="./" class="header_user"><span class="flaticon-user">&nbsp;&nbsp;'.showProfileInfo().'</span></a>';}?> 
    -->
    
</header>

        
<div class="horninav" id="horninavigace">
    <?php if($loggedIn) 
    { 
    ?>
       <a href="./" class="head">
        <h1 class="nadpis">
            <span id="logo"></span>
            Knihovna SPŠ Trutnov
        </h1>
    </a>
    <a href="./" class="<?php echo isActive("home") ?> ; hover"><span class="flaticon-home"></span>Domů</a>
    <a href="./?p=list" class="<?php echo isActive("list") ?> ; hover"><span class="flaticon-file"></span>Seznam knih</a>
    <a href="./?p=qr_reader" class="<?php echo isActive("qr") ?> ; hover"><span class="flaticon-qr-code"></span>QR kódy</a>
    
    <a href="./?p=myBooks" class="<?php echo isActive("myBooks") ?> ; hover"><span class="flaticon-bookmark"></span>Moje knihy<div id="notification_bar" class=""><div id="notification_number"></div></div></a>
    
 <!--   <a id="navigace-right" href="./?a=logout" class="<?php # echo isActive("logout") ?>  ; hover"><span class="flaticon-exit"></span>Odhlásit</a> -->
 <a href=# style='display:none'>
        <?php if($loggedIn){ 
            

            echo (' <div class="dropdown" id="horninavigace-log">
                        <a href="./" class="header_user"><span class="flaticon-user"></span>'.showProfileInfo().'</a>
                        <div class="dropdown-content">
                            <a href="./?p=pass_change"><div><span class="flaticon-pass"></span> Změna hesla </div></a><br>
                            <a href="./?a=logout"><div><span class="flaticon-exit"></span> Odhlásit se</div></a>
                        </div>
                    </div>');

        }?>
    </a>
    

    <a href="javascript:void(0);" class="icon" onclick="sbalit()">&#x2630;</a>

    <?php 
    } 
    ?>        
</div>





<?php 

include "./base/db.php";

if($loggedIn) {  
        $dotaz = $db->prepare(" SELECT book_requests.ID,book_requests.user_ID,book_requests.book_ID,book_requests.confirmed,book_requests.request_added
                                FROM book_requests
                                WHERE book_requests.user_ID = ?");
                    
        $dotaz->execute(array($_SESSION["user_ID"]));

        if($dotaz->rowCount() == 0)
        {
            $_POST['not_number'] = 0;
            echo "<div id='number_div'>" . $_POST['not_number'] . "</div>";
        }
        else
        {
            $_POST['not_number'] = $dotaz->rowCount();
            echo "<div id='number_div'>" . $_POST['not_number'] . "</div>";
        }
    }
?>


 <script src="./js/head.js"></script> 
