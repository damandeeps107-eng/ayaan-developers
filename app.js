// Ayaan Developers - Premium Interactive Application Logic v3.2

document.addEventListener('DOMContentLoaded', () => {
  initTimeSimulator();
  initPropertiesFilter();
  initFloorPlanExplorer();
  initMaterialBoard();
  initHomeConfigurator();
  initNeighborhoodExplorer();
  initReviewsCarousel();
  initContactForm();
  setupNavbarScroll();
});

/* ----------------------------------------------------
   Helper Utilities
   ---------------------------------------------------- */
function setupNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

/* ----------------------------------------------------
   1. Time of Day Lighting Simulator (Image Slideshow)
   ---------------------------------------------------- */
function initTimeSimulator() {
  const bgSlides = {
    dawn: document.getElementById('bg-dawn'),
    golden: document.getElementById('bg-golden'),
    dusk: document.getElementById('bg-dusk'),
    night: document.getElementById('bg-night'),
    interior: document.getElementById('bg-interior'),
    pool: document.getElementById('bg-pool')
  };
  
  const heroOverlay = document.getElementById('heroOverlay');
  const timeSlider = document.getElementById('timeRange');
  const timeLabel = document.getElementById('simulatedTime');
  const timeName = document.getElementById('simulatedTimeName');
  const timeBtns = document.querySelectorAll('.time-btn');

  const times = [
    { key: 'dawn', label: '06:00 AM', name: 'Dawn Mist' },
    { key: 'golden', label: '05:30 PM', name: 'Golden Hour' },
    { key: 'dusk', label: '08:00 PM', name: 'Twilight Blue' },
    { key: 'night', label: '11:30 PM', name: 'Starry Midnight' },
    { key: 'interior', label: '07:15 PM', name: 'Luxury Sunset Lounge' },
    { key: 'pool', label: '08:30 PM', name: 'Infinity Pool Twilight' }
  ];

  let slideshowInterval;
  let isAutoPlaying = true;

  function updateTime(index) {
    const time = times[index];
    
    // Update active button state (only for the first 4 standard time buttons)
    timeBtns.forEach((btn, idx) => {
      if (idx === index) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update Slider Value
    timeSlider.value = index;

    // Update Text labels
    timeLabel.textContent = time.label;
    timeName.textContent = time.name;

    // Update Sun/Moon Icon
    const sunIcon = document.getElementById('sun-icon');
    if (sunIcon) {
      if (time.key === 'dawn') {
        sunIcon.className = 'fa-solid fa-cloud-sun';
      } else if (time.key === 'golden') {
        sunIcon.className = 'fa-solid fa-sun';
      } else if (time.key === 'dusk') {
        sunIcon.className = 'fa-solid fa-moon';
      } else if (time.key === 'night') {
        sunIcon.className = 'fa-solid fa-star';
      } else if (time.key === 'interior') {
        sunIcon.className = 'fa-solid fa-couch';
      } else if (time.key === 'pool') {
        sunIcon.className = 'fa-solid fa-water';
      }
    }

    // Transition Background Slides (Fade Transition)
    Object.keys(bgSlides).forEach(key => {
      if (bgSlides[key]) {
        if (key === time.key) {
          bgSlides[key].classList.add('active');
        } else {
          bgSlides[key].classList.remove('active');
        }
      }
    });

    // Transition overlay color-blends (map custom slides to matching light atmospheres)
    if (heroOverlay) {
      const blendKey = time.key === 'interior' ? 'golden' : time.key === 'pool' ? 'dusk' : time.key;
      heroOverlay.className = 'hero-overlay time-overlay-' + blendKey;
    }
  }

  function startSlideshow() {
    slideshowInterval = setInterval(() => {
      if (!isAutoPlaying) return;
      let nextIndex = (parseInt(timeSlider.value) + 1) % times.length;
      updateTime(nextIndex);
    }, 2800); // Accelerated to 2.8 seconds
  }

  function stopSlideshow() {
    isAutoPlaying = false;
    clearInterval(slideshowInterval);
  }

  // Slider interaction pauses auto-slideshow
  timeSlider.addEventListener('input', (e) => {
    stopSlideshow();
    updateTime(parseInt(e.target.value));
  });

  // Buttons interaction pauses auto-slideshow
  timeBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      stopSlideshow();
      updateTime(index);
    });
  });

  // Start slideshow automatically
  updateTime(1); // Set Golden Hour first
  startSlideshow();
}

/* ----------------------------------------------------
   2. Properties Directory (Price-Free)
   ---------------------------------------------------- */
