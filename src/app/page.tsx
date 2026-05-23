import Link from "next/link";
import {
  ArrowLeft,
  Baby,
  BookHeart,
  Check,
  Heart,
  HeartHandshake,
  Home,
  Leaf,
  MessageCircleHeart,
  Quote,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { CategoryCard } from "@/components/CategoryCard";
import { EmotionalPhotoFrame } from "@/components/EmotionalPhotoFrame";
import { JsonLd } from "@/components/JsonLd";
import { LegalNotice } from "@/components/LegalNotice";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeader } from "@/components/SectionHeader";
import { articles } from "@/data/articles";
import { faqs } from "@/data/faq";
import { categories, featuredProducts, lovedByParents } from "@/data/products";
import { seoLandingPages } from "@/data/seoPages";

const trustPoints = [
  ["נבחר בקפידה", "כל מוצר נבחן דרך איכות, נוחות והתחושה שהוא יוצר אצל ילד."],
  ["גישה רגישה לילדים", "אנחנו מתייחסים לפחד, למבוכה ולרגעים הקטנים שאף מפרט טכני לא מספר."],
  ["מוצרים עם מחשבה רגשית", "צבע, חומר, צורה ושפה נבחרים כדי להפוך טיפול לפחות מאיים."],
  ["חוויית טיפול רגועה יותר", "המטרה היא לעזור לילדים לשתף פעולה בלי להרגיש שמכריחים אותם."],
  ["מותאם למשפחות בישראל", "עברית מלאה, RTL, שפה אנושית והבנה של הורה ישראלי שקונה אונליין."],
  ["שירות אישי ואנושי", "בעתיד האתר יחובר לוואטסאפ, המלצות ותמיכה שמרגישה קרובה וברורה."],
];

const entryLinks = [
  { href: "/our-story", label: "מי אנחנו" },
  { href: "/categories", label: "פתרונות ומוצרים" },
  { href: "/seo", label: "מרכז מידע רפואי" },
  { href: "/articles", label: "מדריכי הורים" },
  { href: "/terms", label: "בטיחות ותקנון" },
  { href: "/contact", label: "צור קשר" },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BloomCare",
    url: "https://haatar-misin.vercel.app",
    logo: "https://haatar-misin.vercel.app/icon.svg",
    description:
      "BloomCare הוא מותג ישראלי רגשי לציוד רפואי ושיקומי ידידותי לילדים ולמשפחות, עם דגש על רוגע, ביטחון וחוויה אנושית.",
    areaServed: "Israel",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "BloomCare",
    url: "https://haatar-misin.vercel.app",
    inLanguage: "he-IL",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.slice(0, 5).map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "מוצרים נבחרים של BloomCare",
    itemListElement: featuredProducts.map((product, index) => ({
      "@type": "Product",
      position: index + 1,
      name: product.title,
      description: product.description,
      offers: {
        "@type": "Offer",
        priceCurrency: "ILS",
        availability: "https://schema.org/PreOrder",
      },
    })),
  },
];

