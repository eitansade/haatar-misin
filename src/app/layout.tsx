import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "BloomCare Kids | ציוד רפואי לילדים עם רוגע, ביטחון ותקווה",
    template: "%s | BloomCare Kids",
  },
  description:
    "BloomCare Kids הוא מותג ישראלי לציוד רפואי ידידותי לילדים, שנבחר כדי להפחית פחד, מבוכה ולחזק רוגע וביטחון בזמן טיפול או שיקום.",
  metadataBase: new URL("https://haatar-misin.vercel.app"),
  keywords: [
    "ציוד רפואי לילדים",
    "אינהלציה לילדים",
    "קיבוע גב לילדים",
    "ציוד שיקום לילדים",
    "ציוד רפואי מעוצב לילדים",
    "ציוד רפואי לילדים בישראל",
  ],
  openGraph: {
    title: "BloomCare Kids | ציוד רפואי לילדים שמרגיש אחרת",
    description: "מותג רגשי להורים בישראל שמחפשים ציוד רפואי לילדים עם צבע, רוגע, ביטחון וחוויה אנושית יותר.",
    url: "https://haatar-misin.vercel.app",
    siteName: "BloomCare Kids",
    locale: "he_IL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BloomCare Kids",
    description: "ציוד רפואי לילדים עם רוגע, ביטחון ותקווה.",
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
        <WhatsAppButton />
        <StickyMobileCta />
        <Footer />
      </body>
    </html>
  );
}
