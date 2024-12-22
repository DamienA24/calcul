import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseURL = "https://www.calcul-heures.com";

  const mainPages = [
    "",
    "/calcul-heure",
    "/convertir-heures-en-centieme",
    "/convertir-centiemes-en-heures",
    "/heures-en-centiemes",
  ].map((path) => ({
    url: `${baseURL}${path}`,
    lastModified: new Date().toISOString(), // Format ISO pour meilleure compatibilité
    changeFrequency: "daily" as const,
    priority: 1,
  }));

  const secondaryPages = [
    {
      path: "/contact",
      priority: 0.8,
      changeFrequency: "weekly" as const,
    },
  ].map(({ path, priority, changeFrequency }) => ({
    url: `${baseURL}${path}`,
    lastModified: new Date().toISOString(),
    changeFrequency,
    priority,
  }));

  const tutorialPages = [
    {
      path: "/tutoriel-centiemes-en-heures",
      videoId: "QVli5nMMb-E",
      title: "Comment convertir les centièmes en heures - Tutoriel",
      description:
        "Apprenez à convertir facilement les centièmes en heures avec notre calculateur en ligne. Ce tutoriel vous guide étape par étape.",
    },
    {
      path: "/tutoriel-heures-en-centiemes",
      videoId: "nGxRDw_6OH8",
      title: "Comment convertir les heures en centièmes - Tutoriel",
      description:
        "Apprenez à convertir facilement les heures en centièmes avec notre calculateur en ligne. Ce tutoriel vous guide étape par étape.",
    },
    {
      path: "/tutoriel-calcul-heure",
      videoId: "eYX_ENIVD6c",
      title: "Comment utiliser la calculatrice d'heures de travail - Tutoriel",
      description:
        "Apprenez à utiliser facilement notre calculatrice d'heures de travail. Ce tutoriel vous guide étape par étape.",
    },
  ].map(({ path, videoId, title, description }) => ({
    url: `${baseURL}${path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
    videos: [
      {
        title,
        description,
        thumbnail_loc: `https://i3.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
        player_loc: `https://www.youtube.com/embed/${videoId}`,
        publication_date: new Date().toISOString(),
        content_loc: `https://www.youtube.com/watch?v=${videoId}`,
      },
    ],
  }));

  return [...mainPages, ...secondaryPages, ...tutorialPages];
}
