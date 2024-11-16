// pages/tutoriel/centieme-en-heures.tsx
import Head from "next/head";
import Link from "next/link";
export default function VideoTutoriel() {
  const videoData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Comment convertir les centièmes en heures - Tutoriel",
    description:
      "Apprenez à convertir facilement les centièmes en heures avec notre calculateur en ligne. Ce tutoriel vous guide étape par étape.",
    thumbnailUrl: "https://i3.ytimg.com/vi/QVli5nMMb-E/maxresdefault.jpg",
    uploadDate: "2024-01-15",
    duration: "PT2M30S",
    embedUrl: "https://www.youtube.com/embed/QVli5nMMb-E",
    contentUrl: "https://www.youtube.com/watch?v=QVli5nMMb-E",
  };

  return (
    <>
      <Head>
        <title>Tutoriel: Comment convertir les centièmes en heures</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoData) }}
        />
      </Head>

      <div className="min-h-screen p-4 text-black bg-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-6">
            Comment convertir les centièmes en heures
          </h1>

          <div className="aspect-video w-full mb-6">
            <iframe
              src="https://www.youtube.com/embed/QVli5nMMb-E"
              title="Comment convertir les centièmes en heures - Tutoriel"
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
              calculateur pour convertir rapidement et facilement les centièmes
              en heures.
            </p>
            <p className="mt-5 text-center">
              Vous pouvez essayer notre convertisseur de centièmes en heures{" "}
              <Link
                href="/convertir-centiemes-en-heures"
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
