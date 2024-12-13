export default function StructuredDataHours() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
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
    video: {
      "@type": "VideoObject",
      name: "Tutoriel - Comment convertir des heures en centièmes",
      description:
        "Guide étape par étape pour utiliser le convertisseur d'heures en centièmes",
      thumbnailUrl: "https://i3.ytimg.com/vi/nGxRDw_6OH8/maxresdefault.jpg",
      uploadDate: "2024-01-01",
    },
    keywords:
      "convertir heures en centième, calculatrice d'heures de travail, conversion des heures en centièmes, convertisseur temps, centieme heure",
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Comment convertir des heures en centièmes ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Il suffit d'entrer vos heures au format hh:mm dans notre convertisseur. La conversion en centièmes se fait automatiquement. Par exemple, 1 heure et 30 minutes sera converti en 1,50 centièmes.",
          },
        },
        {
          "@type": "Question",
          name: "Comment additionner plusieurs créneaux horaires ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ajoutez autant de lignes que nécessaire dans le convertisseur en cliquant sur le bouton d'ajout. Entrez vos différents créneaux horaires, le total en centièmes est calculé automatiquement.",
          },
        },
        {
          "@type": "Question",
          name: "Comment sauvegarder mes conversions d'heures ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Vous pouvez soit imprimer vos conversions en cliquant sur l'icône d'impression, soit les télécharger au format PDF via le bouton de téléchargement situé en bas de la table.",
          },
        },
        {
          "@type": "Question",
          name: "Quelle est la précision du calcul en centièmes ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Le convertisseur calcule d'abord le total exact avant d'appliquer les arrondis. Le total en centièmes peut légèrement différer de la somme des arrondis individuels pour garantir une précision maximale.",
          },
        },
        {
          "@type": "Question",
          name: "Le convertisseur d'heures en centièmes est-il gratuit ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, notre convertisseur est entièrement gratuit et utilisable sans inscription. Vous pouvez convertir autant d'heures que vous le souhaitez.",
          },
        },
        {
          "@type": "Question",
          name: "Existe-t-il un tutoriel pour utiliser le convertisseur ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, nous proposons un tutoriel vidéo complet qui montre étape par étape comment utiliser le convertisseur d'heures en centièmes efficacement.",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
