"use client";

import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { translations } from "@/lib/translations";
import { useLang } from "@/lib/useLang";

// Enllaços de compra.
// - PAPER_URL: edició en paper a Amazon (KDP). Quan hi sigui, és el botó principal.
// - KINDLE_URL: edició Kindle a Amazon (de moment només en català).
// Si tots dos són buits, la pàgina mostra «Aviat a la venda».
const PAPER_URL: string = "";
const KINDLE_URL: string = "https://www.amazon.es/dp/B0HJRQ81NB";

// Cobertes a /public/llibre-coberta-ca.jpg i /public/llibre-coberta-es.jpg.
const HAS_COVER = true;

function BookCover({ title, subtitle, author, lang }: { title: string; subtitle: string; author: string; lang: string }) {
  if (HAS_COVER) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={lang === "es" ? "/llibre-coberta-es.jpg" : "/llibre-coberta-ca.jpg"}
        alt={`${title}. ${subtitle}`}
        className="w-full max-w-xs rounded-md shadow-2xl"
      />
    );
  }
  return (
    <div
      className="flex w-full max-w-xs flex-col justify-between rounded-md bg-[#2F2633] p-8 text-white shadow-2xl"
      style={{ aspectRatio: "148 / 210" }}
      aria-label={`${title}. ${subtitle}`}
    >
      <div>
        <p className="text-3xl font-bold leading-tight">{title}</p>
        <span className="mt-5 block h-1 w-12 rounded-full bg-[#B79AD6]" />
        <p className="mt-5 text-base leading-snug text-white/80">{subtitle}</p>
      </div>
      <p className="text-sm font-semibold uppercase tracking-[0.15em] text-white/70">{author}</p>
    </div>
  );
}

export default function LlibrePage() {
  const [lang, setLang] = useLang("ca");
  const t = translations[lang];
  const l = t.llibre;
  const hasPaper = PAPER_URL !== "";
  const hasKindle = KINDLE_URL !== "";
  const primaryClass =
    "inline-flex items-center justify-center rounded-full bg-[#7B5FA3] px-8 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-[#6A4E8F]";

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#2F2633]">
      <section className="mx-auto flex max-w-6xl flex-col px-6 pt-8 pb-16">
        <SiteHeader lang={lang} setLang={setLang} nav={t.nav} />

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <div className="grid items-center gap-12 pt-16 pb-8 md:grid-cols-[1.4fr_1fr]">
          <div>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#F1E9F7] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-[#7B5FA3]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7B5FA3]" />
              {l.eyebrow}
            </span>
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">{l.title}</h1>
            <p className="mt-3 text-xl font-medium text-[#7B5FA3] md:text-2xl">{l.subtitle}</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#8B6FA3]">{l.author}</p>
            <p className="mt-6 text-lg leading-8 text-[#6B5E72]">{l.lead}</p>
            <div className="mt-5 space-y-5 text-lg leading-8 text-[#6B5E72]">
              <p>{l.p1}</p>
              <p>{l.p2}</p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              {hasPaper ? (
                <a href={PAPER_URL} target="_blank" rel="noopener noreferrer" className={primaryClass}>
                  {l.buy}
                </a>
              ) : hasKindle ? (
                <a href={KINDLE_URL} target="_blank" rel="noopener noreferrer" className={primaryClass}>
                  {l.buyKindle}
                </a>
              ) : (
                <Link href="/#contacte" className={primaryClass}>
                  {l.soon}
                </Link>
              )}
              {hasPaper && hasKindle && (
                <a
                  href={KINDLE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-[#D5C9E0] bg-white px-8 py-3 font-semibold text-[#4B3A59] transition-colors hover:bg-[#F8F4FB]"
                >
                  {l.amazon}
                </a>
              )}
            </div>
            <p className="mt-3 text-sm text-[#8B7F91]">
              {hasPaper ? l.buyNote : hasKindle ? l.kindleNote : l.soonNote}
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <BookCover title={l.title} subtitle={l.subtitle} author={l.author} lang={lang} />
          </div>
        </div>
      </section>

      {/* ── QUÈ HI TROBAREU ────────────────────────────────────────────── */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">{l.whatTitle}</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {l.cards.map((card, i) => (
              <article key={card.title} className="flex flex-col rounded-[1.5rem] bg-[#FAF7F2] p-7 shadow-sm">
                <span
                  className="inline-block h-1.5 w-12 rounded-full"
                  style={{ backgroundColor: ["#7B5FA3", "#4E9A61", "#D98A2B"][i % 3] }}
                />
                <h3 className="mt-5 text-xl font-bold leading-snug">{card.title}</h3>
                <p className="mt-4 leading-7 text-[#6B5E72]">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── ELS CAPÍTOLS ───────────────────────────────────────────────── */}
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="text-3xl font-bold">{l.tocTitle}</h2>
            <p className="mt-4 text-lg leading-8 text-[#6B5E72]">{l.tocLead}</p>
          </div>
          <ol className="space-y-3">
            {l.chapters.map((ch, i) => (
              <li key={ch} className="flex items-baseline gap-4 rounded-2xl bg-white px-5 py-4 shadow-sm">
                <span className="w-6 shrink-0 text-sm font-bold text-[#7B5FA3]">{i + 1}</span>
                <span className="text-lg">{ch}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── L'AUTOR ────────────────────────────────────────────────────── */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">{l.authorTitle}</h2>
          <p className="mt-5 text-lg leading-8 text-[#6B5E72]">{l.authorBody}</p>
        </div>
      </section>

      {/* ── ESCOLES QUE INSPIREN ────────────────────────────────────────── */}
      <section className="px-6 pt-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 rounded-[1.5rem] border border-[#EDE6F3] bg-white p-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold">{t.experiencies.fromBookTitle}</h2>
            <p className="mt-3 leading-7 text-[#6B5E72]">{t.experiencies.fromBookBody}</p>
          </div>
          <Link
            href="/experiencies"
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-[#7B5FA3] px-6 py-3 font-semibold text-[#7B5FA3] transition-colors hover:bg-[#F1E9F7]"
          >
            {t.experiencies.fromBookCta}
          </Link>
        </div>
      </section>

      {/* ── ESCOLES I AFA ──────────────────────────────────────────────── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-[#7B5FA3] p-10 text-center text-white">
          <h2 className="text-3xl font-bold">{l.closingTitle}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/85">{l.closingBody}</p>
          <Link
            href="/#contacte"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-[#4B3A59] transition-colors hover:bg-white/90"
          >
            {l.closingCta}
          </Link>
        </div>
      </section>
    </main>
  );
}
