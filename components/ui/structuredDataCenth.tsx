export default function StructuredDataCenth() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Convertisseur de centièmes en heures",
    description:
      "Outil en ligne gratuit pour convertir efficacement vos centièmes d'heures en heures et minutes. Permet l'impression et le téléchargement des conversions.",
    featureList: [
      "Conversion de centièmes en heures",
      "Addition de plusieurs créneaux en centièmes",
      "Impression des conversions",
      "Téléchargement des conversions en PDF",
    ],
    url: "https://www.calcul-heures.com/convertir-centiemes-en-heures",
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
