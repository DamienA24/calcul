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
    <div className="p-10 text-black bg-background">
      <h1 className="text-3xl font-bold text-center mb-10">
        {" "}
        Calculer plages horaires
      </h1>
      <p>
        Cette calculette de temps de travail vous permet de calculer vos heures
        travaillées dans la journée. Ajoutez autant de lignes que nécessaire
        pour saisir plus de plages horaires. Pour simplifier la saisie, entrez 2
        chiffres par cellule, le curseur passe automatiquement à la suivante.
        (07 au lieu de 7 par exemple ou 00) Une cellule laissée vide correspond
        à 00. Par conséquent, pour additionner des temps, utilisez simplement la
        colonne 'Heure fin', une plage horaire de minuit à 6h30, par exemple,
        étant bien équivalente à un temps de 6h30. Si une ligne n'est pas
        cochée, le temps calculé pour cette plage est exclu du total. Le mode
        avancé est un tableau calculant vos heures de travail de la semaine,
        sauvegardant la saisie quotidienne et pouvant être imprimé. IMPORTANT -
        Le temps total centésimal (exprimé en heures,centièmes) est bien la
        somme des temps sexagésimaux (exprimés en heures-minutes), convertie en
        temps centésimal puis arrondie. C'est pourquoi il peut être différent de
        la somme des arrondis des temps centésimaux.
      </p>
      <div className="mt-10">
        <TableHours />
      </div>
    </div>
  );
}
