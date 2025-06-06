<?php
session_start();
session_unset(); // حذف جميع بيانات الجلسة
session_destroy(); // تدمير الجلسة بالكامل

// إعادة التوجيه للصفحة الرئيسية
header("Location: ../index.php");
exit;
