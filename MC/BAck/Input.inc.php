<?php

if ($_SERVER['REQUEST_METHOD'] === "POST") {
    $username = $_POST["Name"];
    $message = $_POST["Message"];
    
    try {
        if ($message != "" && $username != "") {
            require_once "db.inc.php";

       $query = "INSERT INTO messages (Name,Message) VALUE (?,?);";
       $stmt = $pdo->prepare("$query");
       $stmt->execute([$username,$message]);
       $pdo = null;
       $stmt = null;
       die("Susceeded");
        }else {
            echo "Wrong input";
        }
       
    } catch (PDOException $e) {
       
       die("Quary Failed: " . $e->getMessage());
       
    }
}
else{
    header("Location: ../index.php");
}