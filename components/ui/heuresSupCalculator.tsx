"use client";

import { useState } from "react";

const SEUIL_NORMAL = 35;
const SEUIL_TRANCHE1 = 43;

function parseHeures(value: string): number {
  if (value.includes(":")) {
    const [h, m] = value.split(":").map(Number);
    return h + (m || 0) / 60;
  }
  return parseFloat(value.replace(",", ".")) || 0;
}

export default function HeuresSupCalculator() {
  const [heuresTravaillees, setHeuresTravaillees] = useState("");
  const [tauxHoraire, setTauxHoraire] = useState("");

  const total = parseHeures(heuresTravaillees);
  const normale = Math.min(total, SEUIL_NORMAL);
  const sup1 = total > SEUIL_NORMAL ? Math.min(total, SEUIL_TRANCHE1) - SEUIL_NORMAL : 0;
  const sup2 = total > SEUIL_TRANCHE1 ? total - SEUIL_TRANCHE1 : 0;

  const taux = parseFloat(tauxHoraire.replace(",", ".")) || 0;
  const gainSup1 = taux > 0 ? sup1 * taux * 0.25 : null;
  const gainSup2 = taux > 0 ? sup2 * taux * 0.5 : null;
  const gainTotal = gainSup1 !== null && gainSup2 !== null ? gainSup1 + gainSup2 : null;

  const fmt = (n: number) =>
    n.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Heures travaillées cette semaine
          </label>
          <input
            type="text"
            value={heuresTravaillees}
            onChange={(e) => setHeuresTravaillees(e.target.value)}
            placeholder="ex : 40 ou 40:30"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <p className="text-xs text-gray-500 mt-1">Format décimal (40.5) ou hh:mm (40:30)</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Taux horaire brut (€) — optionnel
          </label>
          <input
            type="text"
            value={tauxHoraire}
            onChange={(e) => setTauxHoraire(e.target.value)}
            placeholder="ex : 15.50"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <p className="text-xs text-gray-500 mt-1">Pour calculer la majoration en €</p>
        </div>
      </div>

      {total > 0 && (
        <div className="space-y-3">
          <div className="bg-gray-50 rounded-lg p-4 grid grid-cols-2 gap-2 text-sm">
            <div className="font-medium text-gray-600">Heures normales (≤ 35h)</div>
            <div className="text-right font-bold">{fmt(normale)} h</div>

            <div className="font-medium text-gray-600">
              Heures supp tranche 1 (36h–43h)
              <span className="ml-1 text-xs text-green-700 font-normal">+25%</span>
            </div>
            <div className="text-right font-bold text-green-700">
              {fmt(sup1)} h
              {gainSup1 !== null && <span className="text-gray-500 font-normal ml-1">(+{fmt(gainSup1)} €)</span>}
            </div>

            <div className="font-medium text-gray-600">
              Heures supp tranche 2 (&gt; 43h)
              <span className="ml-1 text-xs text-orange-600 font-normal">+50%</span>
            </div>
            <div className="text-right font-bold text-orange-600">
              {fmt(sup2)} h
              {gainSup2 !== null && <span className="text-gray-500 font-normal ml-1">(+{fmt(gainSup2)} €)</span>}
            </div>

            {gainTotal !== null && gainTotal > 0 && (
              <>
                <div className="font-semibold text-gray-800 pt-2 border-t border-gray-200">
                  Majoration totale brute
                </div>
                <div className="text-right font-bold text-sky-700 pt-2 border-t border-gray-200">
                  +{fmt(gainTotal)} €
                </div>
              </>
            )}
          </div>

          {total <= SEUIL_NORMAL && (
            <p className="text-sm text-gray-500 bg-blue-50 p-3 rounded-lg">
              Aucune heure supplémentaire cette semaine (total ≤ 35h).
            </p>
          )}

          <p className="text-xs text-gray-400">
            Calcul basé sur la durée légale française de 35h/semaine (Code du travail, art. L3121-36).
            Des accords de branche ou d&apos;entreprise peuvent modifier ces seuils.
          </p>
        </div>
      )}
    </div>
  );
}
