import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import StructuredDataHours from "@/components/ui/structuredDataHours";
import TableConvertHours from "@/components/ui/tableConvertHours";
import RelatedTools from "@/components/ui/relatedTools";

export const metadata: Metadata = {
  title: "Convertir Heures en Centièmes | Outil Gratuit | Calcul Heures Pro",
  description:
    "Convertissez facilement vos heures en centièmes avec notre outil de conversion précis. Gérez efficacement votre temps de travail, imprimez ou téléchargez vos résultats en quelques clics.",
  applicationName: "Calcul heures pro",
  keywords: [
    "convertir heures en centième",
    "calculatrice d'heures de travail",
    "conversion des heures en centièmes",
    "convertisseur temps",
    "centieme heure",
  ],
  creator: "Calcul heures pro Team",
  publisher: "Calcul heures pro",
  openGraph: {
    title: "Convertir Heures en Centièmes — Outil gratuit",
    description:
      "Convertissez vos heures en centièmes en un clic. Export PDF et impression inclus.",
    type: "website",
    locale: "fr_FR",
    siteName: "Calcul heures pro",
  },
};

export default function ConvertHours() {
  return (
    <main className="flex flex-col items-center py-6 md:py-10 text-black bg-background">
      <StructuredDataHours />

      <article className="w-full max-w-4xl px-4 md:px-0">
        <header className="mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
            Convertir heures en centième
          </h1>
          <div className="space-y-4 text-lg">
            <p>
              Besoin de convertir vos heures en centième ? Notre outil de
              conversion d&apos;heures en centième est la solution idéale pour
              transformer efficacement vos heures de travail. Ajoutez autant de
              lignes que nécessaire pour inclure vos différentes heures et
              obtenez des résultats précis en quelques clics.
            </p>
            <p>
              Notre convertisseur vous permet de passer facilement des heures
              aux centièmes. Le temps total en centièmes est calculé en
              convertissant les heures et minutes, puis en les arrondissant pour
              une précision optimale. Notez que le total en centièmes peut
              légèrement différer de la somme des arrondis individuels.
            </p>
          </div>
        </header>

        <section className="my-10" aria-label="Convertisseur heures en centièmes">
          <TableConvertHours />
        </section>

        <section className="my-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Exemple d&apos;utilisation du convertisseur
          </h2>
          <Link
            href="/tutoriel-heures-en-centiemes"
            className="inline-block hover:opacity-90 transition-opacity"
          >
            <figure className="relative">
              <Image
                src="https://i3.ytimg.com/vi/nGxRDw_6OH8/maxresdefault.jpg"
                alt="Tutoriel vidéo : convertir les heures en centièmes"
                width={1200}
                height={675}
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
            Comment fonctionne notre convertisseur d&apos;heures en centième
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">Convertir des heures en centièmes</h3>
              <p>
                Saisissez vos heures dans la colonne « heures en hh:mm ». Le
                convertisseur transforme automatiquement le temps en format
                centésimal (heures-centièmes), simplifiant ainsi la gestion de
                vos heures de travail.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">Additionner plusieurs créneaux horaires</h3>
              <p>
                Entrez les heures pour chaque créneau. Le convertisseur
                additionne automatiquement les créneaux et affiche le total en
                format centésimal, facilitant ainsi le calcul précis de votre
                temps de travail quotidien.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">Imprimer et télécharger vos conversions</h3>
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
            suggestion, n&apos;hésitez pas à{" "}
            <Link href="/contact" className="text-blue-600 hover:underline">
              nous contacter
            </Link>
            .
          </p>
        </footer>

        <RelatedTools currentPath="/convertir-heures-en-centieme" />
      </article>
    </main>
  );
}
