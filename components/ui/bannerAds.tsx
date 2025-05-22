"use client";

import { useEffect, useRef } from "react";

// Déclaration pour TypeScript
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

const BannerAds = () => {
  const adContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined" || !adContainer.current) return;
    
    // Clear previous ad if any
    if (adContainer.current.firstChild) {
      adContainer.current.innerHTML = "";
    }

    // Create an ins element (required by AdSense)
    const adElement = document.createElement("ins");
    adElement.className = "adsbygoogle";
    adElement.style.display = "block";
    adElement.setAttribute("data-ad-client", "ca-pub-1608938195475222");
    adElement.setAttribute("data-ad-slot", "VOTRE_AD_SLOT"); // Remplacez par votre ad slot
    adElement.setAttribute("data-ad-format", "auto");
    adElement.setAttribute("data-full-width-responsive", "true");
    
    // Append the ins element to the container
    adContainer.current.appendChild(adElement);
    
    // Initialize ad
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  return (
    <div
      ref={adContainer}
      className="mx-2 my-5 border border-gray-200 justify-center items-center text-white text-center"
    />
  );
};

export default BannerAds;
