export function renderTestimonials(element) {
  const testimonials = [
    { quote: 'Hemos dejado de perder clases por gente que no aparece. Los recordatorios funcionan de maravilla.', author: 'Marta G.', business: 'Gimnasio' },
    { quote: 'Los fines de semana el teléfono no paraba. Ahora el 80% de las reservas llegan solas.', author: 'Jordi P.', business: 'Restaurante' },
    { quote: 'Muy fácil de configurar. En una tarde ya tenía toda la agenda del salón online.', author: 'Laura S.', business: 'Peluquería' },
  ];

  element.innerHTML = `
    <section class="py-20 bg-slate-950/50 border-y border-slate-800/80">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl font-bold text-white">Lo que dicen nuestros clientes</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          ${testimonials.map(t => `
            <figure class="p-8 rounded-2xl bg-slate-900 border border-slate-800">
              <div class="text-amber-400 text-sm">★★★★★</div>
              <blockquote class="mt-4 text-slate-300 leading-relaxed">"${t.quote}"</blockquote>
              <figcaption class="mt-6 text-sm font-semibold text-white">
                ${t.author} · <span class="font-normal text-slate-500">${t.business}</span>
              </figcaption>
            </figure>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
