import { SectionHeader } from "@/components/SectionHeader";

export default function WhyItMattersPage() {
  return (
    <main className="bg-creamCare px-5 py-16 md:px-8">
      <section className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeader eyebrow="למה זה חשוב לילדים" title="ילדים זוכרים תחושות." />
        <article className="rounded-[2rem] bg-white p-7 text-lg leading-9 text-inkCare/75 shadow-soft md:p-10">
          <p>הם זוכרים איך גרם להם להרגיש החדר בבית החולים.</p>
          <p>הם זוכרים אם פחדו מהטיפול.</p>
          <p>והם זוכרים אם הרגישו שונים מול ילדים אחרים.</p>
          <p className="mt-7 text-2xl font-black text-inkCare">לפעמים הדבר שהכי קשה לילד — זה בכלל לא הכאב.</p>
          <p className="mt-4">זה המבוכה. הפחד. והתחושה שהוא “שונה”.</p>
          <p className="mt-7">
            אנחנו מאמינים שגם לציוד רפואי יש השפעה רגשית עצומה על ילדים. כשמוצר נראה צבעוני, נעים,
            מוכר או אפילו מצחיק, הילד מרגיש בטוח יותר.
          </p>
          <p className="mt-7">
            לפעמים אינהלציה שנראית כמו צעצוע קטן יכולה להפוך בכי לשיתוף פעולה. ולפעמים מקבע עם
            ציורים יכול לגרום לילד להרגיש מיוחד במקום להתבייש.
          </p>
          <p className="mt-7 text-2xl font-black text-coralCare">
            המטרה שלנו היא לעזור לילדים לעבור רגעים רפואיים בצורה קצת יותר קלה, רגועה ומחייכת.
          </p>
        </article>
      </section>
    </main>
  );
}
