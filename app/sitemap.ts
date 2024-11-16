import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.calcul-heures.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://www.calcul-heures.com/calcul-heure",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://www.calcul-heures.com/convertir-heures-en-centieme",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://www.calcul-heures.com/convertir-centiemes-en-heures",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://www.calcul-heures.com/heures-en-centiemes",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://www.calcul-heures.com/contact",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.calcul-heures.com/tutoriel-centiemes-en-heures",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      videos: [
        {
          title: "Comment convertir les centièmes en heures - Tutoriel",
          description:
            "Apprenez à convertir facilement les centièmes en heures avec notre calculateur en ligne. Ce tutoriel vous guide étape par étape.",
          thumbnail_loc:
            "https://i3.ytimg.com/vi/QVli5nMMb-E/maxresdefault.jpg",
          player_loc: "https://www.youtube.com/embed/QVli5nMMb-E",
        },
      ],
    },
    {
      url: "https://www.calcul-heures.com/tutoriel-heures-en-centiemes",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      videos: [
        {
          title: "Comment convertir les centièmes en heures - Tutoriel",
          description:
            "Apprenez à convertir facilement les centièmes en heures avec notre calculateur en ligne. Ce tutoriel vous guide étape par étape.",
          thumbnail_loc:
            "https://i3.ytimg.com/vi/nGxRDw_6OH8/maxresdefault.jpg",
          player_loc: "https://www.youtube.com/embed/nGxRDw_6OH8",
        },
      ],
    },
    {
      url: "https://www.calcul-heures.com/tutoriel-calcul-heure",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      videos: [
        {
          title:
            "Comment utiliser la calculatrice d'heures de travail - Tutoriel",
          description:
            "Apprenez à utiliser facilement notre calculatrice d'heures de travail. Ce tutoriel vous guide étape par étape.",
          thumbnail_loc:
            "https://i3.ytimg.com/vi/eYX_ENIVD6c/maxresdefault.jpg",
          player_loc: "https://www.youtube.com/embed/eYX_ENIVD6c",
        },
      ],
    },
  ];
}
