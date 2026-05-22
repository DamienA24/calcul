import type { Metadata } from "next";
import Link from "next/link";
import TableHours from "@/components/ui/tableHours";
import RelatedTools from "@/components/ui/relatedTools";

export const metadata: Metadata = {
  title: "Additionner des Heures | Calculatrice Gratuite | Calcul Heures Pro",
  description:
    "Additionnez vos heures de travail en ligne : saisissez vos créneaux et obtenez le total en hh:mm et en centièmes. Gratuit, sans inscription, export PDF.",
  applicationName: "Calcul heures pro",
  keywords: [
    "additionner des heures",
    "addition heure",
    "addition des heures",
    "additionner heures de travail",
    "additionner des heures et des minutes",
    "additions heures",
    "addition horaire",
    "calculer addition heures",
  ],
  creator: "Calcul heures pro Team",
  publisher: "Calcul heures pro",
  openGraph: {
    title: "Additionner des Heures de Travail — Calculatrice Gratuite",
    description:
      "Additionnez vos heures de travail en ligne. Résultat en hh:mm et en centièmes, export PDF. Gratuit, sans inscription.",
    type: "website",
    locale: "fr_FR",
    siteName: "Calcul heures pro",
  },
};

function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Calculatrice pour additionner des heures",
    applicationCategory: "BusinessApplication",
    url: "https://www.calcul-heures.com/additionner-des-heures",
    operatingSystem: "All",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    featureList: [
      "Addition d'heures multi-créneaux",
      "Résultat en hh:mm et centièmes",
      "Gestion des heures supérieures à 24h",
      "Export PDF et impression",
    ],
    datePublished: "2026-05-22",
    dateModified: new Date().toISOString().split("T")[0],
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Comment additionner des heures de travail ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Entrez l'heure de début et l'heure de fin de chaque créneau dans la calculatrice. Chaque ligne calcule sa durée automatiquement. Le total en bas du tableau additionne toutes les plages horaires en hh:mm et en centièmes.",
          },
        },
        {
          "@type": "Question",
          name: "Comment additionner des heures et des minutes ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Saisissez vos horaires au format hh:mm (ex. 08:30 et 12:45). La calculatrice gère automatiquement le dépassement des 60 minutes : 45 min + 30 min = 1h15, pas 75 min. Le résultat s'affiche correctement en heures et minutes.",
          },
        },
        {
          "@type": "Question",
          name: "Peut-on additionner plus de 24 heures ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui. La calculatrice additionne des heures sans limite de 24h. Idéal pour calculer le total d'une semaine de travail : si vous avez travaillé 8h par jour sur 5 jours, le total affiché sera 40h00.",
          },
        },
        {
          "@type": "Question",
          name: "Quelle est la différence entre hh:mm et les centièmes ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Le format hh:mm affiche les heures et les minutes (ex. 7h30). Les centièmes expriment les minutes en fraction d'heure (ex. 7,50). Les centièmes sont utilisés dans les logiciels de paie car ils permettent de multiplier directement par un taux horaire.",
          },
        },
        {
          "@type": "Question",
          name: "Comment calculer le total d'une semaine de travail ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ajoutez une ligne par jour dans la calculatrice. Nommez chaque ligne via le champ Label (Lundi, Mardi…). Le total hebdomadaire s'affiche automatiquement en bas du tableau, en heures:minutes et en centièmes.",
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

export default function AdditionnerDesHeures() {
  return (
    <main className="flex flex-col items-center py-6 md:py-10 text-black bg-background">
      <StructuredData />

      <article className="w-full max-w-4xl px-4 md:px-0">
        <header className="mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
            Additionner des heures de travail
          </h1>
          <div className="space-y-4 text-lg">
            <p>
              Additionnez vos heures de travail en saisissant l&apos;heure de
              début et de fin de chaque créneau. La calculatrice additionne
              automatiquement toutes vos plages horaires et affiche le total
              en <strong>hh:mm</strong> et en <strong>centièmes</strong> — le
              format décimal utilisé dans les logiciels de paie.
            </p>
            <p>
              Ajoutez autant de lignes que nécessaire pour{" "}
              <strong>additionner vos heures sur une journée ou une semaine</strong>.
              Le résultat se met à jour en temps réel. Imprimez ou téléchargez
              le total en PDF.
            </p>
          </div>
        </header>

        <section className="my-10" aria-label="Calculatrice addition heures">
          <TableHours />
        </section>

        <section className="space-y-4 my-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Comment additionner des heures ?
          </h2>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Saisir l'heure de début et de fin",
                content:
                  "Entrez l'heure de début et l'heure de fin de chaque créneau dans les deux premières colonnes. La durée s'affiche automatiquement en hh:mm et en centièmes sur la même ligne.",
              },
              {
                step: "2",
                title: "Ajouter des lignes pour chaque créneau",
                content:
                  "Cliquez sur « Ajouter une ligne » pour chaque créneau supplémentaire. Idéal pour additionner une matinée et un après-midi, ou chaque jour de la semaine.",
              },
              {
                step: "3",
                title: "Lire le total en bas du tableau",
                content:
                  "Le total général en bas du tableau additionne toutes les lignes cochées. Vous obtenez la somme exacte en heures:minutes et en centièmes, sans limite à 24h.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 bg-white p-5 rounded-lg shadow-sm">
                <span className="flex-shrink-0 w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-gray-700">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="my-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Exemples d&apos;addition d&apos;heures
          </h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Créneaux</th>
                  <th className="px-4 py-3 text-right font-semibold text-gray-700">Total hh:mm</th>
                  <th className="px-4 py-3 text-right font-semibold text-gray-700">Total centièmes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { creneau: "08:00 → 12:00 + 13:00 → 17:00", total: "8h00", centiemes: "8,00" },
                  { creneau: "09:30 → 12:45 + 14:00 → 18:15", total: "7h30", centiemes: "7,50" },
                  { creneau: "Lun 7h + Mar 8h + Mer 7h30 + Jeu 8h + Ven 7h", total: "37h30", centiemes: "37,50" },
                  { creneau: "08:15 → 11:45 + 13:30 → 17:00", total: "7h00", centiemes: "7,00" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 text-gray-700">{row.creneau}</td>
                    <td className="px-4 py-3 text-right font-mono font-semibold text-gray-900">{row.total}</td>
                    <td className="px-4 py-3 text-right font-mono font-semibold text-sky-700">{row.centiemes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Ces exemples sont calculables directement dans la calculatrice ci-dessus.
          </p>
        </section>

        <section className="my-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Règle d&apos;addition des heures et minutes
          </h2>
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 space-y-3">
            <p className="font-semibold text-blue-900">
              Les heures ne s&apos;additionnent pas comme des nombres décimaux.
            </p>
            <p className="text-blue-800">
              1h45 + 1h30 ne font pas 2h75 mais <strong>3h15</strong> : une fois 60 minutes atteintes,
              on passe à l&apos;heure suivante. C&apos;est le système sexagésimal (base 60).
            </p>
            <p className="text-blue-800">
              En centièmes, c&apos;est plus simple : 1,75 + 1,50 = 3,25 — les centièmes
              fonctionnent comme des nombres décimaux classiques, ce qui facilite le
              calcul du salaire (heures × taux horaire).
            </p>
          </div>
        </section>

        <section className="space-y-4 my-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Comment additionner des heures de travail ?",
                a: "Entrez l'heure de début et de fin de chaque créneau dans la calculatrice. Chaque ligne calcule sa durée et le total en bas additionne tout automatiquement en hh:mm et en centièmes.",
              },
              {
                q: "Comment additionner des heures et des minutes ?",
                a: "Saisissez vos horaires au format hh:mm (ex. 08:30 et 12:45). La calculatrice gère automatiquement le dépassement des 60 minutes : 45 min + 30 min = 1h15, pas 75 min.",
              },
              {
                q: "Peut-on additionner plus de 24 heures ?",
                a: "Oui. La calculatrice additionne des heures sans limite. Pour une semaine complète (ex. 8h/jour × 5 jours), le total affiché sera 40h00.",
              },
              {
                q: "Quelle est la différence entre hh:mm et les centièmes ?",
                a: "Le format hh:mm affiche heures et minutes (7h30). Les centièmes expriment les minutes en fraction d'heure (7,50). Les centièmes sont utilisés en paie pour multiplier directement par un taux horaire.",
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
            Besoin de calculer votre salaire à partir de vos heures ?{" "}
            <Link
              href="/calcul-horaire"
              className="font-semibold underline hover:text-blue-700"
            >
              Utilisez notre calculatrice horaire avec estimation du salaire
            </Link>
            .
          </p>
        </aside>

        <RelatedTools currentPath="/additionner-des-heures" />
      </article>
    </main>
  );
}
