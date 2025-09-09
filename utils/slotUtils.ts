import { Time } from "@internationalized/date";

// Types génériques pour les différents types de slots
export interface BaseSlotData {
  id: number;
  checked: boolean;
}

export interface TimeSlotData extends BaseSlotData {
  startTime: Time;
  endTime: Time;
}

export interface CenthSlotData extends BaseSlotData {
  totalTimeCenth: string;
}

export interface HourSlotData extends BaseSlotData {
  time: Time;
}

/**
 * Vérifie si un slot avec des heures de début et de fin est vide
 */
export function isTimeSlotEmpty(slot: TimeSlotData): boolean {
  return (
    slot.startTime.hour === 0 &&
    slot.startTime.minute === 0 &&
    slot.endTime.hour === 0 &&
    slot.endTime.minute === 0
  );
}

/**
 * Vérifie si un slot avec une valeur en centièmes est vide
 */
export function isCenthSlotEmpty(slot: CenthSlotData): boolean {
  return slot.totalTimeCenth === "00:00" || slot.totalTimeCenth === "";
}

/**
 * Vérifie si un slot avec une heure simple est vide
 */
export function isHourSlotEmpty(slot: HourSlotData): boolean {
  return slot.time.hour === 0 && slot.time.minute === 0;
}

/**
 * Vérifie si un tableau ne contient qu'un seul slot et qu'il est vide
 */
export function isSingleEmptySlot<T extends BaseSlotData>(
  slots: T[],
  checkEmptyFn: (slot: T) => boolean
): boolean {
  return slots.length === 1 && checkEmptyFn(slots[0]);
}

/**
 * Vérifie si tous les slots d'un tableau sont vides
 */
export function areAllSlotsEmpty<T extends BaseSlotData>(
  slots: T[],
  checkEmptyFn: (slot: T) => boolean
): boolean {
  return slots.every(slot => checkEmptyFn(slot));
}

/**
 * Vérifie si le bouton de suppression doit être désactivé
 * (un seul slot vide ou un seul slot même avec des données)
 */
export function shouldDisableTrashButton<T extends BaseSlotData>(
  slots: T[],
  checkEmptyFn: (slot: T) => boolean
): boolean {
  // Désactiver si un seul slot (vide ou non)
  if (slots.length === 1) {
    return true;
  }
  
  // Désactiver si tous les slots sont vides
  return areAllSlotsEmpty(slots, checkEmptyFn);
}

/**
 * Vérifie si les boutons d'impression et de téléchargement doivent être désactivés
 * (un seul slot vide, tous les slots vides, ou toutes les cases décochées)
 */
export function shouldDisablePrintButtons<T extends BaseSlotData>(
  slots: T[],
  checkEmptyFn: (slot: T) => boolean
): boolean {
  // Désactiver si un seul slot vide ou tous les slots vides
  if (isSingleEmptySlot(slots, checkEmptyFn) || areAllSlotsEmpty(slots, checkEmptyFn)) {
    return true;
  }
  
  // Désactiver si toutes les cases sont décochées
  const allUnchecked = slots.every(slot => !slot.checked);
  return allUnchecked;
}
