import { Ui } from "./ui.js";
import { Details } from "./details.js";
export class Games {
  constructor() {
    this.ui = new Ui();
    this.getData("mmorpg");
    document.querySelectorAll(".menu a").forEach((link) => {
      link.addEventListener("click", (e) => {
        document.querySelector(".menu .active").classList.remove("active");
        e.target.classList.add("active");
        this.getData(e.target.dataset.category);
      });
    });
  }
  async getData(category) {
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
      const response = await api.json();
      this.ui.displayGamesData(response);
      this.OpenLayer();
    } catch (error) {
      console.log(error);
    } finally {
      document.querySelector(".loader-overlay").classList.add("d-none");
    }
  }

  OpenLayer() {
    document.querySelectorAll(".card").forEach((item) => {
      item.addEventListener("click", () => {
        const id = item.dataset.id;
        this.GameInfo(id);
      });
    });
  }

  GameInfo(id) {
    new Details(id);
    document.querySelector(".baseSec").classList.add("d-none");
    document.querySelector(".info").classList.remove("d-none");
  }
}
