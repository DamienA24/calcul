"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Printer, Download } from "lucide-react";
import jsPDF from "jspdf";
import { printImage } from "../../utils/printUtils";

export default function ArrayConversion() {
  const [documentType, setDocumentType] = useState<string | null>(null);
  const printRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  // Utiliser l'utilitaire d'impression
  const handlePrint = () => {
    printImage(
      "/arrayConversion.svg",
      "Tableau de conversion des heures",
      "Tableau de conversion des heures en centièmes"
    );
  };

  const handleDownloadPDF = () => {
    if (imageRef.current) {
      const img = imageRef.current;
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      // Calculate the scaling factor to fit the image within A4 dimensions
      const a4Width = 210; // mm
      const a4Height = 297; // mm
      const imgRatio = img.naturalWidth / img.naturalHeight;
      const a4Ratio = a4Width / a4Height;

      let finalWidth, finalHeight;
      if (imgRatio > a4Ratio) {
        finalWidth = a4Width;
        finalHeight = a4Width / imgRatio;
      } else {
        finalHeight = a4Height;
        finalWidth = a4Height * imgRatio;
      }

      // Set canvas size (use a higher resolution for better quality)
      const scale = 4; // Increase this for even higher resolution, if needed
      canvas.width = finalWidth * scale;
      canvas.height = finalHeight * scale;

      ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      // Center the image on the page
      const xOffset = (a4Width - finalWidth) / 2;
      const yOffset = (a4Height - finalHeight) / 2;

      pdf.addImage(imgData, "PNG", xOffset, yOffset, finalWidth, finalHeight);
      pdf.save("heures.pdf");
    }
  };

  const handleDocument = (type: string) => {
    setDocumentType(type);
  };

  useEffect(() => {
    if (documentType === "print") {
      handlePrint();
    } else if (documentType === "pdf") {
      handleDownloadPDF();
    }
    setDocumentType(null);
  }, [documentType]);

  return (
    <div>
      <div className="flex justify-end mb-2">
        <Printer
          size={30}
          className="cursor-pointer mr-2"
          onClick={() => handlePrint()}
        />
        <Download
          size={30}
          className="cursor-pointer"
          onClick={() => handleDownloadPDF()}
        />
      </div>
      <div ref={printRef} className="flex justify-center">
        <div className="max-w-full">
          <Image
            ref={imageRef}
            src="/arrayConversion.svg"
            width={600}
            height={600}
            alt="Tableau de conversion des heures en centièmes"
          />
        </div>
      </div>
    </div>
  );
}
