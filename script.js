// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const catalogBtn = document.querySelector(".catalog-btn");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    catalogBtn.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
}

// Add active class to nav links based on current page
const currentLocation = window.location.pathname;
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {
  const href = item.getAttribute("href");
  if (currentLocation.includes(href) && href !== "index.html") {
    item.classList.add("active");
  } else if (currentLocation.endsWith("/") && href === "index.html") {
    item.classList.add("active");
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: "smooth",
      });
    }
  });
});

// Scroll to top button
const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = "scroll-to-top";
document.body.appendChild(scrollToTopBtn);

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Add scroll animation for elements
const animateOnScroll = () => {
  const elements = document.querySelectorAll(
    ".feature-card, .product-category, .brand-card, .vision-box, .mission-box, .swiper-slide"
  );

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (elementPosition < screenPosition) {
      element.classList.add("animate");
    }
  });
};

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);

// Form validation
const contactForm = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const submitBtnText = submitBtn?.querySelector("span");
const submitBtnSpinner = submitBtn?.querySelector(".fa-spinner");

// Function to show toast notification
function showToast(message, isSuccess = true) {
  Toastify({
    text: message,
    duration: 3000,
    gravity: "top",
    position: "right",
    style: {
      background: isSuccess ? "#28a745" : "#dc3545",
      borderRadius: "8px",
      fontFamily: "Poppins, sans-serif",
      fontSize: "14px",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Basic form validation
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    if (!email || !message) {
      showToast(
        "Ju lutemi plotësoni fushat e kërkuara (Email dhe Mesazhi).",
        false
      );
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast("Ju lutemi shkruani një adresë email të vlefshme.", false);
      return;
    }

    // Show loading state
    if (submitBtn && submitBtnText && submitBtnSpinner) {
      submitBtn.disabled = true;
      submitBtnText.style.display = "none";
      submitBtnSpinner.style.display = "inline-block";
    }

    // Prepare template parameters
    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject || "Mesazh nga website",
      message: message,
      to_email: "info@dioren-ks.com",
    };

    // Send email using EmailJS
    emailjs
      .send("service_lwllfem", "template_6ljl206", templateParams)
      .then(
        function (response) {
          showToast(
            "Faleminderit për mesazhin tuaj! Do t'ju kontaktojmë së shpejti.",
            true
          );
          contactForm.reset();
        },
        function (error) {
          showToast(
            "Na vjen keq, ka ndodhur një gabim. Ju lutemi provoni përsëri më vonë.",
            false
          );
          console.error("EmailJS Error:", error);
        }
      )
      .finally(function () {
        // Reset loading state
        if (submitBtn && submitBtnText && submitBtnSpinner) {
          submitBtn.disabled = false;
          submitBtnText.style.display = "inline-block";
          submitBtnSpinner.style.display = "none";
        }
      });
  });
}

// Add CSS class for header on scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Add additional CSS for the scrolled header
const style = document.createElement("style");
style.innerHTML = `
    header.scrolled {
        background-color: rgba(255, 255, 255, 0.95);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        padding: 10px 0;
    }
    
    .scroll-to-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--primary-color);
        color: white;
        border: none;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
    }
    
    .scroll-to-top.show {
        opacity: 1;
        visibility: visible;
    }
    
    .scroll-to-top:hover {
        background-color: var(--dark-bg);
        transform: translateY(-3px);
    }
    
    .nav-links.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: white;
        padding: 20px;
        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        z-index: 100;
    }
    
    .nav-links.active li {
        margin: 10px 0;
    }
    
    .catalog-btn.active {
        display: block;
        margin-top: 15px;
        text-align: center;
    }
    
    .hamburger.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
    
    .feature-card, .product-category, .brand-card, .vision-box, .mission-box, .swiper-slide {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .feature-card.animate, .product-category.animate, .brand-card.animate, .vision-box.animate, .mission-box.animate, .swiper-slide.animate {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);
