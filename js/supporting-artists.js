// Supporting Artists Page - Demo Data and Functionality

// Demo artist data
const artistsData = [
  {
    id: 1,
    name: "Rajesh Kumar",
    profession: "Master Weaver",
    age: 58,
    location: "Varanasi, Uttar Pradesh",
    experience: "35 years",
    bio: "Rajesh has been weaving intricate Banarasi silk sarees for over three decades, preserving the traditional patterns passed down through generations.",
    skills: ["Silk Weaving", "Pattern Design", "Traditional Dyeing"],
    avatar: "RK",
    phone: "+91 98765 43210",
    role: "Cultural Heritage Preserver & Master Craftsman",
    quote: "Master weavers like Rajesh are the living threads that connect our past to our future. By supporting them, we ensure that the intricate art of Banarasi weaving continues to flourish, preserving centuries of cultural identity and providing sustainable livelihoods for artisan communities."
  },
  {
    id: 2,
    name: "Priya Sharma",
    profession: "Pottery Artisan",
    age: 32,
    location: "Khurja, Uttar Pradesh",
    experience: "12 years",
    bio: "Priya specializes in creating beautiful terracotta pottery using age-old techniques, blending traditional methods with contemporary designs.",
    skills: ["Terracotta", "Glazing", "Kiln Firing"],
    avatar: "PS",
    phone: "+91 91234 56789",
    role: "Traditional Craft Innovator & Community Mentor",
    quote: "Artisans like Priya bridge the gap between ancient wisdom and modern aesthetics. Supporting pottery artisans sustains eco-friendly practices, creates employment in rural areas, and keeps alive the art of handcrafted ceramics that tell stories of our cultural heritage."
  },
  {
    id: 3,
    name: "Mohammed Ali",
    profession: "Copper Craftsman",
    age: 45,
    location: "Moradabad, Uttar Pradesh",
    experience: "25 years",
    bio: "Mohammed creates stunning copper artifacts using traditional hammering and engraving techniques, each piece telling a story of heritage.",
    skills: ["Copper Engraving", "Metal Hammering", "Oxidation"],
    avatar: "MA",
    phone: "+91 92345 67890",
    role: "Metalwork Artisan & Heritage Storyteller",
    quote: "Copper craftsmen like Mohammed preserve the ancient art of metalworking that has been central to Indian culture for millennia. By supporting these artisans, we maintain traditional skills, support local economies, and ensure that the beauty of handcrafted metalwork continues to enrich our homes and heritage."
  },
  {
    id: 4,
    name: "Lakshmi Devi",
    profession: "Embroidery Artist",
    age: 67,
    location: "Lucknow, Uttar Pradesh",
    experience: "50 years",
    bio: "Lakshmi is a master of Chikankari embroidery, creating delicate hand-stitched patterns that have been her family's craft for generations.",
    skills: ["Chikankari", "Hand Embroidery", "Pattern Making"],
    avatar: "LD",
    phone: "+91 93456 78901",
    role: "Master Embroiderer & Cultural Guardian",
    quote: "Master embroiderers like Lakshmi are custodians of techniques passed down through generations. Supporting Chikankari artisans empowers women, preserves intricate handwork traditions, and ensures that the delicate art of needlework continues to adorn our textiles with stories of cultural richness."
  },
  {
    id: 5,
    name: "Arjun Mehta",
    profession: "Wood Carver",
    age: 29,
    location: "Saharanpur, Uttar Pradesh",
    experience: "8 years",
    bio: "Arjun creates intricate wooden sculptures and furniture pieces, combining traditional carving techniques with modern artistic vision.",
    skills: ["Wood Carving", "Furniture Making", "Sculpture"],
    avatar: "AM",
    phone: "+91 94567 89012",
    role: "Young Artisan & Traditional Craft Revivalist",
    quote: "Young artisans like Arjun represent the future of traditional crafts. By supporting them, we encourage the next generation to carry forward heritage skills, create sustainable livelihoods, and ensure that the art of wood carving evolves while maintaining its cultural essence."
  },
  {
    id: 6,
    name: "Sunita Patel",
    profession: "Block Print Artist",
    age: 41,
    location: "Jaipur, Rajasthan",
    experience: "18 years",
    bio: "Sunita practices the ancient art of block printing, creating vibrant textiles with hand-carved wooden blocks and natural dyes.",
    skills: ["Block Printing", "Natural Dyeing", "Textile Design"],
    avatar: "SP",
    phone: "+91 95678 90123",
    role: "Textile Artisan & Eco-Craft Advocate",
    quote: "Block print artists like Sunita combine traditional techniques with eco-friendly practices. Supporting them promotes sustainable fashion, preserves natural dyeing methods, and ensures that the vibrant patterns of our heritage continue to color our lives while protecting the environment."
  },
  {
    id: 7,
    name: "Vikram Singh",
    profession: "Brass Artisan",
    age: 52,
    location: "Aligarh, Uttar Pradesh",
    experience: "30 years",
    bio: "Vikram specializes in creating beautiful brass artifacts, from traditional utensils to decorative items, using time-honored casting methods.",
    skills: ["Brass Casting", "Metal Polishing", "Engraving"],
    avatar: "VS",
    phone: "+91 96789 01234",
    role: "Master Metalworker & Traditional Artisan",
    quote: "Brass artisans like Vikram keep alive the ancient craft of metal casting that has been integral to Indian households for centuries. Supporting them maintains traditional livelihoods, preserves functional art, and ensures that the warmth of handcrafted brass continues to grace our homes."
  },
  {
    id: 8,
    name: "Anjali Reddy",
    profession: "Jewelry Designer",
    age: 36,
    location: "Hyderabad, Telangana",
    experience: "14 years",
    bio: "Anjali creates exquisite traditional jewelry using techniques like Kundan, Meenakari, and Jadau, preserving ancient Indian jewelry-making traditions.",
    skills: ["Kundan Work", "Meenakari", "Jadau"],
    avatar: "AR",
    phone: "+91 97890 12345",
    role: "Traditional Jewelry Artisan & Cultural Heritage Keeper",
    quote: "Jewelry artisans like Anjali preserve techniques that have adorned Indian women for centuries. Supporting them maintains the intricate art of Kundan and Meenakari, creates skilled employment, and ensures that the sparkle of traditional craftsmanship continues to celebrate our cultural identity."
  },
  {
    id: 9,
    name: "Ramesh Iyer",
    profession: "Stone Carver",
    age: 61,
    location: "Agra, Uttar Pradesh",
    experience: "40 years",
    bio: "Ramesh is a master stone carver who creates intricate sculptures and architectural elements, working with marble and sandstone.",
    skills: ["Stone Carving", "Marble Work", "Sculpture"],
    avatar: "RI",
    phone: "+91 98901 23456",
    role: "Master Sculptor & Architectural Artisan",
    quote: "Stone carvers like Ramesh are the guardians of techniques that built our magnificent monuments. Supporting them preserves the skills that created the Taj Mahal, maintains architectural heritage, and ensures that the art of stone carving continues to shape our cultural landscape."
  },
  {
    id: 10,
    name: "Kavita Joshi",
    profession: "Textile Designer",
    age: 28,
    location: "Ahmedabad, Gujarat",
    experience: "6 years",
    bio: "Kavita designs and creates beautiful handwoven textiles, specializing in traditional patterns and natural fiber work.",
    skills: ["Handloom Weaving", "Textile Design", "Natural Fibers"],
    avatar: "KJ",
    phone: "+91 99012 34567",
    role: "Handloom Weaver & Sustainable Textile Advocate",
    quote: "Handloom weavers like Kavita are the backbone of sustainable fashion. Supporting them promotes eco-friendly textiles, preserves traditional weaving techniques, and ensures that the rhythmic beauty of handloom continues to clothe our culture while supporting rural livelihoods."
  },
  {
    id: 11,
    name: "Deepak Verma",
    profession: "Leather Craftsman",
    age: 44,
    location: "Kanpur, Uttar Pradesh",
    experience: "22 years",
    bio: "Deepak creates high-quality leather goods using traditional tanning and crafting methods, from bags to footwear.",
    skills: ["Leather Tanning", "Shoe Making", "Bag Crafting"],
    avatar: "DV",
    phone: "+91 90123 45678",
    role: "Master Leatherworker & Traditional Craftsman",
    quote: "Leather craftsmen like Deepak maintain traditional techniques that create durable, beautiful products. Supporting them preserves artisanal skills, creates quality handmade goods, and ensures that the craft of leatherworking continues to provide functional art for generations."
  },
  {
    id: 12,
    name: "Meera Nair",
    profession: "Bamboo Craft Artist",
    age: 38,
    location: "Kolkata, West Bengal",
    experience: "15 years",
    bio: "Meera creates sustainable and beautiful products from bamboo, combining traditional techniques with eco-friendly practices.",
    skills: ["Bamboo Weaving", "Eco Craft", "Basket Making"],
    avatar: "MN",
    phone: "+91 91234 56780",
    role: "Eco-Craft Artisan & Sustainability Champion",
    quote: "Bamboo craft artists like Meera represent the perfect blend of tradition and sustainability. Supporting them promotes eco-friendly alternatives, preserves natural material crafting, and ensures that sustainable practices continue to create beautiful, functional art while protecting our environment."
  }
];

