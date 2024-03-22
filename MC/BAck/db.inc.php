
<?php
    $dsn = "mysql:host=sql11.freesqldatabase.com;dbname=sql11691707;";
    $dbusername = "sql11691707";
    $dbpassword = "CEiHqdguHV";
    try {
        $pdo = new PDO($dsn,$dbusername,$dbpassword);
        $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
        
    } catch (PDOException $e) {   
        echo "Failed: ", $e;
    }