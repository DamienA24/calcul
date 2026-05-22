import type { Metadata } from "next";
import Link from "next/link";

import TableHours from "@/components/ui/tableHoursNoSSR";
import SalaireEstimator from "@/components/ui/salaireEstimator";
import RelatedTools from "@/components/ui/relatedTools";

export const metadata: Metadata = {
  title: "Calcul Horaire de Travail | Calculatrice + Salaire | Calcul Heures Pro",
  description:
    "Calculez votre horaire de travail en ligne : durée des créneaux, total hebdomadaire et estimation du salaire brut/net. Gratuit, sans inscription, export PDF.",
  applicationName: "Calcul heures pro",
  keywords: [
    "calcul horaire",
    "calculatrice horaire",
    "calculateur horaire",
    "calcul horaire de travail",
    "calculatrice horaire travail",
    "calcul horaire salaire",
    "calculer horaire semaine",
  ],
  creator: "Calcul heures pro Team",
  publisher: "Calcul heures pro",
  openGraph: {
    title: "Calcul Horaire de Travail — Calculatrice + Salaire Estimé",
    description:
      "Calculez votre horaire de travail et estimez votre salaire brut/net. Gratuit, sans inscription.",
    type: "website",
    locale: "fr_FR",
    siteName: "Calcul heures pro",
  },
};

function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Calculateur d'horaire de travail",
    applicationCategory: "BusinessApplication",
    url: "https://www.calcul-heures.com/calcul-horaire",
    operatingSystem: "All",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    featureList: [
      "Calcul de l'horaire de travail",
      "Total hebdomadaire en hh:mm et centièmes",
      "Estimation du salaire brut et net",
      "Export PDF et impression",
    ],
    datePublished: "2026-05-22",
    dateModified: new Date().toISOString().split("T")[0],
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Comment calculer son horaire de travail ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Saisissez l'heure de début et de fin de chaque créneau dans la calculatrice. Le total en heures et en centièmes s'affiche automatiquement. Ajoutez autant de créneaux que nécessaire pour couvrir votre journée ou votre semaine.",
          },
        },
        {
          "@type": "Question",
          name: "Comment calculer son salaire à partir de son horaire ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Multipliez le nombre d'heures travaillées par votre taux horaire brut. Notre estimateur fait ce calcul automatiquement et affiche le brut et une estimation du net (brut × 0,77, taux moyen de cotisations salariales).",
          },
        },
        {
          "@type": "Question",
          name: "Quel est le SMIC horaire en 2025 ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Le SMIC horaire brut est fixé à 11,88 € depuis le 1er novembre 2024. Pour 35h/semaine, le SMIC mensuel brut est de 1 801,80 €.",
          },
        },
        {
          "@type": "Question",
          name: "Comment calculer les heures d'une semaine de travail ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ajoutez une ligne par créneau ou par jour dans la calculatrice, nommez chaque ligne (Lundi, Mardi…) et le total hebdomadaire s'affiche automatiquement en bas du tableau.",
          },
        },
        {
          "@type": "Question",
          name: "Quelle est la différence entre brut et net ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Le salaire brut est la rémunération avant déduction des cotisations salariales. Le salaire net est ce que vous percevez réellement. En France, le passage de brut à net représente environ 23% de cotisations pour un salarié du privé (soit net ≈ brut × 0,77).",
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

export default function CalcHoraire() {
  return (
    <main className="flex flex-col items-center py-6 md:py-10 text-black bg-background">
      <StructuredData />

      <article className="w-full max-w-4xl px-4 md:px-0">
        <header className="mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
            Calcul horaire de travail
          </h1>
          <div className="space-y-4 text-lg">
            <p>
              Calculez votre horaire de travail en saisissant vos créneaux
              heure par heure. La calculatrice affiche le total en{" "}
              <strong>hh:mm</strong> et en <strong>centièmes</strong>, pour
              une journée ou une semaine entière. Estimez ensuite votre
              salaire brut et net directement depuis cette page.
            </p>
          </div>
        </header>

        <section className="my-10" aria-label="Calculatrice horaire">
          <TableHours />
        </section>

        <section className="my-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Estimation du salaire à partir de votre horaire
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Renseignez vos heures totales et votre taux horaire pour estimer
            votre rémunération brute et nette.
          </p>
          <SalaireEstimator />
        </section>

        <section className="space-y-4 my-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Repères horaires en France
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                label: "Durée légale hebdomadaire",
                value: "35 heures",
                note: "Art. L3121-27 Code du travail",
              },
              {
                label: "SMIC horaire brut (2025)",
                value: "11,88 €/h",
                note: "En vigueur depuis nov. 2024",
              },
              {
                label: "Durée maximale journalière",
                value: "10 heures",
                note: "Sauf dérogation conventionnelle",
              },
              {
                label: "Durée maximale hebdomadaire",
                value: "48 heures",
                note: "Ou 44h sur 12 semaines consécutives",
              },
            ].map((item) => (
              <div key={item.label} className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-800">{item.label}</p>
                <p className="text-2xl font-bold text-sky-700 my-1">{item.value}</p>
                <p className="text-xs text-gray-500">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4 my-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Comment calculer son horaire de travail ?",
                a: "Entrez l'heure de début et de fin de chaque créneau. Le total en heures et en centièmes s'affiche automatiquement. Ajoutez autant de lignes que nécessaire.",
              },
              {
                q: "Comment calculer son salaire à partir de son horaire ?",
                a: "Multipliez vos heures travaillées par votre taux horaire brut. Notre estimateur en bas de page fait ce calcul et affiche le brut et une estimation du net.",
              },
              {
                q: "Quel est le SMIC horaire en 2025 ?",
                a: "11,88 €/h brut depuis novembre 2024, soit 1 801,80 € brut mensuel pour 35h/semaine.",
              },
              {
                q: "Comment calculer les heures d'une semaine de travail ?",
                a: "Ajoutez une ligne par jour, nommez chaque ligne (Lundi, Mardi…). Le total hebdomadaire s'affiche automatiquement.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-5 rounded-lg">
                <h3 className="font-bold text-lg mb-2">{item.q}</h3>
                <p className="text-gray-700">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <aside className="mt-8 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-900 text-center">
            Vous avez effectué des heures supplémentaires ?{" "}
            <Link
              href="/calcul-heures-supplementaires"
              className="font-semibold underline hover:text-blue-700"
            >
              Calculez leur majoration (25% et 50%)
            </Link>
            .
          </p>
        </aside>

        <RelatedTools currentPath="/calcul-horaire" />
      </article>
    </main>
  );
}
