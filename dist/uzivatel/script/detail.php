<?php if(pathinfo($_SERVER["SCRIPT_FILENAME"], PATHINFO_FILENAME) != "index") die("error, no dirrect access aproved"); ?>





<?php  
function 
getDetail(){
    //if(isset($_POST['prejitnadetail']))
    {
        include "./base/db.php";
        $IDKnihy = $_GET["id"];

        $dotaz = $db->prepare(" SELECT books.id,books.ISBN,books.name,books.year,books.description,books.page_count,books.maturita_ready,authors.firstname,authors.lastname,conditions.condition,places.place 
                                FROM books 
                                INNER JOIN authors on books.author_id=authors.id 
                                INNER JOIN conditions on books.condition_id=conditions.id 
                                INNER JOIN places on books.place_id=places.id 
                                WHERE books.ID = ?"); 
        $dotaz->execute(array($IDKnihy));

        if($dotaz->rowCount() == 0)
        {
            echo("Nenalezena žádná kniha v databázi.");
            echo $IDKnihy;
        }
        else
        {
            $radek = $dotaz->fetch();

            $ISBN_knihy = $radek["ISBN"];
            $nazev_knihy = $radek["name"];
            $autor_knihy = $radek["firstname"]." ".$radek["lastname"];
            $rok_knihy = $radek["year"];
            $stav_knihy = $radek["condition"];
            $umisteni_knihy = $radek["place"];
            $popis = $radek["description"];
            $pocet_stran = $radek["page_count"];
            $ID = $radek["id"];
            $rok_knihy = $radek["year"];
            $je_maturitni = $radek["maturita_ready"];
            
            if($je_maturitni == 1)$je_maturitni="Ano";
            else $je_maturitni="Ne";


            
            return ["ISBN"=>$ISBN_knihy,"nazev"=>$nazev_knihy,"autor"=>$autor_knihy,"vydano"=>$rok_knihy,"stav"=>$stav_knihy,"pocet_stran"=>$pocet_stran,"je_maturitni"=>$je_maturitni,"umisteni"=>$umisteni_knihy,"popis"=>$popis,"ID"=>$ID];
        }  
    }
    //else header("Location: ./");
}

function get_rating(){
    include "./base/db.php";
    $IDKnihy = $_GET["id"];
    $stmt=$db->prepare("SELECT COUNT(ID) AS rating_count,AVG(rating) AS rating_avg FROM ratings WHERE book_ID = ?");

    $stmt->execute(array($IDKnihy));
    $rating_query = $stmt->fetch();
    $ratings_mid = number_format((float)$rating_query["rating_avg"], 2, '.', '');
    $rating = "";

    $ratings_mid_temp = $ratings_mid;
    for($i=0;$i<5;$i++){
        if($ratings_mid_temp>=1){
            $rating .= '<span class="star full">&starf;</span>';
            $ratings_mid_temp--;
        }
        else if($ratings_mid_temp>=0.75){
            $rating .=  '<span class="star three-four">&starf;</span>';
            $ratings_mid_temp-= 0.75;
        }
        else if($ratings_mid_temp>=0.5){
            $rating .=  '<span class="star half">&starf;</span>';
            $ratings_mid_temp-=0.5;
        }
        else if($ratings_mid_temp>=0.25){
            $rating .=  '<span class="star one-four">&starf;</span>';
            $ratings_mid_temp-=0.25;
        }
        else 
            $rating .=  '<span class="star">&starf;</span>';
    }

    $rating .= '<div id="rating_number">Průměrné hodnocení: '.$ratings_mid.', Celkový počet hodnocení: '.$rating_query["rating_count"].'</div>';

    return  $rating;
}

function get_user_rating(){
    include "./base/db.php";
    $IDKnihy = $_GET["id"];
    $stmt=$db->prepare("SELECT AVG(rating) AS rating_avg FROM ratings WHERE book_ID = ? AND user_ID=?");

    $stmt->execute(array($IDKnihy,$_SESSION["user_ID"]));
    $rating_query = $stmt->fetch();
    $ratings_mid = number_format((float)$rating_query["rating_avg"], 1, '.', '');
    $ratings_mid_temp = $ratings_mid;
    /*<span class="star ">★</span>
    <span class="star half">★</span>
    <span class="star ">★</span>
    <span class="star half">★</span>
    <span class="star ">★</span>
    <span class="star half">★</span>
    <span class="star ">★</span>
    <span class="star half">★</span>
    <span class="star ">★</span>
    <span class="star half">★</span>
    <input type="hidden" name="rating" class="rating_num">*/

    echo '<div class="stars">';

    for($i=0;$i<5;$i++){
        if($ratings_mid_temp>=1){
            echo('
            <span class="star selected">★</span>
            <span class="star half selected">★</span>'
            );
            $ratings_mid_temp-=1;
        }
        elseif($ratings_mid_temp==0.5){
            echo('
            <span class="star selected">★</span>
            <span class="star half">★</span>'
            );
            $ratings_mid_temp-=0.5;
        }
        else{
            echo('
            <span class="star ">★</span>
            <span class="star half">★</span>'
            );
        }
    }

    echo '<input type="hidden" name="rating" class="rating_num" value="'.$ratings_mid.'"></div>';
    echo '<label class="rating_display">Vaše hodnocení: <span>'.$ratings_mid.'</span></label><br>';
}


function get_numberOfBorrows(){
    include "./base/db.php";
    $user_ID=$_SESSION["user_ID"];
    $IDKnihy = $_GET["id"];

    $stmt=$db->prepare("SELECT COUNT(user_ID) AS requests_count FROM book_requests WHERE user_ID <> $user_ID AND book_ID = ?");

    $stmt->execute(array($IDKnihy));


    $requests_query = $stmt->fetch();
    $requests_number = $requests_query["requests_count"];

    return  $requests_number;
}



function is_queued(){

    include "./base/db.php";

    $user_ID=$_SESSION["user_ID"];

    $book_ID = $_GET["id"];

    $stmt = $db->prepare("SELECT ID,confirmed FROM book_requests WHERE user_ID=? AND book_ID=?");
    $stmt->execute(array($user_ID,$book_ID));

    if($stmt->rowCount()==0) return array(true);
    else return array(false,$stmt->fetch()["confirmed"]);
    //return $stmt->rowCount()." ".$book_ID." ".$user_ID;
}
?>
