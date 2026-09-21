export function renderHero(element) {
  const days = [
    { day: 'Lun', date: 22 },
    { day: 'Mar', date: 23, active: true },
    { day: 'Mié', date: 24 },
    { day: 'Jue', date: 25 },
    { day: 'Vie', date: 26 },
  ];

  const slots = [
    { name: 'Spinning', time: '08:00 · 45 min', info: '2 plazas', color: 'text-orange-400' },
    { name: 'Yoga', time: '10:30 · 60 min', info: 'Seleccionado', color: 'text-indigo-400', selected: true },
    { name: 'CrossFit', time: '19:00 · 50 min', info: '8 plazas', color: 'text-emerald-400' },
  ];

  element.innerHTML = `
    <section class="relative isolate overflow-hidden py-24 sm:py-32">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/30 via-slate-900 to-slate-900 -z-10"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-16 lg:grid-cols-2 items-center">
        <div class="text-center lg:text-left">
          <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-8">
            <span class="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
            Nuevo · Recordatorios por WhatsApp
          </span>

          <h1 class="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Las reservas de tu negocio, <span class="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">en piloto automático</span>
          </h1>

          <p class="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Gimnasios, restaurantes, peluquerías o clínicas: tus clientes reservan online 24/7 y tú te olvidas del teléfono y las libretas.
          </p>

          <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
            <a href="#precios" class="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-indigo-600/30 transition-all text-center">
              Empieza gratis 14 días
            </a>
            <a href="#como-funciona" class="w-full sm:w-auto px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold rounded-xl transition-all text-center">
              Ver cómo funciona
            </a>
          </div>

          <p class="mt-6 text-sm text-slate-500">Sin tarjeta de crédito · Cancela cuando quieras</p>
        </div>

        <!-- Targeta d'exemple que simula l'app de reserves -->
        <div class="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 shadow-2xl shadow-indigo-950/50 backdrop-blur" aria-hidden="true">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-slate-500">FitZone Gym</p>
              <p class="font-bold text-white">Reserva tu clase</p>
            </div>
            <span class="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Abierto</span>
          </div>

          <div class="mt-6 grid grid-cols-5 gap-2 text-center text-sm">
            ${days.map(d => `
              <div class="rounded-lg p-2 ${d.active ? 'bg-indigo-600 text-white' : 'text-slate-500'}">
                ${d.day}<br><b class="${d.active ? '' : 'text-slate-200'}">${d.date}</b>
              </div>
            `).join('')}
          </div>

          <ul class="mt-6 space-y-3">
            ${slots.map(s => `
              <li class="flex items-center justify-between rounded-xl p-3 ${s.selected ? 'border-2 border-indigo-500 bg-indigo-500/10' : 'border border-slate-800'}">
                <div>
                  <p class="font-semibold text-white">${s.name}</p>
                  <p class="text-xs text-slate-400">${s.time}</p>
                </div>
                <span class="text-xs font-medium ${s.color}">${s.info}</span>
              </li>
            `).join('')}
          </ul>

          <div class="mt-6 rounded-xl bg-indigo-600 py-3 text-center font-semibold text-white">Confirmar reserva</div>
        </div>
      </div>
    </section>
  `;
}
