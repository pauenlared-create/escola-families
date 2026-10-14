"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";
import type { Lang } from "@/lib/translations";

// Idioma compartido entre páginas: la elección explícita (botones CA/ES) se guarda
// en localStorage; si no hay elección, el idioma con el que se entró a la web se
// recuerda en sessionStorage para que no cambie al navegar entre páginas.
const CHOICE_KEY = "ef-lang";
const SESSION_KEY = "ef-lang-session";
const listeners = new Set<() => void>();

function isLang(value: string | null): value is Lang {
  return value === "ca" || value === "es";
}

function readStorage(storage: () => Storage, key: string): Lang | null {
  try {
    const value = storage().getItem(key);
    return isLang(value) ? value : null;
  } catch {
    return null;
  }
}

let memoryLang: Lang | null = null;

function getSnapshot(): Lang | null {
  return (
    readStorage(() => localStorage, CHOICE_KEY) ??
    readStorage(() => sessionStorage, SESSION_KEY) ??
    memoryLang
  );
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

export function useLang(fallback: Lang): [Lang, (lang: Lang) => void] {
  const stored = useSyncExternalStore(subscribe, getSnapshot, () => null);
  const lang = stored ?? fallback;

  useEffect(() => {
    document.documentElement.lang = lang;
    // En la hidratación `stored` aún es null aunque haya idioma guardado: comprobarlo directamente.
    if (getSnapshot() === null) {
      memoryLang = lang;
      try {
        sessionStorage.setItem(SESSION_KEY, lang);
      } catch {}
    }
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    memoryLang = next;
    try {
      localStorage.setItem(CHOICE_KEY, next);
    } catch {}
    listeners.forEach((listener) => listener());
  }, []);

  return [lang, setLang];
}
