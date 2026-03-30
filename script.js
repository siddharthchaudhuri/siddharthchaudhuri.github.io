// ===== HERO STARS (SMOOTH + LIGHT) =====
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
vx: (Math.random() - 0.5) * 0.3,
vy: 0.4 + Math.random() * 0.4
});
}

function animate() {
ctx.clearRect(0, 0, canvas.width, canvas.height);

stars.forEach(s => {
s.x += s.vx;
s.y += s.vy;

```
if (s.y > canvas.height) s.y = 0;
if (s.x > canvas.width) s.x = 0;
if (s.x < 0) s.x = canvas.width;

ctx.beginPath();
ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
ctx.fillStyle = "white";
ctx.fill();
```

});

requestAnimationFrame(animate);
}

animate();

// ===== GRID + MODAL LOGIC =====

const grid1 = document.getElementById("grid");
const grid2 = document.getElementById("grid2");
const grid3 = document.getElementById("grid3");

const modal = document.getElementById("modal");
const modalBox = document.getElementById("modalBox");
const modalTitle = document.getElementById("modalTitle");
const modalSub = document.getElementById("modalSub");
const modalImg = document.getElementById("modalImg");
const modalContent = document.getElementById("modalContent");

function createCard(section) {
const card = document.createElement("div");
card.className = "card";

card.innerHTML = `     <img src="${section.image}">     <div class="card-title">${section.title}</div>     <div class="card-desc">${section.desc || ""}</div>
  `;

card.onclick = () => openModal(section);

return card;
}

function openModal(section) {
modal.style.display = "flex";

modalTitle.innerText = section.title;
modalSub.innerText = section.desc || "";
modalImg.src = section.image;

let html = "";

if (section.subsections) {
section.subsections.forEach(sub => {
html += `<h4 style="margin:15px 0 8px; opacity:0.6;">${sub.title}</h4>`;
sub.items.forEach(item => {
html += `<a href="${item.url}" target="_blank">${item.title}<span>→</span></a>`;
});
});
} else {
section.items.forEach(item => {
html += `<a href="${item.url}" target="_blank">${item.title}<span>→</span></a>`;
});
}

modalContent.innerHTML = html;
}

// CLOSE MODAL
modal.onclick = (e) => {
if (e.target === modal) {
modal.style.display = "none";
}
};

// ===== RENDER ALL SECTIONS =====

// Creativity
portfolioData.creativity.forEach(section => {
grid1.appendChild(createCard(section));
});

// Content
portfolioData.content.forEach(section => {
grid2.appendChild(createCard(section));
});

// Extended
portfolioData.extended.forEach(section => {
grid3.appendChild(createCard(section));
});
