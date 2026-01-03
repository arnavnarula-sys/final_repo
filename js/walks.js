import { loadMockData } from "./app.js";

(function initWalks() {
  const { walks } = loadMockData();
  const listEl = document.getElementById("walk-list");
  const titleEl = document.getElementById("walk-title");
  const summaryEl = document.getElementById("walk-summary");
  const metaEl = document.getElementById("walk-meta");
  const launchEl = document.getElementById("walk-launch");

  if (!listEl) return;

  function renderList() {
    listEl.innerHTML = "";
    walks.forEach((walk) => {
      const card = document.createElement("article");
      card.className = "card-walk";

      const header = document.createElement("div");
      header.className = "card-walk-header";
      if (walk.hero_image_url) {
        header.style.backgroundImage = `url(${walk.hero_image_url})`;
      }
      const badge = document.createElement("div");
      badge.className = "card-walk-badge";
      badge.textContent = `${walk.stops} AR stops`;
      header.appendChild(badge);

      const title = document.createElement("h3");
      title.textContent = walk.title;

      const summary = document.createElement("p");
      summary.textContent = walk.summary;

      const meta = document.createElement("div");
      meta.className = "walk-meta-row";
      meta.innerHTML = `
        <span class="pill-soft">${walk.city}</span>
        <span class="pill-soft">${walk.distance_km.toFixed(1)} km</span>
        <span class="pill-soft">${walk.duration_min} minutes</span>
      `;

      card.appendChild(header);
      card.appendChild(title);
      card.appendChild(summary);
      card.appendChild(meta);

      card.addEventListener("click", () => showDetail(walk));
      listEl.appendChild(card);
    });
  }

  function showDetail(walk) {
    if (titleEl) titleEl.textContent = walk.title;
    if (summaryEl) summaryEl.textContent = walk.summary;
    if (metaEl) {
      metaEl.innerHTML = `
        <span class="pill-soft">${walk.city}</span>
        <span class="pill-soft">${walk.distance_km.toFixed(1)} km</span>
        <span class="pill-soft">${walk.duration_min} minutes</span>
        <span class="pill-soft">${walk.stops} AR stops</span>
      `;
    }
    if (launchEl) {
      launchEl.href = `ar-viewer.html?walkId=${encodeURIComponent(walk.slug)}`;
    }
  }

  renderList();
  if (walks[0]) showDetail(walks[0]);
})();

// Sketchfab Slider Functionality
(function initSketchfabSlider() {
  const slides = document.querySelectorAll('.sketchfab-slide');
  const dots = document.querySelectorAll('.slider-dot');
  const prevBtn = document.querySelector('.slider-prev');
  const nextBtn = document.querySelector('.slider-next');
  
  if (slides.length === 0) return;

  let currentSlide = 0;
  const totalSlides = slides.length;

  function showSlide(index) {
    // Ensure index is within bounds
    if (index < 0) {
      currentSlide = totalSlides - 1;
    } else if (index >= totalSlides) {
      currentSlide = 0;
    } else {
      currentSlide = index;
    }

    // Update slides
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentSlide);
    });

    // Update dots
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  // Event listeners
  if (nextBtn) {
    nextBtn.addEventListener('click', nextSlide);
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', prevSlide);
  }

  // Dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
    });
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    const sliderContainer = document.querySelector('.sketchfab-slider-container');
    if (!sliderContainer) return;
    
    // Only handle keyboard if slider is visible (check if any parent is visible)
    const isVisible = sliderContainer.offsetParent !== null;
    if (!isVisible) return;

    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextSlide();
    }
  });

  // Auto-play (optional - can be disabled)
  // Uncomment the lines below if you want auto-play
  // let autoPlayInterval = setInterval(nextSlide, 5000);
  // 
  // // Pause on hover
  // const sliderContainer = document.querySelector('.sketchfab-slider-container');
  // if (sliderContainer) {
  //   sliderContainer.addEventListener('mouseenter', () => {
  //     clearInterval(autoPlayInterval);
  //   });
  //   sliderContainer.addEventListener('mouseleave', () => {
  //     autoPlayInterval = setInterval(nextSlide, 5000);
  //   });
  // }

  // Initialize first slide
  showSlide(0);
})();




