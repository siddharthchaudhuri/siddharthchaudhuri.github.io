document.addEventListener("DOMContentLoaded", () => {

  const loadSection = async (id, file) => {
    try {
      const res = await fetch(file);
      const html = await res.text();
      document.getElementById(id).innerHTML = html;
    } catch (err) {
      console.error(`Error loading ${file}:`, err);
    }
  };

  // Load all sections ONCE
  loadSection("hero", "hero.html");
  loadSection("portfolio", "portfolio.html");
  loadSection("contact", "contact.html");
  loadSection("footer", "footer.html");

});
