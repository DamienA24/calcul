import { Metadata } from "next";

import Faq from "@/components/ui/faq";
import Hero from "@/components/ui/hero";

export const metadata: Metadata = {
  title: "Accueil | Calculatrice d'heures de travail",
  description:
    "Bienvenue sur notre application de calculatrice d'heures de travail. Simplifiez la gestion de vos heures de travail avec nos outils innovants et faciles à utiliser.",
  applicationName: "Calcul heures pro",
  keywords: [
    "calculatrice d'heures de travail",
    "gestion des heures",
    "convertir les heures en centième",
    "outil de calcul heures",
    "convertir centièmes en heures",
  ],
  creator: "Calcul heures pro Team",
  publisher: "Calcul heures pro",
};
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between ">
      <Hero />
      <Faq />
    </main>
  );
}
