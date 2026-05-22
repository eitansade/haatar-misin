import Link from "next/link";
import {
  ArrowLeft,
  Baby,
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
import { categories, featuredProducts, lovedByParents } from "@/data/products";
import { faqs } from "@/data/faq";

const trustSignals = ["נבחר בקפידה", "שירות אישי", "גישה רגישה לילדים", "מותאם להורים בישראל", "מחשבה רגשית לפני הכול"];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BloomCare Kids",
    url: "https://haatar-misin.vercel.app",
    logo: "https://haatar-misin.vercel.app/icon.svg",
    description: "מותג ישראלי לציוד רפואי ידידותי לילדים, עם דגש על רוגע, ביטחון וחוויה רגשית להורים ולילדים.",
    areaServed: "Israel",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "BloomCare Kids",
    url: "https://haatar-misin.vercel.app",
    inLanguage: "he-IL",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.slice(0, 4).map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "מוצרים נבחרים של BloomCare Kids",
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

      <section className="relative isolate overflow-hidden bg-creamCare">
        <div className="absolute -right-24 top-16 h-96 w-96 rounded-full bg-peachCare/75 blur-3xl" />
        <div className="absolute -left-24 top-28 h-96 w-96 rounded-full bg-skyCare/60 blur-3xl" />
        <div className="absolute bottom-10 right-1/3 h-72 w-72 rounded-full bg-mintCare/55 blur-3xl" />

        <div className="mx-auto grid min-h-[calc(100vh-82px)] max-w-7xl items-center gap-14 px-5 py-16 md:px-8 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="relative z-10 fade-up">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-3 text-sm font-extrabold text-inkCare shadow-sm">
              <Leaf size={16} className="text-coralCare" />
              BloomCare Kids | לגדול בביטחון, להחלים ברוגע
            </p>
            <h1 className="max-w-4xl text-5xl font-black leading-[1.02] text-inkCare md:text-7xl">
              טיפול רפואי יכול להרגיש אחרת.
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-inkCare/75">
              ציוד רפואי לילדים שעוצב כדי להפחית פחדים, מבוכה ולתת לילדים יותר ביטחון.
            </p>
            <p className="mt-5 max-w-2xl text-lg font-bold leading-8 text-inkCare/62">
              לא עוד חנות ציוד רפואי קרה. בית רגשי להורים שרוצים שהילד שלהם ירגיש מובן, מוגן ורגוע גם ברגעים רפואיים.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["פחות פחד", "יותר רוגע", "יותר ביטחון", "תחושה של בית"].map((item) => (
                <span key={item} className="rounded-full bg-white/85 px-4 py-2 text-sm font-black text-inkCare shadow-sm">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/categories"
                className="soft-focus inline-flex items-center gap-2 rounded-full bg-coralCare px-7 py-4 text-base font-black text-white shadow-soft transition hover:-translate-y-1 hover:bg-inkCare"
              >
                לגלות את המוצרים
                <ArrowLeft size={19} />
              </Link>
              <Link
                href="/our-story"
                className="soft-focus inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-base font-black text-inkCare shadow-sm transition hover:bg-mintCare"
              >
                הסיפור שלנו
              </Link>
            </div>
          </div>

          <div className="relative z-10 fade-up">
            <EmotionalPhotoFrame
              title="ילד שמרגיש שמישהו חשב עליו, לא רק על הטיפול."
              caption="כאן תעלה בהמשך תמונה אמיתית: הורה וילד בבית, אור טבעי, מוצר ידידותי ורגע שמרגיש רגוע יותר."
              tone="peach"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-5">
          {trustSignals.map((signal) => (
            <article key={signal} className="rounded-[1.5rem] bg-creamCare p-5 text-center shadow-sm">
              <ShieldCheck className="mx-auto mb-3 text-coralCare" size={24} />
              <h2 className="text-lg font-black text-inkCare">{signal}</h2>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-creamCare px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <EmotionalPhotoFrame
            title="צילום ביתי חם: ילד, הורה ורגע טיפול רגוע"
            caption="לא רק מוצר על מדף. סצנה אמיתית מחיים של משפחה ישראלית."
            tone="blue"
          />
          <div>
            <SectionHeader
              eyebrow="הרגש לפני הקטלוג"
              title="לא רק ציוד רפואי. גם רוגע."
              text="אנחנו יודעים כמה קשה לראות ילד מפחד מטיפול רפואי. כמה קשה לראות אותו מתבייש בקיבוע. או לחוץ רק מלראות אינהלציה."
            />
            <p className="mt-6 text-xl font-black leading-9 text-inkCare">
              בדיוק בגלל זה יצרנו את BloomCare Kids כדי להפוך רגעים רפואיים לקצת יותר נעימים, רגועים ואנושיים.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-peachCare/45 px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="למה זה קיים"
            title="ילדים לא אמורים לפחד מהציוד שאמור לעזור להם."
            text="יש ילדים שמפחדים ממדחום. יש ילדים שבוכים רק מלראות אינהלציה. יש ילדים שמתביישים בקיבוע שלהם בבית הספר. והאמת? לפעמים הדבר שהכי כואב זה בכלל לא הטיפול, אלא איך שהילד מרגיש בגללו."
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ["פחד", "כשהמוצר נראה קר ומבוגר, הילד נלחץ עוד לפני שהטיפול מתחיל."],
              ["מבוכה", "קיבוע, מסכה או אביזר תמיכה יכולים לגרום לילד להרגיש שונה מול חברים."],
              ["חוסר אונים", "הורה שרואה ילד מתנגד לטיפול צריך גם פתרון מעשי וגם חוויה רגשית טובה יותר."],
            ].map(([title, text]) => (
              <article key={title} className="rounded-soft bg-white p-7 shadow-soft">
                <Heart className="mb-5 text-coralCare" size={28} />
                <h2 className="text-2xl font-black text-inkCare">{title}</h2>
                <p className="mt-3 text-lg leading-8 text-inkCare/70">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeader
              eyebrow="אמון רגשי"
              title="מותג שהורים יכולים לסמוך עליו."
              text="אנחנו בוחרים כל מוצר מתוך מחשבה אמיתית על הילדים וההורים שמשתמשים בו. לא רק לפי איך הוא נראה, אלא לפי איך הוא גורם לילד להרגיש."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["בטיחות לפני הכול", "המידע מוצג בזהירות, עם הפניה קבועה לגורם רפואי מוסמך."],
                ["שפה אנושית", "האתר מדבר להורים כמו בני אדם, לא כמו קטלוג רפואי."],
                ["מחשבה על בית ספר", "אנחנו מתייחסים גם למבוכה חברתית ולביטחון העצמי של הילד."],
                ["מוכן למסחר אמיתי", "הארכיטקטורה מוכנה להמשך מוצרים, תשלום, משלוחים ושירות."],
              ].map(([title, text]) => (
                <article key={title} className="rounded-[1.5rem] bg-creamCare p-5 shadow-sm">
                  <Check className="mb-4 text-coralCare" size={22} />
                  <h3 className="text-xl font-black text-inkCare">{title}</h3>
                  <p className="mt-2 leading-7 text-inkCare/70">{text}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="rounded-[2.2rem] bg-gradient-to-br from-mintCare via-creamCare to-skyCare p-8 shadow-soft">
            <Home className="mb-6 text-coralCare" size={40} />
            <p className="text-3xl font-black leading-tight text-inkCare">
              האתר צריך לגרום לאמא להרגיש: “סוף סוף מישהו מבין מה הילד שלי מרגיש.”
            </p>
            <p className="mt-5 text-lg font-bold leading-8 text-inkCare/68">
              זו הסיבה שכל צבע, כותרת, כרטיס מוצר ודף מידע נבנים סביב שאלה אחת: האם זה עוזר להורה לבטוח בנו ברגע רגיש?
            </p>
          </div>
        </div>
      </section>

      <section className="bg-mintCare/35 px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="נבחר בקפידה לילדים"
            title="כל מוצר מתחיל בשאלה אחת: איך הילד ירגיש?"
            text="אנחנו בודקים האם זה נראה פחות מפחיד, האם זה נעים יותר, האם זה יכול לעזור לילד להרגיש בטוח יותר, והאם זה יכול להפוך רגע קשה לקצת יותר קל."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              ["פחות מפחיד", "עיצוב שמוריד את תחושת האיום לפני הטיפול."],
              ["יותר נעים", "מוצרים שמרגישים רכים, ביתיים וידידותיים יותר."],
              ["יותר ביטחון", "פתרונות שמכבדים את הילד גם מול חברים ומשפחה."],
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
          <SectionHeader eyebrow="הקטגוריות שלנו" title="מוצרים שנבחרים לפי צורך רפואי וגם לפי תחושת הילד" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {categories.slice(0, 6).map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/categories" className="soft-focus inline-flex rounded-full bg-inkCare px-7 py-4 font-black text-white transition hover:bg-coralCare">
              לראות את כל הקטגוריות
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="מוצרים נבחרים" title="מקום מסודר לתמונות מוצר אמיתיות בהמשך" />
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
            eyebrow="לפעמים שינוי קטן עושה הבדל גדול"
            title="כי ילדים זוכרים איך דברים גורמים להם להרגיש."
            text="לפעמים צבע אחר. ציור אהוב. או עיצוב ידידותי יותר יכולים להפוך פחד לשיתוף פעולה."
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <article className="rounded-[2rem] bg-white p-7 shadow-soft">
              <p className="text-sm font-black text-inkCare/45">לפני</p>
              <h3 className="mt-3 text-3xl font-black text-inkCare">מוצר קר, ילד שנרתע, הורה שמנסה לשכנע.</h3>
              <p className="mt-5 text-lg leading-8 text-inkCare/70">הטיפול מתחיל ממאבק, והילד מרגיש שהוא מתמודד עם משהו זר ומפחיד.</p>
            </article>
            <article className="rounded-[2rem] bg-mintCare p-7 shadow-soft">
              <p className="text-sm font-black text-inkCare/55">אחרי</p>
              <h3 className="mt-3 text-3xl font-black text-inkCare">מוצר נעים, רגע רגוע יותר, ילד שמרגיש שרואים אותו.</h3>
              <p className="mt-5 text-lg leading-8 text-inkCare/75">החוויה עדיין רפואית, אבל היא יכולה להיות אנושית, רכה ומכבדת יותר.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="הכי אהובים על הורים" title="מוצרים שמתחילים מהרגע הרגשי של הילד" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {lovedByParents.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-peachCare/55 px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeader
              eyebrow="להורים"
              title="כי גם לילדים מגיע להרגיש בטוחים."
              text="ציוד רפואי לא חייב להרגיש קר, מפחיד ומנוכר. עם צבעים רגועים, עיצובים נעימים וחוויה שמותאמת לילדים, אפשר להפוך פחד קטן לרוגע גדול."
            />
            <Link href="/parents" className="soft-focus mt-8 inline-flex items-center gap-2 rounded-full bg-inkCare px-7 py-4 text-base font-black text-white transition hover:bg-coralCare">
              לקרוא להורים
              <ArrowLeft size={18} />
            </Link>
          </div>
          <div className="rounded-[2rem] bg-white p-8 text-center shadow-soft">
            <Baby className="mx-auto mb-5 text-coralCare" size={44} />
            <p className="text-3xl font-black leading-tight text-inkCare">
              אנחנו כאן כדי להזכיר לילדים שהם לא צריכים להתבייש, ולהזכיר להורים שהם לא לבד.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="הורים מספרים" title="עדויות אמיתיות יעלו כאן בהמשך" align="center" />
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
