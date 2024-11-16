import Head from "next/head";
import Link from "next/link";

export default function VideoTutoriel() {
  const videoData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Comment convertir les heures en centièmes - Tutoriel",
    description:
      "Apprenez à convertir facilement les heures en centièmes avec notre calculateur en ligne. Ce tutoriel vous guide étape par étape.",
    thumbnailUrl: "https://i3.ytimg.com/vi/nGxRDw_6OH8/maxresdefault.jpg",
    duration: "PT2M30S",
    embedUrl: "https://www.youtube.com/embed/nGxRDw_6OH8",
    contentUrl: "https://www.youtube.com/watch?v=nGxRDw_6OH8",
  };

  return (
    <>
      <Head>
        <title>Tutoriel: Comment convertir les heures en centièmes</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoData) }}
        />
      </Head>

      <div className="min-h-screen p-4 text-black bg-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-6">
            Comment convertir les heures en centièmes - Tutoriel
          </h1>

          <div className="aspect-video w-full mb-6">
            <iframe
              src="https://www.youtube.com/embed/nGxRDw_6OH8?si=ScWNL6cqnZxAiy_o"
              title="Comment convertir les heures en centièmes - Tutoriel"
              className="w-full h-full"
              allowFullScreen
            />
          </div>

          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold text-center my-10">
              Description
            </h2>
            <p>
              Dans ce tutoriel, nous vous montrons comment utiliser notre
              calculateur pour convertir rapidement et facilement les heures en
              centièmes.
            </p>
            <p className="mt-5 text-center">
              Vous pouvez essayer notre convertisseur d&apos;heures en centièmes{" "}
              <Link
                href="/convertir-heures-en-centieme"
                className="underline font-bold"
              >
                ici
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
