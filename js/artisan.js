import { loadMockData, getQueryParam } from "./app.js";

(function initArtisanProfile() {
  const slug = getQueryParam("slug") || "amma-weaves";
  const { artisans, crafts } = loadMockData();
  const artisan = artisans.find((a) => a.slug === slug) || artisans[0];
  if (!artisan) return;

  const craft = crafts.find((c) => c.id === artisan.craft_primary_id);

  const nameEl = document.getElementById("artisan-name");
  const avatarEl = document.getElementById("artisan-avatar");
  const craftEl = document.getElementById("artisan-craft");
  const locEl = document.getElementById("artisan-location");
  const ratingEl = document.getElementById("artisan-rating");
  const bioEl = document.getElementById("artisan-bio");
  const techEl = document.getElementById("artisan-techniques");
  const galleryEl = document.getElementById("artisan-gallery");
  const contactEl = document.getElementById("artisan-contact");
  const socialEl = document.getElementById("artisan-social");

  if (nameEl) nameEl.textContent = artisan.full_name;
  if (avatarEl) {
    avatarEl.classList.remove("skeleton");
    avatarEl.style.backgroundImage = `url(${artisan.profile_image_url})`;
  }
  if (craftEl) craftEl.textContent = (artisan.crafts || []).join(", ") || "Craftsperson";
  if (locEl)
    locEl.textContent = [artisan.city, artisan.region, artisan.country]
      .filter(Boolean)
      .join(", ");
  if (ratingEl) ratingEl.textContent = `${artisan.rating.toFixed(1)} ★`;

  if (bioEl) {
    bioEl.textContent =
      "This is sample copy. In production, the biography, training lineage, and community role are loaded from the `artisans` table.";
  }
  if (techEl) {
    techEl.textContent =
      craft?.techniques ||
      "Techniques and process notes are linked from the related craft documentation.";
  }

  if (galleryEl) {
    const media = [
      "https://images.pexels.com/photos/2791918/pexels-photo-2791918.jpeg",
      "https://images.pexels.com/photos/210183/pexels-photo-210183.jpeg",
      "https://images.pexels.com/photos/2090901/pexels-photo-2090901.jpeg",
    ];
    media.forEach((url) => {
      const item = document.createElement("div");
      item.className = "gallery-item";
      item.style.backgroundImage = `url(${url})`;
      galleryEl.appendChild(item);
    });
  }

  if (contactEl) {
    contactEl.innerHTML = `
      Email: <a href="mailto:hello@example.org">hello@example.org</a><br/>
      Phone: +00 123 456 789
    `;
  }

  if (socialEl) {
    socialEl.innerHTML = `
      <a href="#">Instagram</a> · <a href="#">Facebook</a>
    `;
  }

  // Simple click handlers for support CTAs
  const supportButtons = [
    "btn-book-visit",
    "btn-open-shop",
    "btn-donate",
  ].map((id) => document.getElementById(id));

  supportButtons.forEach((btn) => {
    btn?.addEventListener("click", () => {
      alert("This would open a support option linked to the `support_options` table.");
    });
  });
})();




