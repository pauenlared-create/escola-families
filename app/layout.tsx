import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Escola de Famílies — Comprendre per connectar",
  description:
    "Escola de Famílies crea eines i espais per enfortir el vincle entre pares, mares, fills i filles. Descobreix FamilyAri i el programa Families+1.",
  openGraph: {
    title: "Escola de Famílies — Comprendre per connectar",
    description:
      "FamilyAri i Families+1: eines per comprendre i connectar amb els teus fills i filles.",
    images: ["/hero-familia-sofa.jpg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ca"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
