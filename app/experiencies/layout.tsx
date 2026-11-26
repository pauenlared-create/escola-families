import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Escoles que inspiren — Escola de Famílies",
  description:
    "Experiències de famílies i docents en escoles i instituts que atenen bé la diversitat i fan que les famílies en formin part. Llegiu-les o expliqueu la vostra.",
  openGraph: {
    title: "Escoles que inspiren — Famílies que canvien escoles",
    description:
      "Experiències reals de famílies i docents en escoles que atenen bé la diversitat. Perquè altres escoles en prenguin idees.",
    images: ["/families1-trobada.webp"],
    type: "website",
  },
};

export default function ExperienciesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
