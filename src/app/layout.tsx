import type { Metadata } from "next";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { profile } from "@/data/profile";
import "./globals.css";

const siteTitle = `${profile.name.ja}（${profile.name.en}） - Portfolio`;
const siteDescription = profile.bio || `${profile.name.ja} のポートフォリオサイト`;

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "profile",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
        <RevealOnScroll />
      </body>
    </html>
  );
}
