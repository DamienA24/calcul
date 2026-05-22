"use client";

import { useRef } from "react";
import { Printer, Download } from "lucide-react";
import jsPDF from "jspdf";

function minutesToCentiemes(min: number): string {
  return ((min / 60) * 100).toFixed(2);
}

const ROWS = Array.from({ length: 59 }, (_, i) => i + 1);

export default function MinutesTable() {
  const tableRef = useRef<HTMLTableElement>(null);

  const handlePrint = () => {
    const win = window.open("", "_blank");
    if (!win || !tableRef.current) return;
    win.document.write(`
      <html><head><title>Tableau minutes → centièmes</title>
      <style>
        body { font-family: Arial, sans-serif; }
        table { border-collapse: collapse; width: 400px; margin: 0 auto; }
        th, td { border: 1px solid #ccc; padding: 6px 12px; text-align: center; }
        th { background: #f5f5f5; }
        h2 { text-align: center; }
      </style></head><body>
      <h2>Tableau de conversion minutes en centièmes</h2>
      ${tableRef.current.outerHTML}
      </body></html>
    `);
    win.document.close();
    win.print();
  };

  const handleDownloadPDF = () => {
    const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
    pdf.setFontSize(14);
    pdf.text("Tableau de conversion minutes en centièmes", 20, 18);
    pdf.setFontSize(10);
    pdf.text("Minutes", 40, 30);
    pdf.text("Centièmes", 100, 30);
    ROWS.forEach((min, i) => {
      const y = 36 + i * 5;
      if (y > 280) return;
      pdf.text(String(min), 48, y);
      pdf.text(minutesToCentiemes(min), 108, y);
    });
    pdf.save("minutes-centiemes.pdf");
  };

  return (
    <div>
      <div className="flex justify-end mb-2 gap-2">
        <Printer
          size={28}
          className="cursor-pointer text-gray-600 hover:text-gray-900"
          onClick={handlePrint}
          aria-label="Imprimer le tableau"
        />
        <Download
          size={28}
          className="cursor-pointer text-gray-600 hover:text-gray-900"
          onClick={handleDownloadPDF}
          aria-label="Télécharger en PDF"
        />
      </div>
      <div className="overflow-x-auto">
        <table
          ref={tableRef}
          className="mx-auto border-collapse text-sm"
          aria-label="Tableau de conversion minutes en centièmes"
        >
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-6 py-2 font-semibold">Minutes</th>
              <th className="border border-gray-300 px-6 py-2 font-semibold">Centièmes</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((min) => (
              <tr key={min} className="even:bg-gray-50 hover:bg-blue-50">
                <td className="border border-gray-300 px-6 py-1.5 text-center font-medium">
                  {min}
                </td>
                <td className="border border-gray-300 px-6 py-1.5 text-center">
                  {minutesToCentiemes(min)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
