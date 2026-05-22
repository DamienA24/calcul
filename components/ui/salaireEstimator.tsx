"use client";

import { useState } from "react";

function parseDecimalFr(v: string): number {
  return parseFloat(v.replace(",", ".")) || 0;
}

export default function SalaireEstimator() {
  const [heures, setHeures] = useState("");
  const [taux, setTaux] = useState("");

  const h = parseDecimalFr(heures);
  const t = parseDecimalFr(taux);
  const brut = h > 0 && t > 0 ? h * t : null;
  const net = brut !== null ? brut * 0.77 : null;

  const fmt = (n: number) =>
    n.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div className="max-w-lg mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Heures travaillées
          </label>
          <input
            type="text"
            value={heures}
            onChange={(e) => setHeures(e.target.value)}
            placeholder="ex : 35 ou 35.5"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Taux horaire brut (€/h)
          </label>
          <input
            type="text"
            value={taux}
            onChange={(e) => setTaux(e.target.value)}
            placeholder="ex : 11.88 (SMIC 2025)"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>
      </div>

      {brut !== null && (
        <div className="mt-4 bg-gray-50 rounded-lg p-4 grid grid-cols-2 gap-2 text-sm">
          <div className="text-gray-600 font-medium">Salaire brut estimé</div>
          <div className="text-right font-bold text-gray-900">{fmt(brut)} €</div>
          <div className="text-gray-600 font-medium">
            Salaire net estimé{" "}
            <span className="text-xs font-normal text-gray-400">(×0,77)</span>
          </div>
          <div className="text-right font-bold text-sky-700">{fmt(net!)} €</div>
          <p className="col-span-2 text-xs text-gray-400 pt-2 border-t border-gray-200">
            Estimation indicative. Le net réel dépend des cotisations, de la mutuelle et
            de la situation personnelle. SMIC horaire brut 2025 : 11,88 €/h.
          </p>
        </div>
      )}
    </div>
  );
}
