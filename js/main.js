// ============================================================
// DATOS — Aquí editás nombres y rutas de imágenes manualmente
// ============================================================
const WHATSAPP = '50660415839';

const marcas = {
  'Barbas': {
    modelos: [
      { id: 'B1', nombre: 'EL BARBAS HATS X CT - CHROME I (LAST EDITION) ', precio: '₡25.000', foto: 'assets/images/gorras/B1D.webp', fotos: ['assets/images/gorras/B1D.webp','assets/images/gorras/B3IZ.webp','assets/images/gorras/B2L.webp'] },
      { id: 'B2', nombre: 'BARBAS PREMIUM 2.0 — DARK NEBULA', precio: '₡25.000', foto: 'assets/images/gorras/B2FPPPP.webp', fotos: ['assets/images/gorras/B2FPPPP.webp','assets/images/gorras/B2LI.webp','assets/images/gorras/B2LD.webp'] },
      { id: 'B3', nombre: 'BARBAS HATS - HEARTBREAK WILITO', precio: '₡25.000', foto: 'assets/images/gorras/B3FFF.webp', fotos: ['assets/images/gorras/B3FFF.webp','assets/images/gorras/B3L.webp','assets/images/gorras/B3A.webp'] },
      { id: 'B4', nombre: 'EL BARBAS HATS X CT - ROCKSTAR I CT', precio: '₡25.000', foto: 'assets/images/gorras/B4F.webp', fotos: ['assets/images/gorras/B4F.webp','assets/images/gorras/B4L.webp','assets/images/gorras/B4LD.webp'] },
      { id: 'B5', nombre: 'BARBAS HATS GORRA - CHROME III EDICIÓN', precio: '₡25.000', foto: 'assets/images/gorras/B5F.webp', fotos: ['assets/images/gorras/B5F.webp','assets/images/gorras/B5L.webp','assets/images/gorras/B5LI.webp'] },
      { id: 'B6', nombre: 'BARBAS HATS - THE BLACK 77', precio: '₡25.000', foto: 'assets/images/gorras/B6F.webp', fotos: ['assets/images/gorras/B6F.webp','assets/images/gorras/B6L.webp','assets/images/gorras/B6A.webp'] },
    ]
  },
  'Dandy': {
    modelos: [
      { id: 'D1', nombre: 'DANDY HATS - DANDYWOOD PURP', precio: '₡25.000', foto: 'assets/images/gorras/D1F.webp', fotos: ['assets/images/gorras/D2.webp','assets/images/gorras/D3.webp','assets/images/gorras/D4.webp'] },
      { id: 'D2', nombre: 'GORRA DANDY HATS - CLAVE ALI ROSADA', precio: '₡25.000', foto: 'assets/images/gorras/D2F.webp', fotos: ['assets/images/gorras/D2F.webp','assets/images/gorras/D3F.webp','assets/images/gorras/D4A.webp'] },
      { id: 'D3', nombre: 'DANDY HATS X TOMBOCHIO — FOR ALL OUR HATERS', precio: '₡25.000', foto: 'assets/images/gorras/D3D.webp', fotos: ['assets/images/gorras/D3D.webp','assets/images/gorras/D3L.webp','assets/images/gorras/D3A.webp'] },
    ]
  },
  '31 Hats': {
    modelos: [
      { id: '31-1', nombre: 'GORRA 31 HATS - EL MAGO TOTAL BLACK', precio: '₡25.000', foto: 'assets/images/gorras/M1F.webp', fotos: ['assets/images/gorras/M1F.webp','assets/images/gorras/M1L.webp','assets/images/gorras/M1A.png'] },
      { id: '31-2', nombre: 'GORRA 31 - HATS BACKPACK BOYZ ROJA', precio: '₡25.000', foto: 'assets/images/gorras/M2F.webp', fotos: ['assets/images/gorras/M2F.webp','assets/images/gorras/M2L.webp','assets/images/gorras/M2A.webp'] },
      { id: '31-3', nombre: '31 HATS X EL MAGO — M ROJA', precio: '₡25.000', foto: 'assets/images/gorras/M3F.webp', fotos: ['assets/images/gorras/M3LI.webp','assets/images/gorras/M3L.webp','assets/images/gorras/M3A.webp'] },
      { id: '31-4', nombre: 'GORRA 31 HATS - TOTAL BLACK NY FLAMES', precio: '₡25.000', foto: 'assets/images/gorras/M4F.webp', fotos: ['assets/images/gorras/M4F.webp','assets/images/gorras/M4L.webp','assets/images/gorras/M4A.webp'] },
      { id: '31-5', nombre: 'GORRA 31 HATS - EL MAGO FOREVER WINGS', precio: '₡25.000', foto: 'assets/images/gorras/M5F.webp', fotos: ['assets/images/gorras/M5L.webp','assets/images/gorras/M5LI.webp','assets/images/gorras/M5A.webp'] },
      { id: '31-6', nombre: 'GORRA 31 HATS - PINK RECON', precio: '₡25.000', foto: 'assets/images/gorras/M6F.webp', fotos: ['assets/images/gorras/M6L.webp','assets/images/gorras/M6LI.webp','assets/images/gorras/M6A.webp'] },
    ]
  },
  'Otras Marcas': {
    modelos: [
      { id: 'O1', nombre: 'Otras O1', precio: '₡25.000', foto: 'assets/images/gorras/O1F.webp', fotos: ['assets/images/gorras/O1L.webp','assets/images/gorras/O1LI.webp','assets/images/gorras/O1AB.webp'] },
      { id: 'O2', nombre: 'Otras O2', precio: '₡25.000', foto: 'assets/images/gorras/O2F.webp', fotos: ['assets/images/gorras/O2L.webp','assets/images/gorras/O2LI.webp','assets/images/gorras/O2A.webp'] },
      { id: 'O3', nombre: 'Otras O3', precio: '₡25.000', foto: 'assets/images/gorras/O3F.webp', fotos: ['assets/images/gorras/O3F.webp','assets/images/gorras/O3L.webp','assets/images/gorras/O3LI.webp'] },
      { id: 'O4', nombre: 'Otras O4', precio: '₡25.000', foto: 'assets/images/gorras/O4F.webp', fotos: ['assets/images/gorras/O4L.webp','assets/images/gorras/O4LI.webp','assets/images/gorras/O4A.webp'] },
      { id: 'O5', nombre: 'Otras O5', precio: '₡25.000', foto: 'assets/images/gorras/O5F.webp', fotos: ['assets/images/gorras/O5F.webp','assets/images/gorras/O5L.webp','assets/images/gorras/O5A.webp'] },
      { id: 'O6', nombre: 'Otras O6', precio: '₡25.000', foto: 'assets/images/gorras/O6F.webp', fotos: ['assets/images/gorras/O6F.webp','assets/images/gorras/O6L.webp','assets/images/gorras/O6LI.webp'] },
      { id: 'O7', nombre: 'Otras O7', precio: '₡25.000', foto: 'assets/images/gorras/07F.webp', fotos: ['assets/images/gorras/07F.webp','assets/images/gorras/07L.webp','assets/images/gorras/07LD.webp'] },
      { id: 'O8', nombre: 'Otras O8', precio: '₡25.000', foto: 'assets/images/gorras/08F.webp', fotos: ['assets/images/gorras/08FF.webp','assets/images/gorras/08LD.webp','assets/images/gorras/08LI.webp'] },
    ]
  }
};

