export class Ui {
  displayGamesData(data) {
    let box = "";
    for (let i = 0; i < data.length; i++) {
      box += `<div class="col">
          <div class="card h-100"  data-id="${data[i].id}">
            <div class="card-body">
              <div class="img-wrapper">
                <img id="cardImg" src="${
                  data[i].thumbnail
                }" class="card-img-top" alt="${data[i].title}">
              </div>
              <div class="cardCaption d-flex justify-content-between py-2">
                <h3 class=" h6 card-title">${data[i].title}</h3>
              <div class="badge text-primary bg-secondary-subtle p-2 ">free</div>
              </div>
              <p class="card-text">${data[i].short_description.split(
                " ",
                10
              )}</p>
            </div>
            <div class="card-footer d-flex justify-content-between">
              <div class="badge bg-danger">${data[i].genre}</div>
              <div class="badge bg-danger">${data[i].platform}</div>
            </div>
           </div>
        </div>`;
    }
    document.getElementById("rowItems").innerHTML = box;
  }
  displayGameInfo(data) {
    let box = `
            <div class="col-md-4"><img src="${data.thumbnail}" class="w-100" alt=""></div>
            <div class="col-md-8">
            <h3>title:${data.title} </h3>
            <p>Category: <span class="badge bg-primary">${data.genre}</span></p>
            <p>Platform: <span class="badge bg-primary">${data.platform}</span></p>
            <p>Status: <span class="badge bg-primary">${data.status}</span></p>
            <p class="small">${data.description}</p>
            <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
            </div>
        `;
    document.getElementById("infoWrapper").innerHTML = box;
  }
}