function initPropertiesFilter() {
  const grid = document.getElementById('propertiesGrid');
  const filters = document.querySelectorAll('.filter-tab');

  function renderListings(typeFilter = 'all') {
    grid.innerHTML = '';
    
    const filtered = typeFilter === 'all' 
      ? propertiesData 
      : propertiesData.filter(p => p.type.toLowerCase() === typeFilter.toLowerCase());

    filtered.forEach(prop => {
      const card = document.createElement('article');
      card.className = 'property-card';
      card.innerHTML = `
        <div class="card-img-wrapper">
          <img class="card-img" src="${prop.image}" alt="${prop.title}" loading="lazy">
          <div class="card-badge">${prop.tag}</div>
        </div>
        <div class="card-body">
          <div class="card-meta">
            <span class="card-location"><i class="fa-solid fa-location-dot"></i> ${prop.location}</span>
          </div>
          <h3 class="card-title">${prop.title}</h3>
          <div class="card-specs">
            <div class="card-spec-item">
              <i class="fa-solid fa-bed"></i>
              <span>${prop.beds} Beds</span>
            </div>
            <div class="card-spec-item">
              <i class="fa-solid fa-bath"></i>
              <span>${prop.baths} Baths</span>
            </div>
            <div class="card-spec-item">
              <i class="fa-solid fa-maximize"></i>
              <span>${prop.sqft.toLocaleString()} sq ft</span>
            </div>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  filters.forEach(tab => {
    tab.addEventListener('click', (e) => {
      filters.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const category = e.target.getAttribute('data-filter');
      renderListings(category);
    });
  });

  // Initial render
  renderListings('all');
}

/* ----------------------------------------------------
   3. Interactive Floor Plan Explorer
   ---------------------------------------------------- */
function initFloorPlanExplorer() {
  const blueprintRooms = document.querySelectorAll('.blueprint-room');
  const roomImg = document.getElementById('roomImg');
  const roomSize = document.getElementById('roomSize');
  const roomName = document.getElementById('roomName');
  const roomDesc = document.getElementById('roomDesc');

  const auraRooms = propertiesData[0].rooms;

  function selectRoom(roomId) {
    const data = auraRooms.find(r => r.id === roomId);
    if (!data) return;

    blueprintRooms.forEach(room => {
      if (room.getAttribute('data-room') === roomId) {
        room.classList.add('active');
      } else {
        room.classList.remove('active');
      }
    });

    roomImg.style.opacity = '0';
    setTimeout(() => {
      roomImg.src = data.image;
      roomSize.textContent = data.size;
      roomName.textContent = data.name;
      roomDesc.textContent = data.description;
      roomImg.style.opacity = '1';
    }, 200);
  }

  blueprintRooms.forEach(room => {
    room.addEventListener('click', () => {
      const roomId = room.getAttribute('data-room');
      selectRoom(roomId);
    });
  });

  if (auraRooms.length > 0) {
    selectRoom(auraRooms[0].id);
  }
}

/* ----------------------------------------------------
   4. Sourcing Material Board
   ---------------------------------------------------- */
function initMaterialBoard() {
  const deck = document.getElementById('materialDeck');
  const modal = document.getElementById('materialModal');
  const closeModal = document.getElementById('closeMatModal');
  
  const modalImg = document.getElementById('matModalImg');
  const modalName = document.getElementById('matModalName');
  const modalOrigin = document.getElementById('matModalOrigin');
  const modalDesc = document.getElementById('matModalDesc');
  const modalProps = document.getElementById('matModalProps');

  materialsData.forEach(mat => {
    const card = document.createElement('div');
    card.className = 'material-card';
    card.setAttribute('data-id', mat.id);
    card.innerHTML = `
      <div class="material-texture">
        <img src="${mat.image}" alt="${mat.name}" loading="lazy">
      </div>
      <div class="material-meta">
        <span class="material-type">${mat.type}</span>
        <span class="material-sustain"><i class="fa-solid fa-leaf"></i> ${mat.sustainability}</span>
      </div>
      <h4 class="material-name">${mat.name}</h4>
      <div class="material-card-cta">Explore Details <i class="fa-solid fa-arrow-right-long"></i></div>
    `;
    
    card.addEventListener('click', () => {
      openDetailsModal(mat);
    });

    deck.appendChild(card);
  });

  function openDetailsModal(material) {
    modalImg.src = material.image;
    modalName.textContent = material.name;
    modalOrigin.textContent = `Origin: ${material.origin} | Sustainable: ${material.sustainability}`;
    modalDesc.textContent = material.description;

    modalProps.innerHTML = '';
    material.properties.forEach(prop => {
      const li = document.createElement('div');
      li.className = 'mat-prop-item';
      li.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${prop}</span>`;
      modalProps.appendChild(li);
    });

    modal.classList.add('active');
  }

  closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });
}

