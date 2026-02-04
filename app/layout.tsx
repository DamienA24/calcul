import type { Metadata } from "next";
import Script from "next/script";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";

import StructuredData from "@/components/ui/structuredDataLayout";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Accueil | Calculatrice d'heures de travail",
  description:
    "Bienvenue sur notre application de calculatrice d'heures de travail. Simplifiez la gestion de vos heures de travail avec nos outils innovants et faciles à utiliser.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body
        className={cn(
          "min-h-screen bg-foreground font-sans antialiased",
          fontSans.variable,
        )}
      >
        <StructuredData />
        {process.env.NODE_ENV === "production" && (
          <>
            <Script
              src="https://cloud.umami.is/script.js"
              data-website-id="b83292ea-9827-4916-8300-f25461199995"
            />
            <Script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1608938195475222"
              crossOrigin="anonymous"
              strategy="afterInteractive"
            />
          </>
        )}
        <Navbar />
        {/* <BannerAds /> */}
        {children}
        {/*           <BannerAdsFooter />
         */}{" "}
        <Footer />
      </body>
    </html>
  );
}
