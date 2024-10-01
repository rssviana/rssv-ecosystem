import type { Metadata } from "next";
import { Playfair_Display } from 'next/font/google';
import "@/styles/globals.css";

const playFairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],  // Você pode adicionar os pesos que deseja
  variable: '--font-playfair-display' // Define a variável CSS
});

export const metadata: Metadata = {
  title: "RSSV-EcoSystem",
  description: "Criado por Ronan S. S. Viana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${playFairDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
