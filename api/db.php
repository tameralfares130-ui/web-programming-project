<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

$conn = new mysqli("localhost", "root", "", "web_homework");

if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed"]));
}

$conn->set_charset("utf8");
?>