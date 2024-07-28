export default function StructuredDataCenth() {
  const structuredData = {
    "@context": "https://schema.org",
    name: "Calculatrice d'heures de travail",
    description:
      "Outil en ligne gratuit pour calculer efficacement vos heures de travail quotidien. Additionne plusieurs plages horaires, convertit en format centésimal, permet l'impression et le téléchargement des calculs.",
    featureList: [
      "Addition d'heures de travail",
      "Calcul de plages horaires",
      "Addition de plusieurs plages horaires",
      "Conversion en format centésimal",
      "Impression des calculs",
      "Téléchargement des calculs en PDF",
    ],
    url: "https://www.calcul-heures.com/calculette-heure",
    softwareVersion: "1.0",
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
