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

/* HERO (unchanged) */
function initHero() {
  const canvas = document.getElementById("hero-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let particles = [];
  const count = 100;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener("resize", resize);

  class P {
    constructor() {
      this.x = Math.random()*canvas.width;
      this.y = Math.random()*canvas.height;
      this.s = Math.random()*2;
      this.vx = Math.random()-0.5;
      this.vy = Math.random()-0.5;
    }
    u(){
      this.x+=this.vx; this.y+=this.vy;
      if(this.x<0)this.x=canvas.width;
      if(this.y<0)this.y=canvas.height;
      if(this.x>canvas.width)this.x=0;
      if(this.y>canvas.height)this.y=0;
    }
    d(){
      ctx.fillStyle="rgba(255,255,255,.5)";
      ctx.beginPath();
      ctx.arc(this.x,this.y,this.s,0,Math.PI*2);
      ctx.fill();
    }
  }

  for(let i=0;i<count;i++)particles.push(new P());

  function loop(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p=>{p.u();p.d();});
    requestAnimationFrame(loop);
  }
  loop();

  setTimeout(()=>{
    document.querySelector(".hero-content")?.classList.add("visible");
  },100);
}

/* MODAL DATA (REAL LINKS) */
const data = {

  specAds: {
    title:"Spec Ads",
    desc:"Would've Could've Should've",
    img:"https://images.unsplash.com/photo-1580907826414-5345a5aa68ad",
    links:[
      {title:"KFC",url:"https://docs.google.com/presentation/d/1TkJzWFiDSZduiwr3WXeuj_yAXJZtJxYgHU42grRExqI"},
      {title:"Olly",url:"https://docs.google.com/presentation/d/16x3HOnKIveE58Q9ZbIfTcsfx3tBBBOJkAvLMkrJ5siI"},
      {title:"Casper",url:"https://docs.google.com/presentation/d/1crgikIbC654uu3lt7T_iRd4a0NzFRAmNOu5PUzejw2M"}
    ]
  },

  brandPitches: {
    title:"Brand Pitches",
    desc:"Campaign-ready creativity",
    img:"https://images.unsplash.com/photo-1549281899-f75600a24107",
    links:[
      {title:"Bobakat",url:"https://docs.google.com/presentation/d/1wmT9WiZ8lD6SsX0PZKAoiy7hvcKYXyiU"},
      {title:"Apsara",url:"https://docs.google.com/presentation/d/1TDQfuX41TiGsqTE-CgpwKZTZKHwMeFz"}
    ]
  },

  socialMedia: {
    title:"Social Media Campaigns",
    desc:"Scroll-stopping ideas",
    img:"https://images.unsplash.com/photo-1553532435-93d532a45f15",
    links:[
      {title:"CG Campaign",url:"#"},
      {title:"Bobakat Campaign",url:"#"}
    ]
  },

  ooh:{
    title:"OOH Promotion",
    desc:"Making streets speak",
    img:"https://images.unsplash.com/photo-1513757378314-e46255f6ed16",
    links:[
      {title:"Apsara Ice Creams",url:"#"}
    ]
  }

};

/* MODAL */
function openModal(key){
  const d=data[key];
  document.getElementById("modal-title").innerText=d.title;
  document.getElementById("modal-desc").innerText=d.desc;
  document.getElementById("modal-img").src=d.img;

  const c=document.getElementById("modal-links");
  c.innerHTML="";
  d.links.forEach(l=>{
    const a=document.createElement("a");
    a.href=l.url;a.target="_blank";
    a.innerHTML=l.title+" <span>→</span>";
    c.appendChild(a);
  });

  document.getElementById("modal").style.display="flex";
}

function closeModal(e){
  if(e.target.id==="modal"){
    document.getElementById("modal").style.display="none";
  }
}
