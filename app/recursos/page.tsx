"use client";

import { useState } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { translations, type Lang } from "@/lib/translations";

type Recurs = {
  file: string;
  title: string;
  meta: string;
  body: string;
  accent: string;
};

function DownloadIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3v12" />
      <path d="m7 11 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

export default function RecursosPage() {
  const [lang, setLang] = useState<Lang>("ca");
  const t = translations[lang];
  const r = t.recursos;

  const recursos: Recurs[] = [
    {
      file: "/recursos/contracte-primer-mobil.pdf",
      title: r.card1Title,
      meta: r.card1Meta,
      body: r.card1Body,
      accent: "#7B5FA3",
    },
    {
      file: "/recursos/el-nostre-acord.pdf",
      title: r.card2Title,
      meta: r.card2Meta,
      body: r.card2Body,
      accent: "#4E9A61",
    },
    {
      file: "/recursos/preguntes-per-parlar-ne.pdf",
      title: r.card3Title,
      meta: r.card3Meta,
      body: r.card3Body,
      accent: "#D98A2B",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#2F2633]">
      <section className="mx-auto flex max-w-6xl flex-col px-6 pt-8 pb-16">
        <SiteHeader lang={lang} setLang={setLang} nav={t.nav} />

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <div className="max-w-3xl pt-16 pb-12">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#F1E9F7] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-[#7B5FA3]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7B5FA3]" />
            {r.eyebrow}
          </span>
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            {r.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#6B5E72]">{r.lead}</p>
          <div className="mt-6 space-y-5 text-lg leading-8 text-[#6B5E72]">
            <p>{r.p1}</p>
            <p>{r.p2}</p>
          </div>
        </div>
      </section>

      {/* ── ELS RECURSOS ───────────────────────────────────────────────── */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {recursos.map((item) => (
            <article
              key={item.file}
              className="flex flex-col rounded-[1.5rem] bg-[#FAF7F2] p-7 shadow-sm"
            >
              <span
                className="inline-block h-1.5 w-12 rounded-full"
                style={{ backgroundColor: item.accent }}
              />
              <h2
                className="mt-5 text-2xl font-bold leading-snug"
                style={{ color: item.accent }}
              >
                {item.title}
              </h2>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.08em] text-[#8B6FA3]">
                {item.meta}
              </p>
              <p className="mt-4 flex-1 leading-7 text-[#6B5E72]">{item.body}</p>
              <a
                href={item.file}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#7B5FA3] px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-[#6A4E8F]"
              >
                <DownloadIcon />
                {r.cta}
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* ── D'ON SURTEN ────────────────────────────────────────────────── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-[#7B5FA3] p-10 text-center text-white">
          <h2 className="text-3xl font-bold">{r.closingTitle}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/85">
            {r.closingBody}
          </p>
          <Link
            href="/#contacte"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-[#4B3A59] transition-colors hover:bg-white/90"
          >
            {r.closingCta}
          </Link>
        </div>
      </section>
    </main>
  );
}
