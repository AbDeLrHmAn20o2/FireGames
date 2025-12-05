import { Games } from "./games.js";

// Initialize the app
new Games();

// Modern functionality enhancements
document.addEventListener("DOMContentLoaded", () => {
  // Scroll to top button
  const scrollBtn = document.getElementById("scrollToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.add("visible");
    } else {
      scrollBtn.classList.remove("visible");
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Search functionality
  const searchInput = document.getElementById("searchInput");
  let searchTimeout;

  searchInput.addEventListener("input", (e) => {
    clearTimeout(searchTimeout);
    const searchTerm = e.target.value.toLowerCase();

    searchTimeout = setTimeout(() => {
      const cards = document.querySelectorAll(".card");

      cards.forEach((card) => {
        const title = card
          .querySelector(".card-title")
          .textContent.toLowerCase();
        const description = card
          .querySelector(".card-text")
          .textContent.toLowerCase();

        if (title.includes(searchTerm) || description.includes(searchTerm)) {
          card.closest(".col").style.display = "block";
          card.closest(".col").style.animation = "fadeInUp 0.4s ease forwards";
        } else {
          card.closest(".col").style.display = "none";
        }
      });
    }, 300);
  });

  // View toggle functionality
  const viewBtns = document.querySelectorAll(".view-btn");
  const rowItems = document.getElementById("rowItems");

  viewBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      viewBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const view = btn.dataset.view;
      if (view === "list") {
        rowItems.className = "row row-cols-1 g-4";
      } else {
        rowItems.className =
          "row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4";
      }
    });
  });

  // Navbar scroll effect
  const navbar = document.querySelector(".modern-nav");
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 100) {
      navbar.style.background = "rgba(15, 23, 42, 0.98)";
      navbar.style.boxShadow = "0 10px 40px rgba(0, 0, 0, 0.7)";
    } else {
      navbar.style.background = "rgba(15, 23, 42, 0.95)";
      navbar.style.boxShadow = "0 10px 40px rgba(0, 0, 0, 0.5)";
    }

    lastScroll = currentScroll;
  });

  // Add animation keyframes if not already in CSS
  if (!document.querySelector("#fadeInUpKeyframes")) {
    const style = document.createElement("style");
    style.id = "fadeInUpKeyframes";
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `;
    document.head.appendChild(style);
  }
});