/* ----------------------------------------------------
   5. Neighborhood Blueprint Map
   ---------------------------------------------------- */
function initNeighborhoodExplorer() {
  const mapFilters = document.querySelectorAll('.map-filter-btn');
  const listContainer = document.getElementById('poiList');
  const canvas = document.getElementById('mapCanvas');

  const coordsData = {
    dining: [
      { x: 300, y: 150, name: "L'Ambroisie", dist: "1.2 miles" },
      { x: 420, y: 380, name: "The Cliffside Club", dist: "0.4 miles" },
      { x: 680, y: 240, name: "Vintage Lounge & Cellar", dist: "0.8 miles" }
    ],
    transit: [
      { x: 180, y: 480, name: "Malibu Private Heliport", dist: "2.1 miles" },
      { x: 850, y: 120, name: "Marina Yacht Slip 44", dist: "3.5 miles" },
      { x: 920, y: 520, name: "Westside Airfield", dist: "12.0 miles" }
    ],
    lifestyle: [
      { x: 740, y: 410, name: "Pacific Riviera Yacht Club", dist: "1.5 miles" },
      { x: 480, y: 220, name: "The Sanctuary Wellness", dist: "0.6 miles" },
      { x: 260, y: 540, name: "Oceanic Golf Course", dist: "4.2 miles" }
    ],
    education: [
      { x: 610, y: 180, name: "Riviera Academy", dist: "2.8 miles" },
      { x: 350, y: 310, name: "Malibu Prep School", dist: "1.9 miles" }
    ]
  };

  function renderLayer(category) {
    const dynamicMarkers = canvas.querySelectorAll('.dynamic-marker');
    dynamicMarkers.forEach(m => m.remove());

    listContainer.innerHTML = '';
    
    const items = coordsData[category];
    const originalData = neighborhoodData[category];

    items.forEach((item, idx) => {
      const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.setAttribute('class', 'map-marker-poi dynamic-marker');
      g.setAttribute('data-index', idx);
      
      g.innerHTML = `
        <circle cx="${item.x}" cy="${item.y}" r="6" />
        <circle cx="${item.x}" cy="${item.y}" r="14" fill="none" stroke="var(--accent-gold)" stroke-width="0" style="opacity:0.3;" />
        <text x="${item.x}" y="${item.y - 12}" text-anchor="middle">${item.name}</text>
      `;

      canvas.appendChild(g);

      const orig = originalData[idx];
      const row = document.createElement('div');
      row.className = 'map-poi-row';
      row.innerHTML = `
        <div class="poi-title">${orig.name}</div>
        <div class="poi-distance">${orig.distance}</div>
      `;

      row.addEventListener('mouseenter', () => highlightMarker(g, true));
      row.addEventListener('mouseleave', () => highlightMarker(g, false));
      
      g.addEventListener('mouseenter', () => highlightListItem(row, true));
      g.addEventListener('mouseleave', () => highlightListItem(row, false));

      listContainer.appendChild(row);
    });
  }

  function highlightMarker(groupElement, highlight) {
    const circles = groupElement.querySelectorAll('circle');
    const text = groupElement.querySelector('text');
    if (highlight) {
      circles[0].style.fill = 'var(--text-primary)';
      circles[1].setAttribute('stroke-width', '2px');
      circles[1].style.animation = 'ping 1s infinite';
      text.style.fill = 'var(--text-primary)';
      text.style.fontWeight = '600';
    } else {
      circles[0].style.fill = 'var(--accent-gold)';
      circles[1].setAttribute('stroke-width', '0');
      text.style.fill = 'var(--text-muted)';
      text.style.fontWeight = '400';
    }
  }

  function highlightListItem(itemRow, highlight) {
    if (highlight) {
      itemRow.style.borderColor = 'var(--accent-gold)';
      itemRow.querySelector('.poi-title').style.color = 'var(--accent-gold)';
    } else {
      itemRow.style.borderColor = 'var(--border-muted)';
      itemRow.querySelector('.poi-title').style.color = 'var(--text-primary)';
    }
  }

  mapFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      mapFilters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-category');
      renderLayer(cat);
    });
  });

  renderLayer('dining');
}

/* ----------------------------------------------------
   6. Custom Build Configurator (Price-Free)
   ---------------------------------------------------- */
