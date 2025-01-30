// Mobile Navigation Toggle
const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavLinks = document.querySelectorAll(".mobile-nav a");

menuToggle.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});

mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("active");
    document.body.classList.remove("menu-open");
  });
});

// Active Navigation Link with Intersection Observer
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".desktop-nav a");

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3,
};

const observerCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const currentId = entry.target.id;
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").slice(1) === currentId) {
          link.classList.add("active");
        }
      });
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

sections.forEach((section) => {
  observer.observe(section);
});

// Smooth Scroll with Enhanced Animation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Parallax Effect for Background Elements
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  document.querySelectorAll("section").forEach((section, index) => {
    const speed = 0.2;
    if (section.querySelector("::before")) {
      section.style.backgroundPositionY = scrolled * speed + "px";
    }
  });
});

// Update Copyright Year
document.getElementById("year").textContent = new Date().getFullYear();

// Add Animation on Scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll(
    ".skill-card, .project-card, .contact-card"
  );

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;

    if (elementTop < window.innerHeight && elementBottom > 0) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
};

// Initialize elements with opacity 0 and transform
document
  .querySelectorAll(".skill-card, .project-card, .contact-card")
  .forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "all 0.6s ease-out";
  });

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);
