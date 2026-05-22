import type { Metadata } from "next";
import Link from "next/link";

import TableHours from "@/components/ui/tableHours";
import RelatedTools from "@/components/ui/relatedTools";

export const metadata: Metadata = {
  title: "Feuille de Calcul Heures de Travail | Gratuit | Calcul Heures Pro",
  description:
    "Remplissez votre feuille de calcul d'heures de travail en ligne. Calculez vos heures journalières et hebdomadaires avec conversion en centièmes automatique. Export PDF gratuit.",
  applicationName: "Calcul heures pro",
  keywords: [
    "feuille de calcul heures travail",
    "fiche horaire travail",
    "tableau heures semaine",
    "relevé heures travail",
    "calcul heures journalier",
  ],
  creator: "Calcul heures pro Team",
  publisher: "Calcul heures pro",
  openGraph: {
    title: "Feuille de Calcul Heures de Travail",
    description:
      "Remplissez votre feuille d'heures en ligne, obtenez le total en hh:mm et en centièmes. Export PDF et impression inclus.",
    type: "website",
    locale: "fr_FR",
    siteName: "Calcul heures pro",
  },
};

function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Feuille de calcul d'heures de travail",
    applicationCategory: "BusinessApplication",
    url: "https://www.calcul-heures.com/feuille-heures",
    operatingSystem: "All",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    featureList: [
      "Calcul des plages horaires",
      "Conversion automatique en centièmes",
      "Multi-créneaux et multi-jours",
      "Export PDF",
      "Impression",
    ],
    description:
      "Feuille de calcul d'heures de travail en ligne, gratuite, avec conversion automatique en centièmes.",
    datePublished: "2026-05-22",
    dateModified: new Date().toISOString().split("T")[0],
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Comment utiliser la feuille de calcul d'heures ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Entrez l'heure de début et l'heure de fin pour chaque créneau. Ajoutez autant de lignes que nécessaire avec le bouton 'Ajouter une ligne'. Le total en hh:mm et en centièmes est calculé automatiquement.",
          },
        },
        {
          "@type": "Question",
          name: "Puis-je enregistrer ma feuille d'heures ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, vous pouvez imprimer votre feuille d'heures ou la télécharger au format PDF grâce aux boutons en bas du tableau.",
          },
        },
        {
          "@type": "Question",
          name: "Quelle est la différence entre hh:mm et centièmes ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "hh:mm est le format classique (7h30 = 7 heures et 30 minutes). Les centièmes (format décimal) expriment les minutes en centièmes d'heure : 7h30 = 7,50 en centièmes. Ce format est utilisé dans les logiciels de paie.",
          },
        },
        {
          "@type": "Question",
          name: "Peut-on calculer des heures sur plusieurs jours ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, ajoutez une ligne par créneau ou par jour. Nommez chaque ligne (Lundi, Mardi…) via le champ Label pour vous y retrouver. Le total général est calculé en bas du tableau.",
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

export default function FeuilleHeures() {
  return (
    <main className="flex flex-col items-center py-6 md:py-10 text-black bg-background">
      <StructuredData />

      <article className="w-full max-w-4xl px-4 md:px-0">
        <header className="mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
            Feuille de calcul d&apos;heures de travail
          </h1>
          <div className="space-y-4 text-lg">
            <p>
              Complétez votre feuille d&apos;heures en ligne en saisissant vos
              heures d&apos;arrivée et de départ. L&apos;outil calcule
              automatiquement la durée de chaque créneau ainsi que le total
              journalier ou hebdomadaire, en format hh:mm et en centièmes.
            </p>
            <p>
              Utilisez le champ <strong>Label</strong> pour nommer chaque
              ligne (Lundi, Mardi, matin, après-midi…) et le bouton{" "}
              <strong>Ajouter une ligne</strong> pour suivre plusieurs créneaux
              sur la même feuille.
            </p>
          </div>
        </header>

        <section className="my-10" aria-label="Feuille de calcul d'heures">
          <TableHours />
        </section>

        <section className="space-y-6 my-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Comment remplir votre feuille d&apos;heures
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">Saisir une journée de travail</h3>
              <p>
                Entrez l&apos;heure de début (ex : 09:00) et l&apos;heure de
                fin (ex : 17:30). La durée s&apos;affiche automatiquement en
                hh:mm (8:30) et en centièmes (8,50). Nommez la ligne
                &quot;Lundi&quot; dans le champ Label.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">Calculer la semaine complète</h3>
              <p>
                Cliquez sur <strong>Ajouter une ligne</strong> pour chaque
                jour travaillé. Le total en bas du tableau cumule
                automatiquement toutes les lignes cochées.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">Gérer les pauses et coupures</h3>
              <p>
                Pour une journée avec coupure (9h–12h puis 14h–18h), ajoutez
                deux lignes : une pour le matin, une pour l&apos;après-midi.
                Décochez les lignes à exclure du total.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">Exporter votre feuille d&apos;heures</h3>
              <ul className="space-y-2">
                <li>🖨️ Impression : icône imprimante en bas du tableau</li>
                <li>📥 PDF : icône téléchargement pour sauvegarder en PDF</li>
              </ul>
            </div>
          </div>
        </section>

        <aside className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold mb-2 text-blue-900">Besoin de calculer des heures supplémentaires ?</h3>
          <p className="text-blue-800 text-sm">
            Utilisez notre{" "}
            <Link
              href="/calcul-heures-supplementaires"
              className="underline hover:text-blue-600"
            >
              calculateur d&apos;heures supplémentaires
            </Link>{" "}
            pour savoir combien d&apos;heures sup vous avez effectuées et leur
            majoration.
          </p>
        </aside>

        <RelatedTools currentPath="/feuille-heures" />
      </article>
    </main>
  );
}
