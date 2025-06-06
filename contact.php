<?php
session_start();
include 'login_register/db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $message = $_POST['message'] ?? '';
    $user_id = $_SESSION['user_id'] ?? null;

    if (empty($name) || empty($email) || empty($message)) {
        echo "<script>alert('❌ Please fill all fields.'); window.history.back();</script>";
        exit;
    }

    $stmt = $conn->prepare("INSERT INTO contact_messages (user_id, name, email, message) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("isss", $user_id, $name, $email, $message);

    if ($stmt->execute()) {
        echo "<script>alert('✅ Message sent successfully!'); window.history.back();</script>";
    } else {
        echo "<script>alert('❌ Error: " . $stmt->error . "'); window.history.back();</script>";
    }

    $stmt->close();
    $conn->close();
}
?>
