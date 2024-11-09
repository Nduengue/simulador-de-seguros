import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import { ConfigProvider } from "antd";
import { Toaster } from "sonner";

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
  description: "Este é um simulador de seguros, que te permite simular o valor de um seguro de acordo com o seu perfil.",
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
        <ConfigProvider
          theme={{
            token: {
              // Seed Token
              colorPrimary: "#fba94c",
              borderRadius: 2,

              // Alias Token
              // colorBgContainer: "#f6ffed",
              colorBgContainer: "#fafcfd",
            },
          }}
        >
          {children}
        </ConfigProvider>
        <Toaster
          position="top-right"
          richColors={true}
          duration={5000}
          expand
          closeButton
          // toastOptions={{
          // unstyled: true,
          // className:"p-4 rounded-lg ",
          // }}
        />
      </body>
    </html>
  );
}
