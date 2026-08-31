import type { Metadata } from "next";
import { Noto_Serif_KR } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const notoSerif = Noto_Serif_KR({
  variable: "--font-noto-serif",
  weight: ["500"], // specifically requested for headings
  subsets: ["latin"],
});

const antroVectra = localFont({
  src: "./fonts/Antro_Vectra.otf",
  variable: "--font-script",
  weight: "400",
});

export const metadata: Metadata = {
  title: "A Field of Sentences",
  description: "A warm, analog bookshelf and modern webzine platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${notoSerif.variable} ${antroVectra.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
