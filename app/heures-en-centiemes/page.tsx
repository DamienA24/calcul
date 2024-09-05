import Metadata from "next";

import StructuredDataHours from "@/components/ui/structuredDataHours";
import ArrayConversion from "@/components/ui/arrayConversion";

export const metadata: Metadata = {
  title: "Heures en Centièmes",
  description:
    "Un tableau de conversion des minutes en centiemes. Imprimer, télécharger le",
  applicationName: "Calcul heures pro",
  keywords: [
    "heures en centièmes",
    "convertir heures en centième",
    "conversion des heures en centièmes",
    "convertisseur temps",
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
            Conversion heures en centièmes
          </h1>
          <p className="text-center">
            Voici une image d'un tableau de conversion des minutes en centièmes.
          </p>

          <p className="">
            Vous pouvez facilement voir les différentes conversions de minutes
            en centièmes d'un simple coup d'oeil. Imprimer le, telecharger le.
          </p>
        </div>

        <div className="mt-10">
          <ArrayConversion />
        </div>

        <div className="w-9/12">
          <h2 className="text-3xl font-bold text-center my-10">
            Aller plus loin
          </h2>
          <p className="text-center">
            Vous avez aussi la possibilité d'utiliser notre{" "}
            <a href="/convertir-heures-en-centieme" className="underline">
              convertisseur d'heures en centièmes
            </a>{" "}
            pour personnaliser vos besoins.
          </p>
        </div>
      </div>
    </>
  );
}
