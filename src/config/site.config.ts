export const site = {
  name: "Fleurs & Saveurs",
  tagline: "Des fleurs fraîches, cueillies avec passion",
  description:"Fleuriste indépendante depuis 2015, je compose des bouquets sur mesure pour tous vos événements : mariages, anniversaires, deuils. Je travaille avec des producteurs locaux.",
  lang: "fr",

  nav: [
    { label: "Services", href: "#services" },
    { label: "À propos", href: "#about" },
    { label: "Témoignages", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    title: "Des fleurs fraîches, cueillies avec passion",
    subtitle:
      "Fleuriste indépendante depuis 2015, je compose des bouquets sur mesure pour tous vos événements : mariages, anniversaires, deuils. Je travaille avec des producteurs locaux.",
    cta: { label: "Commander un bouquet", href: "#contact" },
    secondaryCta: { label: "Nos services", href: "#services" },
    image: "https://i.pinimg.com/1200x/14/92/ec/1492ec6acb63af8efbec61b0526b0a0d.jpg",
  },

  services: [
    {
      icon: "💐",
      title: "Bouquets sur mesure",
    },
    {
      icon: "👰",
      title: "Décoration de mariage",
    },
    {
      icon: "📅",
      title: "Abonnement floral hebdomadaire",
    },

    {
      icon: "📦",
      title: "Livraison à domicile"
    }
  ],

  contact: {
    title: "Parlons de votre projet",
    text: "Réponse sous 24 h ouvrées.",
    email: "contact@fleursetsaveurs.ca",
    phone: "819 555-0123",
    address: "245, rue King Ouest, Sherbrooke (QC) J1H 1R1245, rue King Ouest, Sherbrooke (QC) J1H 1R1",
    hours: "Mardi au samedi, 9 h à 17 h 30. Fermé dimanche et lundi.",
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
