// Icones SVG de línia (estil Lucide)
const icons = {
  gym: `
    <path d="m6.5 6.5 11 11" />
    <path d="m21 21-1-1" />
    <path d="m3 3 1 1" />
    <path d="m18 22 4-4" />
    <path d="m2 6 4-4" />
    <path d="m3 10 7-7" />
    <path d="m14 21 7-7" />
  `,
  restaurant: `
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
    <path d="M7 2v20" />
    <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
  `,
  salon: `
    <circle cx="6" cy="6" r="3" />
    <path d="M8.12 8.12 12 12" />
    <path d="M20 4 8.12 15.88" />
    <circle cx="6" cy="18" r="3" />
    <path d="M14.8 14.8 20 20" />
  `,
  clinic: `
    <path d="M11 2v2" />
    <path d="M5 2v2" />
    <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
    <path d="M8 15a6 6 0 0 0 12 0v-3" />
    <circle cx="20" cy="10" r="2" />
  `,
};

export function renderSectors(element) {
  const sectors = [
    { icon: icons.gym, name: 'Gimnasios' },
    { icon: icons.restaurant, name: 'Restaurantes' },
    { icon: icons.salon, name: 'Peluquerías' },
    { icon: icons.clinic, name: 'Clínicas' },
  ];

  element.innerHTML = `
    <section class="py-12 border-y border-slate-800/80 bg-slate-950/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="text-center text-sm font-semibold uppercase tracking-wider text-slate-500">
          Pensado para cualquier negocio con citas
        </p>
        <div class="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          ${sectors.map(sector => `
            <div class="group p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/40 transition-colors">
              <div class="mx-auto h-12 w-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  ${sector.icon}
                </svg>
              </div>
              <p class="mt-3 font-semibold text-slate-200">${sector.name}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
