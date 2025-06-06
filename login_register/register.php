<?php
session_start();
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstname = $_POST['firstname'];
    $secondname = $_POST['secondname'];
    $username = $_POST['username'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];

    if ($password !== $confirm_password) {
        die("❌ Passwords do not match.");
    }

    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    $stmt = $conn->prepare("INSERT INTO users (first_name, second_name, username, email, phone, password) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssss", $firstname, $secondname, $username, $email, $phone, $hashed_password);

    if ($stmt->execute()) {
        $_SESSION['user_id'] = $stmt->insert_id; // تسجيل دخول تلقائي
        header("Location: ../index.php"); // التوجيه للصفحة الرئيسية
        exit;
    } else {
        echo "❌ Registration failed: " . $conn->error;
    }

    $stmt->close();
    $conn->close();
}
?>

