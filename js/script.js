"use strict"; // فرض وضع "strict mode" لتجنب الأخطاء الشائعة في JavaScript

// معالجة الفيديو الترحيبي - Welcome Video Handling
document.addEventListener("DOMContentLoaded", function () {
  // Initialize theme from localStorage or system preference
  initTheme();

  // تحديد عناصر الفيديو والتراكب
  const videoOverlay = document.getElementById("videoOverlay");
  const welcomeVideo = document.getElementById("welcomeVideo");

  // تأكد من أن الفيديو جاهز للتشغيل قبل عرضه
  if (welcomeVideo) {
    welcomeVideo.addEventListener("canplaythrough", function () {
      // إظهار التراكب بعد تحميل الفيديو
      videoOverlay.style.display = "flex";
    });

    // عند انتهاء الفيديو، قم بإخفاء التراكب بتأثير التلاشي
    welcomeVideo.addEventListener("ended", function () {
      videoOverlay.classList.add("fade-out");

      // بعد اكتمال تأثير التلاشي، قم بإزالة التراكب من العرض
      setTimeout(() => {
        videoOverlay.style.display = "none";
      }, 1500); // يجب أن تتطابق مع مدة الانتقال في CSS
    });

    // إضافة زر إغلاق للفيديو
    const closeButton = document.createElement("button");
    closeButton.className = "video-close-btn";
    closeButton.innerHTML = "×";
    closeButton.title = "إغلاق الفيديو";
    videoOverlay.appendChild(closeButton);

    // معالجة حدث النقر على زر الإغلاق
    closeButton.addEventListener("click", function () {
      // إيقاف الفيديو
      welcomeVideo.pause();
      // إخفاء التراكب
      videoOverlay.classList.add("fade-out");
      setTimeout(() => {
        videoOverlay.style.display = "none";
      }, 1500);
    });

    // آلية احتياطية: إذا لم يتم تشغيل الفيديو أو واجه مشاكل، قم بإخفائه بعد 10 ثوانٍ
    setTimeout(() => {
      if (!videoOverlay.classList.contains("fade-out")) {
        videoOverlay.classList.add("fade-out");
        setTimeout(() => {
          videoOverlay.style.display = "none";
        }, 1500);
      }
    }, 10000);
  }

  // Dark mode toggle functionality
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      // Toggle theme
      if (document.documentElement.getAttribute("data-theme") === "dark") {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
      } else {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      }
    });
  }
});

// Initialize theme based on localStorage or system preference
function initTheme() {
  // Check if user has previously selected a theme
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    // Apply saved theme
    document.documentElement.setAttribute("data-theme", savedTheme);
  } else {
    // Check system preference
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (prefersDarkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }
}

// Social Sharing Functionality
document.addEventListener("DOMContentLoaded", function () {
  // Initialize social sharing
  initSocialSharing();
});

