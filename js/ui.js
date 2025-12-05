export class Ui {
  displayGamesData(data) {
    let box = "";

    // Add staggered animation
    data.forEach((game, index) => {
      const description = game.short_description
        .split(" ")
        .slice(0, 15)
        .join(" ");
      box += `
        <div class="col" style="animation: fadeInUp 0.6s ease forwards ${
          index * 0.05
        }s; opacity: 0;">
          <div class="card h-100" data-id="${game.id}">
            <div class="card-body">
              <div class="img-wrapper">
                <img id="cardImg" src="${
                  game.thumbnail
                }" class="card-img-top" alt="${game.title}" loading="lazy">
                <div class="play-overlay">
                  <i class="fas fa-play-circle"></i>
                </div>
              </div>
              <div class="cardCaption d-flex justify-content-between align-items-start py-2">
                <h3 class="h6 card-title flex-grow-1">${game.title}</h3>
                <div class="badge text-primary bg-secondary-subtle p-2">
                  <i class="fas fa-tag"></i> FREE
                </div>
              </div>
              <p class="card-text">${description}${
        description.length < game.short_description.length ? "..." : ""
      }</p>
            </div>
            <div class="card-footer d-flex justify-content-between align-items-center">
              <div class="badge bg-danger">
                <i class="fas fa-gamepad"></i> ${game.genre}
              </div>
              <div class="badge bg-danger">
                <i class="fas fa-desktop"></i> ${game.platform}
              </div>
            </div>
          </div>
        </div>
      `;
    });

    document.getElementById("rowItems").innerHTML = box;
  }

  displayGameInfo(data) {
    const releaseDate = data.release_date || "N/A";
    const developer = data.developer || "Unknown";
    const publisher = data.publisher || "Unknown";

    let box = `
      <div class="row g-4">
        <div class="col-md-5">
          <div class="detail-image-wrapper">
            <img src="${data.thumbnail}" class="w-100" alt="${data.title}">
            <div class="game-meta-overlay">
              <div class="meta-item">
                <i class="fas fa-star"></i>
                <span>Featured</span>
              </div>
            </div>
          </div>
          
          <div class="game-screenshots mt-4">
            ${
              data.screenshots
                ? data.screenshots
                    .slice(0, 3)
                    .map(
                      (shot) => `
              <img src="${shot.image}" alt="Screenshot" class="screenshot-thumb">
            `
                    )
                    .join("")
                : ""
            }
          </div>
        </div>
        
        <div class="col-md-7">
          <div class="game-header">
            <h3><i class="fas fa-gamepad"></i> ${data.title}</h3>
            <div class="game-tags mt-3">
              <span class="badge bg-primary">
                <i class="fas fa-layer-group"></i> ${data.genre}
              </span>
              <span class="badge bg-primary">
                <i class="fas fa-desktop"></i> ${data.platform}
              </span>
              <span class="badge bg-primary">
                <i class="fas fa-check-circle"></i> ${data.status}
              </span>
            </div>
          </div>
          
          <div class="game-info mt-4">
            <div class="info-grid">
              <div class="info-item">
                <i class="fas fa-calendar-alt"></i>
                <div>
                  <strong>Release Date</strong>
                  <p>${releaseDate}</p>
                </div>
              </div>
              <div class="info-item">
                <i class="fas fa-code"></i>
                <div>
                  <strong>Developer</strong>
                  <p>${developer}</p>
                </div>
              </div>
              <div class="info-item">
                <i class="fas fa-building"></i>
                <div>
                  <strong>Publisher</strong>
                  <p>${publisher}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="game-description mt-4">
            <h4><i class="fas fa-align-left"></i> About This Game</h4>
            <p>${data.description}</p>
          </div>
          
          ${
            data.minimum_system_requirements
              ? `
          <div class="system-requirements mt-4">
            <h4><i class="fas fa-laptop"></i> System Requirements</h4>
            <div class="requirements-grid">
              ${
                data.minimum_system_requirements.os
                  ? `
                <div class="req-item">
                  <strong>OS:</strong>
                  <span>${data.minimum_system_requirements.os}</span>
                </div>
              `
                  : ""
              }
              ${
                data.minimum_system_requirements.processor
                  ? `
                <div class="req-item">
                  <strong>Processor:</strong>
                  <span>${data.minimum_system_requirements.processor}</span>
                </div>
              `
                  : ""
              }
              ${
                data.minimum_system_requirements.memory
                  ? `
                <div class="req-item">
                  <strong>Memory:</strong>
                  <span>${data.minimum_system_requirements.memory}</span>
                </div>
              `
                  : ""
              }
              ${
                data.minimum_system_requirements.graphics
                  ? `
                <div class="req-item">
                  <strong>Graphics:</strong>
                  <span>${data.minimum_system_requirements.graphics}</span>
                </div>
              `
                  : ""
              }
              ${
                data.minimum_system_requirements.storage
                  ? `
                <div class="req-item">
                  <strong>Storage:</strong>
                  <span>${data.minimum_system_requirements.storage}</span>
                </div>
              `
                  : ""
              }
            </div>
          </div>
          `
              : ""
          }
          
          <div class="action-buttons mt-4">
            <a class="btn btn-outline-warning" target="_blank" href="${
              data.game_url
            }">
              <i class="fas fa-play"></i> Play Now
            </a>
            <a class="btn btn-secondary ms-2" target="_blank" href="${
              data.game_url
            }">
              <i class="fas fa-external-link-alt"></i> Visit Website
            </a>
          </div>
        </div>
      </div>
    `;

    document.getElementById("infoWrapper").innerHTML = box;
  }
}
