/**
 * Custom class wrapper to the `window.localStorage`
 */
export class JSONLocalStorage {
  constructor() {}

  setItem<T = any>(key: string, data: T) {
    if (typeof window === "undefined") return;

    window.localStorage.setItem(key, JSON.stringify(data));
  }

  getItem<T = any>(key: string): T | undefined | null {
    if (typeof window === "undefined") return;

    const data = window.localStorage.getItem(key);

    if (data == null) return null;

    return JSON.parse(data) as T;
  }

  removeItem(key: string) {
    if (typeof window === "undefined") return;

    window.localStorage.removeItem(key);
  }
}
