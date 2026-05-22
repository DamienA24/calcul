import Link from "next/link";

const tools = [
  {
    href: "/calcul-heure",
    title: "Calculatrice d'heures",
    description: "Calculez vos plages horaires et obtenez le total en h:mm et en centièmes.",
  },
  {
    href: "/calcul-horaire",
    title: "Calcul horaire + salaire",
    description: "Calculez votre horaire de travail et estimez votre salaire brut/net.",
  },
  {
    href: "/additionner-des-heures",
    title: "Additionner des heures",
    description: "Additionnez vos créneaux horaires et obtenez le total en hh:mm et centièmes.",
  },
  {
    href: "/feuille-heures",
    title: "Feuille d'heures hebdomadaire",
    description: "Suivez vos heures jour par jour et obtenez le total de la semaine.",
  },
  {
    href: "/calcul-heures-supplementaires",
    title: "Heures supplémentaires",
    description: "Calculez vos heures sup et leur majoration légale (25% et 50%).",
  },
  {
    href: "/convertir-centiemes-en-heures",
    title: "Centièmes → heures",
    description: "Transformez des valeurs décimales en format heures:minutes.",
  },
  {
    href: "/convertir-heures-en-centieme",
    title: "Heures → centièmes",
    description: "Passez du format hh:mm au format centésimal utilisé en paie.",
  },
  {
    href: "/convertir-minutes-en-centiemes",
    title: "Minutes → centièmes",
    description: "Tableau de référence complet : 1 à 59 minutes en centièmes.",
  },
  {
    href: "/heures-en-centiemes",
    title: "Tableau de conversion",
    description: "Tableau complet de référence heures → centièmes, imprimable.",
  },
];

export default function RelatedTools({ currentPath }: { currentPath: string }) {
  const others = tools.filter((t) => t.href !== currentPath);
  return (
    <nav aria-label="Nos autres outils" className="mt-12 pt-8 border-t border-gray-200">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Nos autres outils gratuits</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {others.map((tool) => (
          <li key={tool.href}>
            <Link
              href={tool.href}
              className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span className="font-semibold text-blue-700 hover:underline block mb-1">
                {tool.title}
              </span>
              <span className="text-sm text-gray-600">{tool.description}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
