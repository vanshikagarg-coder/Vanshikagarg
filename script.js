/* ===== 1. PAGE NAVIGATION ===== */
function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll(".page").forEach(function(page) {
    page.classList.remove("active");
  });
  // Show the selected page
  document.getElementById(pageId).classList.add("active");
  // Close mobile menu
  document.getElementById("menu").classList.remove("open");
}

/* ===== 2. MOBILE MENU TOGGLE ===== */
function toggleMenu() {
  document.getElementById("menu").classList.toggle("open");
}

/* ===== 3. ANIMATED COUNTERS ===== */
function startCounters() {
  var counters = document.querySelectorAll(".counter");
  counters.forEach(function(counter) {
    var target = parseInt(counter.getAttribute("data-target"));
    var count = 0;
    var speed = target / 60; // completes in ~60 steps

    var timer = setInterval(function() {
      count += speed;
      if (count >= target) {
        counter.innerText = target.toLocaleString("en-IN");
        clearInterval(timer);
      } else {
        counter.innerText = Math.floor(count).toLocaleString("en-IN");
      }
    }, 20);
  });
}

// Run counters when page loads
window.onload = function() {
  startCounters();
};

/* ===== 4. DONATE BUTTON ===== */
function donate(amount) {
  document.getElementById("donateMsg").innerText =
    "Thank you! You donated ₹" + amount + " (Demo)";

  // Increase progress bar a little
  var bar = document.querySelector(".progress-fill");
  var currentWidth = parseFloat(bar.style.width) || 68;
  var newWidth = Math.min(100, currentWidth + amount / 8000 * 100);
  bar.style.width = newWidth + "%";
}

/* ===== 5. FAQ ACCORDION ===== */
function toggleFaq(item) {
  item.classList.toggle("open");
}

/* ===== 6. GALLERY LIGHTBOX ===== */
function openLightbox(emoji, caption) {
  document.getElementById("lbEmoji").innerText = emoji;
  document.getElementById("lbCaption").innerText = caption;
  document.getElementById("lightbox").classList.add("open");
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
}

/* ===== 7. VOLUNTEER FORM VALIDATION ===== */
function validateVolunteer(event) {
  event.preventDefault(); // stop page reload
  var isValid = true;

  var name = document.getElementById("volName").value.trim();
  var email = document.getElementById("volEmail").value.trim();
  var phone = document.getElementById("volPhone").value.trim();

  // Reset error messages
  document.getElementById("volNameErr").innerText = "";
  document.getElementById("volEmailErr").innerText = "";
  document.getElementById("volPhoneErr").innerText = "";

  // Name check
  if (name === "") {
    document.getElementById("volNameErr").innerText = "Name is required";
    isValid = false;
  }

  // Email check (simple regex)
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById("volEmailErr").innerText = "Enter a valid email";
    isValid = false;
  }

  // Phone check (10 digits)
  if (!/^\d{10}$/.test(phone)) {
    document.getElementById("volPhoneErr").innerText = "Enter 10-digit phone";
    isValid = false;
  }

  // Success message
  if (isValid) {
    document.getElementById("volSuccess").innerText =
      "✅ Application submitted successfully!";
    document.getElementById("volunteerForm").reset();
  }

  return false;
}

/* ===== 8. CONTACT FORM VALIDATION ===== */
function validateContact(event) {
  event.preventDefault();
  var isValid = true;

  var name = document.getElementById("cName").value.trim();
  var email = document.getElementById("cEmail").value.trim();
  var msg = document.getElementById("cMsg").value.trim();

  document.getElementById("cNameErr").innerText = "";
  document.getElementById("cEmailErr").innerText = "";
  document.getElementById("cMsgErr").innerText = "";

  if (name === "") {
    document.getElementById("cNameErr").innerText = "Name is required";
    isValid = false;
  }

  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById("cEmailErr").innerText = "Enter a valid email";
    isValid = false;
  }

  if (msg === "") {
    document.getElementById("cMsgErr").innerText = "Message is required";
    isValid = false;
  }

  if (isValid) {
    document.getElementById("cSuccess").innerText = "✅ Message sent!";
    document.getElementById("contactForm").reset();
  }

  return false;
}