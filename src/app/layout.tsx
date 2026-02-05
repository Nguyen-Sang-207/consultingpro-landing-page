import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import ConditionalFooter from "@/components/conditional-footer";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Consulting Pro | Elite Business Strategy",
    template: "%s | Consulting Pro"
  },
  description: "Consulting Pro provides high-impact business strategy, revenue growth engineering, and AI integration for ambitious companies worldwide.",
  keywords: ["Consulting", "Business Strategy", "AI Integration", "Revenue Growth", "Management Consulting"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://consultingpro.com",
    siteName: "Consulting Pro",
    title: "Consulting Pro | Elite Business Strategy",
    description: "High-impact business strategy for ambitious companies.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Consulting Pro Team",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${plusJakartaSans.variable} ${inter.variable} antialiased`}
        suppressHydrationWarning
      >
        <Navbar />
        <main id="main-content">
          {children}
        </main>
        <ConditionalFooter />
      </body>
    </html>
  );
}
