import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, HeartHandshake, HelpCircle, SearchCheck, ShieldCheck } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { LegalNotice } from "@/components/LegalNotice";
import { ProductCard } from "@/components/ProductCard";
import { faqs } from "@/data/faq";
import { featuredProducts } from "@/data/products";
import { getSeoLandingPage, seoLandingPages } from "@/data/seoPages";

type SeoPageProps = {
  params: Promise<{ slug: string }>;
};

const pageFaqs = [
  {
    question: "איך לבחור מוצר רפואי לילד בלי להלחיץ אותו?",
    answer: "כדאי לבדוק לא רק התאמה רפואית, אלא גם מראה, תחושה, נוחות והאם הילד ירגיש בטוח יותר להשתמש בו.",
  },
  {
    question: "האם BloomCare מחליף ייעוץ רפואי?",
    answer: "לא. המידע באתר אינו ייעוץ רפואי. לפני שימוש במוצר רפואי או טיפולי יש להתייעץ עם גורם רפואי מוסמך.",
  },
  {
    question: "למה העיצוב חשוב בציוד רפואי לילדים?",
    answer: "ילדים מגיבים לרעש, צבע, צורה ומגע. עיצוב ידידותי יכול להפחית פחד ומבוכה ולעזור לשיתוף פעולה רגוע יותר.",
  },
];

export function generateStaticParams() {
  return seoLandingPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: SeoPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoLandingPage(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
    keywords: [page.keyword, "BloomCare", "ציוד רפואי לילדים", "ציוד שיקומי לילדים", "ציוד רפואי לילדים בישראל"],
    openGraph: {
      title: page.title,
      description: page.description,
      url: `/seo/${page.slug}`,
      locale: "he_IL",
      type: "article",
    },
  };
}

export default async function SeoLandingPage({ params }: SeoPageProps) {
  const { slug } = await params;
  const page = getSeoLandingPage(slug);

  if (!page) {
    notFound();
  }

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: page.title,
      description: page.description,
      inLanguage: "he-IL",
      about: page.keyword,
      author: { "@type": "Organization", name: "BloomCare" },
      publisher: { "@type": "Organization", name: "BloomCare" },
      mainEntityOfPage: `https://haatar-misin.vercel.app/seo/${page.slug}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: pageFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  return (
    <main className="bg-creamCare">
      <JsonLd data={schema} />
      <article>
        <section className="relative overflow-hidden px-5 py-20 md:px-8">
          <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-peachCare/70 blur-3xl" />
          <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-skyCare/55 blur-3xl" />
          <div className="relative mx-auto max-w-5xl rounded-[2.4rem] bg-white/88 p-8 shadow-soft md:p-12">
            <SearchCheck className="mb-6 text-coralCare" size={38} />
            <p className="text-sm font-black text-inkCare/45">{page.keyword}</p>
            <h1 className="mt-4 text-4xl font-black leading-tight text-inkCare md:text-6xl">{page.title}</h1>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-inkCare/72">{page.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/categories" className="soft-focus inline-flex items-center gap-2 rounded-full bg-coralCare px-7 py-4 font-black text-white shadow-soft transition hover:bg-inkCare">
                לראות מוצרים
                <ArrowLeft size={18} />
              </Link>
              <Link href="/articles" className="soft-focus rounded-full bg-creamCare px-7 py-4 font-black text-inkCare transition hover:bg-mintCare">
                מדריכי הורים
              </Link>
            </div>
          </div>
        </section>

        <section className="px-5 pb-16 md:px-8">
          <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
            {page.sections.map((section) => (
              <section key={section.title} className="rounded-soft bg-white p-7 shadow-soft">
                <Check className="mb-5 text-coralCare" size={28} />
                <h2 className="text-2xl font-black text-inkCare">{section.title}</h2>
                <p className="mt-4 text-lg leading-8 text-inkCare/72">{section.text}</p>
              </section>
            ))}
          </div>
        </section>

        <section className="bg-white px-5 py-16 md:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-black text-inkCare md:text-5xl">מה חשוב לבדוק לפני שבוחרים {page.keyword}?</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                ["התאמה רפואית", "כל החלטה רפואית חייבת לעבור דרך גורם מוסמך והוראות יצרן."],
                ["תחושת הילד", "האם המוצר מפחית פחד, מבוכה או התנגדות בזמן שימוש?"],
                ["שגרה בבית", "האם ההורה יכול להשתמש במוצר בצורה ברורה, רגועה ונוחה לאורך זמן?"],
              ].map(([title, text]) => (
                <div key={title} className="rounded-[1.5rem] bg-creamCare p-6">
                  <ShieldCheck className="mb-4 text-coralCare" size={26} />
                  <h3 className="text-xl font-black text-inkCare">{title}</h3>
                  <p className="mt-3 leading-7 text-inkCare/70">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-creamCare px-5 py-16 md:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-black text-inkCare md:text-5xl">מוצרים שיכולים להתאים להמשך בדיקה</h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-inkCare/70">
              אלה כרטיסי מוצר לדוגמה. בהמשך יוחלפו בתמונות אמיתיות, מידע מלא, מלאי ומחירים מעודכנים.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-16 md:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-black text-inkCare md:text-5xl">שאלות נפוצות על {page.keyword}</h2>
            <div className="mt-8 grid gap-4">
              {[...pageFaqs, ...faqs.slice(0, 2)].map((faq) => (
                <section key={faq.question} className="rounded-soft bg-creamCare p-6">
                  <HelpCircle className="mb-4 text-coralCare" size={24} />
                  <h3 className="text-xl font-black text-inkCare">{faq.question}</h3>
                  <p className="mt-3 leading-8 text-inkCare/72">{faq.answer}</p>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-mintCare/40 px-5 py-16 md:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <HeartHandshake className="mx-auto mb-5 text-coralCare" size={42} />
            <h2 className="text-3xl font-black leading-tight text-inkCare md:text-5xl">
              למה שהורה יבטח בנו ברגע שקשור לילד שלו?
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-inkCare/72">
              כי BloomCare נבנה סביב רגישות, שקיפות ואחריות. אנחנו לא מחליפים ייעוץ רפואי, אלא עוזרים להורים למצוא מוצרים וחוויות שמרגישים אנושיים יותר.
            </p>
          </div>
        </section>
      </article>
      <LegalNotice />
    </main>
  );
}
