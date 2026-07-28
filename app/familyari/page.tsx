"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import { translations, type Lang } from "@/lib/translations";

const APP_STORE_URL = "https://apps.apple.com/es/app/familyari/id6771475913";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.familyari.app&pcampaignid=web_share";

export default function FamilyAriPage() {
  const [lang, setLang] = useState<Lang>("es");
  const t = translations[lang];
  const f = t.familyari;

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#2F2633]">
      <section className="mx-auto flex max-w-6xl flex-col px-6 pt-8 pb-16">
        <SiteHeader lang={lang} setLang={setLang} nav={t.nav} />

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <div className="grid gap-12 pt-16 pb-12 md:grid-cols-2 md:items-center">
          <div>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#F1E9F7] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-[#7B5FA3]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7B5FA3]" />
              {f.eyebrow}
            </span>
            <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              {f.h3}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#6B5E72]">{f.lead}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
                <Image src="/app-store-badge.svg" alt={f.ctaAppStore} width={170} height={48} className="h-12 w-auto" />
              </a>
              <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
                <Image src="/google-play-badge.png" alt={f.ctaGooglePlay} width={170} height={48} className="h-12 w-auto" />
              </a>
            </div>
            <p className="mt-4 text-sm font-semibold text-[#6B5E72]">{f.reassure}</p>
          </div>

          <div
            className="mx-auto w-full max-w-sm rounded-[1.75rem] border border-[#EDE6D8] bg-white p-5 shadow-xl"
            aria-label={lang === "ca" ? "Exemple de conversa amb l'Ari" : "Ejemplo de conversación con Ari"}
          >
            <div className="flex items-center gap-3 border-b border-[#F3ECE0] pb-4">
              <Image src="/familyari-icon.png" alt="" width={44} height={44} className="h-11 w-11 rounded-full" />
              <div>
                <p className="font-extrabold text-[#2F2633]">Ari</p>
                <p className="text-sm font-bold text-[#7B5FA3]">{f.vignette.sub}</p>
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-3">
              <div className="max-w-[85%] self-end rounded-2xl rounded-br-sm bg-[#F1E9F7] px-4 py-3 text-[15px] leading-6 text-[#2F2633]">
                <span className="mb-1 block text-[10px] font-extrabold uppercase tracking-wider text-[#6B5E72]">
                  {f.vignette.meLabel}
                </span>
                {f.vignette.me}
              </div>
              <div className="max-w-[85%] self-start rounded-2xl rounded-bl-sm border border-[#EDE6D8] bg-[#FAF7F2] px-4 py-3 text-[15px] leading-6 text-[#2F2633]">
                <span className="mb-1 block text-[10px] font-extrabold uppercase tracking-wider text-[#7B5FA3]">
                  {f.vignette.ariLabel}
                </span>
                {f.vignette.ari}
              </div>
            </div>
          </div>
        </div>

        {/* ── COM T'AJUDA ──────────────────────────────────────────────── */}
        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-[#6B5E72]">
          <p>{f.p1}</p>
          <p>{f.p2}</p>
          <p>{f.p3}</p>
          <p>{f.p4}</p>
        </div>

        {/* ── CARDS ────────────────────────────────────────────────────── */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">{f.cardsTitle}</h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-[#6B5E72]">{f.cardsSubtitle}</p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-[1.5rem] bg-white p-7 text-left shadow-sm">
              <h3 className="text-xl font-bold text-[#4B3A59]">{f.card1title}</h3>
              <p className="mt-3 text-[#6B5E72]">{f.card1body}</p>
            </div>
            <div className="rounded-[1.5rem] bg-white p-7 text-left shadow-sm">
              <h3 className="text-xl font-bold text-[#4B3A59]">{f.card2title}</h3>
              <p className="mt-3 text-[#6B5E72]">{f.card2body}</p>
            </div>
            <div className="rounded-[1.5rem] bg-white p-7 text-left shadow-sm">
              <h3 className="text-xl font-bold text-[#4B3A59]">{f.card3title}</h3>
              <p className="mt-3 text-[#6B5E72]">{f.card3body}</p>
            </div>
          </div>
        </div>

        {/* ── COMPARATIVA VS IA GENÈRICA ──────────────────────────────── */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">{f.compare.title}</h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-[#6B5E72]">{f.compare.subtitle}</p>

          {/* Desktop: taula */}
          <div className="mt-10 hidden overflow-hidden rounded-[1.5rem] border border-[#EDE6D8] bg-[#EDE6D8] shadow-sm md:grid md:grid-cols-[1.3fr_1fr_1fr] md:gap-px">
            <div className="bg-white p-5" />
            <div className="bg-white p-5 text-center font-bold text-[#6B5E72]">{f.compare.colGeneric}</div>
            <div className="bg-[#7B5FA3] p-5 text-center font-bold text-white">{f.compare.colFamilyari}</div>
            {f.compare.rows.map((row) => (
              <Fragment key={row.label}>
                <div className="bg-white p-5 text-left font-semibold text-[#4B3A59]">{row.label}</div>
                <div className="bg-white p-5 text-left text-[#6B5E72]">{row.generic}</div>
                <div className="bg-[#F8F4FB] p-5 text-left text-[#4B3A59]">{row.familyari}</div>
              </Fragment>
            ))}
          </div>

          {/* Mòbil: targetes */}
          <div className="mt-10 flex flex-col gap-4 text-left md:hidden">
            {f.compare.rows.map((row) => (
              <div key={row.label} className="rounded-2xl border border-[#EDE6D8] bg-white p-5">
                <p className="font-bold text-[#4B3A59]">{row.label}</p>
                <div className="mt-3 flex items-start gap-2 text-sm text-[#6B5E72]">
                  <span className="mt-0.5 font-bold text-[#B3A6BD]">✕</span>
                  <p>{row.generic}</p>
                </div>
                <div className="mt-2 flex items-start gap-2 rounded-xl bg-[#F1E9F7] p-3 text-sm text-[#4B3A59]">
                  <span className="mt-0.5 font-bold text-[#7B5FA3]">✓</span>
                  <p>{row.familyari}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CLOSING ──────────────────────────────────────────────────── */}
        <div className="mt-20 rounded-[2rem] bg-[#7B5FA3] px-10 py-14 text-center text-white shadow-xl">
          <h2 className="mx-auto max-w-xl text-3xl font-bold leading-tight md:text-4xl">
            {f.closing1}
            <br />
            <em className="not-italic text-white/85">{f.closing2}</em>
          </h2>
          <p className="mt-4 text-lg font-semibold text-white/90">{f.closingSig}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-white px-2 py-1">
              <Image src="/app-store-badge.svg" alt={f.ctaAppStore} width={170} height={48} className="h-12 w-auto" />
            </a>
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-white px-2 py-1">
              <Image src="/google-play-badge.png" alt={f.ctaGooglePlay} width={170} height={48} className="h-12 w-auto" />
            </a>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a href="/" className="text-sm font-medium text-[#8B6FA3] hover:text-[#7B5FA3] transition-colors">
            ← {f.backHome}
          </a>
        </div>
      </section>
    </main>
  );
}
