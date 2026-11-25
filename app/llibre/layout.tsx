import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Famílies que canvien escoles — El llibre de Pau Campderrós",
  description:
    "Un llibre per a famílies que volen entendre com funciona l'escola per dins i saber què poden fer perquè tingui en compte cada infant.",
  openGraph: {
    title: "Famílies que canvien escoles — Pau Campderrós",
    description:
      "Deixem enrere un sistema que ja no funciona. Un llibre per a famílies que volen una escola que tingui en compte cada infant.",
    images: ["/hero-familia-sofa.jpg"],
    type: "book",
  },
};

export default function LlibreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
