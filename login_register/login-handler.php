<?php
session_start();
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';

    if (empty($email) || empty($password)) {
        die("Email and Password are required!");
    }

    // استخدام Prepared Statement لأمان أعلى
    $query = "SELECT * FROM users WHERE email = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($row = $result->fetch_assoc()) {
        if (password_verify($password, $row['password'])) {
            // ✅ تسجيل الدخول الناجح
            $_SESSION['user_id'] = $row['id'];
            header("Location: ../profile/profile.php");
            exit;
        } else {
            echo "❌ Wrong password!";
        }
    } else {
        echo "❌ User not found!";
    }

    $stmt->close();
    $conn->close();
}
?>
