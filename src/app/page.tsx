import Link from "next/link";
import {
  ArrowLeft,
  Baby,
  Check,
  Heart,
  HeartHandshake,
  MessageCircleHeart,
  Palette,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Video,
} from "lucide-react";
import { CategoryCard } from "@/components/CategoryCard";
import { LegalNotice } from "@/components/LegalNotice";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeader } from "@/components/SectionHeader";
import { SupplierLanguagePanel } from "@/components/SupplierLanguagePanel";
import { categories, featuredProducts, lovedByParents } from "@/data/products";
import { faqs } from "@/data/faq";

const heroPromises = ["יותר רוגע", "יותר ביטחון", "יותר תקווה"];

export default function HomePage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-creamCare">
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-skyCare/60 blur-3xl" />
        <div className="absolute -right-16 bottom-16 h-80 w-80 rounded-full bg-peachCare/80 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-mintCare/50 blur-3xl" />

        <div className="mx-auto grid min-h-[calc(100vh-82px)] max-w-7xl items-center gap-12 px-5 py-12 md:px-8 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="relative z-10 fade-up">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-extrabold text-inkCare shadow-sm">
              <Heart size={16} className="text-coralCare" />
              BloomCare Kids | טיפול רגשי-פדיאטרי עם לב
            </p>
            <h1 className="max-w-4xl text-5xl font-black leading-[1.02] text-inkCare md:text-7xl">
              טיפול רפואי יכול להרגיש אחרת.
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-inkCare/75">
              מוצרים וחוויות טיפול לילדים שעוצבו כדי להפחית פחדים, להעניק רוגע ולעזור לילדים
              להרגיש בטוחים יותר בזמן טיפול או שיקום.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {heroPromises.map((item) => (
                <span key={item} className="rounded-full bg-white/85 px-4 py-2 text-sm font-black text-inkCare shadow-sm">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
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
            <p className="mt-8 max-w-xl text-base font-bold leading-7 text-inkCare/60">
              לא אתר רפואי קר ולא חנות גנרית. BloomCare Kids הוא מותג ישראלי חם, נקי ומודרני
              להורים שרוצים שהילד שלהם ירגיש מובן, רגוע ובטוח.
            </p>
          </div>

          <div className="relative z-10 fade-up">
            <div className="rounded-[2.7rem] bg-white p-4 shadow-soft">
              <div className="relative min-h-[520px] overflow-hidden rounded-[2.2rem] bg-gradient-to-br from-skyCare via-creamCare to-peachCare p-6">
                <div className="absolute inset-x-8 top-8 rounded-[1.8rem] bg-white/72 p-5 shadow-sm backdrop-blur">
                  <p className="text-sm font-black text-coralCare">רגע של רוגע, לא רק טיפול</p>
                  <p className="mt-2 text-2xl font-black leading-tight text-inkCare">
                    ילד שמרגיש שמישהו חשב עליו, על הצמיחה שלו ועל הביטחון שלו.
                  </p>
                </div>

                <div className="absolute bottom-8 right-7 w-[78%] rounded-[2rem] bg-white p-5 shadow-soft">
                  <div className="grid aspect-[4/3] place-items-center rounded-[1.5rem] bg-creamCare text-center">
                    <span className="rounded-full bg-white px-5 py-3 text-base font-black text-inkCare shadow-sm">
                      תמונה תעלה בקרוב
                    </span>
                  </div>
                  <div className="mt-5 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-black text-inkCare/45">מוצר לדוגמה</p>
                      <h2 className="text-xl font-black text-inkCare">מוצר טיפול שמרגיש ידידותי</h2>
                    </div>
                    <span className="rounded-full bg-mintCare px-4 py-2 text-sm font-black text-inkCare">
                      יותר רגוע
                    </span>
                  </div>
                </div>

                <div className="absolute left-5 top-48 rounded-[1.4rem] bg-inkCare px-5 py-4 text-white shadow-soft">
                  <p className="text-3xl font-black">2-14</p>
                  <p className="text-sm font-bold text-white/70">גילאי יעד</p>
                </div>
                <div className="absolute left-7 bottom-28 rounded-[1.4rem] bg-coralCare px-5 py-4 text-white shadow-soft">
                  <Star size={22} />
                  <p className="mt-2 text-sm font-black">נבחר לפי תחושת הילד</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {[
            ["לא רפואי קר", "עיצוב שמרגיש ביתי, רגוע ואנושי."],
            ["לא זול או גנרי", "מותג נקי, ישראלי, מסודר ומוכן לצמוח."],
            ["לא ילדותי מדי", "רוך, צבע ותקווה עם תחושה פרימיום להורים."],
          ].map(([title, text]) => (
            <article key={title} className="rounded-soft bg-creamCare p-6 shadow-sm">
              <Check className="mb-5 text-coralCare" size={28} />
              <h2 className="text-2xl font-black text-inkCare">{title}</h2>
              <p className="mt-3 leading-7 text-inkCare/70">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <SupplierLanguagePanel />

      <section className="bg-peachCare/45 px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow="למה הקמנו את BloomCare Kids?"
            title="כי ילדים צריכים להרגיש בטוחים גם כשהם צריכים טיפול."
            text="יש ילדים שמפחדים ממדחום. יש ילדים שבוכים רק מלראות אינהלציה. יש ילדים שמסתירים את הקיבוע שלהם בבית ספר כדי שלא יצחקו עליהם. ויש הורים שמרגישים חסרי אונים מול זה."
          />
          <div className="rounded-[2rem] bg-white p-7 shadow-soft">
            <p className="text-2xl font-black leading-10 text-inkCare">
              במשך שנים ציוד רפואי לילדים נראה קר, שחור, מלחיץ ומבוגר. BloomCare Kids נולד כדי
              להפוך רגעים קשים לקצת יותר רכים, ולעזור לילדים להרגיש שהם יכולים לצמוח גם מתוך טיפול.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-mintCare/35 px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="נבחר בקפידה לילדים"
            title="כל מוצר מתחיל בשאלה אחת: איך הילד ירגיש?"
            text="לא רק איכות רפואית. גם חוויה רגשית: האם זה נראה פחות מפחיד, האם זה נעים יותר, האם זה עוזר לביטחון עצמי, והאם זה יכול להפוך רגע קשה לקצת יותר קל."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              ["בטיחות ואיכות", "עבודה עם יצרנים וספקים שנבחרים בקפידה."],
              ["חוויה רגשית", "צבע, ציור, חומר ועיצוב מתוך מחשבה אמיתית על ילדים."],
              ["שימוש יומיומי", "מוצרים שמרגישים נוחים, ברורים ופחות רפואיים."],
            ].map(([title, text]) => (
              <article key={title} className="rounded-soft bg-white p-7 text-center shadow-soft">
                <ShieldCheck className="mx-auto mb-5 text-coralCare" size={34} />
                <h3 className="text-2xl font-black text-inkCare">{title}</h3>
                <p className="mt-3 leading-7 text-inkCare/70">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow="מותג ישראלי להורים ישראלים"
            title="Apple + pediatric wellness + emotional healthcare."
            text="כשאמא נכנסת לאתר היא צריכה להרגיש: סוף סוף מישהו מבין מה הילד שלי מרגיש."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ["התחושה הנכונה", "חיבוק, ביטחון, רוגע, חמלה, צמיחה ותקווה."],
              ["מה לא עושים", "לא רפואי קר, לא זול סיני, לא ילדותי מדי ולא עמוס צבעים."],
              ["הקהל המרכזי", "הורים לילדים בגילאי 2-14, במיוחד אמהות מעורבות שקונות אונליין."],
              ["הערך האמיתי", "פחות פחד לילד, פחות כאב רגשי להורה ויותר ביטחון עצמי."],
            ].map(([title, text]) => (
              <article key={title} className="rounded-soft bg-creamCare p-6 shadow-sm">
                <Palette className="mb-5 text-coralCare" size={28} />
                <h3 className="text-2xl font-black text-inkCare">{title}</h3>
                <p className="mt-3 leading-7 text-inkCare/70">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-creamCare px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="הקטגוריות שלנו" title="מוצרי טיפול שילדים יכולים להרגיש איתם טוב יותר" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {categories.slice(0, 9).map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/categories"
              className="soft-focus inline-flex rounded-full bg-inkCare px-7 py-4 font-black text-white transition hover:bg-coralCare"
            >
              לראות את כל הקטגוריות
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="מוצרים לדוגמה" title="מקום מסודר לתמונות מוצר עתידיות" />
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
            eyebrow="לפני ואחרי החוויה"
            title="אנחנו לא מוכרים רק מוצר. אנחנו עוזרים לרגע להרגיש אחר."
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <article className="rounded-[2rem] bg-white p-7 shadow-soft">
              <p className="text-sm font-black text-inkCare/45">לפני</p>
              <h3 className="mt-3 text-3xl font-black text-inkCare">מכשיר קר, מראה רפואי, ילד שנרתע.</h3>
              <ul className="mt-6 grid gap-3 text-base font-bold leading-7 text-inkCare/70">
                <li>פחד עוד לפני תחילת הטיפול</li>
                <li>מבוכה מול חברים או אחים</li>
                <li>הורה שמרגיש שהוא נלחם על כל שימוש</li>
              </ul>
            </article>
            <article className="rounded-[2rem] bg-mintCare p-7 shadow-soft">
              <p className="text-sm font-black text-inkCare/55">אחרי</p>
              <h3 className="mt-3 text-3xl font-black text-inkCare">רוגע, צמיחה, תחושה שהילד עדיין ילד.</h3>
              <ul className="mt-6 grid gap-3 text-base font-bold leading-7 text-inkCare/75">
                <li>יותר שיתוף פעולה ופחות התנגדות</li>
                <li>מוצר שהילד יכול להרגיש איתו בטוח</li>
                <li>רגע רפואי שהופך לקצת יותר אנושי</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="הכי אהובים על הורים"
            title="מוצרים שמתחילים מהרגש של הילד"
            text="בחירה ראשונית למוצרים שיכולים להפחית פחד, לחזק ביטחון ולעזור לילד להרגיש רגוע יותר בטיפול יומיומי."
          />
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
              eyebrow="להורים שרוצים לעזור"
              title="לפעמים שינוי קטן יכול לעשות הבדל גדול."
              text="צבע אחר. ציור אהוב. צליל קטן. מוצר שנראה ידידותי יותר. כל אלה יכולים להפוך רגע מלחיץ לרגע קצת יותר רגוע."
            />
            <Link
              href="/parents"
              className="soft-focus mt-8 inline-flex items-center gap-2 rounded-full bg-inkCare px-7 py-4 text-base font-black text-white transition hover:bg-coralCare"
            >
              לקרוא להורים
              <ArrowLeft size={18} />
            </Link>
          </div>
          <div className="rounded-[2rem] bg-white p-8 text-center shadow-soft">
            <Baby className="mx-auto mb-5 text-coralCare" size={44} />
            <p className="text-3xl font-black leading-tight text-inkCare">
              אנחנו כאן כדי להזכיר לילדים שהם יכולים לצמוח, להחלים ולהרגיש בטוחים יותר.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="הורים מספרים" title="מקום לעדויות בהמשך" align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {["הילד שלי הסכים לנסות.", "זה נראה סוף סוף כמו משהו לילדים.", "הרגע בבית היה הרבה יותר רגוע."].map(
              (quote) => (
                <article key={quote} className="rounded-soft bg-creamCare p-7 shadow-sm">
                  <Quote className="mb-5 text-coralCare" size={28} />
                  <p className="text-xl font-black leading-8 text-inkCare">“{quote}”</p>
                  <p className="mt-5 text-sm font-bold text-inkCare/55">עדות תעלה בקרוב</p>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="bg-creamCare px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow="אינסטגרם וטיקטוק בעתיד"
            title="תוכן אמיתי מהורים, ילדים ורגעי טיפול בבית"
            text="כאן יהיה מקום לסרטונים קצרים, לפני/אחרי, הדגמות מוצר, וסיפורים של הורים. בלי תחושה רפואית קרה ובלי תוכן מבוים מדי."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {["הדגמת מוצר", "סיפור הורה", "טיפ רגוע לטיפול"].map((item) => (
              <article key={item} className="grid min-h-56 place-items-center rounded-[2rem] bg-white p-6 text-center shadow-soft">
                <div>
                  <Video className="mx-auto mb-5 text-coralCare" size={34} />
                  <p className="text-xl font-black text-inkCare">{item}</p>
                  <p className="mt-2 text-sm font-bold text-inkCare/50">סרטון יעלה בקרוב</p>
                </div>
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
              לקבל מוצרים חדשים, טיפים ועדכוני BloomCare
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/70">
              בהמשך נחבר כאן הרשמה אמיתית לניוזלטר, קופון הזמנה ראשונה, וזרימת המלצות לפי גיל וצורך.
            </p>
          </div>
          <form className="mx-auto flex w-full max-w-2xl flex-col gap-3 rounded-[2rem] bg-white p-2 shadow-soft sm:flex-row sm:rounded-full">
            <input
              className="min-h-12 flex-1 rounded-full border-0 bg-transparent px-5 text-right text-inkCare outline-none"
              placeholder="המייל שלך"
              type="email"
            />
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
            לעזור לילדים להרגיש רגועים ובטוחים יותר
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-9 text-inkCare/75">
            כי גם טיפול רפואי או שיקום יכולים להגיע עם רוך, צמיחה וחיוך קטן.
          </p>
          <Link
            href="/categories"
            className="soft-focus mt-9 inline-flex items-center gap-2 rounded-full bg-coralCare px-8 py-4 text-lg font-black text-white shadow-soft transition hover:-translate-y-1 hover:bg-inkCare"
          >
            למוצרים
            <ArrowLeft size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
