import type { Metadata } from "next";
import Link from "next/link";
import ArrayConversion from "@/components/ui/arrayConversion";

export const metadata: Metadata = {
  title: "Tableau de conversion heures en centièmes | Calcul heures pro",
  description:
    "Consultez notre tableau de conversion des heures en centièmes. Téléchargeable et imprimable gratuitement. Idéal pour la gestion du temps de travail.",
  applicationName: "Calcul heures pro",
  keywords: [
    "conversion heures centièmes",
    "tableau conversion minutes",
    "convertir temps en centièmes",
    "conversion décimale temps",
    "tableau heures décimales",
    "conversion temps travail",
    "outil conversion horaire",
    "calcul temps décimal",
  ],
  creator: "Calcul heures pro Team",
  publisher: "Calcul heures pro",
  openGraph: {
    title: "Tableau de conversion heures en centièmes",
    description:
      "Consultez notre tableau de conversion des heures en centièmes. Téléchargeable et imprimable gratuitement.",
    type: "website",
    locale: "fr_FR",
    siteName: "Calcul heures pro",
  },
};

function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.calcul-heures.com/heures-en-centiemes",
    },
    url: "https://www.calcul-heures.com/heures-en-centiemes",
    headline: "Tableau de conversion heures en centièmes",
    description:
      "Consultez notre tableau de conversion des heures en centièmes. Téléchargeable et imprimable gratuitement.",
    publisher: {
      "@type": "Organization",
      name: "Calcul heures pro",
    },
    author: {
      "@type": "Organization",
      name: "Calcul heures pro Team",
    },
    datePublished: "2024-01-01",
    dateModified: "2024-01-01",
    isAccessibleForFree: true,
    hasPart: {
      "@type": "Dataset",
      name: "Tableau de conversion minutes en centièmes",
      description: "Données de conversion des minutes en format centésimal",
      license: "https://creativecommons.org/licenses/by/4.0/",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default function ConvertHours() {
  return (
    <main className="flex flex-col items-center py-6 md:py-10 text-black bg-background">
      <article className="w-full max-w-4xl px-4 md:px-0">
        <header className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Tableau de conversion heures en centièmes
          </h1>
          <div className="space-y-4">
            <p className="text-center text-lg">
              Consultez notre tableau complet de conversion des minutes en
              centièmes.
            </p>
            <p className="text-center">
              Un outil pratique et facile à utiliser pour convertir rapidement
              vos temps de travail. Vous pouvez l&apos;imprimer ou le
              télécharger pour une utilisation hors-ligne.
            </p>
          </div>
        </header>

        <section className="my-8" aria-label="Tableau de conversion">
          <ArrayConversion />
        </section>

        <section className="mt-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Besoin d&apos;un outil plus personnalisé ?
          </h2>
          <p className="text-lg">
            Utilisez notre{" "}
            <Link
              href="/convertir-heures-en-centieme"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              convertisseur d&apos;heures en centièmes
            </Link>{" "}
            pour des calculs plus spécifiques.
          </p>
        </section>

        <aside className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold mb-2">À savoir</h3>
          <p>
            Le format centésimal est couramment utilisé dans le monde
            professionnel pour simplifier les calculs de temps de travail et la
            gestion de la paie.
          </p>
        </aside>
      </article>
      <StructuredData />
    </main>
  );
}
