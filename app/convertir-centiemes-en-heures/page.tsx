import TableConvertCenth from "@/components/ui/tableConvertCenth";
export default function ConvertCenth() {
  return (
    <div className="flex flex-col items-center p-10 text-black bg-background ">
      <div className="w-9/12">
        <h1 className="text-3xl font-bold text-center mb-10">
          Convertir centièmes en heures
        </h1>
        <p>
          Utilisez notre convertisseur de centièmes en heures pour transformer
          facilement et efficacement vos centièmes d'heures en heures complètes.
          Ajoutez autant de lignes que nécessaire pour inclure toutes vos
          périodes de temps.
        </p>

        <p className="mt-5">
          Notre outil est conçu pour vous permettre de convertir des heures en
          centièmes de manière précise. Le temps total en centièmes est calculé
          en convertissant les heures et minutes en centièmes, puis en les
          arrondissant. Notez que le total en centièmes peut différer légèrement
          de la somme des arrondis individuels des temps en centièmes.
        </p>
      </div>

      <div className="mt-10">
        <TableConvertCenth />
      </div>

      <div className="w-9/12">
        <h1 className="text-3xl font-bold text-center my-10">
          Fonctionnement du convertisseur de centièmes en heures
        </h1>
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
            Additionner plusieurs centièmes d'heures :
          </li>
          <li>
            Entrez les centièmes pour chaque créneau. Le convertisseur
            additionne automatiquement les créneaux et affiche le total en
            format centésimal (heures-centièmes) et heures-minutes, facilitant
            ainsi le calcul précis de votre temps de travail quotidien.
          </li>
        </ul>
        <ul className="mt-10">
          <li className="font-bold">Imprimer vos conversions de centièmes :</li>
          <li>
            Vous pouvez facilement imprimer vos centièmes converties en heures
            minutes en utilisant la fonction d'impression intégrée. Cliquez
            simplement sur l'icône d'impression située en bas de la table. Cela
            vous permet de garder une trace physique de vos conversions de
            centièmes.
          </li>
        </ul>
        <ul className="mt-10">
          <li className="font-bold">
            Télécharger vos conversions de centièmes :
          </li>
          <li>
            Vous pouvez également télécharger vos centièmes converties en heures
            minute au format PDF. Cliquez simplement sur l'icône de
            téléchargement située en bas de la table. Cela vous permet de
            conserver une copie numérique de vos conversions de centièmes.
          </li>
        </ul>
        <p className="mt-10">
          Utilisez ce convertisseur de centièmes en heures pour simplifier la
          gestion de votre temps de travail et convertir vos centièmes en heures
          de manière précise et efficace.
        </p>
      </div>
    </div>
  );
}
