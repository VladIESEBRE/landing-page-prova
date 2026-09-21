export function renderFeatures(element) {
  const featuresList = [
    { icon: '📅', title: 'Reservas online 24/7', desc: 'Tu propia página de reservas lista en minutos, integrable en tu web o Instagram.' },
    { icon: '🔔', title: 'Recordatorios automáticos', desc: 'Email, SMS y WhatsApp antes de cada cita. Reduce los "no-shows" hasta un 70%.' },
    { icon: '💳', title: 'Pagos y señales', desc: 'Cobra por adelantado, pide una señal o vende bonos y membresías.' },
    { icon: '👥', title: 'Gestión de equipo', desc: 'Horarios por empleado, salas o mesas. Cada uno ve solo su agenda.' },
    { icon: '📊', title: 'Estadísticas', desc: 'Ocupación, ingresos y clientes recurrentes en un panel claro.' },
    { icon: '📱', title: 'App móvil', desc: 'Gestiona tu negocio desde el móvil, estés donde estés.' },
  ];

  element.innerHTML = `
    <section id="funciones" class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl font-bold text-white">Todo lo que necesitas para gestionar reservas</h2>
          <p class="mt-4 text-slate-400">Una sola herramienta para tu agenda, tus clientes y tus cobros.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${featuresList.map(feature => `
            <div class="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all hover:-translate-y-1">
              <div class="text-4xl mb-4">${feature.icon}</div>
              <h3 class="text-xl font-semibold text-white mb-2">${feature.title}</h3>
              <p class="text-slate-400 leading-relaxed text-sm">${feature.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
