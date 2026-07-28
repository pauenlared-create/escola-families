"use client";

import { useState } from "react";
import Image from "next/image";
import type { Lang } from "@/lib/translations";

export default function SiteHeader({
  lang,
  setLang,
  nav,
}: {
  lang: Lang;
  setLang: (lang: Lang) => void;
  nav: { familyari: string; familiesPlus: string; projecte: string; contacte: string };
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/familyari", label: nav.familyari },
    { href: "/#families-plus", label: nav.familiesPlus },
    { href: "/#projecte", label: nav.projecte },
    { href: "/#contacte", label: nav.contacte },
  ];

  return (
    <header className="relative flex items-center justify-between">
      <div className="flex items-center gap-3">
        <a href="/">
          <Image
            src="/logo-escola-families.png"
            alt="Escola de Famílies"
            width={200}
            height={64}
            className="h-16 w-auto"
            priority
          />
        </a>
      </div>

      {/* Desktop nav */}
      <nav className="hidden items-center gap-6 text-sm font-medium text-[#5F5267] md:flex">
        {links.map((item) => (
          <a key={item.href} href={item.href} className="hover:text-[#7B5FA3] transition-colors">
            {item.label}
          </a>
        ))}

        {/* Language switcher */}
        <div className="flex overflow-hidden rounded-full border border-[#D5C9E0] bg-white text-xs font-semibold">
          <button
            onClick={() => setLang("ca")}
            className={`px-3 py-1.5 transition-colors ${lang === "ca" ? "bg-[#7B5FA3] text-white" : "text-[#5F5267] hover:bg-[#F8F4FB]"}`}
          >
            CA
          </button>
          <button
            onClick={() => setLang("es")}
            className={`px-3 py-1.5 transition-colors ${lang === "es" ? "bg-[#7B5FA3] text-white" : "text-[#5F5267] hover:bg-[#F8F4FB]"}`}
          >
            ES
          </button>
        </div>
      </nav>

      {/* Mobile: language + hamburger */}
      <div className="flex items-center gap-3 md:hidden">
        <div className="flex overflow-hidden rounded-full border border-[#D5C9E0] bg-white text-xs font-semibold">
          <button
            onClick={() => setLang("ca")}
            className={`px-3 py-1.5 transition-colors ${lang === "ca" ? "bg-[#7B5FA3] text-white" : "text-[#5F5267]"}`}
          >
            CA
          </button>
          <button
            onClick={() => setLang("es")}
            className={`px-3 py-1.5 transition-colors ${lang === "es" ? "bg-[#7B5FA3] text-white" : "text-[#5F5267]"}`}
          >
            ES
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Obrir menú"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full bg-white shadow-sm"
        >
          <span className={`block h-0.5 w-5 bg-[#4B3A59] transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-5 bg-[#4B3A59] transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 bg-[#4B3A59] transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu drawer */}
      {menuOpen && (
        <nav className="absolute inset-x-6 top-full z-20 mt-4 flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-lg text-sm font-medium text-[#5F5267] md:hidden">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#7B5FA3] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
