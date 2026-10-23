import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "RevCrew | VIT Pune Motorcycle Technology & Innovation Club",
    template: "%s | RevCrew",
  },
  description: siteConfig.description,
  keywords: [
    "RevCrew",
    "VIT Pune",
    "Motorcycle Engineering",
    "Bike Building",
    "Fabrication",
    "Technical Competitions",
    "Riding Experiences",
    "Automotive Club",
  ],
  authors: [{ name: "RevCrew Team" }],
  creator: "RevCrew VIT Pune",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: "RevCrew | Motorcycle Technology & Innovation Club - VIT Pune",
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-bg-primary text-text-primary selection:bg-accent-red selection:text-text-primary">
        <Navbar />
        <main id="main-content" className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
