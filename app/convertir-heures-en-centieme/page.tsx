import Metadata from "next";

import StructuredDataHours from "@/components/ui/structuredDataHours";
import TableConvertHours from "@/components/ui/tableConvertHours";

export const metadata: Metadata = {
  title: "Convertir Heures en Centièmes",
  description:
    "Convertissez vos heures en centièmes avec notre outil de conversion. Facilitez la gestion précise de vos heures de travail.Imprimer, télécharger",
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
};
export default function ConvertHours() {
  return (
    <>
      <StructuredDataHours />
      <div className="flex flex-col items-center py-10 sm:p-10 text-black bg-background ">
        <div className="w-9/12">
          <h1 className="text-3xl font-bold text-center mb-10">
            Convertir heures en centième
          </h1>
          <p>
            Besoin de convertir vos heures en centième ? Notre outil de
            conversion d&apos;heures en centième est la solution idéale pour
            transformer efficacement vos heures de travail. Ajoutez autant de
            lignes que nécessaire pour inclure vos différentes heures et obtenez
            des résultats précis en quelques clics.
          </p>

          <p className="mt-5">
            Notre convertisseur vous permet de passer facilement des heures aux
            centièmes. Le temps total en centièmes est calculé en convertissant
            les heures et minutes, puis en les arrondissant pour une précision
            optimale. Notez que le total en centièmes peut légèrement différer
            de la somme des arrondis individuels des temps en centièmes.
          </p>
        </div>

        <div className="mt-10">
          <TableConvertHours />
        </div>

        <div className="w-9/12">
          <h2 className="text-3xl font-bold text-center my-10">
            Exemple utilisation du convertisseur d&apos;heures en centième
          </h2>

          <iframe
            src="https://www.youtube.com/embed/nGxRDw_6OH8?si=ScWNL6cqnZxAiy_o"
            title="YouTube video player"
            className="m-auto"
            width="320"
            height="240"
            allowFullScreen
          />
        </div>

        <div className="w-9/12">
          <h2 className="text-3xl font-bold text-center my-10">
            Comment fonctionne notre convertisseur d&apos;heures en centième
          </h2>
          <p>
            Ce convertisseur en ligne offre plusieurs fonctionnalités pour
            convertir vos heures en centièmes de manière efficace :
          </p>
          <ul className="mt-10">
            <li className="font-bold">Convertir des heures en centièmes :</li>
            <li>
              Saisissez vos heures dans la colonne « heures en hh:mm ». Le
              convertisseur transforme automatiquement le temps en format
              centésimal (heures-centièmes), simplifiant ainsi la gestion de vos
              heures de travail.
            </li>
          </ul>
          <ul className="mt-10">
            <li className="font-bold">
              Additionner plusieurs créneaux horaires :
            </li>
            <li>
              Entrez les heures pour chaque créneau. Le convertisseur additionne
              automatiquement les créneaux et affiche le total en format
              centésimal (heures-centièmes), facilitant ainsi le calcul précis
              de votre temps de travail quotidien.
            </li>
          </ul>
          <ul className="mt-10">
            <li className="font-bold">
              Imprimer vos conversions d&apos;heures :
            </li>
            <li>
              Vous pouvez facilement imprimer vos heures converties en centièmes
              en utilisant la fonction d&apos;impression intégrée. Cliquez
              simplement sur l&apos;icône d&apos;impression située en bas de la
              table. Cela vous permet de garder une trace physique de vos
              conversions d&apos;heures.
            </li>
          </ul>
          <ul className="mt-10">
            <li className="font-bold">
              Télécharger vos conversions d&apos;heures :
            </li>
            <li>
              Vous pouvez également télécharger vos heures converties en
              centièmes au format PDF. Cliquez simplement sur l&apos;icône de
              téléchargement située en bas de la table. Cela vous permet de
              conserver une copie numérique de vos conversions d&apos;heures.
            </li>
          </ul>
          <p className="my-10">
            Utilisez ce convertisseur d&apos;heures en centièmes pour simplifier
            la gestion de votre temps de travail et convertir les heures en
            centièmes de manière précise et efficace.
          </p>
        </div>
      </div>
    </>
  );
}
