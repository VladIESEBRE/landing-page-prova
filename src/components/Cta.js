export function renderCta(element) {
  element.innerHTML = `
    <section id="contacto" class="px-4 pb-24">
      <div class="relative overflow-hidden max-w-5xl mx-auto rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-indigo-600 to-cyan-600 px-6 py-16 text-center shadow-2xl shadow-indigo-600/30 sm:px-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-white">¿Listo para llenar tu agenda?</h2>
        <p class="mt-4 text-lg text-indigo-100">Déjanos tu email y te enviamos acceso a la prueba gratuita.</p>

        <form id="signup-form" class="mt-8 mx-auto flex max-w-md flex-col sm:flex-row gap-3">
          <label for="signup-email" class="sr-only">Email</label>
          <input id="signup-email" type="email" required placeholder="tu@email.com"
            class="flex-1 px-4 py-3 rounded-xl bg-white/95 text-slate-900 placeholder-slate-500 outline-none focus:ring-4 focus:ring-white/40" />
          <button type="submit" class="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold transition-all cursor-pointer">
            Empezar
          </button>
        </form>

        <p id="signup-msg" class="hidden mt-6 font-medium text-white">¡Gracias! Te hemos enviado un email 🎉</p>
      </div>
    </section>
  `;

  // Demo sense backend: només mostra el missatge de confirmació
  const form = element.querySelector('#signup-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.classList.add('hidden');
    element.querySelector('#signup-msg').classList.remove('hidden');
  });
}
