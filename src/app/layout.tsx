import type { Metadata } from "next";
import localFont from "next/font/local";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Simulador de Seguros",
  description:
    "Este é um simulador de seguros, que te permite simular o valor de um seguro de acordo com o seu perfil.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#fafcfd] font-[family-name:var(--font-geist-sans)]`}
        // className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#fafcfd] `}
      >
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
