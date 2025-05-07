import { Ui } from "./ui.js";
new Ui();
export class Details {
  constructor(id) {
    this.ui = new Ui();
    document.getElementById("btnClose").addEventListener("click", () => {
      document.querySelector(".baseSec").classList.remove("d-none");
      document.querySelector(".info").classList.add("d-none");
    });
    this.getDetails(id);
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
      const response = await api.json();
      this.ui.displayGameInfo(response);
    } catch (error) {
      console.log(error);
    } finally {
      document.querySelector(".loader-overlay").classList.add("d-none");
    }
  }
}