// ============================================================
// SCROLL REVEAL — Intersection Observer
// ============================================================
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -40px 0px'
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-reveal]').forEach(el => {
    revealObserver.observe(el);
  });

  initNavbar();
  initHeroParallax();
  initTiltCards();
  fixIOSVideo();
   initMusica();
});

// ============================================================
// NAVBAR — shrink on scroll
// ============================================================
function initNavbar() {
  const navbar = document.getElementById('navbar');
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (window.scrollY > 60) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  });
}

// ============================================================
// HERO PARALLAX — logo follows mouse
// ============================================================
function initHeroParallax() {
  
}

// ============================================================
// 3D TILT — subtle perspective effect on hover
// ============================================================
function initTiltCards() {
  const cards = document.querySelectorAll('.tilt-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      const rotateX = (0.5 - y) * 10;  // max ±5 degrees
      const rotateY = (x - 0.5) * 10;  // max ±5 degrees

      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)';
    });
  });
}

// ============================================================
// STAGGERED ANIMATION — animate child cards one by one
// ============================================================
function animateStaggered(container, selector) {
  const items = container.querySelectorAll(selector);
  items.forEach((item, i) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = `opacity 1s ease ${i * 0.25}s, transform 1s ease ${i * 0.25}s`;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      });
    });
  });
}

