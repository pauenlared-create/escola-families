// app/page.tsx  (o pages/index.tsx si usas Pages Router)
"use client";

import { useState } from "react";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import { translations, type Lang } from "@/lib/translations";

// ─── Component ──────────────────────────────────────────────────────────────

export default function Home() {
  const [lang, setLang] = useState<Lang>("ca");
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [formSent, setFormSent] = useState(false);
  const [formSending, setFormSending] = useState(false);
  const [formError, setFormError] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const t = translations[lang];

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSending(true);
    setFormError(false);
    try {
      const res = await fetch("https://formsubmit.co/ajax/hola@escoladefamilies.cat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _subject: "Nou missatge des de escoladefamilies.cat",
          _template: "table",
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setFormSent(true);
      setFormState({ name: "", email: "", message: "" });
    } catch {
      setFormError(true);
    } finally {
      setFormSending(false);
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("hola@escoladefamilies.cat");
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      // El navegador no permet copiar automàticament; l'usuari sempre pot fer-ho a mà
    }
  };

  return (
    <>
      <style>{`html { scroll-behavior: smooth; }`}</style>

      <main className="min-h-screen bg-[#FAF7F2] text-[#2F2633]">

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="mx-auto flex max-w-6xl flex-col px-6 pt-8 pb-20">

          <SiteHeader lang={lang} setLang={setLang} nav={t.nav} />

          {/* Hero grid */}
          <div className="grid gap-12 pt-16 pb-20 md:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#8B6FA3]">
                {t.hero.subtitle}
              </p>
              <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                {t.hero.h1}
              </h1>
              <p className="mt-6 max-w-xl text-3xl font-bold leading-tight text-[#7B5FA3] md:text-4xl">
                {t.hero.h2}
              </p>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#6B5E72]">
                {t.hero.body}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/familyari"
                  className="rounded-full bg-[#7B5FA3] px-6 py-3 text-center font-semibold text-white shadow-sm hover:bg-[#6A4E8F] transition-colors"
                >
                  {t.hero.cta1}
                </a>
                <a
                  href="#families-plus"
                  className="rounded-full bg-white px-6 py-3 text-center font-semibold text-[#4B3A59] shadow-sm hover:bg-[#F8F4FB] transition-colors"
                >
                  {t.hero.cta2}
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-white p-4 shadow-xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/hero-familia-sofa.jpg"
                  alt={t.hero.imgAlt}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xl font-semibold leading-snug text-white">
                    {t.hero.imgCaption}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAMILYARI (teaser) ──────────────────────────────────────── */}
        <section id="familyari" className="bg-white px-6 py-20">
          <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
            <div>
              <div className="flex items-center gap-4">
                <Image
                  src="/familyari-icon.png"
                  alt="FamilyAri"
                  width={64}
                  height={64}
                  className="rounded-2xl"
                />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B6FA3]">
                    {t.familyari.label}
                  </p>
                  <h2 className="text-3xl font-bold md:text-4xl">{t.familyari.title}</h2>
                </div>
              </div>
              <p className="mt-4 text-xl leading-8 text-[#6B5E72]">{t.familyari.lead}</p>
              <a
                href="/familyari"
                className="mt-6 inline-block rounded-full bg-[#7B5FA3] px-8 py-3 font-semibold text-white shadow-sm hover:bg-[#6A4E8F] transition-colors"
              >
                {t.familyari.teaserCta}
              </a>
            </div>

            <div className="flex justify-center">
              <Image
                src={lang === "ca" ? "/familyari-promo-ca.png" : "/familyari-promo-es.png"}
                alt={lang === "ca" ? "FamilyAri: entén què hi ha darrere del seu comportament" : "FamilyAri: entiende lo que hay detrás de su comportamiento"}
                width={1080}
                height={1920}
                className="h-auto w-full max-w-[320px] rounded-[1.5rem] shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* ── FAMILIES+1 ───────────────────────────────────────────────── */}
        <section id="families-plus" className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#8B6FA3]">
              {t.familiesPlus.label}
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">{t.familiesPlus.title}</h2>

            <div className="mt-6 max-w-4xl space-y-5 text-lg leading-8 text-[#6B5E72]">
              <p>{t.familiesPlus.p1}</p>
              <p>{t.familiesPlus.p2}</p>
              <p>{t.familiesPlus.p3}</p>
              <p>{t.familiesPlus.p4}</p>
              <p>{t.familiesPlus.p5}</p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">

              {/* Sessió 1 */}
              <div className="overflow-hidden rounded-[1.5rem] bg-white shadow-sm">
                <div className="relative h-64 w-full">
                  <Image
                    src="/families1-infants.png"
                    alt={t.familiesPlus.s1imgAlt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#7B5FA3]">{t.familiesPlus.s1title}</h3>
                  <p className="mt-4 text-[#6B5E72]">{t.familiesPlus.s1p1}</p>
                  <p className="mt-4 text-[#6B5E72]">{t.familiesPlus.s1p2}</p>
                </div>
              </div>

              {/* Sessió 2 */}
              <div className="overflow-hidden rounded-[1.5rem] bg-white shadow-sm">
                <div className="relative h-64 w-full">
                  <Image
                    src="/families1-families.png"
                    alt={t.familiesPlus.s2imgAlt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#4E9A61]">{t.familiesPlus.s2title}</h3>
                  <p className="mt-4 text-[#6B5E72]">{t.familiesPlus.s2p1}</p>
                  <p className="mt-4 text-[#6B5E72]">{t.familiesPlus.s2p2}</p>
                </div>
              </div>

              {/* Sessió 3 */}
              <div className="overflow-hidden rounded-[1.5rem] bg-white shadow-sm">
                <div className="relative h-64 w-full">
                  <Image
                    src="/families1-trobada.png"
                    alt={t.familiesPlus.s3imgAlt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#D98A2B]">{t.familiesPlus.s3title}</h3>
                  <p className="mt-4 text-[#6B5E72]">{t.familiesPlus.s3p1}</p>
                </div>
              </div>

            </div>

            {/* CTA Families+1 */}
            <div className="mt-10 text-center">
              <a
                href="#contacte"
                className="inline-block rounded-full bg-[#7B5FA3] px-8 py-4 font-semibold text-white shadow-sm hover:bg-[#6A4E8F] transition-colors"
              >
                {t.familiesPlus.ctaContact}
              </a>
            </div>
          </div>
        </section>

        {/* ── SOBRE EL PROJECTE ─────────────────────────────────────────── */}
        <section id="projecte" className="bg-white px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#8B6FA3]">
              {t.projecte.label}
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">{t.projecte.title}</h2>

            <h3 className="mt-8 text-2xl font-bold text-[#4B3A59]">{t.projecte.h3a}</h3>
            <div className="mt-6 space-y-6 text-lg leading-8 text-[#6B5E72]">
              <p>{t.projecte.p1}</p>
              <p>{t.projecte.p2}</p>
              <p>{t.projecte.p3}</p>
              <p>{t.projecte.p4}</p>
              <p>{t.projecte.p5}</p>
            </div>
<div className="mt-14">
  <h3 className="text-2xl font-bold text-[#4B3A59]">
    {t.projecte.h3docent}
  </h3>

  <div className="mt-6 space-y-5 text-lg leading-8 text-[#6B5E72]">
    <p>{t.projecte.pDoc1}</p>
    <p>{t.projecte.pDoc2}</p>
    <p>{t.projecte.pDoc3}</p>
    <p>{t.projecte.pDoc4}</p>
    <p>{t.projecte.pDoc5}</p>
    <p>{t.projecte.pDoc6}</p>
  </div>
</div>
            <div className="mt-14">
              <h3 className="text-2xl font-bold text-[#4B3A59]">{t.projecte.h3b}</h3>
              <div className="mt-6 space-y-5 text-lg leading-8 text-[#6B5E72]">
                <p>{t.projecte.p6}</p>
<p>{t.projecte.p7}</p>
<p>{t.projecte.p8}</p>
<p>{t.projecte.p9}</p>
<p>{t.projecte.p10a}</p>
<p>{t.projecte.p10b}</p>
<p>{t.projecte.p10c}</p>
<p>{t.projecte.p10d}</p>
<p>{t.projecte.p10e}</p>
              </div>
            </div>
            <div className="mt-14">
              <h3 className="text-2xl font-bold text-[#4B3A59]">{t.projecte.h3c}</h3>
              <div className="mt-6 space-y-5 text-lg leading-8 text-[#6B5E72]">
                <p>{t.projecte.p10}</p>
                <p>{t.projecte.p11}</p>
                <p>{t.projecte.p12}</p>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-[1.5rem] bg-[#F8F4FB] p-6">
                  <h4 className="text-xl font-bold text-[#4B3A59]">{t.projecte.card1title}</h4>
                  <p className="mt-3 text-[#6B5E72]">{t.projecte.card1body}</p>
                </div>
                <div className="rounded-[1.5rem] bg-[#F8F4FB] p-6">
                  <h4 className="text-xl font-bold text-[#4B3A59]">{t.projecte.card2title}</h4>
                  <p className="mt-3 text-[#6B5E72]">{t.projecte.card2body}</p>
                </div>
              </div>

              <div className="mt-10 text-center">
                <p className="text-2xl font-bold text-[#4B3A59]">{t.projecte.closing}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACTE ─────────────────────────────────────────────────── */}
        <section id="contacte" className="px-6 py-20">
          <div className="mx-auto max-w-4xl rounded-[2rem] bg-[#7B5FA3] p-10 text-white">
            <h2 className="text-3xl font-bold text-center">{t.contacte.title}</h2>
            <p className="mt-4 text-center text-lg leading-8 text-white/85">{t.contacte.body}</p>

            {formSent ? (
              <div className="mt-8 rounded-2xl bg-white/20 p-6 text-center">
                <p className="text-lg font-semibold">
                  {lang === "ca" ? "Missatge enviat! Ens posarem en contacte aviat." : "¡Mensaje enviado! Nos pondremos en contacto pronto."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="mt-8 space-y-4">
                <input
                  type="text"
                  required
                  placeholder={t.contacte.namePlaceholder}
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full rounded-xl bg-white/20 px-4 py-3 text-white placeholder-white/60 outline-none focus:bg-white/30 transition-colors"
                />
                <input
                  type="email"
                  required
                  placeholder={t.contacte.emailPlaceholder}
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full rounded-xl bg-white/20 px-4 py-3 text-white placeholder-white/60 outline-none focus:bg-white/30 transition-colors"
                />
                <textarea
                  rows={4}
                  required
                  placeholder={t.contacte.messagePlaceholder}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full rounded-xl bg-white/20 px-4 py-3 text-white placeholder-white/60 outline-none focus:bg-white/30 transition-colors resize-none"
                />
                {formError && (
                  <p className="text-sm text-white bg-red-500/40 rounded-xl px-4 py-3">
                    {lang === "ca"
                      ? "Hi ha hagut un problema en enviar el missatge. Torna-ho a provar o escriu-nos directament a hola@escoladefamilies.cat."
                      : "Ha habido un problema al enviar el mensaje. Inténtalo de nuevo o escríbenos directamente a hola@escoladefamilies.cat."}
                  </p>
                )}
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                  <button
                    type="submit"
                    disabled={formSending}
                    className="w-full rounded-full bg-white px-6 py-3 font-semibold text-[#4B3A59] hover:bg-white/90 transition-colors sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {formSending
                      ? lang === "ca" ? "Enviant…" : "Enviando…"
                      : t.contacte.submit}
                  </button>
                  <p className="text-sm text-white/70">
                    {t.contacte.or}{" "}
                    <a href="mailto:hola@escoladefamilies.cat" className="underline text-white">
                      hola@escoladefamilies.cat
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="ml-2 underline text-white/80 hover:text-white transition-colors"
                    >
                      {emailCopied
                        ? lang === "ca" ? "Copiat!" : "¡Copiado!"
                        : lang === "ca" ? "(copiar)" : "(copiar)"}
                    </button>
                  </p>
                </div>
              </form>
            )}
          </div>
        </section>

      </main>
    </>
  );
}
