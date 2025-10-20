/**
 * Helper pro detekci, zda kód běží v prohlížeči nebo při statickém generování
 * Používejte pro kód, který je závislý na browser API (window, document, localStorage, atd.)
 */
export const isBrowser = typeof window !== "undefined";

/**
 * Helper pro bezpečné použití window objektu
 * @example
 * // Místo: window.localStorage.getItem('key')
 * // Použijte: 
 * import { safeWindow } from '../lib/browser-utils';
 * safeWindow(() => window.localStorage.getItem('key'), defaultValue);
 */
export function safeWindow<T>(fn: () => T, defaultValue: T): T {
  if (isBrowser) {
    try {
      return fn();
    } catch (e) {
      console.error('Error in browser API call:', e);
      return defaultValue;
    }
  }
  return defaultValue;
}