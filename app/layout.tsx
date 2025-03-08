import './css/style.css';
import { Inter, Architects_Daughter } from 'next/font/google';
import Script from 'next/script'; // Importa el componente Script de Next.js

import Header from '@/components/ui/header';
import Banner from '@/components/banner';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap',
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Carga el script de reCAPTCHA v2 */}
        <Script
          src={`https://www.google.com/recaptcha/api.js`}
          strategy="lazyOnload" // Carga el script de manera diferida
        />
      </head>
      <body
        className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}
      >
        <div className="flex flex-col min-h-screen overflow-hidden">
          {/* Header fijo */}
          <Header />

          {/* Contenido principal con padding superior */}
          <main className="flex-grow  p-20"> {/* pt-20 es igual a h-20 (5 rem) */}
            {children}
          </main>

          {/* Banner (opcional) */}
          {/* <Banner /> */}
        </div>
      </body>
    </html>
  );
}