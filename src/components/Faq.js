export function renderFaq(element) {
  const faqs = [
    { question: '¿Necesito conocimientos técnicos?', answer: 'No. Se configura en minutos desde el panel y te guiamos paso a paso.' },
    { question: '¿Puedo cancelar en cualquier momento?', answer: 'Sí, no hay permanencia. Cancelas desde tu cuenta con un clic.' },
    { question: '¿Mis clientes tienen que descargar una app?', answer: 'No, reservan desde cualquier navegador a través de tu enlace.' },
    { question: '¿Sirve para varios locales?', answer: 'Sí, con el plan Empresa gestionas todos tus locales desde una sola cuenta.' },
  ];

  element.innerHTML = `
    <section id="preguntas" class="py-20">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-white text-center mb-12">Preguntas frecuentes</h2>

        <div class="space-y-4">
          ${faqs.map(faq => `
            <details class="group p-5 rounded-2xl bg-slate-900 border border-slate-800 open:border-slate-700">
              <summary class="flex items-center justify-between font-semibold text-white cursor-pointer list-none">
                ${faq.question}
                <span class="text-xl text-indigo-400 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p class="mt-3 text-slate-400 text-sm leading-relaxed">${faq.answer}</p>
            </details>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
