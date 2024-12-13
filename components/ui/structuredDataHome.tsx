export default function StructuredDataHome() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Calcul heures pro",
    applicationCategory: "BusinessApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    description:
      "Bienvenue sur notre application de calculatrice d'heures de travail. Simplifiez la gestion de vos heures de travail avec nos outils innovants et faciles à utiliser.",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    softwareVersion: "1.0",
    featureList: [
      "Calcul des heures de travail",
      "Conversion heures en centièmes",
      "Conversion centièmes en heures",
      "Gestion multi-créneaux",
      "Calcul sur plusieurs jours",
    ],
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
    },
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Comment puis-je calculer mes heures de travail avec cette calculatrice ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Vous pouvez facilement calculer vos heures de travail en saisissant l'heure de début et l'heure de fin pour chaque créneau horaire. La calculatrice d'heures de travail additionne automatiquement ces créneaux pour vous donner un total en heures-minutes et en heures-centièmes.",
          },
        },
        {
          "@type": "Question",
          name: "Est-ce que je peux convertir des centièmes en heures avec cette calculatrice ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, vous pouvez convertir des centièmes en heures en utilisant notre calculatrice. Après avoir entré vos heures, le temps total sera affiché en heures-minutes et en heures-centièmes.",
          },
        },
        {
          "@type": "Question",
          name: "Comment convertir des heures en centièmes avec cet outil ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pour convertir des heures en centièmes, entrez simplement vos créneaux horaires dans la calculatrice. Le calcul se fait automatiquement et le résultat est affiché en heures-centièmes.",
          },
        },
        {
          "@type": "Question",
          name: "Pourquoi devrais-je utiliser une calculatrice d'heures de travail ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Une calculatrice d'heures de travail vous aide à suivre précisément votre temps de travail, à éviter les erreurs de calcul et à visualiser votre temps en formats heures-minutes et heures-centièmes.",
          },
        },
        {
          "@type": "Question",
          name: "Comment puis-je ajouter plusieurs créneaux horaires ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pour ajouter plusieurs créneaux horaires, cliquez sur le bouton 'Ajouter une ligne'. Vous pouvez ensuite saisir les heures de début et de fin pour chaque créneau, et la calculatrice d'heures de travail calculera le total pour vous.",
          },
        },
        {
          "@type": "Question",
          name: "La calculatrice peut-elle gérer des heures de travail fractionnées ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, la calculatrice peut gérer des heures de travail fractionnées en vous permettant d'ajouter plusieurs créneaux horaires et en calculant le total en heures-minutes et en heures-centièmes.",
          },
        },
      ],
    },
    potentialAction: {
      "@type": "UseAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "/calcul-heure",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
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
