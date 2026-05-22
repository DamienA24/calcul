import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TableHours from "@/components/ui/tableHoursNoSSR";
import RelatedTools from "@/components/ui/relatedTools";

export const metadata: Metadata = {
  title: "Calcul Heure de Travail | Calculatrice Gratuite | Calcul Heures Pro",
  description:
    "Calculez vos heures de travail en ligne, gratuitement. Calculatrice horaire multi-créneaux avec conversion automatique en centièmes. Export PDF et impression inclus.",
  applicationName: "Calcul heures pro",
  keywords: [
    "calcul heure",
    "calcul heure de travail",
    "calculatrice heure",
    "calcul horaire",
    "calculateur d'heures",
    "calcul temps de travail",
    "calcul d'heure",
    "calculer heure de travail",
  ],
  creator: "Calcul heures pro Team",
  publisher: "Calcul heures pro",
  openGraph: {
    title: "Calcul Heure de Travail — Calculatrice Gratuite",
    description:
      "Calculatrice horaire multi-créneaux. Conversion automatique en centièmes, export PDF et impression. Gratuit, sans inscription.",
    type: "website",
    locale: "fr_FR",
    siteName: "Calcul heures pro",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calcul Heure de Travail — Calculatrice Gratuite",
    description:
      "Calculatrice horaire en ligne. Conversion centièmes automatique, export PDF. Gratuit.",
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
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    featureList: [
      "Calcul des plages horaires",
      "Conversion en centièmes",
      "Export PDF",
      "Impression des calculs",
      "Gestion multi-créneaux",
    ],
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Comment calculer ses heures de travail ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Entrez l'heure de début et l'heure de fin de chaque créneau dans la calculatrice. L'outil calcule automatiquement la durée en hh:mm et en centièmes. Pour plusieurs créneaux, cliquez sur 'Ajouter une ligne' : le total est mis à jour en temps réel.",
          },
        },
        {
          "@type": "Question",
          name: "Comment additionner des heures de travail ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ajoutez une ligne par créneau horaire. Chaque ligne calcule sa durée individuellement, et le total en bas du tableau additionne l'ensemble. Le résultat s'affiche en hh:mm et en format décimal (centièmes).",
          },
        },
        {
          "@type": "Question",
          name: "Qu'est-ce que les centièmes d'heure ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Les centièmes d'heure (format décimal) expriment les minutes en fraction d'heure : 30 minutes = 0,50, 45 minutes = 0,75. Ce format est utilisé dans les logiciels de paie car il simplifie les additions et multiplications.",
          },
        },
        {
          "@type": "Question",
          name: "Comment imprimer ou télécharger le calcul d'heures ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Une fois vos créneaux saisis, cliquez sur l'icône d'impression (🖨️) pour imprimer directement, ou sur l'icône de téléchargement (📥) pour exporter en PDF.",
          },
        },
        {
          "@type": "Question",
          name: "Peut-on calculer le temps de travail sur plusieurs jours ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui. Ajoutez une ligne par créneau ou par jour. Utilisez le champ Label pour nommer chaque ligne (Lundi, Mardi…). Le total général additionne toutes les lignes cochées.",
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

export default function Calcul() {
  return (
    <main className="flex flex-col items-center p-4 md:p-10 text-black bg-background">
      <article className="w-full max-w-4xl">
        <header className="mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-center">
            Calcul heure de travail en ligne
          </h1>
          <div className="space-y-3 mt-4 text-lg">
            <p>
              Calculez vos heures de travail en saisissant l&apos;heure de
              début et l&apos;heure de fin de chaque créneau. La calculatrice
              additionne automatiquement toutes les plages horaires et affiche
              le total en <strong>hh:mm</strong> et en{" "}
              <strong>centièmes</strong> (format décimal utilisé en paie).
            </p>
            <p>
              Ajoutez autant de lignes que nécessaire — une par créneau ou par
              jour — pour calculer votre temps de travail journalier ou
              hebdomadaire. Imprimez ou téléchargez le résultat en PDF.
            </p>
          </div>
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
                loading="eager"
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
        <section className="my-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Comment calculer ses heures de travail ?",
                a: "Entrez l'heure de début et de fin de chaque créneau. La durée s'affiche en hh:mm et en centièmes. Pour plusieurs créneaux, cliquez sur « Ajouter une ligne » — le total se met à jour automatiquement.",
              },
              {
                q: "Comment additionner des heures de travail ?",
                a: "Ajoutez une ligne par créneau. Chaque ligne calcule sa durée, et le total en bas additionne tout. Le résultat s'affiche en hh:mm et en format décimal (centièmes).",
              },
              {
                q: "Qu'est-ce que les centièmes d'heure ?",
                a: "Les centièmes expriment les minutes en fraction d'heure : 30 min = 0,50 — 45 min = 0,75. Ce format est utilisé dans les logiciels de paie car il simplifie les multiplications pour calculer un salaire.",
              },
              {
                q: "Comment calculer le temps de travail sur plusieurs jours ?",
                a: "Ajoutez une ligne par jour et nommez chacune via le champ Label (Lundi, Mardi…). Le total général cumule toutes les lignes cochées pour obtenir le total de la semaine.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-5 rounded-lg">
                <h3 className="font-bold text-lg mb-2">{item.q}</h3>
                <p className="text-gray-700">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <RelatedTools currentPath="/calcul-heure" />
      </article>
      <StructuredData />
    </main>
  );
}
