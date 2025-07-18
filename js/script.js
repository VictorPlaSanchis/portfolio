// Traducciones incrustadas
const allTranslations = {
  es: {
    "meta.title": "Portfolio - Ingeniero Informático",
    "logo": "MiPortfolio",
    "nav.about": "Sobre mí",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "hero.title": "¡Hola! Soy Juan Pérez",
    "hero.subtitle": "Ingeniero Informático freelance especializado en desarrollo web y soluciones a medida.",
    "btn.viewProjects": "Ver mis proyectos",
    "about.title": "Sobre mí",
    "about.text": "Soy un ingeniero informático con más de 5 años de experiencia...",
    "projects.title": "Proyectos",
    "projects.viewMore": "Ver más",
    "contact.title": "Contacto",
    "contact.name": "Nombre",
    "contact.email": "Email",
    "contact.message": "Mensaje",
    "contact.send": "Enviar",
    "footer.rights": "Todos los derechos reservados."
  },
  ca: {
    "meta.title": "Portfoli - Enginyer Informàtic",
    "logo": "ElMeuPortfoli",
    "nav.about": "Sobre mi",
    "nav.projects": "Projectes",
    "nav.contact": "Contacte",
    "hero.title": "Hola! Sóc en Juan Pérez",
    "hero.subtitle": "Enginyer Informàtic freelance especialitzat en desenvolupament web i solucions a mida.",
    "btn.viewProjects": "Veure projectes",
    "about.title": "Sobre mi",
    "about.text": "Sóc un enginyer informàtic amb més de 5 anys d'experiència...",
    "projects.title": "Projectes",
    "projects.viewMore": "Veure més",
    "contact.title": "Contacte",
    "contact.name": "Nom",
    "contact.email": "Email",
    "contact.message": "Missatge",
    "contact.send": "Enviar",
    "footer.rights": "Tots els drets reservats."
  },
  en: {
    "meta.title": "Portfolio - Computer Engineer",
    "logo": "MyPortfolio",
    "nav.about": "About me",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.title": "Hi! I'm Juan Pérez",
    "hero.subtitle": "Freelance Computer Engineer specialized in web development and custom solutions.",
    "btn.viewProjects": "View my projects",
    "about.title": "About me",
    "about.text": "I'm a computer engineer with over 5 years of experience...",
    "projects.title": "Projects",
    "projects.viewMore": "View more",
    "contact.title": "Contact",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send",
    "footer.rights": "All rights reserved."
  }
};

let currentLang = localStorage.getItem('lang') || 'es';
let translations = allTranslations[currentLang];

// Aplica las traducciones al DOM
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[key]) {
      el.textContent = translations[key];
    }
  });
  // También actualiza el <title>
  if (translations['meta.title']) {
    document.title = translations['meta.title'];
  }
}

// Cambia de idioma
function loadLang(lang) {
  if (!allTranslations[lang]) return;
  currentLang = lang;
  translations = allTranslations[lang];
  localStorage.setItem('lang', lang);
  applyTranslations();
}

// Asocia los botones
document.querySelectorAll('.lang-switcher button').forEach(btn => {
  btn.addEventListener('click', () => {
    loadLang(btn.dataset.lang);
  });
});

// Inicializa al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
});
