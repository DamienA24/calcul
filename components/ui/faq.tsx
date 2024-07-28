import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Faq() {
  const faqsList = [
    {
      q: "Comment puis-je calculer mes heures de travail avec cette calculatrice ?",
      a: "Vous pouvez facilement calculer vos heures de travail en saisissant l'heure de début et l'heure de fin pour chaque créneau horaire. La calculatrice d'heures de travail additionne automatiquement ces créneaux pour vous donner un total en heures-minutes et en heures-centièmes.",
      l: "/calcul-heure",
      t: "Calculer mes heures de travail",
    },
    {
      q: "Est-ce que je peux convertir des centièmes en heures avec cette calculatrice ?",
      a: "Oui, vous pouvez convertir des centièmes en heures en utilisant notre calculatrice. Après avoir entré vos heures, le temps total sera affiché en heures-minutes et en heures-centièmes.",
      l: "/convertir-centiemes-en-heures",
      t: "Convertir centièmes en heures",
    },
    {
      q: "Comment convertir des heures en centièmes avec cet outil ?",
      a: "Pour convertir des heures en centièmes, entrez simplement vos créneaux horaires dans la calculatrice. Le calcul se fait automatiquement et le résultat est affiché en heures-centièmes.",
      l: "/convertir-heures-en-centieme",
      t: "Convertir heures en centièmes",
    },
    {
      q: "Pourquoi devrais-je utiliser une calculatrice d'heures de travail ?",
      a: "Une calculatrice d'heures de travail vous aide à suivre précisément votre temps de travail, à éviter les erreurs de calcul et à visualiser votre temps en formats heures-minutes et heures-centièmes.",
      l: "",
      t: "",
    },
    {
      q: "Comment puis-je ajouter plusieurs créneaux horaires ?",
      a: "Pour ajouter plusieurs créneaux horaires, cliquez sur le bouton 'Ajouter une ligne'. Vous pouvez ensuite saisir les heures de début et de fin pour chaque créneau, et la calculatrice d'heures de travail calculera le total pour vous.",
      l: "",
      t: "",
    },
    {
      q: "La calculatrice peut-elle gérer des heures de travail fractionnées ?",
      a: "Oui, la calculatrice peut gérer des heures de travail fractionnées en vous permettant d'ajouter plusieurs créneaux horaires et en calculant le total en heures-minutes et en heures-centièmes.",
      l: "",
      t: "",
    },
  ];

  return (
    <section className="leading-relaxed  mt-12 mx-auto px-4 md:px-8 bg-background py-12">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl text-gray-800 font-semibold">FAQ</h1>
        <p className="text-gray-600 max-w-lg mx-auto text-lg">
          Nous avons répondu à toutes les questions les plus fréquemment posées.
          Si vous avez encore des doutes, n&apos;hésitez pas à nous contacter.
        </p>
      </div>
      <div className="mt-14 gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
        {faqsList.map((item, idx) => (
          <div className="space-y-3 mt-5" key={idx}>
            <h4 className="text-xl text-gray-700 font-medium">{item.q}</h4>
            <p className="text-gray-500">{item.a}</p>
            {item.l && (
              <Link href={item.l}>
                <Button>{item.t}</Button>
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
