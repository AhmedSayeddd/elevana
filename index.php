<?php if (isset($_GET['contact']) && $_GET['contact'] === 'success'): ?>
  <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
    ✅ Message sent successfully!
  </div>
<?php endif; ?>
<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Elevana</title>

    <!-- RGB -->
     <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <!-- swiper -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

    <!-- AOS (Animate On Scroll) -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" />

    <!-- style css -->
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="user-profile.css">


    <!-- google font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet">
</head>

<body id="top">
    <!-- HEADER -->
    <header class="header" data-header>
        <div class="overlay" data-overlay></div>
        <div class="header-top">
            <div class="container">
                <a href="tel:+01123456790" class="helpline-box">
                    <div class="icon-box">
                        <ion-icon name="call-outline"></ion-icon>
                    </div>
                    <div class="wrapper">
                        <p class="helpline-title">For Further Inquires :</p>
                        <p class="helpline-number">+20 115 7865 922</p>
                    </div>
                </a>
                <a href="#" class="logo">
                   <h1 class="logo-text">Elevana</h1>
                </a>
                    <button class="nav-open-btn" aria-label="Open Menu" data-nav-open-btn>
                        <ion-icon name="menu-outline"></ion-icon>
                    </button>
                </div>
            </div>
        </div>
        <div class="header-bottom">
            <div class="container">
                <ul class="social-list">
                    <li>
                        <a href="https://www.facebook.com/share/1ZFWVeAeHx/" class="social-link">
                            <ion-icon name="logo-facebook"></ion-icon>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.tiktok.com/@elevana02?_t=ZS-8wsHD6684WO&_r=1" class="social-link">
                            <ion-icon name="logo-tiktok"></ion-icon>
                        </a>
                    </li>
                    <li>
                        <a href="https://whatsapp.com/channel/0029VbB0AyG0rGiEAZCztW35" class="social-link">
                            <ion-icon name="logo-whatsapp"></ion-icon>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/elevana.egypt/" class="social-link">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                    </li>
                      <li>
                        <a href="https://www.linkedin.com/company/elevana-recruitment/?viewAsMember=true" class="social-link">
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </a>
                    </li>
                </ul>
                <nav class="navbar" data-navbar>
                    <div class="navbar-top">
                        <a href="#" class="logo">
                            <img src="img/logo.png" alt="logo">
                        </a>
                        <button class="nav-close-btn" aria-label="Close Menu" data-nav-close-btn>
                            <ion-icon name="close-outline"></ion-icon>
                        </button>
                    </div>
                    <ul class="navbar-list">
                        <li>
                            <a href="#home" class="navbar-link" data-nav-link>home</a>
                        </li>
                        <li>
                            <a href="#about us" class="navbar-link" data-nav-link>About Us</a>
                        </li>
                        <li>
                            <a href="#compainies" class="navbar-link" data-nav-link>Compainies</a>
                        </li>
                        <li>
                            <a href="#contact us" class="navbar-link" data-nav-link>Contact Us</a>
                        </li>
                        <li>
                          <?php if (isset($_SESSION['user_id'])): ?>
    <a href="login_register/logout.php">Logout</a>
            <?php else: ?>
    <a href="login_register/login.php">Login</a>
      <?php endif; ?>

                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
            <!-- HERO -->
            <section class="hero" id="home">
                <div class="container">
                    <h2 class="h1 hero-title">Elevana</h2>
                    <p class="hero-text">
                      At Agency, we're available for you 24/7 — your success is our mission.
                       Whether you're just starting out or looking for your next big opportunity,
                        we’re here to guide you every step of the way until you get hired.
                         We currently have exciting job offers in Call Centers and the Real Estate field
                         , and we're committed to helping you find the right fit for your skills and goals.
                    </p>
                </div>
            </section>

     <!-- About Us -->
  <section class="w-full py-16 px-6" id="about us">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-12">About Us</h2>
      <div class="grid md:grid-cols-2 gap-8 items-center">
        
        <!-- Glowing Card with Image -->
        <div class="glow-border">
          <div class="inner">
            <img src="pic/agynce.jpeg" alt="Agynce Elevana" class="w-full h-auto object-cover" />
          </div>
        </div>

        <!-- Text Content -->
        <div>
          <h3 class="text-3xl font-semibold mb-4">Welcome to Agency Elevana</h3>
          <p class="text-lg leading-relaxed">
            Agency Elevana is your trusted partner in building careers. We're available 24/7 to support you from the moment you apply until you get hired. 
            Whether you're aiming for a role in a Call Center or the Real Estate field, we have exciting job offers tailored to your potential.
            Join hundreds of successful candidates who found their path with us — your journey starts here.
          </p>
        </div>
      </div>
    </div>
  </section>
  <hr>
  <!-- Companies -->
