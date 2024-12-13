import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TableConvertCenth from "@/components/ui/tableConvertCenth";

export const metadata: Metadata = {
  title:
    "Convertisseur Centièmes en Heures - Outil Gratuit | Calcul Heures Pro",
  description:
    "Convertissez instantanément les centièmes en heures avec notre calculateur en ligne gratuit. Idéal pour la gestion du temps de travail, avec options d'impression et export PDF.",
  applicationName: "Calcul heures pro",
  keywords: [
    "convertir centièmes en heures",
    "conversion centièmes heures",
    "calculatrice temps décimal",
    "convertisseur centièmes minutes",
    "conversion temps travail",
    "outil conversion horaire",
    "centièmes en temps réel",
    "conversion heures décimales",
  ],
  creator: "Calcul heures pro Team",
  publisher: "Calcul heures pro",
  openGraph: {
    title: "Convertisseur Centièmes en Heures",
    description:
      "Convertissez instantanément les centièmes en heures. Outil gratuit avec export PDF.",
    type: "website",
    locale: "fr_FR",
    siteName: "Calcul heures pro",
  },
};

function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Convertisseur Centièmes en Heures",
    applicationCategory: "BusinessApplication",
    url: "https://www.calcul-heures.com/convertir-centiemes-en-heures",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    featureList: [
      "Conversion centièmes en heures",
      "Calcul multi-périodes",
      "Export PDF",
      "Impression des résultats",
      "Conversion instantanée",
    ],
    description:
      "Convertissez facilement vos centièmes en heures avec notre outil en ligne gratuit. Idéal pour la gestion du temps de travail.",
    datePublished: "2024-01-01",
    dateModified: "2024-01-01",
    author: {
      "@type": "Organization",
      name: "Calcul heures pro Team",
    },
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Comment convertir des centièmes en heures ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pour convertir des centièmes en heures, il suffit d'entrer votre valeur en centièmes dans notre convertisseur. Par exemple, 150 centièmes équivaut à 1 heure et 30 minutes. Le calcul se fait automatiquement.",
          },
        },
        {
          "@type": "Question",
          name: "Comment calculer plusieurs périodes en centièmes ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Notre convertisseur permet d'ajouter plusieurs lignes pour différentes périodes. Entrez simplement chaque valeur en centièmes, et le total sera calculé automatiquement en format centésimal et en heures:minutes.",
          },
        },
        {
          "@type": "Question",
          name: "Puis-je sauvegarder mes calculs de conversion ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, vous pouvez sauvegarder vos calculs de deux façons : en les imprimant directement depuis l'interface ou en les exportant au format PDF via le bouton de téléchargement.",
          },
        },
        {
          "@type": "Question",
          name: "Quelle est la précision du convertisseur ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Notre convertisseur offre une précision maximale en calculant d'abord les valeurs exactes avant d'appliquer les arrondis. Le total est calculé sur les valeurs non arrondies pour garantir la meilleure précision possible.",
          },
        },
        {
          "@type": "Question",
          name: "Le convertisseur est-il gratuit ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, notre convertisseur est totalement gratuit et ne nécessite aucune inscription. Vous pouvez l'utiliser autant de fois que vous le souhaitez pour vos conversions de temps.",
          },
        },
        {
          "@type": "Question",
          name: "Comment fonctionne l'arrondi des centièmes ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Les centièmes sont arrondis selon les règles mathématiques standard : au centième le plus proche. Par exemple, 1,667 sera arrondi à 1,67 centièmes. Le total est toujours calculé sur les valeurs exactes avant l'arrondi final.",
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

export default function ConvertCenth() {
  return (
    <main className="flex flex-col items-center py-6 md:py-10 text-black bg-background">
      <StructuredData />

      <article className="w-full max-w-4xl px-4 md:px-0">
        <header className="mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
            Convertisseur Centièmes en Heures
          </h1>
          <div className="space-y-4 text-lg">
            <p>
              Notre convertisseur centièmes en heures vous permet de transformer
              rapidement et précisément vos valeurs décimales en format horaire
              standard. Idéal pour la gestion du temps de travail, les fiches de
              paie et le suivi d&apos;activité.
            </p>
            <p>
              La précision est garantie grâce à notre algorithme qui prend en
              compte les arrondis et les spécificités du calcul en centièmes. Le
              total est calculé sur les valeurs exactes avant l&apos;arrondi
              final.
            </p>
          </div>
        </header>

        <section className="my-10" aria-label="Convertisseur">
          <TableConvertCenth />
        </section>

        <section className="my-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Guide d&apos;utilisation en vidéo
          </h2>
          <Link
            href="/tutoriel-centiemes-en-heures"
            className="inline-block hover:opacity-90 transition-opacity"
          >
            <figure className="relative">
              <Image
                src="https://i3.ytimg.com/vi/QVli5nMMb-E/maxresdefault.jpg"
                alt="Tutoriel vidéo : conversion centièmes en heures"
                width={1200}
                height={1200}
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <figcaption className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 text-white font-semibold">
                Voir le tutoriel vidéo
              </figcaption>
            </figure>
          </Link>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Guide d&apos;utilisation détaillé
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">Conversion simple</h3>
              <p>
                Entrez directement vos valeurs en centièmes dans la colonne
                dédiée. La conversion en format heures:minutes s&apos;effectue
                instantanément.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">Calcul multi-périodes</h3>
              <p>
                Ajoutez autant de lignes que nécessaire pour vos différentes
                périodes. Le total se calcule automatiquement dans les deux
                formats.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">Export et impression</h3>
              <ul className="space-y-2">
                <li>
                  🖨️ Impression : cliquez sur l&apos;icône d&apos;impression en
                  bas du tableau
                </li>
                <li>
                  📥 Export PDF : utilisez le bouton de téléchargement pour
                  sauvegarder vos calculs
                </li>
              </ul>
            </div>
          </div>
        </section>

        <footer className="mt-10 p-6 bg-gray-50 rounded-lg">
          <p className="text-center text-gray-700">
            Cet outil gratuit est maintenu et mis à jour régulièrement pour
            garantir des conversions précises. Pour toute question ou
            suggestion, n&apos;hésitez pas à nous contacter.
          </p>
        </footer>
      </article>
    </main>
  );
}