// Initialize the page
(function initSupportingArtists() {
  const artistsGrid = document.getElementById("artists-grid");
  const searchInput = document.getElementById("search-input");
  const professionFilter = document.getElementById("profession-filter");
  const ageFilter = document.getElementById("age-filter");
  const noResults = document.getElementById("no-results");

  if (!artistsGrid) return;

  // Populate profession filter
  const professions = [...new Set(artistsData.map(artist => artist.profession))].sort();
  professions.forEach(profession => {
    const option = document.createElement("option");
    option.value = profession;
    option.textContent = profession;
    professionFilter.appendChild(option);
  });

  // Render artists
  function renderArtists(artists) {
    artistsGrid.innerHTML = "";

    if (artists.length === 0) {
      noResults.style.display = "block";
      return;
    }

    noResults.style.display = "none";

    artists.forEach(artist => {
      const card = createArtistCard(artist);
      artistsGrid.appendChild(card);
    });
  }

  // Create artist card element
  function createArtistCard(artist) {
    const card = document.createElement("article");
    card.className = "artist-card";
    card.style.cursor = "pointer";

    const ageCategory = getAgeCategory(artist.age);

    card.innerHTML = `
      <div class="artist-header">
        <div class="artist-avatar">${artist.avatar}</div>
        <div class="artist-info">
          <h3 class="artist-name">${artist.name}</h3>
          <div class="artist-profession">${artist.profession}</div>
          <div class="artist-meta">
            <span class="artist-meta-item">Age: ${artist.age}</span>
            <span class="artist-meta-item">${artist.location}</span>
          </div>
        </div>
      </div>
      <p class="artist-bio">${artist.bio}</p>
      <div class="artist-skills">
        ${artist.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join("")}
      </div>
      <div class="artist-footer">
        <div class="artist-experience">
          Experience: <strong>${artist.experience}</strong>
        </div>
        <div class="artist-location">${artist.location}</div>
      </div>
    `;

    // Add click handler to open modal
    card.addEventListener("click", () => showArtistModal(artist));

    return card;
  }

  // Show artist modal with details
  function showArtistModal(artist) {
    const modal = document.getElementById("artist-modal");
    const modalContent = document.getElementById("artist-modal-content");
    
    if (!modal || !modalContent) return;

    modalContent.innerHTML = `
      <div class="modal-header">
        <div class="modal-avatar-large">${artist.avatar}</div>
        <div class="modal-title-section">
          <h2 class="modal-artist-name">${artist.name}</h2>
          <div class="modal-profession">${artist.profession}</div>
        </div>
        <button class="modal-close" aria-label="Close modal">&times;</button>
      </div>
      
      <div class="modal-body">
        <div class="modal-section">
          <h3 class="modal-section-title">Contact Information</h3>
          <div class="modal-info-row">
            <span class="modal-info-label">Phone:</span>
            <a href="tel:${artist.phone.replace(/\s/g, '')}" class="modal-info-value modal-phone">${artist.phone}</a>
          </div>
          <div class="modal-info-row">
            <span class="modal-info-label">Location:</span>
            <span class="modal-info-value">${artist.location}</span>
          </div>
        </div>

        <div class="modal-section">
          <h3 class="modal-section-title">Role in Society</h3>
          <p class="modal-role">${artist.role}</p>
        </div>

        <div class="modal-section">
          <h3 class="modal-section-title">About</h3>
          <p class="modal-bio">${artist.bio}</p>
        </div>

        <div class="modal-section">
          <h3 class="modal-section-title">Experience & Skills</h3>
          <div class="modal-experience">
            <strong>Experience:</strong> ${artist.experience}
          </div>
          <div class="modal-skills">
            ${artist.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join("")}
          </div>
        </div>

        <div class="modal-section modal-quote-section">
          <div class="quote-icon">"</div>
          <p class="modal-quote">${artist.quote}</p>
        </div>
      </div>
    `;

    // Show modal
    modal.classList.add("active");
    document.body.style.overflow = "hidden";

    // Close button handler
    const closeBtn = modalContent.querySelector(".modal-close");
    if (closeBtn) {
      closeBtn.addEventListener("click", closeArtistModal);
    }

    // Close on backdrop click
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeArtistModal();
      }
    });

    // Close on Escape key
    const escapeHandler = (e) => {
      if (e.key === "Escape") {
        closeArtistModal();
        document.removeEventListener("keydown", escapeHandler);
      }
    };
    document.addEventListener("keydown", escapeHandler);
  }

  // Close artist modal
  function closeArtistModal() {
    const modal = document.getElementById("artist-modal");
    if (modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  // Get age category
  function getAgeCategory(age) {
    if (age < 30) return "young";
    if (age < 50) return "mid";
    return "senior";
  }

  // Filter artists
  function filterArtists() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedProfession = professionFilter.value;
    const selectedAge = ageFilter.value;

    const filtered = artistsData.filter(artist => {
      // Search filter
      const matchesSearch = !searchTerm || 
        artist.name.toLowerCase().includes(searchTerm) ||
        artist.profession.toLowerCase().includes(searchTerm) ||
        artist.location.toLowerCase().includes(searchTerm) ||
        artist.skills.some(skill => skill.toLowerCase().includes(searchTerm)) ||
        artist.bio.toLowerCase().includes(searchTerm);

      // Profession filter
      const matchesProfession = !selectedProfession || artist.profession === selectedProfession;

      // Age filter
      const ageCategory = getAgeCategory(artist.age);
      const matchesAge = !selectedAge || ageCategory === selectedAge;

      return matchesSearch && matchesProfession && matchesAge;
    });

    renderArtists(filtered);
  }

  // Event listeners
  searchInput.addEventListener("input", filterArtists);
  professionFilter.addEventListener("change", filterArtists);
  ageFilter.addEventListener("change", filterArtists);

  // Initial render
  renderArtists(artistsData);
})();

