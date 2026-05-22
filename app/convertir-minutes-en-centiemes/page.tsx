import type { Metadata } from "next";
import Link from "next/link";

import MinutesTable from "@/components/ui/minutesTable";
import RelatedTools from "@/components/ui/relatedTools";

export const metadata: Metadata = {
  title: "Convertir Minutes en Centièmes | Tableau Complet | Calcul Heures Pro",
  description:
    "Tableau complet de conversion des minutes en centièmes d'heure (1 à 59 minutes). Imprimable et téléchargeable gratuitement. Indispensable pour la gestion du temps de travail.",
  applicationName: "Calcul heures pro",
  keywords: [
    "convertir minutes en centièmes",
    "minutes en centièmes",
    "tableau minutes centièmes",
    "conversion minutes heures décimales",
    "minutes centièmes heure travail",
  ],
  creator: "Calcul heures pro Team",
  publisher: "Calcul heures pro",
  openGraph: {
    title: "Tableau de conversion minutes en centièmes",
    description:
      "Convertissez instantanément les minutes en centièmes d'heure. Tableau complet 1–59 minutes, imprimable et PDF.",
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
      "@id": "https://www.calcul-heures.com/convertir-minutes-en-centiemes",
    },
    headline: "Tableau de conversion minutes en centièmes",
    description:
      "Tableau complet de conversion des minutes en centièmes d'heure, de 1 à 59 minutes.",
    publisher: {
      "@type": "Organization",
      name: "Calcul heures pro",
    },
    datePublished: "2026-05-22",
    dateModified: new Date().toISOString().split("T")[0],
    isAccessibleForFree: true,
    hasPart: {
      "@type": "Dataset",
      name: "Tableau de conversion minutes en centièmes",
      description: "Données de conversion des minutes (1–59) en centièmes d'heure",
    },
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Comment convertir des minutes en centièmes d'heure ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pour convertir des minutes en centièmes, divisez le nombre de minutes par 60 puis multipliez par 100. Par exemple : 30 minutes ÷ 60 × 100 = 50 centièmes. Notre tableau donne directement la valeur pour chaque minute de 1 à 59.",
          },
        },
        {
          "@type": "Question",
          name: "Pourquoi utiliser les centièmes dans la paie ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Les centièmes d'heure (format décimal) facilitent les calculs de salaire. Additionner 7h75 + 8h25 = 16h00 est plus simple qu'additionner 7h45 + 8h15. La plupart des logiciels de paie fonctionnent en décimal.",
          },
        },
        {
          "@type": "Question",
          name: "Combien vaut 45 minutes en centièmes ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "45 minutes équivaut à 75 centièmes (0,75). Calcul : 45 ÷ 60 × 100 = 75. Donc 8h45 s'écrit 8h75 en centièmes.",
          },
        },
        {
          "@type": "Question",
          name: "Combien vaut 30 minutes en centièmes ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "30 minutes équivaut à 50 centièmes (0,50). Donc 7h30 s'écrit 7h50 en centièmes.",
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

export default function ConvertMinutes() {
  return (
    <main className="flex flex-col items-center py-6 md:py-10 text-black bg-background">
      <StructuredData />

      <article className="w-full max-w-4xl px-4 md:px-0">
        <header className="mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
            Convertir minutes en centièmes
          </h1>
          <div className="space-y-4 text-lg">
            <p>
              Ce tableau de conversion minutes en centièmes vous donne
              instantanément la valeur décimale de chaque minute, de 1 à 59.
              Indispensable pour remplir une fiche de paie ou calculer vos
              heures de travail en format centésimal.
            </p>
            <p>
              Le principe : 1 heure = 100 centièmes. Pour convertir X minutes
              en centièmes, on calcule{" "}
              <strong>X ÷ 60 × 100</strong>. Ainsi, 30 minutes = 50 centièmes,
              et 7h30 s&apos;écrit <strong>7h75</strong> en centièmes.
            </p>
          </div>
        </header>

        <section className="my-10" aria-label="Tableau de conversion minutes en centièmes">
          <MinutesTable />
        </section>

        <section className="space-y-6 my-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Exemples de conversion rapide
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { min: 15, centh: "25" },
              { min: 30, centh: "50" },
              { min: 45, centh: "75" },
              { min: 20, centh: "33" },
            ].map(({ min, centh }) => (
              <div key={min} className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-sky-600">{min} min</p>
                <p className="text-gray-500 text-sm mt-1">= {centh} centièmes</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6 my-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Comment convertir des minutes en centièmes d'heure ?",
                a: "Divisez les minutes par 60 puis multipliez par 100. Exemple : 45 min ÷ 60 × 100 = 75 centièmes.",
              },
              {
                q: "Pourquoi utiliser les centièmes dans la paie ?",
                a: "Le format décimal simplifie les additions : 7h75 + 8h25 = 16h00 est plus simple qu'additionner 7h45 + 8h15. Tous les logiciels de paie fonctionnent en décimal.",
              },
              {
                q: "Combien vaut 30 minutes en centièmes ?",
                a: "30 minutes = 50 centièmes. Donc 7h30 s'écrit 7,50 ou 7h50 en centièmes.",
              },
              {
                q: "Combien vaut 45 minutes en centièmes ?",
                a: "45 minutes = 75 centièmes. Donc 8h45 s'écrit 8,75 ou 8h75 en centièmes.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">{item.q}</h3>
                <p className="text-gray-700">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-10 p-6 bg-gray-50 rounded-lg">
          <p className="text-center text-gray-700">
            Besoin de convertir des centièmes en heures ?{" "}
            <Link
              href="/convertir-centiemes-en-heures"
              className="text-blue-600 hover:underline"
            >
              Utilisez notre convertisseur centièmes → heures
            </Link>
            .
          </p>
        </footer>

        <RelatedTools currentPath="/convertir-minutes-en-centiemes" />
      </article>
    </main>
  );
}
