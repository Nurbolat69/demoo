/**
 * DIGITAL MUSEUM ENGINE & CAMERA ARCHITECTURE
 * «Спандияр Көбеев – ұлт ағартушысының өмір жолы»
 */

document.addEventListener('DOMContentLoaded', () => {
  // App State
  let currentLang = 'kz';
  let activeIndex = 0;
  let isTouring = false;
  let tourTimer = null;

  // DOM Handles
  const worldCanvas = document.getElementById('worldCanvas');
  const roadSvgIntegrated = document.getElementById('roadSvgIntegrated');
  const btnJourney = document.getElementById('btnJourney');
  const langKz = document.getElementById('langKz');
  const langRu = document.getElementById('langRu');

  // Modal Handles
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalHero = document.getElementById('modalHero');
  const modalPeriodBadge = document.getElementById('modalPeriodBadge');
  const modalTitle = document.getElementById('modalTitle');
  const modalSubtitle = document.getElementById('modalSubtitle');
  const modalBody = document.getElementById('modalBody');

  // Road Curve Key Points in Viewport Percentages matching landmarks in forest landscape
  const naturalRoadControlPoints = [
    { x: 7, y: 44 },
    { x: 14, y: 38 }, // Station 1: Yurts on hill (safe from left edge!)
    { x: 28, y: 44 },
    { x: 44, y: 53 }, // Station 2: Wooden 2-story school
    { x: 56, y: 64 }, // Station 3: School crossroads & fence
    { x: 67, y: 72 },
    { x: 78, y: 78 }, // Station 4: Foreground table with books
    { x: 70, y: 62 },
    { x: 74, y: 56 }, // Station 5: Forest road & wooden bridge
    { x: 84, y: 52 },
    { x: 91, y: 49 }, // Station 6: Riverbank yurts & forest homestead
    { x: 96, y: 52 }
  ];

  // Initialize Digital Museum
  initMuseum();

  function initMuseum() {
    drawIntegratedCaravanRoad();
    renderStationNodes();
    setupEventListeners();
    focusStation(0);
  }

  // Draw Natural Steppe Road SVG with Earth Texture and Glowing Journey Trace
  function drawIntegratedCaravanRoad() {
    if (!roadSvgIntegrated) return;

    const w = 1000;
    const h = 600;

    const pts = naturalRoadControlPoints.map(p => ({
      x: (p.x / 100) * w,
      y: (p.y / 100) * h
    }));

    // Smooth spline path
    let pathD = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 1; i < pts.length - 1; i++) {
      const xc = (pts[i].x + pts[i + 1].x) / 2;
      const yc = (pts[i].y + pts[i + 1].y) / 2;
      pathD += ` Q ${pts[i].x} ${pts[i].y}, ${xc} ${yc}`;
    }
    pathD += ` L ${pts[pts.length - 1].x} ${pts[pts.length - 1].y}`;

    roadSvgIntegrated.setAttribute('viewBox', `0 0 ${w} ${h}`);
    roadSvgIntegrated.setAttribute('preserveAspectRatio', 'none');

    roadSvgIntegrated.innerHTML = `
      <defs>
        <filter id="roadSoftShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
        <filter id="roadGoldGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="7" result="glow" />
          <feComposite in="SourceGraphic" in2="glow" operator="over" />
        </filter>
        <linearGradient id="caravanGoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#aa851c" stop-opacity="0.3" />
          <stop offset="20%" stop-color="#f3e5ab" stop-opacity="0.9" />
          <stop offset="50%" stop-color="#d4af37" stop-opacity="1" />
          <stop offset="80%" stop-color="#f3e5ab" stop-opacity="0.9" />
          <stop offset="100%" stop-color="#aa851c" stop-opacity="0.3" />
        </linearGradient>
      </defs>

      <!-- Soil / Terrain Soft Ground Shadow -->
      <path d="${pathD}" fill="none" stroke="rgba(14, 9, 5, 0.45)" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" filter="url(#roadSoftShadow)" />

      <!-- Natural Steppe Dirt Path Base Texture -->
      <path d="${pathD}" fill="none" stroke="rgba(75, 54, 35, 0.35)" stroke-width="11" stroke-linecap="round" stroke-linejoin="round" />

      <!-- Caravan Rut Texture -->
      <path d="${pathD}" fill="none" stroke="rgba(40, 26, 16, 0.25)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3, 14" />

      <!-- Golden Dust Trail (Integrated Path) -->
      <path d="${pathD}" fill="none" stroke="#d4af37" stroke-width="1.8" stroke-dasharray="6, 16" stroke-linecap="round" stroke-linejoin="round" opacity="0.6" />

      <!-- Interactive Highlight Glow Trail on Hover/Tour -->
      <path id="activeCaravanTrace" d="${pathD}" fill="none" stroke="url(#caravanGoldGrad)" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" opacity="0" filter="url(#roadGoldGlow)" style="transition: opacity 0.5s ease;" />
    `;
  }

  // Render 6 Station Nodes on the Photorealistic Landscape Road
  function renderStationNodes() {
    document.querySelectorAll('.station-node').forEach(n => n.remove());

    MUSEUM_STATIONS.forEach((st, idx) => {
      const node = document.createElement('div');
      node.className = `station-node ${idx === 0 ? 'active' : ''}`;
      node.id = `stationNode_${st.id}`;
      node.style.left = `${st.posX}%`;
      node.style.top = `${st.posY}%`;

      const title = currentLang === 'kz' ? st.titleKaz : st.titleRu;
      const subtitle = currentLang === 'kz' ? st.subtitleKaz : st.subtitleRu;

      node.innerHTML = `
        <div class="station-badge">
          <div class="station-badge__pulse"></div>
          <span>${st.number}</span>
        </div>
        <div class="station-tag">
          <div class="station-tag-title">${title}</div>
          <div class="station-tag-sub">${subtitle}</div>
        </div>
      `;

      // Hover Effects: Highlight Road Path
      node.addEventListener('mouseenter', () => {
        const trace = document.getElementById('activeCaravanTrace');
        if (trace) trace.style.opacity = '0.85';
        focusStation(idx);
      });

      node.addEventListener('mouseleave', () => {
        const trace = document.getElementById('activeCaravanTrace');
        if (trace && !isTouring) trace.style.opacity = '0';
      });

      // Click: Focus station & open museum modal
      node.addEventListener('click', (e) => {
        e.stopPropagation();
        focusStation(idx);
        openMuseumModal(st.id);
      });

      worldCanvas.appendChild(node);
    });
  }

  // Camera Pan & Zoom onto Focal Station Scene
  function focusStation(index) {
    activeIndex = Math.max(0, Math.min(MUSEUM_STATIONS.length - 1, index));
    const st = MUSEUM_STATIONS[activeIndex];

    // Highlight Node UI
    document.querySelectorAll('.station-node').forEach((n, i) => {
      if (i === activeIndex) n.classList.add('active');
      else n.classList.remove('active');
    });

    // Gentle camera motion that NEVER pushes edge stations out of view
    const panX = (50 - st.posX) * 0.04;
    const panY = (50 - st.posY) * 0.04;
    const zoomScale = 1.03;

    worldCanvas.style.transform = `translate(${panX}%, ${panY}%) scale(${zoomScale})`;
  }

  // Setup UI Event Listeners
  function setupEventListeners() {
    if (btnJourney) {
      btnJourney.addEventListener('click', toggleJourneyMode);
    }

    if (langKz) {
      langKz.addEventListener('click', () => {
        if (currentLang !== 'kz') {
          currentLang = 'kz';
          langKz.classList.add('active');
          if (langRu) langRu.classList.remove('active');
          updateLanguageUI();
        }
      });
    }

    if (langRu) {
      langRu.addEventListener('click', () => {
        if (currentLang !== 'ru') {
          currentLang = 'ru';
          langRu.classList.add('active');
          if (langKz) langKz.classList.remove('active');
          updateLanguageUI();
        }
      });
    }

    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', closeModal);
    }

    if (modalBackdrop) {
      modalBackdrop.addEventListener('click', (e) => {
        if (e.target === modalBackdrop) closeModal();
      });
    }

    window.addEventListener('keydown', (e) => {
      if (modalBackdrop && modalBackdrop.classList.contains('active')) return;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        focusStation(activeIndex + 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        focusStation(activeIndex - 1);
      }
    });
  }

  // Update Language UI dynamically
  function updateLanguageUI() {
    renderStationNodes();
    focusStation(activeIndex);

    const brandTitle = document.getElementById('brandTitle');
    const brandSubtitle = document.getElementById('brandSubtitle');
    if (brandTitle) {
      brandTitle.textContent = currentLang === 'kz' 
        ? 'СПАНДИЯР КӨБЕЕВТІҢ ӨМІР ЖОЛЫ' 
        : 'ЖИЗНЕННЫЙ ПУТЬ СПАНДИЯРА КУБЕЕВА';
    }
    if (brandSubtitle) {
      brandSubtitle.textContent = currentLang === 'kz' 
        ? 'ҚАЗАҚСТАНДАҒЫ ТАРИХИ ӨЗГЕРІСТЕРДІ ТАНУ' 
        : 'ИЗУЧЕНИЕ ИСТОРИЧЕСКИХ ПЕРЕМЕН В КАЗАХСТАНЕ';
    }

    if (btnJourney) {
      btnJourney.textContent = isTouring
        ? (currentLang === 'kz' ? 'Тоқтату ⏹' : 'Остановить ⏹')
        : (currentLang === 'kz' ? 'Өмір жолымен жүру →' : 'Пройти по пути →');
    }
  }

  // Toggle Automated Journey Tour Mode
  function toggleJourneyMode() {
    const trace = document.getElementById('activeCaravanTrace');

    if (isTouring) {
      isTouring = false;
      if (tourTimer) clearInterval(tourTimer);
      btnJourney.textContent = currentLang === 'kz' ? 'Өмір жолымен жүру →' : 'Пройти по пути →';
      if (trace) trace.style.opacity = '0';
    } else {
      isTouring = true;
      btnJourney.textContent = currentLang === 'kz' ? 'Тоқтату ⏹' : 'Остановить ⏹';
      if (trace) trace.style.opacity = '0.85';

      let step = 0;
      focusStation(step);

      tourTimer = setInterval(() => {
        step = (step + 1) % MUSEUM_STATIONS.length;
        focusStation(step);

        if (step === MUSEUM_STATIONS.length - 1) {
          setTimeout(() => {
            if (isTouring) toggleJourneyMode();
          }, 4500);
        }
      }, 4200);
    }
  }

  // Open Archival Museum Modal with Rich Adaptive Photo Displays
  function openMuseumModal(stationId) {
    const st = MUSEUM_STATIONS.find(s => s.id === stationId);
    if (!st || !modalBackdrop) return;

    const title = currentLang === 'kz' ? st.titleKaz : st.titleRu;
    const subtitle = currentLang === 'kz' ? st.subtitleKaz : st.subtitleRu;
    const content = currentLang === 'kz' ? st.contentKaz : st.contentRu;

    if (modalHero) modalHero.style.backgroundImage = 'none';
    if (modalPeriodBadge) modalPeriodBadge.textContent = `${st.number}-станция • ${st.period}`;
    if (modalTitle) modalTitle.textContent = title;
    if (modalSubtitle) modalSubtitle.textContent = subtitle;

    const nextStation = MUSEUM_STATIONS.find(s => s.id === (st.id % 6 + 1));
    const nextTitle = nextStation ? (currentLang === 'kz' ? nextStation.titleKaz : nextStation.titleRu) : '';

    if (modalBody) {
      let photoHtml = '';
      const photoList = (st.photoItems && st.photoItems.length > 0)
        ? st.photoItems
        : (st.images ? st.images.map(src => ({ src, captionKaz: title, captionRu: title, type: 'landscape' }))
        : (st.image ? [{ src: st.image, captionKaz: title, captionRu: title, type: 'landscape' }] : []));

      if (st.id === 5 && photoList.length >= 2) {
        // Station 5: Special Showcase for Books (Қалың мал & Орындалған арман)
        photoHtml = `
          <div class="modal-books-showcase">
            ${photoList.map(p => {
              const cap = currentLang === 'kz' ? p.captionKaz : p.captionRu;
              const safeCap = cap.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
              return `
                <div class="book-card" onclick="window.openLightbox('${p.src}', '${safeCap}')" title="${safeCap}">
                  <div class="book-cover-wrap">
                    <img src="${p.src}" alt="${safeCap}" class="book-cover-img" />
                    <div class="zoom-badge">🔍 ${currentLang === 'kz' ? 'Үлкейтіп көру' : 'Увеличить'}</div>
                  </div>
                  <div class="book-card-info">
                    <span class="photo-badge gold">📖 ${currentLang === 'kz' ? 'Әдеби мұра' : 'Литературное наследие'}</span>
                    <p class="book-card-title">${cap}</p>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        `;
      } else if (st.id === 6 && photoList.length >= 2) {
        // Station 6: Special Showcase for Spandiyar's House & Shezhire Chart
        photoHtml = `
          <div class="modal-gallery-grid station6-grid">
            ${photoList.map(p => {
              const cap = currentLang === 'kz' ? p.captionKaz : p.captionRu;
              const badge = currentLang === 'kz' ? (p.badgeKaz || '🏛️ Архив') : (p.badgeRu || '🏛️ Архив');
              const safeCap = cap.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
              const fitClass = p.type === 'document' ? 'contain-fit' : 'cover-fit';
              return `
                <div class="gallery-photo-card" onclick="window.openLightbox('${p.src}', '${safeCap}')" title="${safeCap}">
                  <div class="modal-photo-frame portrait-card ${fitClass}">
                    <img src="${p.src}" alt="${safeCap}" class="modal-photo-img ${fitClass}" />
                    <div class="zoom-badge">🔍 ${currentLang === 'kz' ? 'Үлкейту' : 'Увеличить'}</div>
                  </div>
                  <div class="modal-photo-caption">
                    <span class="photo-badge gold">${badge}</span>
                    <span>${cap}</span>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        `;
      } else if (st.id === 6 && photoList.length === 1) {
        // Station 6: Single document fallback
        const p = photoList[0];
        const cap = currentLang === 'kz' ? p.captionKaz : p.captionRu;
        const safeCap = cap.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
        photoHtml = `
          <div class="document-showcase" onclick="window.openLightbox('${p.src}', '${safeCap}')" title="${safeCap}">
            <div class="document-frame">
              <img src="${p.src}" alt="${safeCap}" class="document-img" />
              <div class="zoom-badge">🔍 ${currentLang === 'kz' ? 'Шежірені толық экранда көру' : 'Смотреть шежіре во весь экран'}</div>
            </div>
            <div class="document-caption">
              <span class="photo-badge gold">📜 ${currentLang === 'kz' ? 'Тарихи шежіре құжаты' : 'Исторический документ шежіре'}</span>
              <span>${cap}</span>
            </div>
          </div>
        `;
      } else if (photoList.length > 1) {
        // Multi-photo Gallery (Stations 3 & 4)
        photoHtml = `
          <div class="modal-gallery-grid">
            ${photoList.map(p => {
              const cap = currentLang === 'kz' ? p.captionKaz : p.captionRu;
              const safeCap = cap.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
              return `
                <div class="gallery-photo-card" onclick="window.openLightbox('${p.src}', '${safeCap}')" title="${safeCap}">
                  <div class="modal-photo-frame">
                    <img src="${p.src}" alt="${safeCap}" class="modal-photo-img" />
                    <div class="zoom-badge">🔍 ${currentLang === 'kz' ? 'Үлкейту' : 'Увеличить'}</div>
                  </div>
                  <div class="modal-photo-caption">
                    <span class="photo-badge">🏛️ ${currentLang === 'kz' ? 'Архив құжаты' : 'Архивный документ'}</span>
                    <span>${cap}</span>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        `;
      } else if (photoList.length === 1) {
        // Single Landscape Photo (Stations 1 & 2)
        const p = photoList[0];
        const cap = currentLang === 'kz' ? p.captionKaz : p.captionRu;
        const safeCap = cap.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
        photoHtml = `
          <div class="single-photo-card" onclick="window.openLightbox('${p.src}', '${safeCap}')" title="${safeCap}">
            <div class="modal-photo-frame single-hero">
              <img src="${p.src}" alt="${safeCap}" class="modal-photo-img" />
              <div class="zoom-badge">🔍 ${currentLang === 'kz' ? 'Үлкейтіп көру' : 'Увеличить фото'}</div>
            </div>
            <div class="modal-photo-caption">
              <span class="photo-badge">🏛️ ${currentLang === 'kz' ? 'Тарихи көрініс' : 'Исторический вид'}</span>
              <span>${cap}</span>
            </div>
          </div>
        `;
      } else {
        photoHtml = `
          <div class="modal-photo-placeholder">
            <div class="photo-placeholder-icon">🖼️</div>
            <div class="photo-placeholder-title">${currentLang === 'kz' ? 'Фотосурет орны' : 'Место для вашей фотографии'}</div>
            <div class="photo-placeholder-hint">${currentLang === 'kz' ? '(Бұл жерге өз суретіңізді қоя аласыз)' : '(Сюда вы можете вставить свое изображение)'}</div>
          </div>
        `;
      }

      let videoHtml = '';
      if (st.video) {
        const vidTitle = currentLang === 'kz' ? (st.videoTitleKaz || 'Танымдық бейнематериал') : (st.videoTitleRu || 'Познавательный видеоматериал');
        const vidDesc = currentLang === 'kz' ? (st.videoDescKaz || '') : (st.videoDescRu || '');
        videoHtml = `
          <div class="modal-video-section">
            <div class="video-section-header">
              <span class="photo-badge gold">🎬 ${currentLang === 'kz' ? 'Бейнематериал' : 'Видеоматериал'}</span>
              <h4 class="video-section-title">${vidTitle}</h4>
            </div>
            <div class="modal-video-container">
              <video controls playsinline preload="metadata" class="modal-video-player" id="stationVideoPlayer">
                <source src="${st.video}" type="video/mp4">
                ${currentLang === 'kz' ? 'Сіздің браузеріңіз видео ойнатуды қолдамайды.' : 'Ваш браузер не поддерживает воспроизведение видео.'}
              </video>
            </div>
            ${vidDesc ? `<p class="video-section-desc">${vidDesc}</p>` : ''}
          </div>
        `;
      }

      modalBody.innerHTML = `
        ${photoHtml}

        ${videoHtml}

        ${content}

        <!-- Next Station Link Button -->
        <div style="margin-top: 1.5rem; text-align: right;">
          <button class="btn-inspect" style="width: auto; display: inline-flex; gap: 10px;" onclick="window.navigateToNextStation(${nextStation ? nextStation.id : 1})">
            <span>${currentLang === 'kz' ? 'Келесі станция' : 'Следующая станция'}: ${nextTitle}</span>
            <span class="arrow">→</span>
          </button>
        </div>
      `;
    }

    modalBackdrop.classList.add('active');
  }

  function closeModal() {
    const player = document.getElementById('stationVideoPlayer');
    if (player) {
      player.pause();
    }
    if (modalBackdrop) modalBackdrop.classList.remove('active');
  }

  window.navigateToNextStation = function(nextId) {
    closeModal();
    const idx = MUSEUM_STATIONS.findIndex(s => s.id === nextId);
    if (idx !== -1) {
      setTimeout(() => {
        focusStation(idx);
        openMuseumModal(nextId);
      }, 350);
    }
  };

  // High-Resolution Lightbox Archival Photo Viewer Logic
  const lightbox = document.getElementById('imageLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxBadge = document.getElementById('lightboxBadge');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');

  window.openLightbox = function(src, caption) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    if (lightboxCaption) lightboxCaption.textContent = caption || '';
    if (lightboxBadge) {
      lightboxBadge.textContent = currentLang === 'kz' ? 'Архивтік фотоқұжат' : 'Архивный фотодокумент';
    }
    lightbox.classList.add('active');
  };

  window.closeLightbox = function() {
    if (lightbox) {
      lightbox.classList.remove('active');
      setTimeout(() => {
        if (lightboxImg) lightboxImg.src = '';
      }, 300);
    }
  };

  if (lightboxCloseBtn) {
    lightboxCloseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      window.closeLightbox();
    });
  }

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.classList.contains('lightbox-container')) {
        window.closeLightbox();
      }
    });
  }

  // Escape Key to Close Lightbox or Modal
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (lightbox && lightbox.classList.contains('active')) {
        window.closeLightbox();
        e.stopPropagation();
        return;
      }
      if (modalBackdrop && modalBackdrop.classList.contains('active')) {
        closeModal();
      }
    }
  });
});
