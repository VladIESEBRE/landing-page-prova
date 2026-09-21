export function renderPricing(element) {
  const plans = [
    {
      name: 'Básico',
      desc: 'Para empezar',
      price: '19€',
      period: '/mes',
      features: ['1 profesional', 'Reservas ilimitadas', 'Recordatorios por email'],
      cta: 'Elegir plan',
    },
    {
      name: 'Pro',
      desc: 'Para negocios en crecimiento',
      price: '49€',
      period: '/mes',
      features: ['Hasta 10 profesionales', 'SMS y WhatsApp', 'Pagos online y bonos', 'Estadísticas'],
      cta: 'Empezar prueba',
      featured: true,
    },
    {
      name: 'Empresa',
      desc: 'Cadenas y franquicias',
      price: 'A medida',
      period: '',
      features: ['Profesionales ilimitados', 'Varios locales', 'API e integraciones', 'Soporte prioritario'],
      cta: 'Contactar',
    },
  ];

  element.innerHTML = `
    <section id="precios" class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl font-bold text-white">Precios simples y transparentes</h2>
          <p class="mt-4 text-slate-400">14 días gratis en cualquier plan. Sin permanencia.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          ${plans.map(plan => `
            <div class="relative flex flex-col p-8 rounded-2xl ${plan.featured
              ? 'bg-gradient-to-b from-indigo-600/20 to-slate-900 border-2 border-indigo-500 shadow-2xl shadow-indigo-600/20'
              : 'bg-slate-900 border border-slate-800'}">
              ${plan.featured ? `
                <span class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 text-white">
                  Más popular
                </span>
              ` : ''}
              <h3 class="text-xl font-semibold text-white">${plan.name}</h3>
              <p class="mt-1 text-sm text-slate-400">${plan.desc}</p>
              <p class="mt-6 text-slate-400"><span class="text-4xl font-extrabold text-white">${plan.price}</span>${plan.period}</p>
              <ul class="mt-6 flex-1 space-y-3 text-sm text-slate-300">
                ${plan.features.map(f => `<li class="flex gap-2"><span class="text-indigo-400">✔</span>${f}</li>`).join('')}
              </ul>
              <a href="#contacto" class="mt-8 py-3 rounded-xl text-center font-semibold transition-all ${plan.featured
                ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'}">
                ${plan.cta}
              </a>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
