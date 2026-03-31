document.addEventListener("DOMContentLoaded", () => {

  const loadSection = async (id, file) => {
    try {
      const res = await fetch("./" + file);
      if (!res.ok) throw new Error("Not found");
      const html = await res.text();
      document.getElementById(id).innerHTML = html;
    } catch (err) {
      console.error(`Error loading ${file}:`, err);
    }
  };

  // ONLY load hero for now
  loadSection("hero", "hero.html");

});