function initSocialSharing() {
  // Get all share options
  const shareOptions = document.querySelectorAll(".share-option");

  // Add click event to each share option
  shareOptions.forEach((option) => {
    option.addEventListener("click", function (e) {
      e.preventDefault();

      // Get package info
      const packageCard = this.closest(".package-card");
      const packageTitle = packageCard.querySelector(".card-title").textContent;
      const packagePrice = packageCard.querySelector(".price").textContent;
      const shareText = `Check out this amazing travel package: ${packageTitle} - ${packagePrice}`;
      const shareUrl = window.location.href;

      // Get platform
      const platform = this.getAttribute("data-platform");

      // Share based on platform
      switch (platform) {
        case "facebook":
          window.open(
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              shareUrl
            )}&quote=${encodeURIComponent(shareText)}`,
            "_blank"
          );
          break;
        case "twitter":
          window.open(
            `https://twitter.com/intent/tweet?text=${encodeURIComponent(
              shareText
            )}&url=${encodeURIComponent(shareUrl)}`,
            "_blank"
          );
          break;
        case "whatsapp":
          window.open(
            `https://wa.me/?text=${encodeURIComponent(
              shareText + " " + shareUrl
            )}`,
            "_blank"
          );
          break;
      }
    });
  });
}

//navbar toggle (فتح/إغلاق القائمة الجانبية)

// تحديد العناصر من الصفحة باستخدام data attributes
const overlay = document.querySelector("[data-overlay]"); // عنصر التعتيم الخلفي
const navOpenBtn = document.querySelector("[data-nav-open-btn]"); // زر فتح القائمة
const navbar = document.querySelector("[data-navbar]"); // عنصر القائمة الجانبية
const navCloseBtn = document.querySelector("[data-nav-close-btn]"); // زر إغلاق القائمة
const navLinks = document.querySelectorAll("[data-nav-link]"); // جميع روابط القائمة

// إنشاء مصفوفة تحتوي على العناصر التي عند النقر عليها يتم تبديل حالة القائمة
const navElemArr = [navOpenBtn, navCloseBtn, overlay];

// دالة لإضافة حدث النقر لكل عنصر في المصفوفة
const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    // التكرار على جميع العناصر
    elem[i].addEventListener("click", function () {
      // إضافة حدث النقر
      navbar.classList.toggle("active"); // تبديل كلاس "active" للقائمة
      overlay.classList.toggle("active"); // تبديل كلاس "active" للـ overlay
    });
  }
};

// استدعاء الدالة لتمكين التفاعل مع القائمة الجانبية
navToggleEvent(navElemArr);
navToggleEvent(navLinks); // إغلاق القائمة عند النقر على أي رابط داخلها

//header sticky & go to top (إضافة تأثير التثبيت للهيدر والانتقال للأعلى)

const header = document.querySelector("[data-header]"); // عنصر الهيدر
const goTopBtn = document.querySelector("[data-go-top]"); // زر الانتقال للأعلى

// إضافة حدث التمرير (scroll) على النافذة
window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    // إذا كان التمرير أكثر من 200 بكسل
    header.classList.add("active"); // إضافة كلاس "active" للهيدر لجعله ثابتًا
    goTopBtn.classList.add("active"); // إظهار زر الانتقال للأعلى
  } else {
    header.classList.remove("active"); // إزالة كلاس "active" من الهيدر
    goTopBtn.classList.remove("active"); // إخفاء زر الانتقال للأعلى
  }
});

// زر تبديل عرض العناصر المخفية (Show More / Show Less)

document.getElementById("toggle-btn").addEventListener("click", function () {
  let hiddenCards = document.querySelectorAll(".hidden-card"); // تحديد جميع العناصر المخفية
  let isHidden =
    hiddenCards[0].style.display === "none" ||
    hiddenCards[0].style.display === ""; // التحقق مما إذا كانت مخفية

  hiddenCards.forEach((card) => {
    // التكرار على جميع العناصر المخفية
    card.style.display = isHidden ? "block" : "none"; // تغيير العرض بناءً على الحالة الحالية
  });

  this.textContent = isHidden ? "Show Less" : "Show More"; // تغيير نص الزر بناءً على الحالة
});

// زر تبديل عرض قائمة الباقات (View All Packages / Hide Packages)

document.getElementById("toggleButton").addEventListener("click", function () {
  let hiddenCards = document.querySelectorAll(".package-list .hidden"); // تحديد جميع الباقات المخفية
  hiddenCards.forEach((card) => {
    card.classList.toggle("show"); // تبديل كلاس "show" لكل بطاقة
  });

  // تغيير نص الزر بناءً على حالة العرض
  if (this.textContent === "View All Packages") {
    this.textContent = "Hide Packages";
  } else {
    this.textContent = "View All Packages";
  }
});

// تهيئة Swiper.js لعرض الشرائح - Enhanced with better effects
document.addEventListener("DOMContentLoaded", function () {
  // التأكد من تحميل مكتبة Swiper قبل استخدامها
  if (typeof Swiper !== "undefined") {
    const swiper = new Swiper(".swiper", {
      slidesPerView: 3, // عدد الشرائح المرئية في وقت واحد
      spaceBetween: 30, // Increased spacing between slides
      loop: true, // تفعيل التكرار اللانهائي للشرائح
      centeredSlides: true, // Center active slide
      grabCursor: true, // Change cursor to grab hand
      speed: 800, // Faster transition speed
      effect: "coverflow", // Use coverflow effect
      coverflowEffect: {
        rotate: 5, // Slide rotate in degrees
        stretch: 0, // Stretch space between slides
        depth: 100, // Depth offset in px
        modifier: 1, // Effect multiplier
        slideShadows: false, // Disable slide shadows
      },
      autoplay: {
        delay: 3000, // Auto change slides every 3 seconds
        disableOnInteraction: false, // Continue autoplay after user interaction
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      // Responsive breakpoints
      breakpoints: {
        // When window width is <= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // When window width is <= 576px
        576: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
    });
  } else {
    console.error("Swiper library not loaded");
  }
});

// قائمة روابط الدول - Enhanced with display names
const countries = [
  { name: "egypt", displayName: "Egypt", url: "country/EGYPT/egypt.html" },
  { name: "italy", displayName: "Italy", url: "country/ITALY/italy.html" },
  {
    name: "america",
    displayName: "America",
    url: "country/AMERICA/america.html",
  },
  {
    name: "tunisia",
    displayName: "Tunisia",
    url: "country/TUNISIA/tunisia.html",
  },
  {
    name: "philippines",
    displayName: "Philippines",
    url: "country/PHILIPPINES/philippines.html",
  },
  { name: "spain", displayName: "Spain", url: "country/SPAIN/spain.html" },
  { name: "uae", displayName: "UAE", url: "country/EMIRATES/emirates.html" },
  {
    name: "saudi arabia",
    displayName: "Saudi Arabia",
    url: "country/KSA/ksa.html",
  },
  {
    name: "turkey",
    displayName: "Turkey",
    url: "country/TURKIYE/turkiye.html",
  },
  {
    name: "lebanon",
    displayName: "Lebanon",
    url: "country/LEBANON/lebanon.html",
  },
  {
    name: "georgia",
    displayName: "Georgia",
    url: "country/GEORGIA/georgia.html",
  },
  { name: "greece", displayName: "Greece", url: "country/GREECE/greece.html" },
];

const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");
const autocompleteList = document.getElementById("autocomplete-list");

// Enhanced search functionality with autocomplete
searchBtn.addEventListener("click", function () {
  if (!searchInput.classList.contains("active")) {
    // First click: Show the search field with animation
    searchInput.classList.add("active");
    searchInput.focus();
  } else {
    // Second click: Perform search
    performSearch();
  }
});

// Perform search function
function performSearch() {
  const query = searchInput.value.trim().toLowerCase();
  const result = countries.find(
    (country) =>
      country.name.toLowerCase() === query ||
      country.displayName.toLowerCase() === query
  );

  if (result) {
    window.location.href = result.url;
  } else if (query) {
    // Show a more user-friendly message
    const message = document.createElement("div");
    message.className = "search-message";
    message.textContent = "Country not found. Please check your spelling.";
    message.style.position = "absolute";
    message.style.right = "50px";
    message.style.top = "40px";
    message.style.backgroundColor = "#fff";
    message.style.padding = "10px";
    message.style.borderRadius = "5px";
    message.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
    message.style.zIndex = "100";
    message.style.color = "#e74c3c";

    document.querySelector(".search-container").appendChild(message);

    setTimeout(() => {
      message.remove();
    }, 3000);
  }
}

// Autocomplete functionality
searchInput.addEventListener("input", function () {
  const query = this.value.toLowerCase();
  autocompleteList.innerHTML = "";

  if (!query) {
    autocompleteList.style.display = "none";
    return;
  }

  const matches = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(query) ||
      country.displayName.toLowerCase().includes(query)
  );

  if (matches.length > 0) {
    autocompleteList.style.display = "block";
    matches.forEach((match) => {
      const item = document.createElement("div");
      item.textContent = match.displayName;
      item.addEventListener("click", function () {
        searchInput.value = match.displayName;
        autocompleteList.style.display = "none";
        performSearch();
      });
      autocompleteList.appendChild(item);
    });
  } else {
    autocompleteList.style.display = "none";
  }
});

// Hide autocomplete when clicking outside
document.addEventListener("click", function (e) {
  if (e.target !== searchInput && e.target !== searchBtn) {
    autocompleteList.style.display = "none";
  }
});

// Enable search on Enter key
searchInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    performSearch();
  }
});

// Interactive World Map Functionality
document.addEventListener("DOMContentLoaded", function () {
  // Initialize the interactive map if the element exists
  if (document.getElementById("interactive-map")) {
    // Initialize map data but don't show it yet
    initWorldMap();

    // Set flag to indicate map is ready
    window.mapInitialized = true;
  }

  // تهيئة تأثير الحروف المتساقطة - Initialize Falling Letters Animation
  initLetterAnimation();
});

// Initialize the interactive world map
function initWorldMap() {
  // Define the countries we have detailed pages for
  const availableCountries = {
    EG: {
      name: "Egypt",
      url: "country/EGYPT/egypt.html",
      image: "pic/egypt.png",
      icon: "🏛️", // Pyramids
    },
    IT: {
      name: "Italy",
      url: "country/ITALY/italy.html",
      image: "pic/italya.png",
      icon: "🏛️", // Colosseum
    },
    US: {
      name: "America",
      url: "country/AMERICA/america.html",
      image: "pic/america.png",
      icon: "🗽", // Statue of Liberty
    },
    TN: {
      name: "Tunisia",
      url: "country/TUNISIA/tunisia.html",
      image: "pic/tunisia.jpg",
      icon: "🏖️", // Beach
    },
    PH: {
      name: "Philippines",
      url: "country/PHILIPPINES/philippines.html",
      image: "pic/philippines.png",
      icon: "🌴", // Palm tree
    },
    ES: {
      name: "Spain",
      url: "country/SPAIN/spain.html",
      image: "pic/spain.jpg",
      icon: "🏰", // Castle
    },
    AE: {
      name: "UAE",
      url: "country/EMIRATES/emirates.html",
      image: "pic/emirates-pic.jpg",
      icon: "🏙️", // Cityscape
    },
    SA: {
      name: "Saudi Arabia",
      url: "country/KSA/ksa.html",
      image: "pic/ksa-pic.jpg",
      icon: "🕌", // Mosque
    },
    TR: {
      name: "Turkey",
      url: "country/TURKIYE/turkiye.html",
      image: "pic/turkiye.jpg",
      icon: "🕌", // Mosque
    },
    LB: {
      name: "Lebanon",
      url: "country/LEBANON/lebanon.html",
      image: "pic/lebanon-pic.jpg",
      icon: "🌲", // Cedar tree
    },
    GE: {
      name: "Georgia",
      url: "country/GEORGIA/georgia.html",
      image: "pic/georgia.png",
      icon: "⛰️", // Mountain
    },
    GR: {
      name: "Greece",
      url: "country/GREECE/greece.html",
      image: "pic/Greece-pic.jpg",
      icon: "🏛️", // Temple
    },
  };

  // Create flags grid
  createCountryFlags(availableCountries);

  // Create map colors
  const mapColors = {};
  const defaultColor = "#c9d6de";
  const highlightColor =
    getComputedStyle(document.documentElement)
      .getPropertyValue("--accent-color")
      .trim() || "#4a89dc";

  // Set colors for countries
  Object.keys(availableCountries).forEach((code) => {
    mapColors[code] = highlightColor;
  });

  // Initialize the map
  $("#interactive-map").vectorMap({
    map: "world_mill",
    backgroundColor: "transparent",
    zoomOnScroll: true,
    regionStyle: {
      initial: {
        fill: defaultColor,
        "fill-opacity": 1,
        stroke: "none",
        "stroke-width": 0,
        "stroke-opacity": 0,
      },
      hover: {
        "fill-opacity": 0.8,
        cursor: "pointer",
      },
      selected: {
        fill: highlightColor,
      },
      selectedHover: {},
    },
    series: {
      regions: [
        {
          values: mapColors,
          scale: [defaultColor, highlightColor],
          normalizeFunction: "polynomial",
        },
      ],
    },
    onRegionTipShow: function (e, el, code) {
      if (availableCountries[code]) {
        el.html(el.html() + " - Click to explore!");
      }
    },
    onRegionClick: function (e, code) {
      if (availableCountries[code]) {
        // Update info panel
        const mapInfo = document.getElementById("map-info");
        mapInfo.innerHTML = `
          <h3>${availableCountries[code].name}</h3>
          <p>Explore amazing destinations in ${availableCountries[code].name}. Click the button below to see travel options.</p>
          <button class="btn btn-primary" style="margin-top: 15px;" onclick="window.location.href='${availableCountries[code].url}'">
            Explore ${availableCountries[code].name}
          </button>
        `;

        // Add animation to the info panel
        const mapOverlay = document.querySelector(".map-overlay");
        mapOverlay.style.transform = "scale(0.95)";
        setTimeout(() => {
          mapOverlay.style.transform = "scale(1)";
        }, 100);
      }
    },
  });

  // Add map controls
  const mapContainer = document.querySelector(".map-container");
  const mapControls = document.createElement("div");
  mapControls.className = "map-controls";
  mapControls.innerHTML = `
    <div class="map-control-btn" id="zoom-in">
      <ion-icon name="add-outline"></ion-icon>
    </div>
    <div class="map-control-btn" id="zoom-out">
      <ion-icon name="remove-outline"></ion-icon>
    </div>
    <div class="map-control-btn" id="reset-map">
      <ion-icon name="refresh-outline"></ion-icon>
    </div>
    <div class="map-control-btn" id="back-to-flags" title="Back to Countries">
      <ion-icon name="arrow-back-outline"></ion-icon>
    </div>
  `;
  mapContainer.appendChild(mapControls);

  // Add event listeners to map controls
  document.getElementById("zoom-in").addEventListener("click", function () {
    const map = $("#interactive-map").vectorMap("get", "mapObject");
    map.setScale(map.scale * 1.5, map.width / 2, map.height / 2);
  });

  document.getElementById("zoom-out").addEventListener("click", function () {
    const map = $("#interactive-map").vectorMap("get", "mapObject");
    map.setScale(map.scale / 1.5, map.width / 2, map.height / 2);
  });

  document.getElementById("reset-map").addEventListener("click", function () {
    const map = $("#interactive-map").vectorMap("get", "mapObject");
    map.setScale(1, 0, 0);
    map.setFocus({ x: 0.5, y: 0.5, scale: 1 });

    // Reset info panel
    document.getElementById("map-info").innerHTML = `
      <h3>Select a country</h3>
      <p>Click on a highlighted country to see more information and travel options.</p>
    `;
  });

  document
    .getElementById("back-to-flags")
    .addEventListener("click", function () {
      showFlagsView();
    });
}

// Create country icons grid
function createCountryFlags(countries) {
  const flagsGrid = document.querySelector(".flags-grid");

  // Clear existing items
  flagsGrid.innerHTML = "";

  // Create a country item for each country
  Object.entries(countries).forEach(([code, country]) => {
    // Create country container
    const countryItem = document.createElement("div");
    countryItem.className = "flag-item";
    countryItem.dataset.code = code;

    // Create country content with icon and image
    countryItem.innerHTML = `
      <div class="country-icon">${country.icon}</div>
      <div class="country-image">
        <img src="${country.image}" alt="${country.name}" loading="lazy">
      </div>
      <p>${country.name}</p>
    `;

    // Add click event
    countryItem.addEventListener("click", () => {
      showMapView(code);
    });

    // Add to grid
    flagsGrid.appendChild(countryItem);
  });
}

// Show the map view and highlight selected country
function showMapView(countryCode) {
  // Hide flags container immediately
  document.getElementById("country-flags").style.display = "none";

  // Show map container immediately
  const mapContainer = document.getElementById("map-container");
  mapContainer.style.display = "block";

  // Show loading indicator briefly
  const loadingIndicator = document.createElement("div");
  loadingIndicator.className = "map-loading";
  loadingIndicator.innerHTML = `
    <div class="spinner"></div>
    <p>Loading map...</p>
  `;
  mapContainer.appendChild(loadingIndicator);

  // Remove loading indicator after a short delay
  setTimeout(() => {
    const loadingElement = document.querySelector(".map-loading");
    if (loadingElement) {
      loadingElement.remove();
    }
  }, 500);

  // Get map object
  const map = $("#interactive-map").vectorMap("get", "mapObject");

  // Reset map view
  map.setScale(1, 0, 0);

  // Select and focus on the country immediately
  if (countryCode) {
    // Clear previous selections
    map.clearSelectedRegions();

    // Select the country
    map.setSelectedRegions(countryCode);

    // Trigger click on the country to show info immediately
    $(`.jvectormap-region[data-code="${countryCode}"]`).trigger("click");

    // Focus on the country
    try {
      map.setFocus({
        region: countryCode,
        animate: true,
      });
    } catch (e) {
      console.error("Error focusing on country:", e);
    }
  }
}

// Show the flags view
function showFlagsView() {
  // Hide map container
  const mapContainer = document.getElementById("map-container");
  mapContainer.style.opacity = "0";

  // After fade out, hide map and show flags
  setTimeout(() => {
    mapContainer.style.display = "none";

    // Show flags container with animation
    const flagsContainer = document.getElementById("country-flags");
    flagsContainer.style.display = "block";
    flagsContainer.style.opacity = "0";

    setTimeout(() => {
      flagsContainer.style.transition = "opacity 0.5s ease";
      flagsContainer.style.opacity = "1";
    }, 50);
  }, 500);
}

// Gallery Lightbox Functionality
document.addEventListener("DOMContentLoaded", function () {
  // تهيئة معرض الصور - Initialize Gallery Lightbox
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxClose = document.getElementById("lightbox-close");
  const lightboxPrev = document.getElementById("lightbox-prev");
  const lightboxNext = document.getElementById("lightbox-next");
  const galleryImages = document.querySelectorAll(".gallery-image");

  let currentImageIndex = 0;
  const galleryData = [];

  // Collect all gallery images data
  galleryImages.forEach((image, index) => {
    const img = image.querySelector("img");
    const caption = image.querySelector("figcaption").textContent;

    galleryData.push({
      src: img.src,
      alt: img.alt || caption,
      caption: caption,
    });

    // Add click event to open lightbox
    image.addEventListener("click", function () {
      openLightbox(index);
    });
  });

  // Open lightbox with specific image
  function openLightbox(index) {
    currentImageIndex = index;
    updateLightboxContent();
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent scrolling
  }

  // Update lightbox content based on current index
  function updateLightboxContent() {
    const currentImage = galleryData[currentImageIndex];
    lightboxImg.src = currentImage.src;
    lightboxImg.alt = currentImage.alt;
    lightboxCaption.textContent = currentImage.caption;

    // Add a small animation effect
    lightboxImg.style.transform = "scale(0.95)";
    setTimeout(() => {
      lightboxImg.style.transform = "scale(1)";
    }, 50);
  }

  // Close lightbox
  lightboxClose.addEventListener("click", function () {
    lightbox.classList.remove("active");
    document.body.style.overflow = ""; // Restore scrolling
  });

  // Navigate to previous image
  lightboxPrev.addEventListener("click", function () {
    currentImageIndex =
      (currentImageIndex - 1 + galleryData.length) % galleryData.length;
    updateLightboxContent();
  });

  // Navigate to next image
  lightboxNext.addEventListener("click", function () {
    currentImageIndex = (currentImageIndex + 1) % galleryData.length;
    updateLightboxContent();
  });

  // Close lightbox when clicking outside the image
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) {
      lightbox.classList.remove("active");
      document.body.style.overflow = ""; // Restore scrolling
    }
  });

  // Keyboard navigation
  document.addEventListener("keydown", function (e) {
    if (!lightbox.classList.contains("active")) return;

    if (e.key === "Escape") {
      lightbox.classList.remove("active");
      document.body.style.overflow = ""; // Restore scrolling
    } else if (e.key === "ArrowLeft") {
      lightboxPrev.click();
    } else if (e.key === "ArrowRight") {
      lightboxNext.click();
    }
  });
});

// دالة تهيئة تأثير الحروف المتساقطة - Falling Letters Animation Function
function initLetterAnimation() {
  // تحديد العناصر التي سيتم تطبيق التأثير عليها
  const heroTitle = document.querySelector(".hero-title");
  const heroText = document.querySelector(".hero-text");

  // التحقق من وجود العناصر قبل المتابعة
  if (!heroTitle || !heroText) return;

  // حفظ النصوص الأصلية
  const originalTitle = heroTitle.textContent;
  const originalText = heroText.textContent;

  // تفريغ محتوى العناصر
  heroTitle.textContent = "";
  heroText.textContent = "";

  // دالة لإنشاء عناصر span لكل حرف مع تأخير متزايد
  function createLetterSpans(element, text, baseDelay) {
    // التكرار على كل حرف في النص
    for (let i = 0; i < text.length; i++) {
      // إنشاء عنصر span جديد
      const span = document.createElement("span");
      // إضافة الحرف إلى العنصر
      span.textContent = text[i];
      // إضافة فئة التأثير
      span.className = "letter-animation";
      // تعيين تأخير متزايد لكل حرف
      span.style.animationDelay = `${baseDelay + i * 0.05}s`;
      // إضافة العنصر إلى العنصر الأصلي
      element.appendChild(span);
    }
  }

  // تطبيق التأثير على العنوان مع تأخير أولي 0.3 ثانية
  createLetterSpans(heroTitle, originalTitle, 0.3);

  // تطبيق التأثير على النص مع تأخير أولي 0.8 ثانية (بعد العنوان)
  createLetterSpans(heroText, originalText, 0.8);
}
