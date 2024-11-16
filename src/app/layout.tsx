"use client";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import 'aos/dist/aos.css';
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

/* export const metadata: Metadata = {
  title: "Simulador de Seguros",
  description: "Este é um simulador de seguros, que te permite simular o valor de um seguro de acordo com o seu perfil.",
}; */

const queryClient = new QueryClient();

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pt">
      <head>
        <title>Simulador de Seguros</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#fafcfd] font-[family-name:var(--font-geist-sans)]`}
      >
        {/* <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider> */}
        <QueryClientProvider client={queryClient}>
          <ConfigProvider
            theme={{
              token: {
                // Seed Token
                colorPrimary: "#fba94c",
                borderRadius: 2,
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
          />
        </QueryClientProvider>
        {/* <script>
          {AOS.init()}
        </script> */}
      </body>
    </html>
  );
};

export default RootLayout;

/* export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#fafcfd] font-[family-name:var(--font-geist-sans)]`}
      >
        <ConfigProvider
          theme={{
            token: {
              // Seed Token
              colorPrimary: "#fba94c",
              borderRadius: 2,
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
        />
      </body>
    </html>
  );
} */