function initHomeConfigurator() {
  const layoutOpts = document.querySelectorAll('.config-option[data-type="layout"]');
  const facadeOpts = document.querySelectorAll('.config-option[data-type="facade"]');
  const featureRows = document.querySelectorAll('.config-feature-row');

  // DOM Summary elements
  const sumLayout = document.getElementById('sumLayout');
  const sumFacade = document.getElementById('sumFacade');
  const sumFeaturesList = document.getElementById('sumFeaturesList');

  const prefillBanner = document.getElementById('configPrefillBanner');
  const prefillSummary = document.getElementById('prefillSummary');
  const clearPrefillBtn = document.getElementById('clearPrefill');
  const contactMsg = document.getElementById('contactMessage');

  let selectedLayout = configuratorData.layouts[0];
  let selectedFacade = configuratorData.facades[0];
  let selectedFeatures = [];

  function updateConfiguration() {
    // Update Layout Summary
    sumLayout.textContent = selectedLayout.name;

    // Update Facade Summary
    sumFacade.textContent = selectedFacade.name;

    // Update Features Summary
    sumFeaturesList.innerHTML = '';
    selectedFeatures.forEach(feat => {
      const div = document.createElement('div');
      div.className = 'summary-item';
      div.innerHTML = `
        <span class="summary-item-label">${feat.name}</span>
        <span class="summary-item-val">Custom Add</span>
      `;
      sumFeaturesList.appendChild(div);
    });

    if (selectedFeatures.length === 0) {
      sumFeaturesList.innerHTML = `<div class="summary-item"><span class="summary-item-label" style="font-style:italic;">No custom upgrades selected</span></div>`;
    }
  }

  layoutOpts.forEach(opt => {
    opt.addEventListener('click', () => {
      layoutOpts.forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      const id = opt.getAttribute('data-id');
      selectedLayout = configuratorData.layouts.find(l => l.id === id);
      updateConfiguration();
    });
  });

  facadeOpts.forEach(opt => {
    opt.addEventListener('click', () => {
      facadeOpts.forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      const id = opt.getAttribute('data-id');
      selectedFacade = configuratorData.facades.find(f => f.id === id);
      updateConfiguration();
    });
  });

  featureRows.forEach(row => {
    row.addEventListener('click', () => {
      const id = row.getAttribute('data-id');
      const featObj = configuratorData.features.find(f => f.id === id);
      
      if (row.classList.contains('selected')) {
        row.classList.remove('selected');
        selectedFeatures = selectedFeatures.filter(f => f.id !== id);
      } else {
        row.classList.add('selected');
        selectedFeatures.push(featObj);
      }
      updateConfiguration();
    });
  });

  const prefillCta = document.getElementById('prefillContactBtn');
  prefillCta.addEventListener('click', () => {
    const listFeaturesNames = selectedFeatures.map(f => f.name).join(', ');
    const textSummary = `Dream Home Configuration:
- Design Layout: ${selectedLayout.name}
- Exterior Facade: ${selectedFacade.name}
- Selected Upgrades: ${listFeaturesNames || 'None'}`;

    contactMsg.value = textSummary;
    prefillSummary.textContent = `${selectedLayout.name} | ${selectedFacade.name} | ${selectedFeatures.length} Customizations`;
    prefillBanner.classList.add('active');
    
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  });

  clearPrefillBtn.addEventListener('click', () => {
    contactMsg.value = '';
    prefillBanner.classList.remove('active');
  });

  updateConfiguration();
}

/* ----------------------------------------------------
   7. Testimonials Review Slider
   ---------------------------------------------------- */
function initReviewsCarousel() {
  const track = document.querySelector('.review-slide-track');
  const slides = document.querySelectorAll('.review-slide');
  const prevBtn = document.getElementById('prevReviewBtn');
  const nextBtn = document.getElementById('nextReviewBtn');

  let currentSlide = 0;
  const totalSlides = slides.length;

  function updateSlider() {
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
  });

  prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
  });
}

/* ----------------------------------------------------
   8. Inquiries Form Handler
   ---------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;

    submitBtn.style.width = `${submitBtn.offsetWidth}px`;
    submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Transmission Secure...`;
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i> Inquiry Logged`;
      submitBtn.style.background = '#22c55e';
      submitBtn.style.color = '#ffffff';

      setTimeout(() => {
        form.reset();
        document.getElementById('configPrefillBanner').classList.remove('active');
        submitBtn.innerHTML = originalText;
        submitBtn.style.background = 'var(--accent-gold)';
        submitBtn.style.color = '#ffffff';
        submitBtn.disabled = false;
        
        alert('Thank you for contacting Ayaan Developers. A Portfolio Director will review your design requirements and reach out within 24 hours.');
      }, 3000);
    }, 2000);
  });
}
