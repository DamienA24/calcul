import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TableHours from "@/components/ui/tableHours";
import Hour from "@/components/ui/time";
export default function Calcul() {
  return (
    <div className="flex flex-col items-center p-10 text-black bg-background ">
      <div className="w-9/12">
        <h1 className="text-3xl font-bold text-center mb-10">
          Calculatrice d'heures de travail
        </h1>
        <p>
          Utilisez notre calculatrice d'heures de travail pour calculer
          efficacement vos heures de travail quotidien. Ajoutez autant de lignes
          que nécessaire pour inclure toutes vos plages horaires.
        </p>
        <h2 className="text-3xl font-bold text-center my-10">
          convertir centièmes en heures
        </h2>
        <p>
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
        <h1 className="text-3xl font-bold text-center my-10">
          Fonctionnement de la calculatrice d'heures de travail
        </h1>
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
        <p className="mt-10">
          Utilisez cette calculatrice d'heures de travail pour simplifier la
          gestion de votre temps et convertir les centièmes en heures de manière
          précise et efficace.
        </p>
      </div>
    </div>
  );
}
