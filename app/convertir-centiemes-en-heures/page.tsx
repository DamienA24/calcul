import { Metadata } from "next";

import TableConvertCenth from "@/components/ui/tableConvertCenth";
import StructuredDataCenth from "@/components/ui/structuredDataCenth";

export const metadata: Metadata = {
  title: "Convertir Centièmes en Heures",
  description:
    "Convertissez facilement les centièmes en heures avec notre outil de conversion. Simplifiez la gestion de vos heures de travail en centièmes.Imprimer, télécharger",
  applicationName: "Calcul heures pro",
  keywords: [
    "convertir centièmes en heure",
    "conversion centième en heure",
    "calculatrice d'heures de travail",
    "centièmes en minutes",
    "convertisseur temps",
    "centième heure",
  ],
  creator: "Calcul heures pro Team",
  publisher: "Calcul heures pro",
};

export default function ConvertCenth() {
  return (
    <>
      <StructuredDataCenth />
      <div className="flex flex-col items-center py-10 sm:p-10 text-black bg-background ">
        <div className="w-9/12 ">
          <h1 className="text-3xl font-bold text-center mb-10">
            Convertir centièmes en heures
          </h1>
          <p>
            Besoin de convertir vos centièmes en heure ? Notre outil de
            conversion est la solution idéale. Transformez facilement et
            efficacement vos centièmes d&apos;heure en heures complètes. Que
            vous ayez une ou plusieurs périodes à convertir, notre convertisseur
            s&apos;adapte à vos besoins.
          </p>

          <p className="mt-5">
            Notre outil est conçu pour vous permettre de convertir des heures en
            centièmes de manière précise. Le temps total en centièmes est
            calculé en convertissant les heures et minutes en centièmes, puis en
            les arrondissant. Notez que le total en centièmes peut différer
            légèrement de la somme des arrondis individuels des temps en
            centièmes.
          </p>
        </div>

        <div className="mt-10 ">
          <TableConvertCenth />
        </div>

        <div className="w-9/12">
          <h2 className="text-3xl font-bold text-center my-10">
            Exemple utilisation du convertisseur de centièmes en heures
          </h2>

          <iframe
            src="https://www.youtube.com/embed/QVli5nMMb-E?si=_wZFZNVu36i7EuQn"
            title="YouTube video player"
            className="m-auto"
            width="320"
            height="240"
            allowFullScreen
          />
        </div>

        <div className="w-9/12">
          <h2 className="text-3xl font-bold text-center my-10">
            Fonctionnement du convertisseur de centièmes en heures
          </h2>
          <p>
            Ce convertisseur en ligne vous permet de convertir vos centièmes en
            heures de manière précise et efficace. Ajoutez autant de lignes que
            nécessaire pour inclure toutes vos périodes de temps.
          </p>
          <ul className="mt-10">
            <li className="font-bold">Convertir centièmes en heures :</li>
            <li>
              Saisissez vos heures dans la colonne « heures en 1:100 ». Le
              convertisseur transforme automatiquement le temps en format
              heures-minutes, simplifiant ainsi la gestion de vos heures de
              travail.
            </li>
          </ul>
          <ul className="mt-10">
            <li className="font-bold">
              Additionner plusieurs centièmes d&apos;heures :
            </li>
            <li>
              Entrez les centièmes pour chaque créneau. Le convertisseur
              additionne automatiquement les créneaux et affiche le total en
              format centésimal (heures-centièmes) et heures-minutes, facilitant
              ainsi le calcul précis de votre temps de travail quotidien.
            </li>
          </ul>
          <ul className="mt-10">
            <li className="font-bold">
              Imprimer vos conversions de centièmes :
            </li>
            <li>
              Vous pouvez facilement imprimer vos centièmes converties en heures
              minutes en utilisant la fonction d&apos;impression intégrée.
              Cliquez simplement sur l&apos;icône d&apos;impression située en
              bas de la table. Cela vous permet de garder une trace physique de
              vos conversions de centièmes.
            </li>
          </ul>
          <ul className="mt-10">
            <li className="font-bold">
              Télécharger vos conversions de centièmes :
            </li>
            <li>
              Vous pouvez également télécharger vos centièmes converties en
              heures minute au format PDF. Cliquez simplement sur l&apos;icône
              de téléchargement située en bas de la table. Cela vous permet de
              conserver une copie numérique de vos conversions de centièmes.
            </li>
          </ul>
          <p className="my-10">
            Utilisez ce convertisseur de centièmes en heures pour simplifier la
            gestion de votre temps de travail et convertir vos centièmes en
            heures de manière précise et efficace.
          </p>
        </div>
      </div>
    </>
  );
}
