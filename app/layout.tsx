import type { Metadata } from "next";
import Script from "next/script";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";

import StructuredData from "@/components/ui/structuredDataLayout";
import BannerAdsFooter from "@/components/ui/bannerAdsFooter";
import BannerAds from "@/components/ui/bannerAds";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { PostHogProvider } from "@/components/PostHogProvider";

import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body
        className={cn(
          "min-h-screen bg-foreground font-sans antialiased",
          fontSans.variable
        )}
      >
        <PostHogProvider>
          <StructuredData />
          {process.env.NODE_ENV === "production" && (
            <Script
              src="https://cloud.umami.is/script.js"
              data-website-id="b83292ea-9827-4916-8300-f25461199995"
            />
          )}
          
          <Navbar />
          <BannerAds />
          {children}
          <BannerAdsFooter />
          <Footer />
        </PostHogProvider>
      </body>
    </html>
  );
}
