document.addEventListener("DOMContentLoaded", async () => {

  const loadSection = async (id, file) => {
    const res = await fetch("./" + file);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
  };

  await loadSection("hero", "hero.html");
  await loadSection("portfolio", "portfolio.html");

  initHero();

});


function initHero() {
  const canvas = document.getElementById("hero-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  let particles = [];
  const particleCount = 100;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 0.1;
      this.speedX = Math.random() * 1.2 - 0.6;
      this.speedY = Math.random() * 1.2 - 0.6;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x > canvas.width) this.x = 0;
      if (this.x < 0) this.x = canvas.width;
      if (this.y > canvas.height) this.y = 0;
      if (this.y < 0) this.y = canvas.height;
    }

    draw() {
      ctx.fillStyle = "rgba(255,255,255,0.5)";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function initParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let p of particles) {
      p.update();
      p.draw();
    }

    requestAnimationFrame(animate);
  }

  initParticles();
  animate();

  setTimeout(() => {
    const content = document.querySelector(".hero-content");
    if (content) content.classList.add("visible");
  }, 100);
}


/* MODAL DATA */
const data = {
  specAds: {
    title: "Spec Ads",
    desc: "Would've Could've Should've",
    img: "https://images.unsplash.com/photo-1580907826414-5345a5aa68ad?q=80&w=1074&auto=format&fit=crop",
    links: [
      { title: "KFC | English", url: "https://docs.google.com/presentation/d/1TkJzWFiDSZduiwr3WXeuj_yAXJZtJxYgHU42grRExqI/edit" },
      { title: "Olly | English", url: "https://docs.google.com/presentation/d/16x3HOnKIveE58Q9ZbIfTcsfx3tBBBOJkAvLMkrJ5siI/edit" }
    ]
  }
};


function openModal(key) {
  const modal = document.getElementById("modal");
  const d = data[key];

  document.getElementById("modal-title").innerText = d.title;
  document.getElementById("modal-desc").innerText = d.desc;
  document.getElementById("modal-img").src = d.img;

  const linksContainer = document.getElementById("modal-links");
  linksContainer.innerHTML = "";

  d.links.forEach(link => {
    const a = document.createElement("a");
    a.href = link.url;
    a.target = "_blank";
    a.innerHTML = `${link.title} <span>→</span>`;
    linksContainer.appendChild(a);
  });

  modal.style.display = "flex";
}


function closeModal(e) {
  if (e.target.id === "modal") {
    document.getElementById("modal").style.display = "none";
  }
}
