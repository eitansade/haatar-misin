import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "CareKids Israel | ציוד רפואי לילדים עם צבע, ביטחון ולב",
    template: "%s | CareKids Israel",
  },
  description:
    "ציוד רפואי לילדים שעוצב כדי להפחית פחדים, מבוכה ולתת לילדים יותר ביטחון.",
  metadataBase: new URL("https://haatar-misin.vercel.app"),
  openGraph: {
    title: "CareKids Israel",
    description:
      "ציוד רפואי לילדים שעוצב כדי להפחית פחדים, מבוכה ולתת לילדים יותר ביטחון.",
    locale: "he_IL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <Header />
        {children}
        <StickyMobileCta />
        <Footer />
      </body>
    </html>
  );
}
