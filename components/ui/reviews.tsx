import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Jean",
    username: "@jean",
    body: "Cette application m'a énormément simplifié la gestion de mes heures de travail. Conversion rapide et précise. Merci !",
    img: "https://avatar.vercel.sh/jean",
  },
  {
    name: "Marie",
    username: "@marie",
    body: "Super pratique pour convertir mes heures en centièmes. Facile à utiliser et très utile pour mon travail quotidien.",
    img: "https://avatar.vercel.sh/marie",
  },
  {
    name: "Pierre",
    username: "@pierre",
    body: "Je gagne tellement de temps avec cette application. Les conversions sont instantanées et toujours correctes.",
    img: "https://avatar.vercel.sh/pierre",
  },
  {
    name: "Claire",
    username: "@claire",
    body: "Application indispensable pour gérer mes heures de travail. La fonction d'impression est un vrai plus.",
    img: "https://avatar.vercel.sh/claire",
  },
  {
    name: "Lucie",
    username: "@lucie",
    body: "Très bonne application pour convertir les heures en centièmes. Interface simple et intuitive.",
    img: "https://avatar.vercel.sh/lucie",
  },
  {
    name: "Antoine",
    username: "@antoine",
    body: "Excellent outil pour calculer et convertir mes heures de travail en centièmes. Je recommande vivement.",
    img: "https://avatar.vercel.sh/antoine",
  },
];

const Star = () => (
  <svg
    className="w-5 h-5"
    xmlns="http://www.w3.org/2000/svg"
    fill="#FFD700"
    viewBox="0 0 20 20"
  >
    <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
  </svg>
);

const StarRating = ({ count }: { count: number }) => (
  <div className="flex">
    {[...Array(count)].map((_, i) => (
      <Star key={i} />
    ))}
  </div>
);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-50/[.5] bg-gray-50/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "bg-foreground text-white"
      )}
    >
      <div className="flex flex-row items-center gap-2 ">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium ">{name}</figcaption>
          <p className="text-xs font-medium ">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
      <div className="flex justify-center items-center gap-x-4 text-gray-400 text-sm">
        <div className="flex">
          <StarRating count={5} />
        </div>
      </div>
    </figure>
  );
};

export default function Reviews() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden p-4 bg-foreground md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {reviews.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black "></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black "></div>
    </div>
  );
}
