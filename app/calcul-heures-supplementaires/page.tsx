import type { Metadata } from "next";
import Link from "next/link";

import HeuresSupCalculator from "@/components/ui/heuresSupCalculator";
import RelatedTools from "@/components/ui/relatedTools";

export const metadata: Metadata = {
  title: "Calcul Heures Supplémentaires | Majoration 25% et 50% | Calcul Heures Pro",
  description:
    "Calculez vos heures supplémentaires et leur majoration (25% pour les 8 premières, 50% au-delà). Outil gratuit conforme au Code du travail français. Résultat instantané.",
  applicationName: "Calcul heures pro",
  keywords: [
    "calcul heures supplémentaires",
    "heures sup majoration",
    "calcul heures sup 25%",
    "heures supplémentaires 35h",
    "majoration heures supplémentaires France",
  ],
  creator: "Calcul heures pro Team",
  publisher: "Calcul heures pro",
  openGraph: {
    title: "Calculateur d'heures supplémentaires — Majoration 25% et 50%",
    description:
      "Calculez instantanément vos heures supplémentaires et leur majoration légale. Outil gratuit conforme au Code du travail.",
    type: "website",
    locale: "fr_FR",
    siteName: "Calcul heures pro",
  },
};

function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Calculateur d'heures supplémentaires",
    applicationCategory: "BusinessApplication",
    url: "https://www.calcul-heures.com/calcul-heures-supplementaires",
    operatingSystem: "All",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    featureList: [
      "Calcul des heures supplémentaires",
      "Majoration 25% (tranches 36h–43h)",
      "Majoration 50% (au-delà de 43h)",
      "Calcul de la majoration en euros (optionnel)",
    ],
    description:
      "Calculateur d'heures supplémentaires conforme au Code du travail français. Calcule les tranches à 25% et 50% de majoration.",
    datePublished: "2026-05-22",
    dateModified: new Date().toISOString().split("T")[0],
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "À partir de quand comptent les heures supplémentaires en France ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "En France, les heures supplémentaires sont les heures effectuées au-delà de 35 heures par semaine (durée légale du travail). La 36ème heure est donc la première heure supplémentaire.",
          },
        },
        {
          "@type": "Question",
          name: "Quelle est la majoration pour les heures supplémentaires ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La majoration légale est de 25% pour les 8 premières heures supplémentaires (de la 36ème à la 43ème heure), puis de 50% pour toutes les heures au-delà de 43h par semaine. Un accord de branche peut prévoir un taux différent, avec un minimum de 10%.",
          },
        },
        {
          "@type": "Question",
          name: "Combien d'heures supplémentaires peut-on faire par an ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Le contingent annuel d'heures supplémentaires est fixé à 220 heures par salarié par défaut. Un accord collectif peut le modifier à la hausse ou à la baisse.",
          },
        },
        {
          "@type": "Question",
          name: "Les heures supplémentaires peuvent-elles être remplacées par du repos ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, les heures supplémentaires peuvent donner lieu à un repos compensateur de remplacement (RCR) au lieu d'une majoration de salaire, si un accord collectif le prévoit.",
          },
        },
        {
          "@type": "Question",
          name: "Comment calculer sa majoration d'heures supplémentaires ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Multipliez le nombre d'heures supplémentaires par le taux horaire brut, puis appliquez la majoration (25% ou 50%). Exemple : 3 heures sup à 15€/h avec majoration de 25% = 3 × 15 × 1,25 = 56,25€ bruts supplémentaires.",
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

export default function CalcHeuresSup() {
  return (
    <main className="flex flex-col items-center py-6 md:py-10 text-black bg-background">
      <StructuredData />

      <article className="w-full max-w-4xl px-4 md:px-0">
        <header className="mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
            Calcul des heures supplémentaires
          </h1>
          <div className="space-y-4 text-lg">
            <p>
              En France, toute heure travaillée au-delà de{" "}
              <strong>35 heures par semaine</strong> est une heure
              supplémentaire. Les 8 premières (heures 36 à 43) sont majorées
              de <strong>25%</strong>, les suivantes de <strong>50%</strong>.
            </p>
            <p>
              Entrez vos heures travaillées cette semaine pour connaître
              instantanément le détail de vos heures supplémentaires et, si
              vous renseignez votre taux horaire, la majoration en euros bruts.
            </p>
          </div>
        </header>

        <section className="my-10" aria-label="Calculateur d'heures supplémentaires">
          <HeuresSupCalculator />
        </section>

        <section className="space-y-6 my-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Les règles des heures supplémentaires en France
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">Seuil légal : 35h/semaine</h3>
              <p>
                La durée légale du travail est de 35 heures par semaine (Code
                du travail, art. L3121-27). Toute heure au-delà constitue une
                heure supplémentaire, sauf si un accord collectif prévoit une
                durée de référence différente.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">Majoration 25% — heures 36 à 43</h3>
              <p>
                Les 8 premières heures supplémentaires (de la 36ème à la
                43ème heure dans la semaine) sont majorées de 25% du taux
                horaire brut. Un accord de branche peut fixer un taux
                différent, avec un minimum légal de 10%.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">Majoration 50% — au-delà de 43h</h3>
              <p>
                À partir de la 44ème heure dans la semaine, la majoration passe
                à 50%. Ces heures sont rares car elles dépassent souvent les
                durées maximales autorisées (48h/semaine ou 44h sur 12 semaines
                consécutives).
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">Contingent annuel : 220 heures</h3>
              <p>
                Un salarié peut faire au maximum <strong>220 heures
                supplémentaires par an</strong> par défaut. Au-delà, les heures
                doivent être remplacées par du repos compensateur obligatoire
                (RCO).
              </p>
            </div>
          </div>
        </section>

        <section className="my-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Exemple de calcul
          </h2>
          <div className="bg-blue-50 p-6 rounded-lg">
            <p className="font-semibold mb-3">
              Salarié ayant travaillé <strong>42 heures</strong> cette semaine au taux de{" "}
              <strong>15 €/h brut</strong> :
            </p>
            <ul className="space-y-2 text-sm">
              <li>✅ 35h normales × 15€ = 525 €</li>
              <li>✅ 7h supplémentaires (heures 36–42) × 15€ × 1,25 = 131,25 €</li>
              <li className="font-semibold pt-2 border-t border-blue-200">
                Majoration totale = +131,25 € bruts pour la semaine
              </li>
            </ul>
          </div>
        </section>

        <aside className="mt-8 p-4 bg-gray-50 rounded-lg">
          <p className="text-center text-gray-700 text-sm">
            Pour calculer vos heures totales avant de les saisir ici, utilisez notre{" "}
            <Link href="/calcul-heure" className="text-blue-600 hover:underline">
              calculatrice d&apos;heures de travail
            </Link>{" "}
            ou notre{" "}
            <Link href="/feuille-heures" className="text-blue-600 hover:underline">
              feuille de calcul hebdomadaire
            </Link>
            .
          </p>
        </aside>

        <RelatedTools currentPath="/calcul-heures-supplementaires" />
      </article>
    </main>
  );
}
