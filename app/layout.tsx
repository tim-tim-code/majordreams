import type { Metadata } from "next";
import { Quattrocento_Sans, Trirong } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const quattrocentoSans = Quattrocento_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-sans',
});

const trirong = Trirong({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: "Major Dreams - Urban Streetwear",
  description: "Keep your dreams alive and feel them become reality. Premium streetwear inspired by Japanese aesthetics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${quattrocentoSans.variable} ${trirong.variable}`}>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
