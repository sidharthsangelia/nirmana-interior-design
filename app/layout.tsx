import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Inter,
  Playfair_Display,
  JetBrains_Mono,
  Cormorant_Garamond
} from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/provider/SmoothScrollProvider";
import Header from "@/components/mvpblocks/Header";
import Footer from "@/components/Footer";
 
const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontSerif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const fontCormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Nirmana Studio",
  description:
    "Nirmana Studio is a luxury interior design studio crafting immersive living experiences through timeless aesthetics and refined detail. Blending modern minimalism with curated textures, warm palettes, and architectural harmony, the studio transforms ordinary spaces into deeply personal sanctuaries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable} ${fontCormorant.variable} antialiased`}
      >
        <SmoothScrollProvider>
          <Header />
          {children}
          <Footer/>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
