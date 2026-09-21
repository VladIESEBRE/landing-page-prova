# Reservo · Landing page

Landing page de un SaaS ficticio de **reservas online** para negocios con citas: gimnasios, restaurantes, peluquerías y clínicas.

Proyecto hecho con **Vite**, **JavaScript vanilla** y **Tailwind CSS v4**, organizado en componentes.

## Tecnologías

| Herramienta | Versión | Uso |
|---|---|---|
| [Vite](https://vite.dev/) | 8 | Servidor de desarrollo y build |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Estilos con clases de utilidad (vía `@tailwindcss/vite`) |
| JavaScript | ES Modules | Componentes e interactividad, sin frameworks |

## Instalación y uso

Necesitas tener instalado [Node.js](https://nodejs.org/).

```bash
npm install      # instala las dependencias
npm run dev      # servidor de desarrollo (http://localhost:5173)
npm run build    # genera la versión de producción en dist/
npm run preview  # previsualiza la versión de producción
```

## Estructura del proyecto

```
landing-page-prova/
├── public/
│   └── vite.svg              # Favicon
├── src/
│   ├── components/
│   │   ├── Navbar.js         # Barra de navegación + menú móvil
│   │   ├── Hero.js           # Sección principal con tarjeta de reserva de ejemplo
│   │   ├── Sectors.js        # Tipos de negocio (gimnasio, restaurante...)
│   │   ├── Features.js       # Cuadrícula de funcionalidades
│   │   ├── HowItWorks.js     # Cómo funciona en 3 pasos
│   │   ├── Pricing.js        # Planes y precios
│   │   ├── Testimonials.js   # Opiniones de clientes
│   │   ├── Faq.js            # Preguntas frecuentes (desplegables)
│   │   ├── Cta.js            # Formulario de registro
│   │   └── Footer.js         # Pie de página
│   ├── main.js               # Punto de entrada: crea los contenedores y renderiza los componentes
│   └── style.css             # Importación de Tailwind v4
├── index.html                # Estructura HTML base con <div id="app">
├── package.json              # Dependencias y scripts
├── vite.config.js            # Configuración de Vite con el plugin de Tailwind
└── README.md
```

## Secciones de la página

1. **Navbar**: logo, enlaces a las secciones y botones "Iniciar sesión" y "Prueba gratis". En móvil se convierte en un menú desplegable.
2. **Hero**: titular principal, botones de acción y una tarjeta que simula la app reservando una clase de gimnasio.
3. **Sectors**: los cuatro tipos de negocio a los que se dirige el producto.
4. **Features**: seis funcionalidades (reservas 24/7, recordatorios, pagos, equipo, estadísticas, app móvil).
5. **How it works**: los tres pasos para empezar.
6. **Pricing**: tres planes (Básico 19€, Pro 49€ destacado, Empresa a medida).
7. **Testimonials**: tres opiniones de clientes.
8. **FAQ**: preguntas frecuentes con `<details>`, que se abren y cierran sin JavaScript.
9. **CTA**: formulario para dejar el email y empezar la prueba gratuita.
10. **Footer**: logo, copyright con el año actual y enlaces.

## Cómo funcionan los componentes

Cada componente es un archivo que exporta una función `renderX(element)`. La función:

1. tiene sus datos (textos, listas...) dentro de la propia función,
2. escribe su HTML dentro del elemento que recibe,
3. añade sus eventos, si los tiene.

```js
// src/components/Features.js
export function renderFeatures(element) {
  const featuresList = [
    { icon: '📅', title: 'Reservas online 24/7', desc: '...' },
    // ...
  ];

  element.innerHTML = `
    <section id="funciones" class="py-20">
      ...
      ${featuresList.map(feature => `<div>...${feature.title}...</div>`).join('')}
    </section>
  `;
}
```

`main.js` crea un contenedor para cada sección y llama a cada componente:

```js
document.querySelector('#app').innerHTML = `
  <div id="navbar"></div>
  <main>
    <div id="hero"></div>
    ...
  </main>
  <div id="footer"></div>
`;

renderNavbar(document.querySelector('#navbar'));
renderHero(document.querySelector('#hero'));
// ...
```

### Añadir una sección nueva

1. Crea `src/components/NombreSeccion.js` con una función `renderNombreSeccion(element)`.
2. En `main.js`, impórtala, añade `<div id="nombre-seccion"></div>` donde quieras que aparezca y llama a `renderNombreSeccion(document.querySelector('#nombre-seccion'))`.

## Interactividad

| Dónde | Qué hace |
|---|---|
| `Navbar.js` | Abre y cierra el menú en móvil, y lo cierra al pulsar un enlace |
| `Cta.js` | Al enviar el formulario, lo oculta y muestra un mensaje de agradecimiento |
| `Faq.js` | Desplegables con `<details>` nativo (sin JS) |

## Diseño

- **Tema oscuro**: fondo `slate-900` / `slate-950`, texto `slate-100` / `slate-400`.
- **Color principal**: `indigo-600`, con degradados `indigo → cyan` en el titular, los pasos, el plan destacado y el CTA.
- **Tarjetas**: `rounded-2xl`, borde `slate-800`; en Features se elevan al pasar el ratón.
- **Responsive**: una columna en móvil y dos o tres a partir de `md` / `lg`.

## Pendiente / limitaciones

- El formulario de registro es una **demo**: no envía los datos a ningún servidor.
- Los enlaces "Iniciar sesión", "Privacidad" y "Términos" todavía no llevan a ninguna parte (`#`).
- El nombre, los precios y las opiniones son **contenido de ejemplo**.

## Licencia

Ver el archivo [LICENSE](LICENSE).
