import './style.css';
import { renderNavbar } from './components/Navbar.js';
import { renderHero } from './components/Hero.js';
import { renderSectors } from './components/Sectors.js';
import { renderFeatures } from './components/Features.js';
import { renderHowItWorks } from './components/HowItWorks.js';
import { renderPricing } from './components/Pricing.js';
import { renderTestimonials } from './components/Testimonials.js';
import { renderFaq } from './components/Faq.js';
import { renderCta } from './components/Cta.js';
import { renderFooter } from './components/Footer.js';

// Estructura principal de la Landing Page
document.querySelector('#app').innerHTML = `
  <div class="min-h-screen flex flex-col bg-slate-900 text-slate-100 antialiased">
    <div id="navbar"></div>
    <main class="flex-grow">
      <div id="hero"></div>
      <div id="sectors"></div>
      <div id="features"></div>
      <div id="how-it-works"></div>
      <div id="pricing"></div>
      <div id="testimonials"></div>
      <div id="faq"></div>
      <div id="cta"></div>
    </main>
    <div id="footer"></div>
  </div>
`;

// Renderitzem cada component en el seu contenidor
renderNavbar(document.querySelector('#navbar'));
renderHero(document.querySelector('#hero'));
renderSectors(document.querySelector('#sectors'));
renderFeatures(document.querySelector('#features'));
renderHowItWorks(document.querySelector('#how-it-works'));
renderPricing(document.querySelector('#pricing'));
renderTestimonials(document.querySelector('#testimonials'));
renderFaq(document.querySelector('#faq'));
renderCta(document.querySelector('#cta'));
renderFooter(document.querySelector('#footer'));
