
<?php

    $dsn = "mysql:host=localhost;dbname=messages;";
    $dbusername = "root";
    $dbpassword = "TgX42&j!";
    
    try {
        $pdo = new PDO($dsn,$dbusername,$dbpassword);
        $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
       echo"Connection Failed: ". $e->getMessage();
        echo phpinfo();
    }


