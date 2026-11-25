"use client";

import { useState } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { translations } from "@/lib/translations";
import { useLang } from "@/lib/useLang";
import { experiences, type ExperienceTheme } from "@/lib/experiencies";

const THEME_COLORS: Record<ExperienceTheme, string> = {
  diversity: "#4E9A61",
  families: "#D98A2B",
};

const emptyForm = {
  name: "",
  email: "",
  signature: "",
  school: "",
  town: "",
  schoolType: "",
  stage: "",
  headline: "",
  story: "",
};

const inputClass =
  "w-full rounded-xl border border-[#D5C9E0] bg-white px-4 py-3 text-[#2F2633] placeholder:text-[#A79BAE] focus:border-[#7B5FA3] focus:outline-none focus:ring-2 focus:ring-[#7B5FA3]/20";
const labelClass = "mb-1.5 block text-sm font-semibold text-[#4B3A59]";

export default function ExperienciesPage() {
  const [lang, setLang] = useLang("ca");
  const t = translations[lang];
  const e = t.experiencies;

  const themeLabel: Record<ExperienceTheme, string> = {
    diversity: e.themeDiversity,
    families: e.themeFamilies,
  };

  const [form, setForm] = useState(emptyForm);
  const [themes, setThemes] = useState<ExperienceTheme[]>([]);
  const [consent, setConsent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const update = (field: keyof typeof emptyForm) => (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [field]: ev.target.value }));

  const toggleTheme = (theme: ExperienceTheme) =>
    setThemes((prev) => (prev.includes(theme) ? prev.filter((x) => x !== theme) : [...prev, theme]));

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    setSending(true);
    setError(false);
    try {
      const res = await fetch("https://formsubmit.co/ajax/hola@escoladefamilies.cat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `Nova experiència: ${form.school} (${form.town})`,
          _template: "table",
          _replyto: form.email,
          Nom: form.name,
          Correu: form.email,
          Signatura: form.signature,
          Escola: form.school,
          Població: form.town,
          "Tipus de centre": form.schoolType,
          Etapa: form.stage,
          Temes: themes.map((x) => translations.ca.experiencies[x === "diversity" ? "themeDiversity" : "themeFamilies"]).join(", "),
          Titular: form.headline,
          Experiència: form.story,
          Idioma: lang === "ca" ? "Català" : "Castellà",
          "Autoritza la publicació": "Sí",
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setSent(true);
      setForm(emptyForm);
      setThemes([]);
      setConsent(false);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#2F2633]">
      <section className="mx-auto flex max-w-6xl flex-col px-6 pt-8 pb-12">
        <SiteHeader lang={lang} setLang={setLang} nav={t.nav} />

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <div className="max-w-3xl pt-16">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#F1E9F7] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-[#7B5FA3]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7B5FA3]" />
            {e.eyebrow}
          </span>
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">{e.title}</h1>
          <p className="mt-6 text-xl leading-8 text-[#4B3A59]">{e.lead}</p>
          <div className="mt-5 space-y-5 text-lg leading-8 text-[#6B5E72]">
            <p>{e.p1}</p>
            <p>{e.p2}</p>
          </div>
          <a
            href="#compartir"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#7B5FA3] px-8 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-[#6A4E8F]"
          >
            {e.formTitle}
          </a>
        </div>
      </section>

      {/* ── EXPERIÈNCIES ───────────────────────────────────────────────── */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">{e.listTitle}</h2>

          {experiences.length === 0 ? (
            <div className="mt-8 rounded-[1.5rem] border border-dashed border-[#D5C9E0] bg-[#FAF7F2] p-10 text-center">
              <h3 className="text-xl font-bold">{e.emptyTitle}</h3>
              <p className="mx-auto mt-3 max-w-xl leading-7 text-[#6B5E72]">{e.emptyBody}</p>
            </div>
          ) : (
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {experiences.map((exp) => (
                <article key={exp.id} className="flex flex-col rounded-[1.5rem] bg-[#FAF7F2] p-7 shadow-sm">
                  <div className="flex flex-wrap gap-2">
                    {exp.themes.map((theme) => (
                      <span
                        key={theme}
                        className="rounded-full px-3 py-1 text-xs font-bold text-white"
                        style={{ backgroundColor: THEME_COLORS[theme] }}
                      >
                        {themeLabel[theme]}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-5 text-xl font-bold leading-snug">«{exp.headline}»</h3>
                  <p className="mt-2 text-sm font-semibold text-[#7B5FA3]">
                    {exp.school} · {exp.town}
                  </p>
                  <p className="text-sm text-[#8B7F91]">
                    {exp.schoolType} · {exp.stage}
                  </p>
                  <div className="mt-4 space-y-4 leading-7 text-[#6B5E72]">
                    {exp.story.split(/\n\s*\n/).map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                  <p className="mt-5 text-sm italic text-[#8B7F91]">— {exp.signature}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── COMPARTIR ──────────────────────────────────────────────────── */}
      <section id="compartir" className="scroll-mt-6 px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_1.5fr]">
          <div>
            <h2 className="text-3xl font-bold">{e.guideTitle}</h2>
            <ul className="mt-6 space-y-4">
              {e.guide.map((item) => (
                <li key={item} className="flex gap-3 leading-7 text-[#6B5E72]">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7B5FA3]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-6 text-[#8B7F91]">{e.guideNote}</p>
          </div>

          <div className="rounded-[2rem] bg-white p-7 shadow-sm md:p-10">
            <h2 className="text-2xl font-bold">{e.formTitle}</h2>
            <p className="mt-2 text-[#6B5E72]">{e.formLead}</p>

            {sent ? (
              <div className="mt-8 rounded-2xl bg-[#F1E9F7] p-6 text-center">
                <p className="text-lg font-bold text-[#4B3A59]">{e.sentTitle}</p>
                <p className="mt-2 text-[#6B5E72]">{e.sentBody}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="exp-name" className={labelClass}>
                      {e.name} <span className="font-normal text-[#A79BAE]">· {e.privateHint}</span>
                    </label>
                    <input id="exp-name" type="text" required value={form.name} onChange={update("name")} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="exp-email" className={labelClass}>
                      {e.email} <span className="font-normal text-[#A79BAE]">· {e.privateHint}</span>
                    </label>
                    <input id="exp-email" type="email" required value={form.email} onChange={update("email")} className={inputClass} />
                  </div>
                </div>

                <div>
                  <label htmlFor="exp-signature" className={labelClass}>{e.signature}</label>
                  <input id="exp-signature" type="text" required placeholder={e.signaturePlaceholder} value={form.signature} onChange={update("signature")} className={inputClass} />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="exp-school" className={labelClass}>{e.school}</label>
                    <input id="exp-school" type="text" required value={form.school} onChange={update("school")} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="exp-town" className={labelClass}>{e.town}</label>
                    <input id="exp-town" type="text" required value={form.town} onChange={update("town")} className={inputClass} />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="exp-type" className={labelClass}>{e.schoolType}</label>
                    <select id="exp-type" required value={form.schoolType} onChange={update("schoolType")} className={inputClass}>
                      <option value="" disabled>{e.choose}</option>
                      {e.schoolTypes.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="exp-stage" className={labelClass}>{e.stage}</label>
                    <select id="exp-stage" required value={form.stage} onChange={update("stage")} className={inputClass}>
                      <option value="" disabled>{e.choose}</option>
                      {e.stages.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <fieldset>
                  <legend className={labelClass}>{e.themes}</legend>
                  <div className="flex flex-wrap gap-3">
                    {(["diversity", "families"] as ExperienceTheme[]).map((theme) => {
                      const active = themes.includes(theme);
                      return (
                        <button
                          key={theme}
                          type="button"
                          aria-pressed={active}
                          onClick={() => toggleTheme(theme)}
                          className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                            active ? "border-transparent text-white" : "border-[#D5C9E0] bg-white text-[#5F5267] hover:bg-[#F8F4FB]"
                          }`}
                          style={active ? { backgroundColor: THEME_COLORS[theme] } : undefined}
                        >
                          {themeLabel[theme]}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                <div>
                  <label htmlFor="exp-headline" className={labelClass}>{e.headline}</label>
                  <input id="exp-headline" type="text" required maxLength={140} placeholder={e.headlinePlaceholder} value={form.headline} onChange={update("headline")} className={inputClass} />
                </div>

                <div>
                  <label htmlFor="exp-story" className={labelClass}>{e.story}</label>
                  <textarea id="exp-story" required rows={9} placeholder={e.storyPlaceholder} value={form.story} onChange={update("story")} className={`${inputClass} resize-y leading-7`} />
                </div>

                <label className="flex cursor-pointer gap-3 text-sm leading-6 text-[#6B5E72]">
                  <input
                    type="checkbox"
                    required
                    checked={consent}
                    onChange={(ev) => setConsent(ev.target.checked)}
                    className="mt-1 h-4 w-4 shrink-0 accent-[#7B5FA3]"
                  />
                  <span>{e.consent}</span>
                </label>

                {error && <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{e.error}</p>}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full rounded-full bg-[#7B5FA3] px-8 py-3.5 font-semibold text-white shadow-sm transition-colors hover:bg-[#6A4E8F] disabled:opacity-60"
                >
                  {sending ? e.sending : e.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── EL LLIBRE ──────────────────────────────────────────────────── */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-[#7B5FA3] p-10 text-center text-white">
          <h2 className="text-3xl font-bold">{e.bookTitle}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/85">{e.bookBody}</p>
          <Link
            href="/llibre"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-[#4B3A59] transition-colors hover:bg-white/90"
          >
            {e.bookCta}
          </Link>
        </div>
      </section>
    </main>
  );
}
