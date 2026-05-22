import { describe, it, expect } from "vitest";

// --- parseHeures (heuresSupCalculator logic) ---
function parseHeures(value: string): number {
  if (value.includes(":")) {
    const [h, m] = value.split(":").map(Number);
    return h + (m || 0) / 60;
  }
  return parseFloat(value.replace(",", ".")) || 0;
}

// --- minutesToCentiemes (minutesTable logic) ---
function minutesToCentiemes(min: number): string {
  return ((min / 60) * 100).toFixed(2);
}

// --- parseDecimalFr (salaireEstimator logic) ---
function parseDecimalFr(v: string): number {
  return parseFloat(v.replace(",", ".")) || 0;
}

const SEUIL_NORMAL = 35;
const SEUIL_TRANCHE1 = 43;

describe("parseHeures", () => {
  it("parse un décimal simple", () => {
    expect(parseHeures("40")).toBe(40);
  });

  it("parse le format hh:mm", () => {
    expect(parseHeures("40:30")).toBeCloseTo(40.5, 5);
  });

  it("parse une virgule française", () => {
    expect(parseHeures("35,5")).toBeCloseTo(35.5, 5);
  });

  it("retourne 0 pour une valeur vide", () => {
    expect(parseHeures("")).toBe(0);
  });

  it("parse 0 minutes en hh:mm", () => {
    expect(parseHeures("35:00")).toBe(35);
  });
});

describe("calcul heures supplémentaires", () => {
  it("35h = 0 heure sup", () => {
    const total = 35;
    const sup1 = total > SEUIL_NORMAL ? Math.min(total, SEUIL_TRANCHE1) - SEUIL_NORMAL : 0;
    const sup2 = total > SEUIL_TRANCHE1 ? total - SEUIL_TRANCHE1 : 0;
    expect(sup1).toBe(0);
    expect(sup2).toBe(0);
  });

  it("40h = 5h sup tranche 1 (25%)", () => {
    const total = 40;
    const sup1 = total > SEUIL_NORMAL ? Math.min(total, SEUIL_TRANCHE1) - SEUIL_NORMAL : 0;
    const sup2 = total > SEUIL_TRANCHE1 ? total - SEUIL_TRANCHE1 : 0;
    expect(sup1).toBe(5);
    expect(sup2).toBe(0);
  });

  it("46h = 8h tranche 1 + 3h tranche 2 (50%)", () => {
    const total = 46;
    const sup1 = total > SEUIL_NORMAL ? Math.min(total, SEUIL_TRANCHE1) - SEUIL_NORMAL : 0;
    const sup2 = total > SEUIL_TRANCHE1 ? total - SEUIL_TRANCHE1 : 0;
    expect(sup1).toBe(8);
    expect(sup2).toBe(3);
  });

  it("43h = 8h sup tranche 1, 0h tranche 2 (limite exacte)", () => {
    const total = 43;
    const sup1 = total > SEUIL_NORMAL ? Math.min(total, SEUIL_TRANCHE1) - SEUIL_NORMAL : 0;
    const sup2 = total > SEUIL_TRANCHE1 ? total - SEUIL_TRANCHE1 : 0;
    expect(sup1).toBe(8);
    expect(sup2).toBe(0);
  });
});

describe("minutesToCentiemes", () => {
  it("30 minutes = 50.00 centièmes", () => {
    expect(minutesToCentiemes(30)).toBe("50.00");
  });

  it("15 minutes = 25.00 centièmes", () => {
    expect(minutesToCentiemes(15)).toBe("25.00");
  });

  it("45 minutes = 75.00 centièmes", () => {
    expect(minutesToCentiemes(45)).toBe("75.00");
  });

  it("1 minute = 1.67 centièmes", () => {
    expect(minutesToCentiemes(1)).toBe("1.67");
  });
});

describe("parseDecimalFr (salaire)", () => {
  it("parse point anglais", () => {
    expect(parseDecimalFr("11.88")).toBeCloseTo(11.88);
  });

  it("parse virgule française", () => {
    expect(parseDecimalFr("11,88")).toBeCloseTo(11.88);
  });

  it("retourne 0 pour une chaîne vide", () => {
    expect(parseDecimalFr("")).toBe(0);
  });

  it("calcul brut = heures × taux", () => {
    const h = parseDecimalFr("35");
    const t = parseDecimalFr("11,88");
    expect(h * t).toBeCloseTo(415.8, 1);
  });

  it("calcul net = brut × 0.77", () => {
    const brut = 35 * 11.88;
    expect(brut * 0.77).toBeCloseTo(320.166, 1);
  });
});