// ============================================================
// NIVEL 1 — Clic en una marca → mostrar sus modelos
// ============================================================
function toggleCategoria(marcaId) {
  const panel = document.getElementById('panel-' + marcaId);
  const cards = document.querySelectorAll('.categoria__card');
  const estaVisible = panel.classList.contains('visible');

  // Cerrar todo
  Object.keys(marcas).forEach(cat => {
    document.getElementById('panel-' + cat).classList.remove('visible');
  });
  cards.forEach(c => c.classList.remove('activa'));
  cerrarDetalle();

  if (!estaVisible) {
    // Renderizar modelos si el panel está vacío
    if (!panel.dataset.rendered) {
      renderModelos(marcaId, panel);
      panel.dataset.rendered = 'true';
    }

    panel.classList.add('visible');

    // Stagger animate the model cards
    animateStaggered(panel, '.modelo__card');

    const idx = Object.keys(marcas).indexOf(marcaId);
    if (cards[idx]) cards[idx].classList.add('activa');

    setTimeout(() => {
      panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }
}

// ============================================================
// RENDERIZAR MODELOS (cards de portada)
// ============================================================
function renderModelos(marcaId, panel) {
  const modelos = marcas[marcaId].modelos;

  panel.innerHTML = `
    <h3 class="panel__title">${marcaId} — Modelos disponibles</h3>
    <div class="modelos__grid">
      ${modelos.map(m => `
        <div class="modelo__card" onclick="abrirDetalle('${marcaId}', '${m.id}')">
          <div class="modelo__img-wrap">
            <img src="${m.foto}" alt="${m.nombre}" />
          </div>
          <p class="modelo__nombre">${m.nombre}</p>
          <p class="modelo__precio">${m.precio}</p>
          <span class="modelo__ver">Ver fotos →</span>
        </div>
      `).join('')}
    </div>
    <div class="detalle__panel" id="detalle-${marcaId}"></div>
  `;
}

// ============================================================
// NIVEL 2 — Clic en un modelo → mostrar 3 fotos + WhatsApp
// ============================================================
function abrirDetalle(marcaId, modeloId) {
  const modelo = marcas[marcaId].modelos.find(m => m.id === modeloId);
  const detallePanel = document.getElementById('detalle-' + marcaId);

  // Quitar selección previa de cards del mismo panel
  const modelCards = document.querySelectorAll(`#panel-${marcaId} .modelo__card`);
  modelCards.forEach(c => c.classList.remove('activa'));

  // Marcar la card seleccionada
  const idx = marcas[marcaId].modelos.findIndex(m => m.id === modeloId);
  if (modelCards[idx]) modelCards[idx].classList.add('activa');

  const mensaje = encodeURIComponent(`Hola! Me interesa este modelo: ${modelo.nombre}. ¿Sigue disponible?`);
  const waLink = `https://wa.me/${WHATSAPP}?text=${mensaje}`;

  detallePanel.innerHTML = `
    <div class="detalle__inner">
      <h4 class="detalle__titulo">${modelo.nombre} — ${modelo.precio}</h4>
      <div class="detalle__fotos">
        ${modelo.fotos.map((f, i) => `
          <div class="detalle__foto-wrap">
            <img src="${f}" alt="${modelo.nombre} foto ${i+1}" />
          </div>
        `).join('')}
      </div>
      <a href="${waLink}" target="_blank" class="btn-whatsapp detalle__wa">
        <svg class="btn-whatsapp__icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Pedir por WhatsApp
      </a>
    </div>
  `;

  detallePanel.classList.add('visible');

  setTimeout(() => {
    detallePanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
}

// ============================================================
// CERRAR DETALLE
// ============================================================
function cerrarDetalle() {
  document.querySelectorAll('.detalle__panel').forEach(p => {
    p.classList.remove('visible');
    p.innerHTML = '';
  });
  document.querySelectorAll('.modelo__card').forEach(c => c.classList.remove('activa'));
}
function abrirModal() {
  document.getElementById('modalOverlay').classList.add('visible');
  document.body.style.overflow = 'hidden';
}

function cerrarModal() {
  document.getElementById('modalOverlay').classList.remove('visible');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') cerrarModal();
});
// ============================================================
// FIX iOS — Video autoplay y reanudar al volver
// ============================================================
function fixIOSVideo() {
  const video = document.querySelector('.hero__video');
  if (!video) return;

  // Forzar play al cargar
  video.play().catch(() => {});

  // Reanudar si se congela al volver a la página
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      video.play().catch(() => {});
    }
  });

  // Reanudar si la app vuelve al foco
  window.addEventListener('pageshow', () => {
    video.play().catch(() => {});
  });

  // Reanudar si se pausa solo
  video.addEventListener('pause', () => {
    setTimeout(() => {
      video.play().catch(() => {});
    }, 300);
  });
}
// ============================================================
// MÚSICA DE FONDO
// ============================================================
function initMusica() {
  const audio = new Audio('assets/audio/cancion.mp3');
  audio.loop = true;
  audio.volume = 0.1;

  const iniciarMusica = () => {
    audio.play().catch(() => {});
    document.removeEventListener('touchstart', iniciarMusica);
    document.removeEventListener('click', iniciarMusica);
  };

  document.addEventListener('touchstart', iniciarMusica);
  document.addEventListener('click', iniciarMusica);
}