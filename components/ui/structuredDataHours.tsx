export default function StructuredDataHours() {
  const structuredData = {
    "@context": "https://schema.org",
    name: "Convertisseur d'heures en centièmes",
    description:
      "Outil en ligne gratuit pour convertir efficacement vos heures de travail en centièmes. Ajoutez plusieurs créneaux horaires, imprimez et téléchargez vos conversions.",
    featureList: [
      "Conversion d'heures en centièmes",
      "Addition de plusieurs créneaux horaires",
      "Impression des conversions",
      "Téléchargement des conversions en PDF",
    ],
    url: "https://www.calcul-heures.com/convertir-heures-en-centieme",
    creator: {
      "@type": "Organization",
      name: "Calcul heures pro Team",
    },
    publisher: {
      "@type": "Organization",
      name: "Calcul heures pro",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
