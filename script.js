// ===== HERO STARS ONLY =====
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
resize();
window.addEventListener("resize", resize);

// FEWER stars = no lag
let stars = [];

for (let i = 0; i < 60; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5,
    speed: 0.2 + Math.random() * 0.3
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach(s => {
    s.y += s.speed;
    if (s.y > canvas.height) s.y = 0;

    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

animate();


// ===== TEST GRID (we'll replace with your real data next) =====
const data = [
  {
    title: "Spec Ads",
    image: "https://images.unsplash.com/photo-1580907826414-5345a5aa68ad",
    items: [{ title: "KFC", url: "#" }]
  },
  {
    title: "Brand Pitches",
    image: "https://images.unsplash.com/photo-1549281899-f75600a24107",
    items: [{ title: "Bobakat", url: "#" }]
  }
];

const grid = document.getElementById("grid");
const modal = document.getElementById("modal");
const modalBox = document.getElementById("modalBox");

data.forEach(section => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${section.image}">
    <div class="card-title">${section.title}</div>
  `;

  card.onclick = () => {
    modal.style.display = "flex";

    modalBox.innerHTML = `
      <h3>${section.title}</h3>
      ${section.items.map(i => `
        <a class="link" href="${i.url}" target="_blank">${i.title}</a>
      `).join("")}
    `;
  };

  grid.appendChild(card);
});

// CLOSE ON OUTSIDE CLICK
modal.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};
