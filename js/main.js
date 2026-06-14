// ============================================================
// DATOS — Aquí editás nombres y rutas de imágenes manualmente
// ============================================================
const WHATSAPP = '50664738037';

const marcas = {
  'Barbas': {
    modelos: [
      { id: 'B1', nombre: 'EL BARBAS HATS X CT - CHROME I (LAST EDITION) ', precio: '₡25.000', foto: 'assets/images/gorras/B1D.webp', fotos: ['assets/images/gorras/B1D.webp','assets/images/gorras/B3IZ.webp','assets/images/gorras/B2L.webp'] },
      { id: 'B2', nombre: 'BARBAS PREMIUM 2.0 — DARK NEBULA', precio: '₡25.000', foto: 'assets/images/gorras/B2FPPPP.webp', fotos: ['assets/images/gorras/B2FPPPP.webp','assets/images/gorras/B2LI.webp','assets/images/gorras/B2LD.webp'] },
      { id: 'B3', nombre: 'BARBAS HATS - HEARTBREAK WILITO', precio: '₡25.000', foto: 'assets/images/gorras/B3FFF.webp', fotos: ['assets/images/gorras/B3FFF.webp','assets/images/gorras/B3L.webp','assets/images/gorras/B3A.webp'] },
      { id: 'B4', nombre: 'Barbas B4', precio: '₡25.000', foto: 'assets/images/gorras/barbas/B4/portada.jpg', fotos: ['assets/images/gorras/barbas/B4/foto1.jpg','assets/images/gorras/barbas/B4/foto2.jpg','assets/images/gorras/barbas/B4/foto3.jpg'] },
      { id: 'B5', nombre: 'Barbas B5', precio: '₡25.000', foto: 'assets/images/gorras/barbas/B5/portada.jpg', fotos: ['assets/images/gorras/barbas/B5/foto1.jpg','assets/images/gorras/barbas/B5/foto2.jpg','assets/images/gorras/barbas/B5/foto3.jpg'] },
      { id: 'B6', nombre: 'Barbas B6', precio: '₡25.000', foto: 'assets/images/gorras/barbas/B6/portada.jpg', fotos: ['assets/images/gorras/barbas/B6/foto1.jpg','assets/images/gorras/barbas/B6/foto2.jpg','assets/images/gorras/barbas/B6/foto3.jpg'] },
    ]
  },
  'Dandy': {
    modelos: [
      { id: 'D1', nombre: 'Dandy D1', precio: '₡25.000', foto: 'assets/images/gorras/dandy/D1/portada.jpg', fotos: ['assets/images/gorras/dandy/D1/foto1.jpg','assets/images/gorras/dandy/D1/foto2.jpg','assets/images/gorras/dandy/D1/foto3.jpg'] },
      { id: 'D2', nombre: 'Dandy D2', precio: '₡25.000', foto: 'assets/images/gorras/dandy/D2/portada.jpg', fotos: ['assets/images/gorras/dandy/D2/foto1.jpg','assets/images/gorras/dandy/D2/foto2.jpg','assets/images/gorras/dandy/D2/foto3.jpg'] },
      { id: 'D3', nombre: 'Dandy D3', precio: '₡25.000', foto: 'assets/images/gorras/dandy/D3/portada.jpg', fotos: ['assets/images/gorras/dandy/D3/foto1.jpg','assets/images/gorras/dandy/D3/foto2.jpg','assets/images/gorras/dandy/D3/foto3.jpg'] },
    ]
  },
  '31 Hats': {
    modelos: [
      { id: '31-1', nombre: '31 Hats M1', precio: '₡25.000', foto: 'assets/images/gorras/31hats/M1/portada.jpg', fotos: ['assets/images/gorras/31hats/M1/foto1.jpg','assets/images/gorras/31hats/M1/foto2.jpg','assets/images/gorras/31hats/M1/foto3.jpg'] },
      { id: '31-2', nombre: '31 Hats M2', precio: '₡25.000', foto: 'assets/images/gorras/31hats/M2/portada.jpg', fotos: ['assets/images/gorras/31hats/M2/foto1.jpg','assets/images/gorras/31hats/M2/foto2.jpg','assets/images/gorras/31hats/M2/foto3.jpg'] },
      { id: '31-3', nombre: '31 Hats M3', precio: '₡25.000', foto: 'assets/images/gorras/31hats/M3/portada.jpg', fotos: ['assets/images/gorras/31hats/M3/foto1.jpg','assets/images/gorras/31hats/M3/foto2.jpg','assets/images/gorras/31hats/M3/foto3.jpg'] },
      { id: '31-4', nombre: '31 Hats M4', precio: '₡25.000', foto: 'assets/images/gorras/31hats/M4/portada.jpg', fotos: ['assets/images/gorras/31hats/M4/foto1.jpg','assets/images/gorras/31hats/M4/foto2.jpg','assets/images/gorras/31hats/M4/foto3.jpg'] },
      { id: '31-5', nombre: '31 Hats M5', precio: '₡25.000', foto: 'assets/images/gorras/31hats/M5/portada.jpg', fotos: ['assets/images/gorras/31hats/M5/foto1.jpg','assets/images/gorras/31hats/M5/foto2.jpg','assets/images/gorras/31hats/M5/foto3.jpg'] },
      { id: '31-6', nombre: '31 Hats M6', precio: '₡25.000', foto: 'assets/images/gorras/31hats/M6/portada.jpg', fotos: ['assets/images/gorras/31hats/M6/foto1.jpg','assets/images/gorras/31hats/M6/foto2.jpg','assets/images/gorras/31hats/M6/foto3.jpg'] },
    ]
  },
  'Otras Marcas': {
    modelos: [
      { id: 'O1', nombre: 'Otras O1', precio: '₡25.000', foto: 'assets/images/gorras/otras/O1/portada.jpg', fotos: ['assets/images/gorras/otras/O1/foto1.jpg','assets/images/gorras/otras/O1/foto2.jpg','assets/images/gorras/otras/O1/foto3.jpg'] },
      { id: 'O2', nombre: 'Otras O2', precio: '₡25.000', foto: 'assets/images/gorras/otras/O2/portada.jpg', fotos: ['assets/images/gorras/otras/O2/foto1.jpg','assets/images/gorras/otras/O2/foto2.jpg','assets/images/gorras/otras/O2/foto3.jpg'] },
      { id: 'O3', nombre: 'Otras O3', precio: '₡25.000', foto: 'assets/images/gorras/otras/O3/portada.jpg', fotos: ['assets/images/gorras/otras/O3/foto1.jpg','assets/images/gorras/otras/O3/foto2.jpg','assets/images/gorras/otras/O3/foto3.jpg'] },
      { id: 'O4', nombre: 'Otras O4', precio: '₡25.000', foto: 'assets/images/gorras/otras/O4/portada.jpg', fotos: ['assets/images/gorras/otras/O4/foto1.jpg','assets/images/gorras/otras/O4/foto2.jpg','assets/images/gorras/otras/O4/foto3.jpg'] },
      { id: 'O5', nombre: 'Otras O5', precio: '₡25.000', foto: 'assets/images/gorras/otras/O5/portada.jpg', fotos: ['assets/images/gorras/otras/O5/foto1.jpg','assets/images/gorras/otras/O5/foto2.jpg','assets/images/gorras/otras/O5/foto3.jpg'] },
      { id: 'O6', nombre: 'Otras O6', precio: '₡25.000', foto: 'assets/images/gorras/otras/O6/portada.jpg', fotos: ['assets/images/gorras/otras/O6/foto1.jpg','assets/images/gorras/otras/O6/foto2.jpg','assets/images/gorras/otras/O6/foto3.jpg'] },
      { id: 'O7', nombre: 'Otras O7', precio: '₡25.000', foto: 'assets/images/gorras/otras/O7/portada.jpg', fotos: ['assets/images/gorras/otras/O7/foto1.jpg','assets/images/gorras/otras/O7/foto2.jpg','assets/images/gorras/otras/O7/foto3.jpg'] },
      { id: 'O8', nombre: 'Otras O8', precio: '₡25.000', foto: 'assets/images/gorras/otras/O8/portada.jpg', fotos: ['assets/images/gorras/otras/O8/foto1.jpg','assets/images/gorras/otras/O8/foto2.jpg','assets/images/gorras/otras/O8/foto3.jpg'] },
    ]
  }
};

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