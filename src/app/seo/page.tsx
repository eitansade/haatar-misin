import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, SearchCheck } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { seoLandingPages } from "@/data/seoPages";

export const metadata: Metadata = {
  title: "מדריכי SEO להורים | BloomCare",
  description: "עמודי מידע בעברית על ציוד רפואי לילדים, אינהלציה, קיבועים, שיקום ומוצרים ידידותיים לילדים בישראל.",
};

export default function SeoIndexPage() {
  return (
    <main className="bg-creamCare px-5 py-16 md:px-8">
      <section className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="מרכז מידע להורים"
          title="עמודי נחיתה שמחזקים אמון ועוזרים להורים למצוא תשובות"
          text="כל עמוד בנוי סביב ביטוי חיפוש חשוב בישראל, עם תוכן רגשי, סמנטי וברור לגוגל ולהורים."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {seoLandingPages.map((page) => (
            <Link
              key={page.slug}
              href={`/seo/${page.slug}`}
              className="soft-focus group rounded-soft bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(34,49,63,0.14)]"
            >
              <SearchCheck className="mb-5 text-coralCare" size={30} />
              <p className="text-sm font-black text-inkCare/45">{page.keyword}</p>
              <h2 className="mt-3 text-2xl font-black leading-tight text-inkCare">{page.title}</h2>
              <p className="mt-4 leading-7 text-inkCare/70">{page.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-black text-coralCare">
                לקרוא עוד
                <ArrowLeft size={16} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

