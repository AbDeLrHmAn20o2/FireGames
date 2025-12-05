import { Ui } from "./ui.js";
import { Details } from "./details.js";

export class Games {
  constructor() {
    this.ui = new Ui();
    this.currentCategory = "mmorpg";
    this.allGames = [];
    this.getData("mmorpg");
    this.initEventListeners();
  }

  initEventListeners() {
    // Category navigation
    document.querySelectorAll(".menu a").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();

        // Close navbar on mobile
        const navbarCollapse = document.getElementById(
          "navbarSupportedContent"
        );
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        } else if (navbarCollapse.classList.contains("show")) {
          navbarCollapse.classList.remove("show");
        }

        // Update active state
        document.querySelector(".menu .active").classList.remove("active");
        e.target.closest(".nav-link").classList.add("active");

        // Get category and fetch data
        const category = e.target.closest(".nav-link").dataset.category;
        this.currentCategory = category;
        this.updateCategoryTitle(category);
        this.getData(category);

        // Smooth scroll to content
        window.scrollTo({
          top: document.querySelector(".category-header").offsetTop - 100,
          behavior: "smooth",
        });
      });
    });
  }

  updateCategoryTitle(category) {
    const categoryTitle = document.getElementById("currentCategory");
    const formattedCategory =
      category.charAt(0).toUpperCase() + category.slice(1);
    categoryTitle.textContent = `${formattedCategory} Games`;

    // Add animation
    categoryTitle.style.animation = "none";
    setTimeout(() => {
      categoryTitle.style.animation = "fadeInUp 0.5s ease forwards";
    }, 10);
  }

  async getData(category) {
    // Show loader
    document.querySelector(".loader-overlay").classList.remove("d-none");

    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "a600869027mshab77dc1909c93c2p150ca1jsn1e52553469f4",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    try {
      const api = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
        options
      );

      if (!api.ok) {
        throw new Error(`HTTP error! status: ${api.status}`);
      }

      const response = await api.json();
      this.allGames = response;
      this.ui.displayGamesData(response);
      this.OpenLayer();
    } catch (error) {
      console.error("Error fetching games:", error);
      this.showNotification("Failed to load games. Please try again.", "error");

      // Display error message
      document.getElementById("rowItems").innerHTML = `
        <div class="col-12">
          <div class="alert alert-danger text-center p-5" role="alert" style="background: rgba(239, 68, 68, 0.1); border: 2px solid rgba(239, 68, 68, 0.3); border-radius: 20px;">
            <i class="fas fa-exclamation-triangle fa-3x mb-3" style="color: #ef4444;"></i>
            <h4>Oops! Something went wrong</h4>
            <p>Unable to load games. Please check your connection and try again.</p>
          </div>
        </div>
      `;
    } finally {
      // Hide loader with a slight delay for better UX
      setTimeout(() => {
        document.querySelector(".loader-overlay").classList.add("d-none");
      }, 500);
    }
  }

  OpenLayer() {
    document.querySelectorAll(".card").forEach((item) => {
      item.addEventListener("click", (e) => {
        // Add click animation
        item.style.transform = "scale(0.95)";
        setTimeout(() => {
          item.style.transform = "";
        }, 150);

        const id = item.dataset.id;
        this.GameInfo(id);
      });

      // Add hover sound effect simulation
      item.addEventListener("mouseenter", () => {
        item.style.transition =
          "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
      });
    });
  }

  GameInfo(id) {
    new Details(id);
    document.querySelector(".baseSec").classList.add("d-none");
    document.querySelector(".info").classList.remove("d-none");
    document.body.style.overflow = "hidden"; // Prevent background scroll
  }

  showNotification(message, type = "info") {
    // Create notification element
    const notification = document.createElement("div");
    notification.className = `game-notification ${type}`;
    notification.innerHTML = `
      <i class="fas fa-${
        type === "success" ? "check-circle" : "exclamation-circle"
      }"></i>
      <span>${message}</span>
    `;

    // Style notification
    notification.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      background: ${
        type === "success"
          ? "linear-gradient(135deg, #10b981, #059669)"
          : "linear-gradient(135deg, #ef4444, #dc2626)"
      };
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
      z-index: 10000;
      display: flex;
      align-items: center;
      gap: 0.8rem;
      font-weight: 600;
      animation: slideInRight 0.4s ease, slideOutRight 0.4s ease 2.6s;
    `;

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
      notification.remove();
    }, 3000);

    // Add slide animations if not exists
    if (!document.querySelector("#notificationKeyframes")) {
      const style = document.createElement("style");
      style.id = "notificationKeyframes";
      style.textContent = `
        @keyframes slideInRight {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideOutRight {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(400px);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }
}
