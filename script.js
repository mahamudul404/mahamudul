// Function to toggle mobile menu visibility
function toggleMobileMenu() {
  document.querySelector("nav").classList.toggle("active");
}

// Function to handle smooth scrolling and active link state
function handleSmoothScroll(e) {
  e.preventDefault();

  const targetId = this.getAttribute("href");
  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    document.querySelectorAll("nav a").forEach((link) => {
      link.classList.remove("active");
    });

    this.classList.add("active");

    if (document.querySelector("nav").classList.contains("active")) {
      document.querySelector("nav").classList.remove("active");
    }
  } else {
    console.error("Target element not found");
  }
}

// Update the copyright year dynamically
function updateCopyrightYear() {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

// Event listeners
document.addEventListener("DOMContentLoaded", function () {
  // Set up the copyright year
  updateCopyrightYear();

  // Attach event listener for the mobile menu button
  document
    .getElementById("mobileMenu")
    ?.addEventListener("click", toggleMobileMenu);

  // Attach smooth scroll event listeners to anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", handleSmoothScroll);
  });
});



document.addEventListener("DOMContentLoaded", function () {
  // Select all sections and navigation links
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  // Function to update the active nav link
  const updateActiveNav = () => {
    let currentSection = "";

    // Find the current section in view
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100; // Offset to adjust when active state triggers
      const sectionHeight = section.offsetHeight;
      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute("id");
      }
    });

    // Update the active class on nav links
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(currentSection)) {
        link.classList.add("active");
      }
    });
  };

  // Add scroll event listener
  window.addEventListener("scroll", updateActiveNav);
});
