export function renderHowItWorks(element) {
  const steps = [
    { title: 'Crea tu cuenta', desc: 'Regístrate gratis y elige el tipo de negocio.' },
    { title: 'Configura tus servicios', desc: 'Añade horarios, clases, mesas o servicios y sus precios.' },
    { title: 'Comparte tu enlace', desc: 'Tus clientes empiezan a reservar al instante.' },
  ];

  element.innerHTML = `
    <section id="como-funciona" class="py-20 bg-slate-950/50 border-y border-slate-800/80">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl font-bold text-white">Empieza en 3 pasos</h2>
          <p class="mt-4 text-slate-400">En menos de 10 minutos tendrás tu agenda online.</p>
        </div>

        <ol class="grid grid-cols-1 md:grid-cols-3 gap-10">
          ${steps.map((step, i) => `
            <li class="text-center">
              <div class="mx-auto h-14 w-14 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-xl font-bold text-white shadow-lg shadow-indigo-600/30">
                ${i + 1}
              </div>
              <h3 class="mt-4 text-xl font-semibold text-white">${step.title}</h3>
              <p class="mt-2 text-slate-400 text-sm">${step.desc}</p>
            </li>
          `).join('')}
        </ol>
      </div>
    </section>
  `;
}
