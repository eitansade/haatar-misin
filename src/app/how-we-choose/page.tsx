import { Check } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const checks = [
  "האם זה נראה פחות מפחיד?",
  "האם זה נעים יותר לילד?",
  "האם זה יכול לגרום לילד להרגיש בטוח יותר מול חברים?",
  "האם זה יכול לעזור להורה להפוך רגע קשה לקצת יותר קל?",
];

const feelingWords = ["מרגיע", "נעים", "בטוח", "ואפילו קצת משמח"];

export default function HowWeChoosePage() {
  return (
    <main className="bg-mintCare/35 px-5 py-16 md:px-8">
      <section className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="איך אנחנו בוחרים את המוצרים שלנו"
          title="כל מוצר נבחר לפי איכות, אבל גם לפי רגש."
          text="כל מוצר באתר שלנו נבחר בקפידה מתוך מאות מוצרים ומפעלים ברחבי העולם — לא רק לפי איכות רפואית, אלא לפי שאלה אחת פשוטה: איך ילד ירגיש כשהוא ישתמש בזה?"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {checks.map((item) => (
            <article key={item} className="flex gap-3 rounded-soft bg-white p-6 shadow-sm">
              <Check className="mt-1 shrink-0 text-coralCare" />
              <p className="text-lg font-bold leading-8 text-inkCare">{item}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-[2rem] bg-white p-7 shadow-soft md:p-10">
          <p className="text-lg leading-9 text-inkCare/75">
            אנחנו עובדים עם יצרנים וספקים שנבחרו במיוחד כדי ליצור מוצרים בטוחים, איכותיים,
            צבעוניים ומותאמים לילדים — כאלה שלא מרגישים כמו “ציוד רפואי רגיל”.
          </p>
          <p className="mt-5 text-lg leading-9 text-inkCare/75">
            כל צבע, ציור, חומר ועיצוב נבחרים מתוך מחשבה אמיתית על ילדים והחוויה שלהם.
          </p>
          <p className="mt-7 text-2xl font-black leading-9 text-inkCare">
            זה לא רק מוצר רפואי. זה משהו שילד פוגש ברגעים רגישים.
          </p>
          <p className="mt-5 text-lg leading-9 text-inkCare/75">ולכן הוא צריך להרגיש:</p>
          <ul className="mt-5 flex flex-wrap gap-3">
            {feelingWords.map((word) => (
              <li key={word} className="rounded-full bg-peachCare px-5 py-3 font-black text-inkCare">
                {word}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
