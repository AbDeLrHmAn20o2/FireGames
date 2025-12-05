import { Ui } from "./ui.js";

export class Details {
  constructor(id) {
    this.ui = new Ui();
    this.initCloseButtons();
    this.getDetails(id);
  }

  initCloseButtons() {
    // Close on overlay click
    document.getElementById("btnClose").addEventListener("click", () => {
      this.closeDetails();
    });

    // Close on X button click
    const btnClose2 = document.getElementById("btnClose2");
    if (btnClose2) {
      btnClose2.addEventListener("click", () => {
        this.closeDetails();
      });
    }

    // Close on ESC key
    const escHandler = (e) => {
      if (e.key === "Escape") {
        this.closeDetails();
        document.removeEventListener("keydown", escHandler);
      }
    };
    document.addEventListener("keydown", escHandler);
  }

  closeDetails() {
    const detailSection = document.querySelector(".info");
    const baseSection = document.querySelector(".baseSec");

    // Add fade out animation
    detailSection.style.animation = "fadeOut 0.3s ease forwards";

    setTimeout(() => {
      baseSection.classList.remove("d-none");
      detailSection.classList.add("d-none");
      detailSection.style.animation = "";
      document.body.style.overflow = ""; // Restore scroll
    }, 300);
  }

  async getDetails(id) {
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
        `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
        options
      );

      if (!api.ok) {
        throw new Error(`HTTP error! status: ${api.status}`);
      }

      const response = await api.json();
      this.ui.displayGameInfo(response);
    } catch (error) {
      console.error("Error fetching game details:", error);

      // Display error in modal
      document.getElementById("infoWrapper").innerHTML = `
        <div class="col-12">
          <div class="text-center p-5">
            <i class="fas fa-exclamation-triangle fa-4x mb-4" style="color: #ef4444;"></i>
            <h3>Unable to Load Game Details</h3>
            <p class="text-secondary">Please try again later or select another game.</p>
            <button class="btn btn-outline-warning mt-3" onclick="document.getElementById('btnClose').click()">
              <i class="fas fa-arrow-left"></i> Back to Games
            </button>
          </div>
        </div>
      `;
    } finally {
      setTimeout(() => {
        document.querySelector(".loader-overlay").classList.add("d-none");
      }, 500);
    }
  }
}

// Add fadeOut animation
if (!document.querySelector("#fadeOutKeyframes")) {
  const style = document.createElement("style");
  style.id = "fadeOutKeyframes";
  style.textContent = `
    @keyframes fadeOut {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}
