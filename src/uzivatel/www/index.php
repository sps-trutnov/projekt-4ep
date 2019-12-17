
<?php 
    session_start();
    include "./base/base.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php echo $title ?></title>
    <?php include_utility($page); ?>
    <link rel="icon" type="image/png" href="./img/ikony/logo_small.png" />
    <link rel="stylesheet" type="text/css" href="./css/style.css">
    <link rel="stylesheet" type="text/css" href="./css/flaticon/flaticon.css">
</head>
<body>
    <div id="stranka">
        
        <?php include_head(); ?>
        
        <main>
            <?php include_page($page); ?> 
        </main>

        <?php include_footer(); ?>
        
    </div>
    <?php 
    
    ?>
</body>
</html>