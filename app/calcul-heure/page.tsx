import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TableHours from "@/components/ui/tableHours";

export const metadata: Metadata = {
  title:
    "Calculatrice d'heures de travail en ligne gratuite | Calcul heures pro",
  description:
    "Utilisez notre calculatrice d'heures de travail pour calculer efficacement vos heures de travail quotidien. Ajoutez autant de lignes que nécessaire pour inclure toutes vos plages horaires.Imprimer, télécharger",
  applicationName: "Calcul heures pro",
  keywords: [
    "calculatrice heures travail",
    "convertisseur heures centièmes",
    "calcul temps de travail",
    "outil gestion temps",
    "calculateur heures pro",
    "conversion heures minutes",
    "calcul plages horaires",
    "logiciel temps travail gratuit",
  ],
  creator: "Calcul heures pro Team",
  publisher: "Calcul heures pro",
  openGraph: {
    title: "Calculatrice d'heures de travail en ligne gratuite",
    description:
      "Calculez vos heures de travail facilement avec notre calculatrice en ligne gratuite. Convertissez les heures en centièmes, gérez plusieurs plages horaires.",
    type: "website",
    locale: "fr_FR",
    siteName: "Calcul heures pro",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculatrice d'heures de travail en ligne gratuite",
    description:
      "Calculez vos heures de travail facilement avec notre calculatrice en ligne gratuite.",
  },
};

function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Calculatrice d'heures de travail",
    applicationCategory: "BusinessApplication",
    url: "https://www.calcul-heures.com/calcul-heure",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    featureList: [
      "Calcul des plages horaires",
      "Conversion en centièmes",
      "Export PDF",
      "Impression des calculs",
      "Gestion multi-créneaux",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default function Calcul() {
  return (
    <main className="flex flex-col items-center p-4 md:p-10 text-black bg-background">
      <article className="w-full max-w-4xl">
        <header className="mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-center">
            Calculatrice d&apos;heures de travail
          </h1>
          <p className="mt-4 text-lg">
            Utilisez notre calculatrice d&apos;heures de travail pour calculer
            efficacement vos heures de travail quotidien. Ajoutez autant de
            lignes que nécessaire pour inclure toutes vos plages horaires.
          </p>
          <p className="mt-4">
            Le temps total en centièmes (heures, centièmes) est calculé en
            convertissant les heures et minutes en centièmes, puis en les
            arrondissant. Notez que le total en centièmes peut différer de la
            somme des arrondis individuels des temps en centièmes.
          </p>
        </header>

        <section className="my-10" aria-label="Calculatrice">
          <TableHours />
        </section>

        <section className="my-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Tutoriel vidéo
          </h2>
          <Link
            href="/tutoriel-calcul-heure"
            className="block hover:opacity-90 transition-opacity"
            aria-label="Voir le tutoriel vidéo complet"
          >
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://i3.ytimg.com/vi/eYX_ENIVD6c/maxresdefault.jpg"
                alt="Aperçu du tutoriel vidéo"
                width={1200}
                height={1200}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
                <span className="bg-white text-black px-6 py-2 rounded-full font-medium">
                  Voir le tutoriel vidéo
                </span>
              </div>
            </div>
          </Link>
        </section>

        <section className="my-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Fonctionnalités principales
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Additionner des heures",
                content:
                  "Saisissez vos heures dans la colonne « heures fin ». La calculatrice additionne automatiquement les heures en format sexagésimal (heures-minutes) et convertit le résultat en format centésimal.",
              },
              {
                title: "Calculer une plage horaire",
                content:
                  "Entrez les heures de début et de fin. La durée est calculée en heures-minutes et convertie en heures-centièmes, facilitant la gestion précise du temps de travail.",
              },
              {
                title: "Additionner plusieurs plages horaires",
                content:
                  "Saisissez les heures de début et de fin pour chaque plage. Idéal pour calculer le temps de travail quotidien en additionnant automatiquement toutes les plages horaires.",
              },
              {
                title: "Imprimer vos calculs",
                content:
                  "Imprimez vos heures de travail en utilisant la fonction d'impression intégrée. Cliquez sur l'icône d'impression en bas de la table.",
              },
              {
                title: "Télécharger au format PDF",
                content:
                  "Téléchargez vos calculs au format PDF en cliquant sur l'icône de téléchargement en bas de la table.",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p>{feature.content}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
      <StructuredData />
    </main>
  );
}
