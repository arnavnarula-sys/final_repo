import { loadMockData } from "./app.js";

(function initCrafts() {
  const { crafts } = loadMockData();
  const listEl = document.getElementById("craft-list");
  if (!listEl) return;

  const titleEl = document.getElementById("craft-title");
  const summaryEl = document.getElementById("craft-summary");
  const techEl = document.getElementById("craft-techniques");
  const matEl = document.getElementById("craft-materials");
  const histEl = document.getElementById("craft-history");
  const searchEl = document.getElementById("craft-search");

  function renderList(filter = "") {
    listEl.innerHTML = "";
    const term = filter.toLowerCase();
    crafts
      .filter((c) => {
        if (!term) return true;
        return (
          c.name.toLowerCase().includes(term) ||
          (c.category || "").toLowerCase().includes(term) ||
          (c.summary || "").toLowerCase().includes(term)
        );
      })
      .forEach((craft) => {
        const item = document.createElement("button");
        item.type = "button";
        item.className = "btn-ghost";
        item.style.display = "block";
        item.style.width = "100%";
        item.style.justifyContent = "space-between";
        item.style.marginBottom = "4px";
        item.textContent = craft.name;
        item.addEventListener("click", () => showCraft(craft));
        listEl.appendChild(item);
      });
  }

  function showCraft(craft) {
    if (titleEl) titleEl.textContent = craft.name;
    if (summaryEl) summaryEl.textContent = craft.summary;
    if (techEl) techEl.textContent = craft.techniques;
    if (matEl) matEl.textContent = craft.materials;
    if (histEl) histEl.textContent = craft.history;
  }

  searchEl?.addEventListener("input", () => {
    renderList(searchEl.value || "");
  });

  renderList();
  if (crafts[0]) showCraft(crafts[0]);
})();




