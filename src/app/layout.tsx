import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Creatof Realisatie | Badkamer & Keuken Renovatie",
  description:
    "Creatof Realisatie is uw specialist in badkamerrenovaties, keukeninstallaties en maatmeubels. Met meer dan 15 jaar ervaring leveren wij vakmanschap van het hoogste niveau in uw regio.",
  keywords:
    "badkamer renovatie, keuken montage, maatmeubels, verbouwing, renovatie, vakmanschap",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className="scroll-smooth">
      <body className={`${inter.className} bg-dark text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
