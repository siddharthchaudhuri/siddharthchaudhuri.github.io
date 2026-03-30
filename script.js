// ===== HERO STARS (SMOOTH + FASTER) =====
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
resize();
window.addEventListener("resize", resize);

let stars = [];

for (let i = 0; i < 60; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5,
    vx: (Math.random() - 0.5) * 0.4,
    vy: 0.5 + Math.random() * 0.5
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach(s => {
    s.x += s.vx;
    s.y += s.vy;

    if (s.y > canvas.height) s.y = 0;
    if (s.x > canvas.width) s.x = 0;
    if (s.x < 0) s.x = canvas.width;

    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

animate();


// ===== GRID RENDER =====
const grid1 = document.getElementById("grid");
const grid2 = document.getElementById("grid2");
const grid3 = document.getElementById("grid3");

function createCard(section) {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${section.img}">
    <div class="card-title">${section.title}</div>
    <div class="card-desc">${section.desc || ""}</div>
  `;

  card.onclick = () => openModal(section);

  return card;
}


// ===== MODAL =====
const modal = document.getElementById("modal");
const modalBox = document.getElementById("modalBox");

function openModal(section) {
  modal.style.display = "flex";

  let html = `<h2 style="margin-bottom:15px">${section.title}</h2>`;

  section.items.forEach(item => {
    html += `
      <a class="modal-item" href="${item.url}" target="_blank">
        ${item.title} <span>→</span>
      </a>
    `;
  });

  modalBox.innerHTML = html;
}

modal.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};


// ===== LOAD DATA =====
portfolioData.creativity.forEach(sec => grid1.appendChild(createCard(sec)));
portfolioData.content.forEach(sec => grid2.appendChild(createCard(sec)));
portfolioData.extended.forEach(sec => grid3.appendChild(createCard(sec)));
