import Metadata from "next";

import TableHours from "@/components/ui/tableHours";

export const metadata: Metadata = {
  title: "Calculatrice d'heures de travail",
  description:
    "Utilisez notre calculatrice d'heures de travail pour calculer efficacement vos heures de travail quotidien. Ajoutez autant de lignes que nécessaire pour inclure toutes vos plages horaires.Imprimer, télécharger",

  applicationName: "Calcul heures pro",
  keywords: [
    "calculatrice d'heures de travail",
    "calcul des heures de travail",
    "compteur d'heures",
    "gestion du temps de travail",
    "convertisseur temps",
    "heures en centièmes",
    "plages horaires",
  ],
  creator: "Calcul heures pro Team",
  publisher: "Calcul heures pro",
};
export default function Calcul() {
  return (
    <div className="flex flex-col items-center p-10 text-black bg-background ">
      <div className="w-9/12">
        <h1 className="text-3xl font-bold text-center mb-10">
          Calculatrice d&apos;heures de travail
        </h1>
        <p>
          Utilisez notre calculatrice d&apos;heures de travail pour calculer
          efficacement vos heures de travail quotidien. Ajoutez autant de lignes
          que nécessaire pour inclure toutes vos plages horaires.
        </p>

        <p className="mt-5">
          Le temps total en centièmes (heures, centièmes) est calculé en
          convertissant les heures et minutes en centièmes, puis en les
          arrondissant. Notez que le total en centièmes peut différer de la
          somme des arrondis individuels des temps en centièmes.
        </p>
      </div>

      <div className="mt-10">
        <TableHours />
      </div>

      <div className="w-9/12">
        <h2 className="text-3xl font-bold text-center my-10">
          Exemple utilisation de la calculatrice d&apos;heures de travail
        </h2>

        <iframe
          src="https://www.youtube.com/embed/eYX_ENIVD6c?si=DkRf9Q4sLjjEVRk1"
          title="YouTube video player"
          className="m-auto"
          width="320"
          height="240"
          allowFullScreen
        />
      </div>

      <div className="w-9/12">
        <h2 className="text-3xl font-bold text-center my-10">
          Fonctionnement de la calculatrice d&apos;heures de travail
        </h2>
        <p>
          Cette calculatrice en ligne offre plusieurs fonctionnalités pour gérer
          vos heures de travail efficacement :
        </p>
        <ul className="mt-10">
          <li className="font-bold">Additionner des heures :</li>
          <li>
            Saisissez vos heures dans la colonne « heures fin ». La calculatrice
            additionne automatiquement les heures en format sexagésimal
            (heures-minutes) et convertit le résultat en format centésimal
            (heures-centièmes).
          </li>
        </ul>
        <ul className="mt-10">
          <li className="font-bold">Calculer une plage horaire :</li>
          <li>
            Entrez les heures de début et de fin. La durée est calculée en
            heures-minutes et convertie en heures-centièmes, facilitant ainsi la
            gestion précise du temps de travail.
          </li>
        </ul>
        <ul className="mt-10">
          <li className="font-bold">Additionner plusieurs plages horaires :</li>
          <li>
            Saisissez les heures de début et de fin pour chaque plage. Idéal
            pour calculer le temps de travail quotidien en additionnant
            automatiquement toutes les plages horaires en format sexagésimal et
            centésimal.
          </li>
        </ul>
        <ul className="mt-10">
          <li className="font-bold">Imprimer vos calculs d&apos;heures :</li>
          <li>
            Vous pouvez facilement imprimer vos heures de travail en utilisant
            la fonction d&apos;impression intégrée. Cliquez simplement sur
            l&apos;icône d&apos;impression située en bas de la table. Cela vous
            permet de garder une trace physique de vos calculs d&apos;heures de
            travail, avec les heures converties en centièmes.
          </li>
        </ul>
        <ul className="mt-10">
          <li className="font-bold">Télécharger vos calculs d&apos;heures :</li>
          <li>
            Vous pouvez facilement Télécharger vos heures de travail au format
            PDF. Cliquez simplement sur l&apos;icône de téléchargement située en
            bas de la table. Cela vous permet de conserver une copie numérique
            de vos calculs d&apos;heures de travail.
          </li>
        </ul>
        <p className="mt-10">
          Utilisez cette calculatrice d&apos;heures de travail pour simplifier
          la gestion de votre temps et convertir les centièmes en heures de
          manière précise et efficace.
        </p>
      </div>
    </div>
  );
}
