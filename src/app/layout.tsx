import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "VIP Plastics — Industrial Crates, Pallets, Bins & Planters",
    template: "%s | VIP Plastics",
  },
  description:
    "VIP Plastics manufactures high‑quality plastic crates, pallets, bins, planters and custom solutions with flawless quality and on‑time delivery.",
  metadataBase: new URL("https://vipplastics.in"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "VIP Plastics — Industrial Crates, Pallets, Bins & Planters",
    description:
      "High‑quality plastic products with flawless quality and timely delivery. Explore crates, pallets, bins, planters and custom solutions.",
    url: "https://vipplastics.in/",
    siteName: "VIP Plastics",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "VIP Plastics",
    description:
      "High‑quality plastic crates, pallets, bins, planters and custom solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-dvh flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
