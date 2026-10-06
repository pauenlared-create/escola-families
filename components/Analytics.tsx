"use client";

import { useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const CONSENT_KEY = "cookie-consent";

type Consent = "granted" | "denied";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const texts = {
  ca: {
    message:
      "Fem servir galetes d'analítica (Google Analytics) per saber com s'utilitza la web i millorar-la. Les acceptes?",
    accept: "Acceptar",
    reject: "Rebutjar",
  },
  es: {
    message:
      "Usamos cookies de analítica (Google Analytics) para saber cómo se usa la web y mejorarla. ¿Las aceptas?",
    accept: "Aceptar",
    reject: "Rechazar",
  },
};

const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function readConsent(): Consent | null {
  try {
    const value = localStorage.getItem(CONSENT_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

export default function Analytics() {
  const pathname = usePathname();
  // null = sin decidir; "server" = aún no sabemos (SSR), no mostramos banner
  const consent = useSyncExternalStore(subscribe, readConsent, () => "server");
  const showBanner = consent === null;

  if (!GA_ID) return null;

  const t = pathname.startsWith("/familyari") ? texts.es : texts.ca;

  const choose = (value: Consent) => {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch {}
    window.gtag?.("consent", "update", { analytics_storage: value });
    listeners.forEach((listener) => listener());
  };

  return (
    <>
      <Script id="ga-consent-default" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          var saved = null;
          try { saved = localStorage.getItem('${CONSENT_KEY}'); } catch (e) {}
          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: saved === 'granted' ? 'granted' : 'denied'
          });
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />

      {showBanner && (
        <div className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-xl rounded-2xl bg-white p-4 shadow-lg ring-1 ring-black/10 sm:p-5">
          <p className="text-sm text-gray-700">{t.message}</p>
          <div className="mt-3 flex justify-end gap-2">
            <button
              onClick={() => choose("denied")}
              className="rounded-full px-4 py-2 text-sm font-medium text-gray-700 ring-1 ring-gray-300 hover:bg-gray-50"
            >
              {t.reject}
            </button>
            <button
              onClick={() => choose("granted")}
              className="rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700"
            >
              {t.accept}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
