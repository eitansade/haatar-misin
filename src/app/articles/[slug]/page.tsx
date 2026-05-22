import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookHeart, HeartHandshake } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { articles, getArticle } from "@/data/articles";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      url: `/articles/${article.slug}`,
      type: "article",
      locale: "he_IL",
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    inLanguage: "he-IL",
    author: { "@type": "Organization", name: "BloomCare Kids" },
    publisher: { "@type": "Organization", name: "BloomCare Kids" },
    mainEntityOfPage: `https://haatar-misin.vercel.app/articles/${article.slug}`,
  };

  return (
    <main className="bg-creamCare px-5 py-16 md:px-8">
      <JsonLd data={schema} />
      <article className="mx-auto max-w-4xl rounded-[2.4rem] bg-white p-7 shadow-soft md:p-12">
        <BookHeart className="mb-6 text-coralCare" size={40} />
        <p className="text-sm font-black text-inkCare/45">{article.readTime}</p>
        <h1 className="mt-4 text-4xl font-black leading-tight text-inkCare md:text-6xl">{article.title}</h1>
        <p className="mt-6 text-xl leading-9 text-inkCare/72">{article.description}</p>
        <div className="mt-10 grid gap-8">
          {article.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-black text-inkCare">{section.title}</h2>
              <p className="mt-3 text-lg leading-9 text-inkCare/72">{section.text}</p>
            </section>
          ))}
        </div>
        <div className="mt-12 rounded-[1.8rem] bg-mintCare/55 p-6">
          <HeartHandshake className="mb-4 text-coralCare" size={30} />
          <h2 className="text-2xl font-black text-inkCare">חשוב לזכור</h2>
          <p className="mt-3 leading-8 text-inkCare/72">
            התוכן באתר אינו ייעוץ רפואי. בכל שאלה רפואית או לפני שימוש במוצר טיפולי יש להתייעץ עם גורם רפואי מוסמך.
          </p>
        </div>
        <Link href="/articles" className="soft-focus mt-10 inline-flex items-center gap-2 rounded-full bg-coralCare px-7 py-4 font-black text-white transition hover:bg-inkCare">
          חזרה למדריכים
          <ArrowLeft size={18} />
        </Link>
      </article>
    </main>
  );
}
