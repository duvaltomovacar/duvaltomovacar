
const translations = {
  fr: {
    home: "Accueil",
    about: "À propos",
    services: "Services",
    contact: "Contact",
    vehicles: "Nos véhicules",
    discover: "Découvrez notre sélection de véhicules",
    description: "Des véhicules soigneusement sélectionnés en Allemagne.",
    learnMore: "En savoir plus",
    viewVehicles: "Voir les véhicules",
    details: "Voir les détails",
    price: "Prix",
    mileage: "Kilométrage",
    fuel: "Carburant",
    transmission: "Transmission",
    year: "Année",
    warranty: "Garantie",
    delivery: "Livraison",
    financing: "Financement disponible",
    contactUs: "Contactez-nous",
    name: "Nom",
    email: "E-mail",
    message: "Message",
    send: "Envoyer",
    legal: "Mentions légales",
    privacy: "Politique de confidentialité",
    rights: "Tous droits réservés",
    language: "Langue",
    aboutTitle: "À propos de nous",
    servicesTitle: "Nos services",
    satisfaction: "La satisfaction de nos clients est notre priorité",
    tagline: "Tout le monde a le droit d'avoir une voiture"
  },
  es: {
    home: "Inicio",
    about: "Sobre nosotros",
    services: "Servicios",
    contact: "Contacto",
    vehicles: "Nuestros vehículos",
    discover: "Descubre nuestra selección de vehículos",
    description: "Vehículos cuidadosamente seleccionados en Alemania.",
    learnMore: "Más información",
    viewVehicles: "Ver vehículos",
    details: "Ver detalles",
    price: "Precio",
    mileage: "Kilometraje",
    fuel: "Combustible",
    transmission: "Transmisión",
    year: "Año",
    warranty: "Garantía",
    delivery: "Entrega",
    financing: "Financiación disponible",
    contactUs: "Contáctanos",
    name: "Nombre",
    email: "Correo electrónico",
    message: "Mensaje",
    send: "Enviar",
    legal: "Aviso legal",
    privacy: "Política de privacidad",
    rights: "Todos los derechos reservados",
    language: "Idioma",
    aboutTitle: "Sobre nosotros",
    servicesTitle: "Nuestros servicios",
    satisfaction: "La satisfacción de nuestros clientes es nuestra prioridad",
    tagline: "Todo el mundo tiene derecho a tener un coche"
  },
  de: {
    home: "Startseite",
    about: "Über uns",
    services: "Dienstleistungen",
    contact: "Kontakt",
    vehicles: "Unsere Fahrzeuge",
    discover: "Entdecken Sie unsere Fahrzeugauswahl",
    description: "Sorgfältig ausgewählte Fahrzeuge aus Deutschland.",
    learnMore: "Mehr erfahren",
    viewVehicles: "Fahrzeuge ansehen",
    details: "Details ansehen",
    price: "Preis",
    mileage: "Kilometerstand",
    fuel: "Kraftstoff",
    transmission: "Getriebe",
    year: "Baujahr",
    warranty: "Garantie",
    delivery: "Lieferung",
    financing: "Finanzierung verfügbar",
    contactUs: "Kontaktieren Sie uns",
    name: "Name",
    email: "E-Mail",
    message: "Nachricht",
    send: "Senden",
    legal: "Impressum",
    privacy: "Datenschutzerklärung",
    rights: "Alle Rechte vorbehalten",
    language: "Sprache",
    aboutTitle: "Über uns",
    servicesTitle: "Unsere Dienstleistungen",
    satisfaction: "Die Zufriedenheit unserer Kunden hat für uns Priorität",
    tagline: "Jeder hat das Recht, ein Auto zu besitzen"
  },
  en: {
    home: "Home",
    about: "About us",
    services: "Services",
    contact: "Contact",
    vehicles: "Our vehicles",
    discover: "Discover our vehicle selection",
    description: "Carefully selected vehicles from Germany.",
    learnMore: "Learn more",
    viewVehicles: "View vehicles",
    details: "View details",
    price: "Price",
    mileage: "Mileage",
    fuel: "Fuel",
    transmission: "Transmission",
    year: "Year",
    warranty: "Warranty",
    delivery: "Delivery",
    financing: "Financing available",
    contactUs: "Contact us",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send",
    legal: "Legal notice",
    privacy: "Privacy policy",
    rights: "All rights reserved",
    language: "Language",
    aboutTitle: "About us",
    servicesTitle: "Our services",
    satisfaction: "Customer satisfaction is our priority",
    tagline: "Everyone deserves the opportunity to own a car"
  }
};

function changeLanguage(language) {
  if (!translations[language]) return;

  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");

    if (translations[language][key]) {
      element.textContent = translations[language][key];
    }
  });

  try {
    localStorage.setItem("duval-language", language);
  } catch (error) {
    // Le site fonctionne même si le stockage est indisponible.
  }

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.classList.toggle(
      "active",
      button.getAttribute("data-language") === language
    );
  });
}

document.addEventListener("DOMContentLoaded", () => {
  let language = "fr";

  try {
    const savedLanguage = localStorage.getItem("duval-language");

    if (savedLanguage && translations[savedLanguage]) {
      language = savedLanguage;
    }
  } catch (error) {
    // Le français est utilisé par défaut.
  }

  changeLanguage(language);
});
