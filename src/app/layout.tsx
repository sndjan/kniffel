import { Providers } from "../../providers/providers";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { template: "%s | Würfelkarte", default: "Würfelkarte" },
  description:
    "Würfelkarte – Das digitale Kniffel-Erlebnis. Spiele verschiedene Kniffel-Varianten, verwalte Punkte und genieße spannende Runden mit Freunden!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
