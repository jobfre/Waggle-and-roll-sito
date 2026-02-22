import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Waggle and Roll - Passeggiate, Asilo e Pensione per Cani",
  description: "Passeggiate, asilo e pensione con personale esperto e appassionato",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
