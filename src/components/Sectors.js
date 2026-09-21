export function renderSectors(element) {
  const sectors = [
    { icon: '🏋️', name: 'Gimnasios' },
    { icon: '🍽️', name: 'Restaurantes' },
    { icon: '💇', name: 'Peluquerías' },
    { icon: '🩺', name: 'Clínicas' },
  ];

  element.innerHTML = `
    <section class="py-12 border-y border-slate-800/80 bg-slate-950/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="text-center text-sm font-semibold uppercase tracking-wider text-slate-500">
          Pensado para cualquier negocio con citas
        </p>
        <div class="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          ${sectors.map(sector => `
            <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <div class="text-3xl">${sector.icon}</div>
              <p class="mt-2 font-semibold text-slate-200">${sector.name}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
