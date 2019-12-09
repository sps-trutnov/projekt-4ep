 <?php if(pathinfo($_SERVER["SCRIPT_FILENAME"], PATHINFO_FILENAME) != "index") die("error, no dirrect access aproved"); ?>
    

<!--<div class="rating_cover">
    <div class="rating_container">
        <form action="" method="POST" class="rating">
        
        </form>
    </div>
</div>!-->



 <h1 class="stranka_nadpis">Detail knihy</h1>
<?php 
    $detail=getDetail();
?>


<div id="book_detail">
    <div class="detail_left">

        <h1 id="book_title"><div id="book_name"><?php echo($detail["nazev"]); ?> </div></h1>
        <h2>Autor knihy: <span id="book_author"><?php echo($detail["autor"]); ?></span></h2>

        <div id="book_description">
            <h3>Popis knihy</h3>
            
                <p class="description_text"><?php echo($detail["popis"]); ?></p>
            </div>


        <div class="book_rating">
            <h3>Hodnocení knihy</h3>
            <?php 
                echo get_rating();
            ?>
        </div>
        <div class="ratings_form_conta">
            <form action="./script/form/rate.php?user_id=<?php echo($_SESSION["user_ID"]."&book_id=".$detail["ID"]); ?>" class="ratings_form" method="POST">
                
                    <?php echo get_user_rating(); ?>
                
                <input class="detail_button" type="submit" value="Odeslat hodnocení">
            </form>
        </div>
    </div>

    
    
    <div class="detail_right">
        <h3>Žádost o zapůjčení</h3>
        <div class="request_input">
            <?php
                echo "<p>Počet žadatelů ve frontě: " . "<b>";
                echo get_numberOfBorrows();
                echo "</b></p>";
            ?>

            <form method="post" action="./script/form/detail.php" >
                <input type="hidden" name="request_userID" value="<?php echo($_SESSION["user_ID"]) ?>">
                <input type="hidden" name="request_bookID" value="<?php echo($detail["ID"]) ?>">
                <?php
                    echo "<input class='detail_button' type='submit' name='submit_request' value='";
                    $data = is_queued();
                    if($data[0]){ 
                        echo "Zažádat o zapůjčení'> ";
                    }
                    else{
                        if($data[1]) $text = "Zažádání bylo schváleno.";
                        else $text = "Čekání na schválení.";
                        echo "Zrušit žádost'> ".$text;
                    }
                    //echo is_queued();
                ?>
            </form>
        </div>

    

        <div class="book_details">
            <h3>Informace o knize</h3>
            <div id="book_detail_table">
                <div id='bookdetail'>
                    <table id='bookdetailtable'>
                        <!--<tr><th>ID knihy:</th><td><div id="detail_ISBN"><?php echo($detail["ID"]); ?></div></td></tr>
                        <tr><th>ISBN knihy:</th><td><div id="detail_ISBN"><?php echo($detail["ISBN"]); ?></div></td></tr>-->
                        <tr><th>Název:</th><td><div id="detail_nazev"><?php echo($detail["nazev"]); ?></div></td></tr>
                        <tr><th>Autor:</th><td><div id="detail_autor"><?php echo($detail["autor"]); ?></div></td></tr>
                        <tr><th>Počet stran:</th><td><div id="detail_autor"><?php echo($detail["pocet_stran"]); ?></div></td></tr>
                        <tr><th>Rok vydání knihy:</th><td><div id="detail_rok"><?php echo($detail["vydano"]); ?></div></td></tr>
                        <tr><th>Vhodná k maturitě:</th><td><div id="detail_autor"><?php echo($detail["je_maturitni"]); ?></div></td></tr>
                        <tr><th>Stav:</th><td><div id="detail_stav"><?php echo($detail["stav"]); ?></div></td></tr>
                        <tr><th>Umístění:</th><td><div id="detail_umisteni"><?php echo($detail["umisteni"]); ?></div></td></tr>
                        </table>
                    </div>

            </div>

    </div>

    </div>

</div>
