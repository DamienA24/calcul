import { Metadata } from "next";

import TableConvertHours from "@/components/ui/tableConvertHours";

export const metadata: Metadata = {
  title: "Convertir Heures en Centièmes | Calculatrice d'heures de travail",
  description:
    "Convertissez vos heures en centièmes avec notre outil de conversion. Facilitez la gestion précise de vos heures de travail.",
  applicationName: "Calcul heures pro",
  keywords: [
    "calculatrice d'heures de travail",
    "convertir les heures en centième",
    "conversion des heures en centièmes",
    "conversion heure en centième",
    "convertisseur temps",
    "centieme heure",
  ],
  creator: "Calcul heures pro Team",
  publisher: "Calcul heures pro",
};
export default function ConvertHours() {
  return (
    <div className="flex flex-col items-center py-10 sm:p-10 text-black bg-background ">
      <div className="w-9/12">
        <h1 className="text-3xl font-bold text-center mb-10">
          Convertir heures en centième
        </h1>
        <p>
          Utilisez notre converter d'heures en centième pour convertir
          efficacement vos heures de travail en centième. Ajoutez autant de
          lignes que nécessaire pour inclure vos différentes heures.
        </p>

        <p className="mt-5">
          Notre outil vous permet de convertir heures en centièmes. Le temps
          total en centièmes est calculé en convertissant les heures et minutes
          en centièmes, puis en les arrondissant. Notez que le total en
          centièmes peut différer de la somme des arrondis individuels des temps
          en centièmes.
        </p>
      </div>

      <div className="mt-10">
        <TableConvertHours />
      </div>

      <div className="w-9/12">
        <h1 className="text-3xl font-bold text-center my-10">
          Fonctionnement du convertisseur d'heures en centièmes
        </h1>
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
            centésimal (heures-centièmes), facilitant ainsi le calcul précis de
            votre temps de travail quotidien.
          </li>
        </ul>
        <ul className="mt-10">
          <li className="font-bold">Imprimer vos conversions d'heures :</li>
          <li>
            Vous pouvez facilement imprimer vos heures converties en centièmes
            en utilisant la fonction d'impression intégrée. Cliquez simplement
            sur l'icône d'impression située en bas de la table. Cela vous permet
            de garder une trace physique de vos conversions d'heures.
          </li>
        </ul>
        <ul className="mt-10">
          <li className="font-bold">Télécharger vos conversions d'heures :</li>
          <li>
            Vous pouvez également télécharger vos heures converties en centièmes
            au format PDF. Cliquez simplement sur l'icône de téléchargement
            située en bas de la table. Cela vous permet de conserver une copie
            numérique de vos conversions d'heures.
          </li>
        </ul>
        <p className="my-10">
          Utilisez ce convertisseur d'heures en centièmes pour simplifier la
          gestion de votre temps de travail et convertir les heures en centièmes
          de manière précise et efficace.
        </p>
      </div>
    </div>
  );
}
