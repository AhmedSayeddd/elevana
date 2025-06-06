<?php
$servername = "localhost";
$username = "root";
$password = ""; // لو فيه باسورد للـ root اكتبه هنا
$database = "my_website";

// إنشاء الاتصال
$conn = mysqli_connect($servername, $username, $password, $database);

// التحقق من الاتصال
if (!$conn) {
    die("❌ Connection failed: " . mysqli_connect_error());
}

// لو محتاج تعرض رسالة اتصال ناجح وقت التجريب
// echo "✅ Connected to database!";
?>
