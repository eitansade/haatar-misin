import { HeartPulse } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

export default function ParentsPage() {
  return (
    <main className="bg-peachCare/45 px-5 py-16 md:px-8">
      <section className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1fr_0.85fr]">
        <article className="rounded-[2rem] bg-white p-7 shadow-soft md:p-10">
          <SectionHeader eyebrow="להורים" title="אנחנו יודעים שזה לא פשוט." />
          <div className="mt-8 space-y-6 text-lg leading-9 text-inkCare/75">
            <p>לפעמים צריך לשכנע לקחת תרופה.</p>
            <p>לפעמים צריך להתמודד עם פחדים.</p>
            <p>ולפעמים הדבר הכי קשה הוא לראות את הילד שלך מתבייש במשהו שהוא חייב להשתמש בו.</p>
            <p className="text-2xl font-black text-inkCare">בדיוק בגלל זה הקמנו את האתר הזה.</p>
            <p>כדי לעזור להפוך את החוויה לקצת יותר נעימה: לילדים ולהורים.</p>
            <p>
              אנחנו מאמינים שלפעמים שינוי קטן יכול לעשות הבדל גדול. צבע אחר. ציור אהוב. צליל קטן.
              מוצר שנראה ידידותי יותר.
            </p>
            <p>כל אלה יכולים להפוך רגע מלחיץ לרגע קצת יותר רגוע.</p>
            <p className="text-2xl font-black text-coralCare">
              אנחנו כאן כדי להזכיר לילדים שהם לא צריכים להתבייש. ולהזכיר להורים שהם לא לבד.
            </p>
          </div>
        </article>
        <aside className="rounded-[2rem] bg-inkCare p-8 text-center text-white shadow-soft">
          <HeartPulse className="mx-auto mb-6 text-peachCare" size={54} />
          <p className="text-3xl font-black leading-tight">כי לכל ילד מגיע להרגיש חופשי, בטוח ומיוחד.</p>
        </aside>
      </section>
    </main>
  );
}
