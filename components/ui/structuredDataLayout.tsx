export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Calcul heures pro",
    url: "https://www.calcul-heures.com",
    description:
      "Application gratuite de calculatrice d'heures de travail permettant de convertir les heures en centièmes et inversement. Idéal pour la gestion du temps de travail professionnel.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
    },
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    featureList: [
      "Calcul des heures de travail",
      "Conversion heures en centièmes",
      "Conversion centièmes en heures",
      "Gestion multi-créneaux",
      "Calcul sur plusieurs jours",
    ],
    softwareVersion: "1.0",
    keywords: [
      "calculatrice d'heures de travail",
      "gestion des heures",
      "convertir les heures en centième",
      "outil de calcul heures",
      "convertir centièmes en heures",
    ],
    creator: {
      "@type": "Organization",
      name: "Calcul heures pro Team",
    },
    publisher: {
      "@type": "Organization",
      name: "Calcul heures pro",
      url: "https://www.calcul-heures.com",
    },
    availableOnDevice: ["Desktop", "Mobile", "Tablet"],
    applicationSuite: "Outils de gestion du temps de travail",
    permissions: "no special permissions required",
    isAccessibleForFree: true,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
