import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recursos per parlar del mòbil a casa — Escola de Famílies",
  description:
    "Materials lliures per a famílies: el contracte del primer mòbil, una plantilla d'acord familiar i dotze preguntes per parlar-ne. Descàrrega lliure, sense registre.",
  openGraph: {
    title: "Recursos per parlar del mòbil a casa — Escola de Famílies",
    description:
      "El contracte del primer mòbil, la plantilla d'acord familiar i dotze preguntes per parlar-ne. Materials lliures d'Escola de Famílies.",
    images: ["/hero-familia-sofa.jpg"],
    type: "website",
  },
};

export default function RecursosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
