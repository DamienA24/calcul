import { Metadata } from "next";

import StructuredData from "@/components/ui/structuredDataHome";
import Faq from "@/components/ui/faq";
import Hero from "@/components/ui/hero";

export const metadata: Metadata = {
  title: "Calculatrice d'heures de travail gratuite | Calcul Heures Pro",
  description:
    "Calculez vos heures de travail, convertissez centièmes en heures et heures en centièmes. Outil gratuit en ligne, sans inscription, export PDF et impression.",
  applicationName: "Calcul heures pro",
  keywords: [
    "calculatrice d'heures de travail",
    "convertir centièmes en heures",
    "convertir heures en centième",
    "calcul heure travail gratuit",
    "outil de calcul heures",
  ],
  creator: "Calcul heures pro Team",
  publisher: "Calcul heures pro",
};
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between ">
      <StructuredData />
      <Hero />
      <Faq />
    </main>
  );
}
