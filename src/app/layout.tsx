import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "BloomCare Kids | טיפול לילדים עם רוגע, ביטחון ותקווה",
    template: "%s | BloomCare Kids",
  },
  description:
    "BloomCare Kids הוא מותג טיפול רגשי-פדיאטרי שעוזר לילדים להרגיש בטוחים, רגועים ובטוחים יותר בזמן טיפול רפואי או שיקום.",
  metadataBase: new URL("https://haatar-misin.vercel.app"),
  openGraph: {
    title: "BloomCare Kids",
    description:
      "מותג טיפול לילדים שמתמקד ברוגע, ביטחון, צמיחה ונוחות רגשית בזמן טיפול רפואי או שיקום.",
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
