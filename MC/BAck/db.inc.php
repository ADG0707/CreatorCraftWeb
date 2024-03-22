
<?php
    $dsn = "mysql:localhost;port=3306;dbname=asql;";
    $dbusername = "root";
    $dbpassword = "TgX42&j!";
    try {
        $pdo = new PDO($dsn,$dbusername,$dbpassword);
        $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
        
    } catch (PDOException $e) {   
        echo "Failed: ", phpinfo().pdo_drivers();
    }