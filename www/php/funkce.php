<?php
session_start();
require_once(__DIR__ . "/database.php");  
$db = new database();  

switch($_POST['action']){
    case "login":
        $name = (isset($_POST['jmeno']) ? $_POST['jmeno'] : null);
        $password = (isset($_POST['heslo']) ? $_POST['heslo'] : null);
              
        $hashedPassword = password_verify($password);

        $result = $db->query("SELECT * FROM users WHERE username = '$name' AND password = '$hashedPassword'");       
        $user = mysqli_fetch_assoc($result);

        if($user){
            $_SESSION['id'] = $user['id'];
            $_SESSION['username'] = $user['username'];
            echo("true"); 
        }
    break;

    case "logout":
        session_destroy();
    break;

    case "allBooks":
        $result = $db->query("SELECT books.name, CONCAT(authors.firstname,' ', authors.lastname) AS fullname FROM books INNER JOIN authors ON books.author_id = authors.id ORDER BY books.name");       
       
        $array = array();

        while($row = mysqli_fetch_assoc($result)) $array[] = $row;

        $post = array_values($array);

        echo json_encode($post, JSON_FORCE_OBJECT);
        //echo ;
    break;

    case "borrowedBooks":
        $result = $db->query("SELECT books.name, CONCAT(authors.firstname,' ' ,authors.lastname)AS fullname FROM books INNER JOIN authors ON books.author_id = authors.id ORDER BY books.name");       
    
        $books = mysqli_fetch_assoc($result);
        
        echo json_encode($books);
    break;

    case "returnAbleBook":
        $result = $db->query("SELECT name FROM books WHERE books.borrow_time IS NULL");       
    
        $books = mysqli_fetch_assoc($result);
        
        echo json_encode($books);
    break;

    case "returnAbleBook":
        $result = $db->query("SELECT name FROM books WHERE books.borrow_time IS NOT NULL");       
    
        $books = mysqli_fetch_assoc($result);
        
        echo json_encode($books);
    break;

    default:
        echo "Invalid action";
    break;

}

$db->close();