export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Calcul heures pro",
    url: "https://www.calcul-heures.com",
    description: "Outils de gestion du temps de travail",
    applicationCategory: "Tool",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
