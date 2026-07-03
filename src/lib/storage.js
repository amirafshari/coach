/* Persistence helpers backed by localStorage. Both calls fail silently so a
   private-mode / disabled-storage browser degrades gracefully to no-persist. */

import { STORAGE_KEY } from "../data/defaults.js";

export function loadState() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function saveState(state) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // storage unavailable — fail silently
  }
}
