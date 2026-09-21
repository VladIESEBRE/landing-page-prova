# landing-page-prova

Landing page bàsica de **Reservo**, un SaaS de reserves online per a gimnasos, restaurants, perruqueries i clíniques.

Feta amb **Vite** i **Tailwind CSS v4**, amb JavaScript vanilla i components.

## Instal·lació i ús

```bash
npm install      # instal·la les dependències
npm run dev      # servidor de desenvolupament
npm run build    # genera la versió de producció a dist/
npm run preview  # previsualitza la versió de producció
```

## Estructura

```
landing-page-prova/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navbar.js       # Barra de navegació (amb menú mòbil)
│   │   ├── Hero.js         # Secció principal
│   │   ├── Features.js     # Graella de característiques
│   │   ├── Sectors.js      # Sectors (gimnàs, restaurant...)
│   │   ├── HowItWorks.js   # Com funciona (3 passos)
│   │   ├── Pricing.js      # Plans i preus
│   │   ├── Testimonials.js # Opinions de clients
│   │   ├── Faq.js          # Preguntes freqüents
│   │   ├── Cta.js          # Formulari de registre
│   │   └── Footer.js       # Peu de pàgina
│   ├── main.js             # Punt d'entrada: munta els components a #app
│   └── style.css           # Importació de Tailwind v4
├── index.html              # Estructura HTML base
├── package.json
└── vite.config.js          # Configuració de Vite amb el plugin de Tailwind
```

Cada component exporta una funció `renderX(element)` que pinta el seu HTML dins del contenidor que rep i hi afegeix els seus esdeveniments. `main.js` crea els contenidors i crida cada component.
