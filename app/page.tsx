import Faq from "@/components/ui/faq";
import Hero from "@/components/ui/hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between ">
      <Hero />
      <Faq />
    </main>
  );
}