<section class="bg-white py-10" id="compainies">
  <div class="max-w-7xl mx-auto px-6">
    <h2 class="text-3xl font-bold text-center text-black mb-8">Our Partners</h2>
  </div>

  <!-- Moving Company Logos -->
   <div class="overflow-hidden relative group">
      <div class="logo-strip flex space-x-10">
      <!-- Repeat your company logos here -->
      <img style="width:8%; height:8%;"src="pic/o4u.png" alt="Company 2" class="h-16 inline-block" />
      <img style="width:8%; height:8%;" src="pic/rez.jpeg" alt="Company 1" class="h-16 inline-block" />
      <img style="width:8%; height:8%;"src="pic/ak.jpg" alt="Company 3" class="h-16 inline-block" />
      <img style="width:8%; height:8%;"src="pic/tp.png" alt="Company 5" class="h-16 inline-block" />
      <img style="width:8%; height:8%;"     src="pic/hangupsolutions_logo.jpeg" alt="Company 4" class="h-16 inline-block" />
      <img style="width:8%; height:8%;"src="pic/volume.jpeg" alt="Company 6" class="h-16 inline-block" />
      <!-- Repeat again for smooth looping -->
      <img style="width:8%;  height:8%;"src="pic/o4u.png" alt="Company 2" class="h-16 inline-block" />
      <img style="width:8%; height:8%;"src="pic/rez.jpeg" alt="Company 1" class="h-16 inline-block" />
      <img style="width:8%; height:8%;"src="pic/ak.jpg" alt="Company 3" class="h-16 inline-block" />
      <img style="width:8%; height:8%;"src="pic/hangupsolutions_logo.jpeg" alt="Company 4" class="h-16 inline-block" />
      <img style="width:8%; height:8%;"src="pic/tp.png" alt="Company 5" class="h-16 inline-block" />
      <img style="width:8%; height:8%;"src="pic/volume.jpeg" alt="Company 6" class="h-16 inline-block" />
    </div>
  </div>
    <hr>
    <!-- contact us -->
    <section class="bg-white py-16 px-6" id="contact us">
  <div class="max-w-7xl mx-auto">
    <h2 class="text-4xl font-bold text-center text-black mb-12">Contact Us</h2>

    <div class="grid md:grid-cols-2 gap-12 items-start">
      <!-- Left Side: Contact Info -->
      <div>
        <h3 class="text-2xl font-semibold text-black mb-6">Get in Touch</h3>
        
        <div class="flex items-center mb-4">
          <svg class="w-6 h-6 text-red-500 mr-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 4h16v2H4zm0 6h16v2H4zm0 6h10v2H4z"/>
          </svg>
          <p class="text-black">elevana.egypt@gmail.com</p>
        </div>

        <div class="flex items-center mb-4">
          <svg class="w-6 h-6 text-green-500 mr-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.72 11.72 0 003.69.59 1 1 0 011 1V20a1 1 0 01-1 1C7.16 21 3 16.84 3 11a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.69 1 1 0 01-.21 1.11l-2.2 2.2z"/>
          </svg>
          <p class="text-black">+201157865922</p>
        </div>
      </div>

      <!-- Right Side: Contact Form -->
      <form action="contact.php" method="POST" class="space-y-6 bg-gray-50 p-6 rounded-lg shadow-md">
  <div>
    <label class="block text-sm font-medium text-black mb-1">Your Name</label>
    <input type="text" name="name" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400" placeholder="John Doe" required>
  </div>
  <div>
    <label class="block text-sm font-medium text-black mb-1">Your Email</label>
    <input type="email" name="email" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400" placeholder="you@example.com" required>
  </div>
  <div>
    <label class="block text-sm font-medium text-black mb-1">Message</label>
    <textarea name="message" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400" rows="4" placeholder="Write your message..." required></textarea>
  </div>
  <button type="submit" class="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">Send Message</button>

  <p class="text-sm text-gray-600 pt-4">We will get back to you as soon as possible.</p>
</form>
    </div>
  </div>
</section>

    <!-- FOOTER -->
    <footer class="footer" id="footer">
        <div class="footer-copyright">
            <p class="copyright">
                &copy; 2025 Elevana
            </p>
        </div>
    </footer>

    <!-- GO TO TOP -->
    <a href="#top" class="go-top" data-go-top>
        <ion-icon name="chevron-up-outline"></ion-icon>
    </a>

    <!-- swiper js -->
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

    <!-- AOS (Animate On Scroll) js -->
    <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
    <script> AOS.init(); </script>

    <!-- script js -->
    <script src="js/script.js"></script>

    <!-- ionicon link -->
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
</body>

</html>