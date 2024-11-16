import Head from "next/head";
import Link from "next/link";

export default function VideoTutoriel() {
  const videoData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Comment utiliser la calculatrice d'heures de travail - Tutoriel",
    description:
      "Apprenez à utiliser facilement notre calculatrice d'heures de travail. Ce tutoriel vous guide étape par étape.",
    thumbnailUrl: "https://i3.ytimg.com/vi/eYX_ENIVD6c/maxresdefault.jpg",
    embedUrl: "https://www.youtube.com/embed/eYX_ENIVD6c",
    contentUrl: "https://www.youtube.com/watch?v=eYX_ENIVD6c",
  };

  return (
    <>
      <Head>
        <title>
          Tutoriel: Comment utiliser la calculatrice d&apos;heures de travail
        </title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoData) }}
        />
      </Head>

      <div className="min-h-screen p-4 text-black bg-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-6">
            Comment utiliser la calculatrice d&apos;heures de travail - Tutoriel
          </h1>

          <div className="aspect-video w-full mb-6">
            <iframe
              src="https://www.youtube.com/embed/eYX_ENIVD6c"
              title="Comment utiliser la calculatrice d'heures de travail - Tutoriel"
              className="w-full h-full"
              allowFullScreen
            />
          </div>

          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold text-center my-10">
              Description
            </h2>
            <p>
              Dans ce tutoriel, nous vous montrons comment utiliser facilement
              et rapidement notre calculatrice d&apos;heures de travail.
            </p>
            <p className="mt-5 text-center">
              Vous pouvez essayer notre calculatrice d&apos;heures de travail{" "}
              <Link href="/calcul-heure" className="underline font-bold">
                ici
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
