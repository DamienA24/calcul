import Link from "next/link";
import Reviews from "./reviews";

export default function Hero() {
  return (
    <header>
      <div className="relative">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-14 md:px-8">
          <div className="space-y-5 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl text-white font-extrabold mx-auto md:text-5xl">
              Calculer vos horaires facilement et gratuitement
            </h1>
            <p className="max-w-2xl mx-auto text-gray-400">
              Calculez vos heures de travail facilement. Entrez les heures de
              début et de fin pour chaque plage horaire. Ajoutez autant de
              plages que nécessaire, même sur plusieurs jours.
            </p>
            <div className="justify-center items-center gap-x-3 sm:flex">
              <Link
                href="/calcul-heure"
                className="flex items-center justify-center gap-x-2 py-2.5 px-4 mt-3 w-full text-sm text-white font-medium bg-sky-500 hover:bg-sky-400 active:bg-sky-600 duration-150 rounded-lg sm:mt-0 sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
              >
                Utiliser la calculette
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
          style={{
            background:
              "linear-gradient(106.89deg, rgba(14, 165, 233, 0.15) 15.73%, rgba(56, 189, 248, 0.35) 56.49%, rgba(2, 132, 199, 0.25) 115.91%)",
          }}
        ></div>
      </div>
      <Reviews />
    </header>
  );
}
