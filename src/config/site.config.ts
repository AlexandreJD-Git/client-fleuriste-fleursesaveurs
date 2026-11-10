export const site = {
  name: "Atelier Martin",
  tagline: "Menuiserie sur mesure depuis 1998",
  description:
    "Atelier Dupont conçoit et fabrique des meubles et agencements sur mesure à Lyon et ses environs.",
  lang: "fr",

  nav: [
    { label: "Services", href: "#services" },
    { label: "À propos", href: "#about" },
    { label: "Témoignages", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    title: "Des créations en bois pensées pour votre quotidien",
    subtitle:
      "Cuisines, dressings, escaliers : nous fabriquons des pièces uniques, de la conception à la pose.",
    cta: { label: "Demander un devis", href: "#contact" },
    secondaryCta: { label: "Découvrir nos services", href: "#services" },
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200",
  },

  services: [
    {
      icon: "🪑",
      title: "Mobilier sur mesure",
      text: "Tables, bibliothèques et meubles TV adaptés à vos dimensions et à votre style.",
    },
    {
      icon: "🍳",
      title: "Cuisines",
      text: "Conception et installation de cuisines fonctionnelles et durables.",
    },
    {
      icon: "🚪",
      title: "Agencement",
      text: "Dressings, placards et aménagements pour optimiser chaque espace.",
    },
  ],

  about: {
    title: "Un savoir-faire artisanal",
    text: "Depuis plus de 25 ans, notre équipe allie techniques traditionnelles et outils modernes pour livrer des ouvrages soignés, dans les délais convenus.",
    stats: [
      { value: "25+", label: "ans d'expérience" },
      { value: "1200", label: "projets réalisés" },
      { value: "98%", label: "clients satisfaits" },
    ],
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1000",
  },

  testimonials: [
    {
      name: "Sophie M.",
      role: "Cuisine sur mesure",
      quote: "Un travail impeccable et une équipe à l'écoute. Je recommande !",
    },
    {
      name: "Marc L.",
      role: "Dressing",
      quote:
        "Livré en avance, finitions parfaites. Exactement ce que je voulais.",
    },
    {
      name: "Claire D.",
      role: "Bibliothèque",
      quote: "Conseils précieux et rapport qualité/prix excellent.",
    },
  ],

  contact: {
    title: "Parlons de votre projet",
    text: "Réponse sous 24 h ouvrées.",
    email: "contact@atelier-dupont.fr",
    phone: "04 00 00 00 00",
    address: "12 rue des Artisans, 69000 Lyon",
    hours: "Lun - Ven : 8h - 18h",
    formAction: "https://formspree.io/f/your-id",
  },

  footer: {
    legal: "Tous droits réservés.",
    links: [
      { label: "Mentions légales", href: "/mentions-legales" },
      { label: "Confidentialité", href: "/confidentialite" },
    ],
  },
};