export default function HomePage() {
  return (
    <main>
      <JsonLd data={schema} />

      <section className="relative isolate min-h-[calc(100vh-82px)] overflow-hidden bg-inkCare text-white">
        <img
          src="https://images.pexels.com/photos/29973436/pexels-photo-29973436.jpeg?auto=compress&cs=tinysrgb&w=1800"
          alt="הורה וילד ברגע ביתי רגוע עם אור טבעי"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-inkCare/88 via-inkCare/55 to-inkCare/35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(142,205,242,0.26),transparent_28rem),radial-gradient(circle_at_20%_80%,rgba(255,209,190,0.22),transparent_24rem)]" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-82px)] max-w-7xl px-5 py-10 md:px-8">
          <aside className="hidden w-64 shrink-0 flex-col justify-center border-l border-white/18 pl-8 text-left lg:flex">
            <p className="mb-8 text-sm font-black uppercase tracking-[0.35em] text-white/55">BloomCare</p>
            <nav className="grid gap-5 text-lg font-light text-white/68">
              {entryLinks.map((item) => (
                <Link key={item.href} href={item.href} className="soft-focus transition hover:translate-x-1 hover:text-white">
                  {item.label}
                </Link>
              ))}
            </nav>
          </aside>

          <div className="flex flex-1 items-center justify-end">
            <div className="max-w-3xl py-16 text-right">
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-5 py-3 text-sm font-extrabold text-white shadow-sm backdrop-blur">
                <Leaf size={16} className="text-peachCare" />
                מותג טיפול רגשי-רפואי למשפחות בישראל
              </p>
              <h1 className="text-5xl font-black leading-[1.02] text-white md:text-7xl">
                טיפול רפואי יכול להרגיש אחרת.
              </h1>
              <p className="mt-7 max-w-2xl text-xl leading-9 text-white/82 md:text-2xl md:leading-10">
                ציוד רפואי ושיקומי לילדים שנבחר כדי להפחית פחד, לחזק ביטחון ולתת להורים תחושה שיש על מי לסמוך.
              </p>
              <div className="mt-9 flex flex-wrap justify-end gap-3">
                <Link
                  href="/categories"
                  className="soft-focus inline-flex items-center gap-2 rounded-full bg-coralCare px-7 py-4 text-base font-black text-white shadow-soft transition hover:-translate-y-1 hover:bg-white hover:text-inkCare"
                >
                  לגלות את המוצרים
                  <ArrowLeft size={19} />
                </Link>
                <Link
                  href="/our-story"
                  className="soft-focus inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/12 px-7 py-4 text-base font-black text-white backdrop-blur transition hover:bg-white hover:text-inkCare"
                >
                  הסיפור שלנו
                </Link>
              </div>
              <div className="mt-12 grid gap-3 text-sm font-bold text-white/72 sm:grid-cols-3">
                {['גישה רגישה לילדים', 'בחירה קפדנית', 'מותאם למשפחות בישראל'].map((item) => (
                  <span key={item} className="rounded-2xl border border-white/14 bg-white/10 px-4 py-3 text-center backdrop-blur">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          <EmotionalPhotoFrame
            title="צילום ביתי חם: לא בית חולים, לא סטודיו, רגע אמיתי בבית."
            caption="ילד רגוע עם מוצר ידידותי, הורה לידו, תאורה טבעית ותחושת ביטחון."
            tone="mint"
          />
          <div>
            <SectionHeader
              eyebrow="שכבת האמון הרגשית"
              title="אנחנו יודעים איך זה מרגיש."
              text="לראות ילד מפחד מטיפול רפואי זה רגע שלא שוכחים. לפעמים זו רק אינהלציה. לפעמים זה רק מדחום. אבל בשביל ילד זה עולם שלם של פחד, מבוכה וחוסר ביטחון."
            />
            <p className="mt-6 text-2xl font-black leading-10 text-inkCare">
              BloomCare נוצר כדי להפוך את הרגעים האלה לקצת יותר רגועים. קצת יותר נעימים. וקצת פחות מפחידים.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-creamCare px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="למה לסמוך עלינו"
            title="למה הורים סומכים על BloomCare"
            text="הורה לא מחפש רק מוצר. הוא מחפש סימנים של אחריות, הבנה, רגישות ושירות אנושי. לכן כל חלק באתר נבנה כדי לענות על השאלה: למה שאסמוך עליכם עם משהו שקשור לילד שלי?"
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {trustPoints.map(([title, text]) => (
              <article key={title} className="rounded-soft bg-white p-7 shadow-soft transition hover:-translate-y-1">
                <ShieldCheck className="mb-5 text-coralCare" size={30} />
                <h2 className="text-2xl font-black text-inkCare">{title}</h2>
                <p className="mt-3 text-lg leading-8 text-inkCare/70">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-peachCare/45 px-5 py-20 md:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <Heart className="mx-auto mb-6 text-coralCare" size={42} />
          <h2 className="text-4xl font-black leading-tight text-inkCare md:text-6xl">ציוד רפואי עם גישה אחרת</h2>
          <p className="mx-auto mt-7 max-w-3xl text-xl leading-10 text-inkCare/75">
            ב-BloomCare אנחנו מאמינים שגם רגעים רפואיים יכולים להרגיש נעימים, רגועים ופחות מפחידים. לכן אנחנו בוחרים מוצרים שמיועדים לא רק לטפל, אלא גם לעזור לילדים להרגיש בטוחים יותר.
          </p>
        </div>
      </section>

      <section className="bg-mintCare/35 px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="בחירה רגשית לפני קטלוג"
            title="נבחר מתוך מחשבה אמיתית על ילדים"
            text="כל מוצר באתר נבחר לא רק לפי איכות, אלא לפי איך ילד ירגיש כשהוא ישתמש בו. האם הוא ירגיש רגוע יותר? בטוח יותר? פחות מובך? פחות מפוחד? אלה הדברים שבאמת חשובים לנו."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              ["פחות מפחיד", "מוצרים שלא נראים כמו ציוד בית חולים קר."],
              ["יותר אנושי", "שפה, צבע וחוויה שמרגישים קרובים יותר לבית."],
              ["יותר ביטחון", "עיצוב שעוזר לילד להרגיש שהוא לא צריך להסתיר את עצמו."],
            ].map(([title, text]) => (
              <article key={title} className="rounded-soft bg-white p-7 text-center shadow-soft">
                <Sparkles className="mx-auto mb-5 text-coralCare" size={32} />
                <h3 className="text-2xl font-black text-inkCare">{title}</h3>
                <p className="mt-3 leading-7 text-inkCare/70">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-creamCare px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="הקטגוריות שלנו"
            title="כי איך שילד מרגיש, באמת משנה"
            text="לפעמים צבע רגוע, ציור מוכר או עיצוב ידידותי יותר יכולים להפוך פחד קטן לחוויה הרבה יותר רגועה. ילדים צריכים להרגיש ילדים גם כשהם צריכים טיפול רפואי."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {categories.slice(0, 6).map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="מוצרים נבחרים" title="מוצרים לדוגמה עם מקום לתמונות אמיתיות" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-creamCare px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="מרכז תוכן אורגני"
            title="מדריכי הורים שנועדו לבנות אמון וגם להביא טראפיק מגוגל"
            text="SEO אמיתי לא מגיע מדפים ריקים. הוא מגיע מתוכן שעוזר להורה ברגע שהוא מחפש תשובה, לפני שהוא מוכן לקנות."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {articles.slice(0, 5).map((article) => (
              <Link key={article.slug} href={`/articles/${article.slug}`} className="soft-focus rounded-soft bg-white p-7 shadow-soft transition hover:-translate-y-1">
                <BookHeart className="mb-5 text-coralCare" size={30} />
                <p className="text-sm font-black text-inkCare/45">{article.readTime}</p>
                <h3 className="mt-3 text-2xl font-black leading-tight text-inkCare">{article.title}</h3>
                <p className="mt-4 leading-7 text-inkCare/70">{article.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="עמודי SEO"
            title="עמודי נחיתה לביטויי חיפוש חשובים בישראל"
            text="כל עמוד נבנה סביב כוונת חיפוש אמיתית: אינהלציה, קיבועים, ציוד שיקומי, ציוד רפואי לילדים וצרכים מיוחדים."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {seoLandingPages.slice(0, 9).map((page) => (
              <Link key={page.slug} href={`/seo/${page.slug}`} className="soft-focus rounded-[1.5rem] bg-creamCare p-5 shadow-sm transition hover:-translate-y-1 hover:bg-mintCare/45">
                <p className="text-sm font-black text-coralCare">{page.keyword}</p>
                <h3 className="mt-2 text-xl font-black text-inkCare">{page.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-peachCare/55 px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeader
              eyebrow="להורים שמחפשים יותר ממוצר"
              title="אתם לא מחפשים רק ציוד רפואי."
              text="אתם מחפשים רוגע, ביטחון, אמון, גישה אנושית ומקום שאפשר לסמוך עליו. וזה בדיוק מה שאנחנו מנסים לבנות."
            />
            <ul className="mt-6 grid gap-3 text-lg font-black text-inkCare/75 sm:grid-cols-2">
              {["נוחות", "רוגע", "חוויית שימוש", "עיצוב ידידותי", "ביטחון להורים", "שירות אנושי"].map((item) => (
                <li key={item} className="flex items-center gap-2 rounded-full bg-white/75 px-4 py-3">
                  <Check className="text-coralCare" size={18} />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-2xl font-black leading-10 text-inkCare">
              המטרה שלנו פשוטה: לעזור לילדים להרגיש קצת יותר בטוחים, ולהורים להרגיש שיש על מי לסמוך.
            </p>
          </div>
          <div className="rounded-[2rem] bg-white p-8 text-center shadow-soft">
            <Baby className="mx-auto mb-5 text-coralCare" size={44} />
            <p className="text-3xl font-black leading-tight text-inkCare">
              מותג רגשי, מודרני ואמין למשפחות שרוצות להפוך טיפול רפואי לפחות מפחיד.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Featured by parents" title="מקום לעדויות אמיתיות של הורים" align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ["מאיה, תל אביב", "הילד שלי הסכים לנסות כי זה נראה פחות מפחיד ויותר שלו."],
              ["רותם, חיפה", "סוף סוף אתר שמדבר על מה שהילד מרגיש, לא רק על המפרט."],
              ["דנה, ראשון לציון", "החוויה בבית הייתה רגועה יותר, וגם אני הרגשתי פחות לבד."],
            ].map(([name, quote]) => (
              <article key={name} className="rounded-soft bg-creamCare p-7 shadow-sm">
                <Quote className="mb-5 text-coralCare" size={28} />
                <p className="text-xl font-black leading-8 text-inkCare">“{quote}”</p>
                <p className="mt-5 text-sm font-bold text-inkCare/55">{name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-inkCare px-5 py-20 text-white md:px-8">
        <div className="mx-auto grid max-w-5xl gap-8 text-center">
          <HeartHandshake className="mx-auto text-peachCare" size={44} />
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-sm font-extrabold text-peachCare">עדכונים להורים</p>
            <h2 className="text-3xl font-black leading-tight text-white md:text-5xl">
              לקבל מוצרים חדשים, מדריכי הורים ועדכוני BloomCare
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/70">
              בהמשך נחבר כאן הרשמה אמיתית, קופון הזמנה ראשונה והמלצות לפי גיל וצורך.
            </p>
          </div>
          <form className="mx-auto flex w-full max-w-2xl flex-col gap-3 rounded-[2rem] bg-white p-2 shadow-soft sm:flex-row sm:rounded-full">
            <input className="min-h-12 flex-1 rounded-full border-0 bg-transparent px-5 text-right text-inkCare outline-none" placeholder="המייל שלך" type="email" />
            <button className="soft-focus min-h-12 rounded-full bg-coralCare px-7 font-black text-white transition hover:bg-inkCare" type="button">
              עדכנו אותי
            </button>
          </form>
        </div>
      </section>

      <section className="bg-skyCare/35 px-5 py-20 md:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeader eyebrow="שאלות נפוצות" title="מידע מהיר להורים" align="center" />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {faqs.slice(0, 4).map((faq) => (
              <article key={faq.question} className="rounded-soft bg-white p-6 shadow-sm">
                <MessageCircleHeart className="mb-4 text-coralCare" size={24} />
                <h3 className="text-xl font-black text-inkCare">{faq.question}</h3>
                <p className="mt-3 leading-7 text-inkCare/70">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <LegalNotice />

      <section className="bg-gradient-to-br from-skyCare via-creamCare to-peachCare px-5 py-20 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-black text-coralCare">הצעד הבא</p>
          <h2 className="text-4xl font-black leading-tight text-inkCare md:text-6xl">
            לעזור לילדים להרגיש בטוחים יותר
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-9 text-inkCare/75">
            כי גם טיפול רפואי יכול להגיע עם צבע, רוגע וחיוך קטן.
          </p>
          <Link href="/categories" className="soft-focus mt-9 inline-flex items-center gap-2 rounded-full bg-coralCare px-8 py-4 text-lg font-black text-white shadow-soft transition hover:-translate-y-1 hover:bg-inkCare">
            למוצרים
            <ArrowLeft size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
