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

  // Road Curve Key Points in Viewport Percentages matching landmarks in forest-steppe landscape
  const naturalRoadControlPoints = [
    { x: 5, y: 45 },
    { x: 12, y: 38 }, // Station 1: Yurts on hill
    { x: 28, y: 44 },
    { x: 44, y: 53 }, // Station 2: Wooden 2-story school
    { x: 56, y: 64 }, // Station 3: School crossroads & fence
    { x: 67, y: 72 },
    { x: 79, y: 79 }, // Station 4: Foreground table with books
    { x: 70, y: 62 },
    { x: 74, y: 56 }, // Station 5: Forest road & wooden bridge
    { x: 84, y: 52 },
    { x: 92, y: 49 }, // Station 6: Riverbank yurts & forest homestead
    { x: 97, y: 52 }
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

    // Smooth cinematic camera pan
    const panX = (50 - st.posX) * 0.14;
    const panY = (50 - st.posY) * 0.14;
    const zoomScale = 1.18;

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

  // Open Archival Museum Modal without fixed image
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
      modalBody.innerHTML = `
        <!-- Clean Empty Photo Slot for User's Custom Images -->
        <div class="modal-photo-placeholder">
          <div class="photo-placeholder-icon">🖼️</div>
          <div class="photo-placeholder-title">${currentLang === 'kz' ? 'Фотосурет орны' : 'Место для вашей фотографии'}</div>
          <div class="photo-placeholder-hint">${currentLang === 'kz' ? '(Бұл жерге өз суретіңізді қоя аласыз)' : '(Сюда вы можете вставить свое изображение)'}</div>
        </div>

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
});
