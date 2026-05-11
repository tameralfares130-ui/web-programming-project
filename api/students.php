<?php
include "db.php";

$method = $_SERVER["REQUEST_METHOD"];

if ($method === "GET") {
    $result = $conn->query("SELECT * FROM students LIMIT 30");
    $students = [];

    while ($row = $result->fetch_assoc()) {
        $students[] = $row;
    }

    echo json_encode($students);
}

if ($method === "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    $sname = $data["sname"];
    $class = $data["class"];
    $boy = $data["boy"];

    $stmt = $conn->prepare("INSERT INTO students (sname, class, boy) VALUES (?, ?, ?)");
    $stmt->bind_param("ssi", $sname, $class, $boy);
    $stmt->execute();

    echo json_encode(["message" => "Student added"]);
}

if ($method === "PUT") {
    $data = json_decode(file_get_contents("php://input"), true);

    $id = $data["id"];
    $sname = $data["sname"];
    $class = $data["class"];
    $boy = $data["boy"];

    $stmt = $conn->prepare("UPDATE students SET sname=?, class=?, boy=? WHERE id=?");
    $stmt->bind_param("ssii", $sname, $class, $boy, $id);
    $stmt->execute();

    echo json_encode(["message" => "Student updated"]);
}

if ($method === "DELETE") {
    $data = json_decode(file_get_contents("php://input"), true);

    $id = $data["id"];

    $stmt = $conn->prepare("DELETE FROM students WHERE id=?");
    $stmt->bind_param("i", $id);
    $stmt->execute();

    echo json_encode(["message" => "Student deleted"]);
}
?>