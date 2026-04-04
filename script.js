/* ================= LOAD SECTIONS ================= */

document.addEventListener("DOMContentLoaded", async () => {

  const loadSection = async (id, file) => {
    const res = await fetch("./" + file);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
  };

  await loadSection("hero", "hero.html");
  await loadSection("portfolio", "portfolio.html");

  requestAnimationFrame(() => {
  initHero();
});

});


/* ================= HERO ================= */

function initHero() {
  const canvas = document.getElementById("particles");
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


/* ================= MODAL DATA ================= */

window.modalData = {

  specAds: {
    title: "Spec Ads",
    desc: "Would've Could've Should've",
    img: "https://images.unsplash.com/photo-1580907826414-5345a5aa68ad",
    items: [
      { title: "KFC | English", url: "https://docs.google.com/presentation/d/1TkJzWFiDSZduiwr3WXeuj_yAXJZtJxYgHU42grRExqI/edit?usp=sharing" },
      { title: "Olly | English", url: "https://docs.google.com/presentation/d/16x3HOnKIveE58Q9ZbIfTcsfx3tBBBOJkAvLMkrJ5siI/edit?usp=sharing" },
      { title: "Casper | English", url: "https://docs.google.com/presentation/d/1crgikIbC654uu3lt7T_iRd4a0NzFRAmNOu5PUzejw2M/edit?usp=sharing" }
    ]
  },

  brandPitches: {
    title: "Brand Pitches",
    desc: "Campaign-ready creativity",
    img: "https://images.unsplash.com/photo-1549281899-f75600a24107",
    items: [
      { title: "Bobakat Pitch | English", url: "https://docs.google.com/presentation/d/1wmT9WiZ8lD6SsX0PZKAoiy7hvcKYXyiU/edit" },
      { title: "Apsara Ice Cream Pitch | English + Hindi", url: "https://docs.google.com/presentation/d/1TDQfuX41TiGsqTE-CgpwKZTZKHwMeFz-d5djOjakjF8/edit?usp=sharing" },
      { title: "Tribe Pitch | English + Hindi", url: "https://docs.google.com/presentation/d/1VzPZtLMSkiCoS4hv1BNO2NztnfvVyu5NAQ9DLlYxcWI/edit?usp=sharing" },
      { title: "KDM Pitch | English + Hindi", url: "https://docs.google.com/presentation/d/1aeF9DVbnmBoZU3MCvSZzWHF7rFYTkslkG4lXYZuwqR4/edit?usp=sharing" },
      { title: "Camlin Pitch | English + Hindi", url: "https://docs.google.com/presentation/d/16L28fI9Dle9RJbPJGeGIhqjJKRQQQoNH/edit" },
      { title: "ZIGLY Pitch | English + Hindi", url: "https://docs.google.com/presentation/d/19bEpOJFjexwewrZlKrLVYvhg-_7EjgMt/edit" }
    ]
  },

  socialMedia: {
    title: "Social Media Campaigns & Creatives",
    desc: "Scroll-stopping ideas and copy",
    img: "https://images.unsplash.com/photo-1553532435-93d532a45f15",
    subsections: [
      {
        title: "Social Media Campaigns",
        items: [
          { title: "CG - Independence Day Mini Campaign", url: "https://docs.google.com/presentation/d/1hpN0wRj3HFa3JQN8mgGYw890vykHbWmhOCOnyRbtKcI/edit?usp=sharing" },
          { title: "Bobakat - Valentine's Week Campaign", url: "https://docs.google.com/presentation/d/1M3NuDMqUNMQvFfp14LT65TLzXwowFORQnr7MbxGww7U/edit?usp=sharing" },
          { title: "Bobakat - 50% Off Campaign", url: "https://docs.google.com/presentation/d/1tPdguOdNQl1XfIUPQdSd3-K8YWaf4IqUP5QZkf8Vuto/edit?usp=sharing" },
          { title: "2baconil - Diwali Social Media Campaign", url: "https://docs.google.com/presentation/d/1n0cRyMt-R0Su5ujouYB0XtFucv9jPGqYNxCQcsh4Jzg/edit?usp=sharing" }
        ]
      },
      {
        title: "Standalone Posts",
        items: [
          { title: "2baconil - Halloween", url: "https://drive.google.com/file/d/1oveqVhqAlxsRw9e5Az86YapX9X6VLfgu/view?usp=sharing" },
          { title: "CG - Halloween", url: "https://drive.google.com/file/d/1POb2VEBpvO7jLRSN3n4MZ4JdFKc0Mx3u/view?usp=sharing" },
          { title: "2baconil - Lung Test World Cancer Day", url: "https://drive.google.com/file/d/19hMdxD29QlkbyFXpPMLKL2LCohjpWWWN/view" },
          { title: "Being Human Clothing - Accessories", url: "https://drive.google.com/file/d/14u1P9xcd33EGVqovyOWUTI38gx-dMssu/view" },
          { title: "CG Power - Product Categories", url: "https://drive.google.com/file/d/1KvsGgIZ-RginILmaQR-OdSxbVayrCBFm/view" },
          { title: "Never Grow Up x Good Wave - Fundraiser", url: "https://drive.google.com/file/d/1Lpn6UyTb-m3mJBlzoUdc2I1rAe_qRNtK/view" },
          { title: "Stratzy - An Ideal Trader", url: "https://drive.google.com/file/d/1LgS0ko_R-rc0lCGoot-D9XPDGDSH-dHp/view" },
          { title: "Winn Foods - Winner Winner Chicken Dinner", url: "https://drive.google.com/file/d/1-3S1Jyg66iXY98qi5ddvGnwTtzWPm4LE/view" },
          { title: "Amazon - Bazaar Engagement", url: "https://drive.google.com/file/d/1OG6CC1BJ0LIuDrKl24ggiQ_s5bqjgiGp/view" }
        ]
      }
    ]
  },

  ooh: {
    title: "Out Of House (OOH) Promotion",
    desc: "Making streets speak",
    img: "https://images.unsplash.com/photo-1513757378314-e46255f6ed16",
    items: [
      { title: "Apsara Ice Creams", url: "https://docs.google.com/presentation/d/1BbgWdJdM9dMpXreFV4-qy_qLkoRPp5KqEABpukBcZPw/edit?usp=sharing" },
      { title: "Bobakat x Lollapalooza", url: "https://docs.google.com/presentation/d/1fsMn1BfDNRgAQispzzGqQYDLolH0MuN9kKB3rzCXnv4/edit?usp=sharing" },
      { title: "Beeing Social - Standee", url: "https://drive.google.com/file/d/1cpU9slEcCNOvQayP2G4gZshnOHpYNXfC/view" },
      { title: "Dotom - 20 Minutes Promotion", url: "https://drive.google.com/file/d/12CsGTW-ju5b-f7hYn8c5AQY_QUjkkMPs/view" }
    ]
  },

  videos: {
    title: "Professional Videos",
    desc: "Big ideas, beautifully told",
    img: "https://images.unsplash.com/photo-1577190651915-bf62d54d5b36",
    items: [
      { title: "Stratzy - NIFTY Dip Podcast", url: "https://drive.google.com/file/d/1mV_qdKqieWIJA_YgZMv5E7xMUddjkMWc/view" },
      { title: "Stratzy - NIFTY Downfall Podcast", url: "https://drive.google.com/file/d/1a1cP80MOp6ApkTs25zAeAVUYEwuBDTFG/view" },
      { title: "Stratzy - Traders of India Podcast", url: "https://drive.google.com/file/d/1Bn1McHbdnMIaG10kd0r7Hdib9dbsF2s_/view" },
      { title: "CG - Extra Caring Fiance", url: "https://drive.google.com/file/d/1AaqDbTtGqapR3UkAgr98JE2ssaIwW-7z/view" },
      { title: "Winn - Garba Madness", url: "https://drive.google.com/file/d/1tFKU_YDE4pgR2enFZiuaG5fZ8z4Z5wnP/view" }
    ]
  },

  ai: {
    title: "AI Music and Videos",
    desc: "Artificial Intelligence meets Authentic Emotion",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQ64HCB6G8Ox2LeapjadP2AKLArIkEZE8Xw",
    items: [
      { title: "Aposan - Brand Film", url: "https://drive.google.com/file/d/1te-UvFs0b5fLTq3B-boPrTC6sZdp1b9P/view?usp=sharing" },
      { title: "2baconil - Christmas Song", url: "https://drive.google.com/file/d/11MZDR5agfSgcXDMn8N6-2lHca8hjZpZI/view" },
      { title: "CG – Diwali Anthem", url: "https://drive.google.com/file/d/11MZDR5agfSgcXDMn8N6-2lHca8hjZpZI/view" },
      { title: "CG – Ganpati AI Video", url: "https://drive.google.com/file/d/1kMd0XaMqv0FvKcJZjq1U-kGdkex8P7ZB/view" },
      { title: "CG – New Year AI Video", url: "https://drive.google.com/file/d/1enf1Mf1Ptpa0_BD_ixeuVMfQs1zMhNQO/view" },
      { title: "Camlin - Astronaut Dreams", url: "https://drive.google.com/file/d/1HILoxH1vQaKmkw7UyE72iSyFsb-TyGhG/view" },
      { title: "Fraganta – Heer Ranjha Anthem", url: "https://drive.google.com/file/d/1aptBKxYHifuTPjTOY9pqX3gGuU92viJj/view" },
      { title: "Fraganta – Jogi Anthem", url: "https://drive.google.com/file/d/19XOnzBwzm9877ODNgSrs4DiAbsQMxjN4/view" },
      { title: "Winn – Halloween", url: "https://drive.google.com/file/d/1grUCan7Dj2Vl1YqRt4hPBh1kz1lXeydI/view" },
      { title: "Winnn – Anthem", url: "https://drive.google.com/file/d/1juTog6a4Ewm9t5W1nbHOxdtlpvHnv1P_/view" }
    ]
  },

  web: {
    title: "Website and App",
    desc: "Digital spaces with soul",
    img: "https://mockuptree.com/wp-content/uploads/edd/2018/12/Web-Showcase-Mockup-Creator.jpg",
    items: [
      { title: "Bold & Bae - Website", url: "https://drive.google.com/file/d/1WYMGQglIuxFIaKci0Tkyk4fJWAhDCMc6/view" },
      { title: "Fraganta - Website", url: "https://drive.google.com/file/d/1LYI4cIKCQBaWGOiIVIQgc61k0aoqzE4w/view" },
      { title: "Stratzy - App Onboarding", url: "https://drive.google.com/file/d/10R4jyP3Efti-MJC9dzWk9dtkiohQ0cuC/view" },
      { title: "Stratzy - Website", url: "https://drive.google.com/file/d/1OKaCpMGe5_3H6F2nb1NSDyXzVXJFKQJv/view" }
    ]
  },

  scripts: {
    title: "Video Scripts",
    desc: "Stories made for screens",
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
    items: [
      { title: "Amazon - Father’s Day", url: "https://docs.google.com/document/d/18rlQVBoYG0-23edJij0Hj3ABktu6lZWH/edit" },
      { title: "HUL - Paani Ki Kahaani", url: "https://docs.google.com/document/d/1lAipVwlvYzEsMvGTywEiE39XmyomUeea/edit" },
      { title: "Netflix - Recruitment Ad", url: "https://docs.google.com/document/d/1Uwff60KlBaDbrXwSV3Yx7nRqPXZs4q2A/edit" },
      { title: "Never Grow Up - Mental Health Reel", url: "https://docs.google.com/document/d/1CpgbipjBq84miPsCvW_eFMQbr4LVwhWZ/edit" },
      { title: "Never Grow Up - Women’s Day", url: "https://docs.google.com/document/d/1Ywjw9WP_mMLSLTLfbJc9LRpIO2ScTUBi/edit" },
      { title: "Sanofi - Pride Month", url: "https://docs.google.com/document/d/1EjCzothVJm9T8SDdf8LfiNGj7BmoFRfb/edit" },
      { title: "Stratzy - Husn Parody", url: "https://docs.google.com/document/d/1gqC6nhmktIB0h4r5tImBjw9Kcz5qHNHI/edit" }
    ]
  },

  blogs: {
    title: "Blogs",
    desc: "Stories that think, feel, and inform",
    img: "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg",
    subsections: [
      {
        title: "Original",
        items: [
          { title: "Goodwave Foundation - Emotional Depletion", url: "https://docs.google.com/document/d/1FRJoKFIkM7376nyA3g5VqDDi5BXhyT2-/edit" },
          { title: "Never Grow Up - Employee Happiness", url: "https://docs.google.com/document/d/1bppBBRUyOWYFx6w3kZnUszqlEnqkwykE/edit" },
          { title: "Never Grow Up - Mental Health at Work", url: "https://docs.google.com/document/d/1Qy58hlJ1A1EqDZaZio_aCMt2jHlxQQME/edit" },
          { title: "SPRD - Barrier-less Simulation", url: "https://docs.google.com/document/d/1rJHE-LyI9byPflySgq3bvC0o6k9acQdx/edit" }
        ]
      },
      {
        title: "AI Assisted",
        items: [
          { title: "Bold & Bae - The Meaning of Bae", url: "https://docs.google.com/document/d/1cuI2EsqQJDG0bPu3eW3HtNpa-rYKbLdX/edit" },
          { title: "Brandniti - Colour Theory in Marketing", url: "https://docs.google.com/document/d/1zrzRwN-0Fx-p4FRgIxSaPdIem87iMG_5/edit" },
          { title: "Propfynd - Maharashtra RERA QR Code System", url: "https://docs.google.com/document/d/1WwRooEJmjn5NHZ8gvtR0VDCxPgx6Ssqu/edit" },
          { title: "Proptranxact - Investing in BKC", url: "https://docs.google.com/document/d/1KiFi-UCwrjXPpREW0dfCBIO2CfrImbPA/edit" }
        ]
      }
    ]
  },
aiCreatives: {
  title: "AI Creatives",
  desc: "Written and Designed by moi",
  img: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960",
  items: [
    { title: "Camlin - Creatives", url: "https://drive.google.com/file/d/1li40S0sqna2K-NgsqQAI0ZDPk6xcnwD6/view?usp=drivesdk" },
    { title: "Surabhi - Creatives", url: "https://drive.google.com/file/d/10l2qjy8xWe7Sn4kH7POyVC80rTgKuiI2/view?usp=drivesdk" },
    { title: "Apsara - Frames", url: "https://drive.google.com/file/d/10YcNqIxyG1NJxYhcAogf8bSuWfzfad1n/view?usp=drivesdk" },
    { title: "Freya - Creatives", url: "https://drive.google.com/file/d/1vFoxNOLNVodQufqQy1J76kUjaUASjhzC/view?usp=drivesdk" }
  ]
},

aiFilm: {
  title: "AI Brand Film",
  desc: "Lights. Camera. AI.",
  img: "https://images.unsplash.com/photo-1723396612574-961649793bb9",
  items: [
    { title: "Aposan - Brand Film", url: "https://drive.google.com/file/d/1te-UvFs0b5fLTq3B-boPrTC6sZdp1b9P/view?usp=drivesdk" }
  ]
},

aiClips: {
  title: "AI Brand Clips",
  desc: "A lil this, A lil that",
  img: "https://images.unsplash.com/photo-1588473158757-afdb399558d6",
  items: [
    { title: "Bobakat - Valentine's Week", url: "https://docs.google.com/presentation/d/1AgmS8-2WNuu13_2z5czLpLm6e_kMBoKYccSNoGqmQQE/edit?usp=drivesdk" },
    { title: "Winn – Halloween", url: "https://drive.google.com/file/d/1grUCan7Dj2Vl1YqRt4hPBh1kz1lXeydI/view?usp=drivesdk" },
    { title: "CG – Onam AI Video", url: "https://drive.google.com/file/d/1VlAraBgDZgHZM9G_CJ0O8EP6x5JcVri-/view?usp=drivesdk" },
    { title: "CG – Ganpati AI Video", url: "https://drive.google.com/file/d/1kMd0XaMqv0FvKcJZjq1U-kGdkex8P7ZB/view?usp=drivesdk" },
    { title: "Camlin - Astronaut Dreams", url: "https://drive.google.com/file/d/1HILoxH1vQaKmkw7UyE72iSyFsb-TyGhG/view?usp=drivesdk" }
  ]
},

aiAnthems: {
  title: "AI Anthems",
  desc: "Let the brand sing",
  img: "https://images.unsplash.com/photo-1756650721982-26fdf2103315",
  items: [
    { title: "Tribe - Brand Anthem", url: "https://drive.google.com/file/d/14HVn4D2_z0ZshJCDJhUMx18FnBxlYiR7/view?usp=drivesdk" },
    { title: "Tribe - Campaign Anthem", url: "https://drive.google.com/file/d/1rHx5EE9A8mT4h45oJ-bPrnyIolSjh0la/view?usp=drivesdk" },
    { title: "2baconil - Christmas Anthem", url: "https://drive.google.com/file/d/14avLECU38i3Osfue-5GAvFb0Ilo0qaUE/view?usp=drivesdk" },
    { title: "CG - New Year Anthem", url: "https://drive.google.com/file/d/1enf1Mf1Ptpa0_BD_ixeuVMfQs1zMhNQO/view?usp=drivesdk" },
    { title: "Winnn – Anthem", url: "https://drive.google.com/file/d/1juTog6a4Ewm9t5W1nbHOxdtlpvHnv1P_/view?usp=drivesdk" },
    { title: "Fraganta – Heer Ranjha Anthem", url: "https://drive.google.com/file/d/1aptBKxYHifuTPjTOY9pqX3gGuU92viJj/view?usp=drivesdk" },
    { title: "Fraganta – Jogi Anthem", url: "https://drive.google.com/file/d/19XOnzBwzm9877ODNgSrs4DiAbsQMxjN4/view?usp=drivesdk" },
    { title: "CG – Diwali Anthem", url: "https://drive.google.com/file/d/11MZDR5agfSgcXDMn8N6-2lHca8hjZpZI/view?usp=drivesdk" }
  ]
},

aiPhotoshoot: {
  title: "AI Photoshoot",
  desc: "Say Cheese",
  img: "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac",
  items: [
    { title: "Gut2Go", url: "https://docs.google.com/presentation/d/1_8aLEreHGcTlGm82DG7RUbvyEzkttId7D7uhDjZqsDM/edit?usp=sharing" },
    { title: "Apsara Ice Creams", url: "https://docs.google.com/presentation/d/1XRJnPkzv72cvE-rLXbcZFrJVDtGe1aq_QokURpVlnVY/edit?usp=sharing" },
    { title: "Signature", url: "https://docs.google.com/presentation/d/1eQvm7oxEqp85YTzEkTZJk56iQdN62yBj1MNCGRlEzkk/edit?usp=sharing" }
  ]
},
flex: {
  title: "Humble Flex",
  desc: "Side Quests",
  items: [
    { title: "Featured in Moment Marketing Pages", url: "https://drive.google.com/file/d/1SRm0nia5EsWCmA0udwSik8bFSA-q0TBL/view?usp=drive_link" },
    { title: "Won India's Got Latent", url: "https://drive.google.com/file/d/1mp7tWtkr2Ga9kvogoDPDIyK22edUcswI/view?usp=sharing" },
    { title: "Gaming Sniper Montage", url: "https://www.youtube.com/watch?v=9IcklVNhUjM" }
  ]
},
  reels: {
    title: "Reels",
    desc: "Tiny films with big feelings",
    img: "https://images.unsplash.com/photo-1485846234645-a62644f84728",
    items: [
      { title: "Bobakat - Christmas Week", url: "https://drive.google.com/file/d/12trTbC9ASrZSRy9eZB8I6VLzOGQtcexw/view?usp=sharing" },
      { title: "Bold & Bae - Lonely", url: "https://drive.google.com/file/d/1fqUlwK77s-aBW5nihfzeZcrdAJM0dHsP/view" },
      { title: "Bold & Bae - No Way", url: "https://drive.google.com/file/d/1JBkvQzVRe4gy_ziCpA4MMdaBLmqTnPdQ/view" },
      { title: "Brandniti - Watchu Doin", url: "https://drive.google.com/file/d/1fcE0CMoIcts-OeMuDv_Ve5nLrcS6NJPu/view" },
      { title: "Stratzy - Informational", url: "https://drive.google.com/file/d/1Li9RXWOpYNmN-QJlf39CqNjwtIQidIwt/view" },
      { title: "Stratzy - Promotional", url: "https://drive.google.com/file/d/1LngSO56Qrsfelb2h9RBT3NVVP4W1Mcai/view" },
      { title: "Stratzy - Windows SFX", url: "https://drive.google.com/file/d/1MAdSYeblDX7g8EIyTpOY6ZT-8QdfaIPl/view" },
      { title: "Stratzy - Reporter Scam", url: "https://drive.google.com/file/d/1aMjCM9h5_GgvP8yP8qoFYZ6PMWJKe3GE/view" }
    ]
  },

  press: {
    title: "Press Release and Media Profile",
    desc: "Brand stories, told to the world",
    img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
    items: [
      { title: "Fraganta Media Profile", url: "https://docs.google.com/document/d/1M8SziAGlFiP7q4sRxWnRk_6m36OOpJxk/edit" },
      { title: "Supersox - 40 Under", url: "https://docs.google.com/document/d/1oYnz4SGVI99oR035jFSFeJLGGQxXIqXQ/edit" },
      { title: "SuperSox - Budget Quote", url: "https://docs.google.com/document/d/1e94eBnKoFyXkO6L1FcBoz8X_W67-9eYz/edit" },
      { title: "SuperSox - Company Profile", url: "https://docs.google.com/document/d/1u00qP1tFpjZd6iRrxOFzGsAVCSvQrO4b/edit" },
      { title: "VIP - Chaddi Pe Gaddi PR", url: "https://docs.google.com/document/d/17Z2Ig_kjDm1mkaKJefB0Fnt2mhOzKj-l/edit" },
      { title: "VIP - Kerala Blasters PR", url: "https://docs.google.com/document/d/1sD-irov1c-5TBOl-WgkaJC2uJQbT-zNa/edit" }
    ]
  },

  internal: {
    title: "Internal Communication",
    desc: "Where company messages find heart",
    img: "https://images.unsplash.com/photo-1521790361543-f645cf042ec4",
    items: [
      { title: "CACTUS - Caffeine Conversations", url: "https://drive.google.com/file/d/1KKQdtXdPWisKd27XvbTeNcqdrPhmS-cD/view" },
      { title: "HUL - Paani Ki Kahani", url: "https://drive.google.com/file/d/18KOttyIJNVkgxZYxRPEN272_qMrZph6y/view" },
      { title: "Radix - Rewards Mailer", url: "https://drive.google.com/file/d/1Qek6RQArCsRPaai3vp3bH7cnX06j_96_/view" },
      { title: "Writer Corp - LinkedIn Learning", url: "https://drive.google.com/file/d/1waE2dxOvyfmbvjkCVfJolysMh_x3XG8i/view" },
      { title: "ZEE - Voting Phase 7", url: "https://drive.google.com/file/d/1M4dnVIg3pRMsdrWNSUDjBdnQ9eO--soc/view" },
      { title: "ZEE5 - Blood Donation", url: "https://drive.google.com/file/d/1-IeQuy4uYwGOT4zZX8QlWrVF8nxqSyjx/view" }
    ]
  },

  chatbot: {
    title: "Chatbot Script",
    desc: "Conversations with character",
    img: "https://images.unsplash.com/photo-1684369175833-4b445ad6bfb5",
    items: [
      { title: "Jadika Cargo Agencies - Chatbot Script", url: "https://drive.google.com/file/d/1KfWd0byplIF0R9E8IOQX74oWs2LaUyBn/view" }
    ]
  },

  merch: {
    title: "Merchandise",
    desc: "Reppable designs",
    img: "https://images.unsplash.com/photo-1642294490133-632a5b3bd36a",
    items: [
      { title: "Never Grow Up - Don’t Assume Gender", url: "https://drive.google.com/file/d/1A5jottwIe6xYgq2OZqfRlI7ueiNRuueL/view" },
      { title: "Never Grow Up - Non Binary", url: "https://drive.google.com/file/d/181cS7yB_SDqcfaFrPblQ04JqxhhywxGW/view" },
      { title: "Never Grow Up - Genderfluid", url: "https://drive.google.com/file/d/1yTz-HoSs6eHwTvB4jkECSZUi9giNiHZZ/view" }
    ]
  }

};


/* ================= MODAL LOGIC ================= */

window.openModal = function(key) {
  const d = window.modalData[key];

  if (!d) {
    console.error("Missing modal data:", key);
    return;
  }

  document.getElementById("modal-title").innerText = d.title;
  document.getElementById("modal-desc").innerText = d.desc;
 document.getElementById("modal-img").src = d.img || "";

  const container = document.getElementById("modal-links");
  container.innerHTML = "";

  if (d.subsections) {
    d.subsections.forEach(sub => {
      const h = document.createElement("h4");
      h.innerText = sub.title;
      h.style.margin = "15px 0 5px";
      h.style.opacity = "0.6";
      container.appendChild(h);

      sub.items.forEach(item => {
        const a = document.createElement("a");
        a.href = item.url;
        a.target = "_blank";
        a.className = "modal-link";
a.innerHTML = `
  <span>${item.title}</span>
  <span class="arrow">→</span>
`;
        container.appendChild(a);
      });
    });
 } else {
  d.items.forEach(item => {
    const a = document.createElement("a");
    a.href = item.url;
    a.target = "_blank";
    a.className = "modal-link";

    a.innerHTML = `
      <span>${item.title}</span>
      <span class="arrow">→</span>
    `;

    container.appendChild(a);
  });
}

  document.getElementById("modal").style.display = "flex";
};


window.closeModal = function(e) {
  if (e.target.id === "modal") {
    document.getElementById("modal").style.display = "none";
  }
};
