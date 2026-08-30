import { useEffect, useState } from "react";

/**
 * SSR-safe localStorage-backed state. Falls back to in-memory state when
 * localStorage is unavailable (SSR / privacy mode), so the app never crashes.
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === "undefined") return initialValue;
    try {
      const stored = window.localStorage.getItem(key);
      return stored !== null ? (JSON.parse(stored) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // storage full or blocked — ignore, state still works in memory
    }
  }, [key, value]);

  return [value, setValue] as const;
}

export default useLocalStorage;
