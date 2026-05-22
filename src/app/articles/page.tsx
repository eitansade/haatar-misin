import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BookHeart } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "מדריכי הורים | BloomCare Kids",
  description: "מאמרים להורים על הפחתת פחד מטיפול רפואי, אינהלציה, קיבועים וציוד רפואי ידידותי לילדים.",
};

export default function ArticlesPage() {
  return (
    <main className="bg-creamCare px-5 py-16 md:px-8">
      <section className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="מדריכי הורים"
          title="תוכן רגשי ואמין להורים שרוצים להפוך טיפול לפחות מלחיץ"
          text="הבלוג בנוי כתשתית עתידית ל-SEO אורגני בישראל, עם מאמרים שיכולים להתרחב למדריכים מלאים."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => (
            <Link key={article.slug} href={`/articles/${article.slug}`} className="soft-focus group rounded-soft bg-white p-7 shadow-soft transition hover:-translate-y-1">
              <BookHeart className="mb-5 text-coralCare" size={30} />
              <p className="text-sm font-black text-inkCare/45">{article.readTime}</p>
              <h2 className="mt-3 text-2xl font-black leading-tight text-inkCare">{article.title}</h2>
              <p className="mt-4 leading-7 text-inkCare/70">{article.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-black text-coralCare">
                לקרוא מאמר
                <ArrowLeft size={16} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
