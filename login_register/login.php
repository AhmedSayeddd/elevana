<?php
session_start();
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';

    if (empty($email) || empty($password)) {
        die("Email and Password are required!");
    }

    $query = "SELECT * FROM users WHERE email = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($row = $result->fetch_assoc()) {
        if (password_verify($password, $row['password'])) {
            $_SESSION['user_id'] = $row['id'];
            header("Location: ../index.php"); // ✅ التوجيه للصفحة الرئيسية
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


<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <script src="https://kit.fontawesome.com/64d58efce2.js" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="login-style.css" />
  <title>Log In</title>
</head>

<body>
  <div class="container">
    <div class="forms-box" id="login">
      <div class="signin">
      <form action="login.php" method="POST" class="sign-in-form">
  <h2 class="title">Sign In</h2>
  <div class="input-field">
    <i class="fas fa-user"></i>
    <input type="email" name="email" placeholder="Email" required>
  </div>
  <div class="input-field">
    <i class="fas fa-lock"></i>
    <input type="password" name="password" placeholder="Password" required>
  </div>
  <input type="submit" value="Login" class="btn solid" />
</form>

      </div>
    </div>
    <div class="signup" >
      <div class="forms-box" id="rigester">
      <form action="register.php" method="POST" class="sign-up-form" id="sign-up-form">
  <h2 class="title">Sign Up</h2>
  <div class="input-field">
    <i class="fas fa-user"></i>
    <input type="text" name="firstname" placeholder="First Name" required>
  </div>
  <div class="input-field">
    <i class="fas fa-user"></i>
    <input type="text" name="secondname" placeholder="Second Name" required>
  </div>
  <div class="input-field">
    <i class="fas fa-user"></i>
    <input type="text" name="username" placeholder="User Name" required>
  </div>
  <div class="input-field">
    <i class="fas fa-envelope"></i>
    <input type="email" name="email" placeholder="Email" required>
  </div>
  <div class="input-field">
    <i class="fas fa-phone"></i>
    <input type="tel" name="phone" placeholder="Phone Number" required>
  </div>
  <div class="input-field">
    <i class="fas fa-lock"></i>
    <input type="password" name="password" placeholder="Password" required>
  </div>
  <div class="input-field">
    <i class="fas fa-lock"></i>
    <input type="password" name="confirm_password" placeholder="Confirm Password" required>
  </div>
  
  <input type="submit" class="btn" value="Sign up">
</form>

      </div>
    </div>
  

    <div class="panels-container">
      <div class="panel left-panel">
        <div class="content">
          <h3>You don't have an account ?</h3>
          <p>
            Create your new account with ease, and enjoy a unique, easy and enjoyable tourist experience.
          </p>
          <button class="btn transparent" id="sign-up-btn">
            Sign up
          </button>
        </div>
        <img src="img/login.png" class="image" alt="" />
      </div>
      <div class="panel right-panel">
        <div class="content">
          <h3>Welcome Back</h3>
          <p>
            Log in now and complete your journey.
          </p>
          <button class="btn transparent" id="sign-in-btn">
            Sign in
          </button>
        </div>
        <img src="img/log.svg" class="image" alt="" />
      </div>
    </div>
  </div>

  <script src="login-script.js"></script>
</body>

</html>
