import { SectionHeader } from "@/components/SectionHeader";
import { SupplierLanguagePanel } from "@/components/SupplierLanguagePanel";

const traits = ["צבעונית", "שמחה", "מרגיעה", "משחקית", "ומלאת חיים"];
const beliefs = ["פחות מפחיד", "פחות מביך", "ויותר אנושי."];

export default function OurStoryPage() {
  return (
    <main className="bg-creamCare px-5 py-16 md:px-8">
      <article className="mx-auto max-w-5xl rounded-[2rem] bg-white p-7 shadow-soft md:p-12">
        <SectionHeader eyebrow="הסיפור שלנו" title="לא כל טיפול צריך להרגיש כמו בית חולים." />
        <div className="mt-8 space-y-6 text-lg leading-9 text-inkCare/75">
          <p>יש ילדים שמפחדים ממדחום.</p>
          <p>יש ילדים שבוכים רק מלראות אינהלציה.</p>
          <p>יש ילדים שמסתירים את הקיבוע שלהם בבית ספר כדי שלא יצחקו עליהם.</p>
          <p>ויש הורים שמרגישים חסרי אונים מול זה.</p>
          <p className="text-2xl font-black text-inkCare">אנחנו הקמנו את המותג הזה בגלל דבר אחד פשוט:</p>
          <p>ילדים לא אמורים להתבייש בציוד הרפואי שלהם. והם בטח לא אמורים לפחד ממנו.</p>
          <p>
            במשך שנים ציוד רפואי לילדים נראה קר, שחור, מלחיץ ומבוגר. כאילו שכחו שמי שמשתמש בו הם
            ילדים עם פחדים, דמיון, רגשות וביטחון עצמי.
          </p>
          <p>אז החלטנו לשנות את זה.</p>
          <p className="text-2xl font-black text-inkCare">התחלנו לעצב מוצרים רפואיים לילדים בצורה אחרת:</p>
        </div>
        <ul className="my-10 flex flex-wrap gap-3">
          {traits.map((trait) => (
            <li key={trait} className="rounded-full bg-peachCare px-5 py-3 text-base font-black text-inkCare">
              {trait}
            </li>
          ))}
        </ul>
        <div className="space-y-6 text-lg leading-9 text-inkCare/75">
          <p>מדחום שמוחא כפיים לילד אמיץ.</p>
          <p>אינהלציה שנראית כמו דינוזאור ולא כמו מכשיר מפחיד.</p>
          <p>מקבע גב שילד יכול להרגיש גאה ללבוש.</p>
          <p>כיסא גלגלים שמרגיש כמו חללית ולא כמו מגבלה.</p>
          <p className="text-2xl font-black text-inkCare">
            כי לפעמים שינוי קטן בעיצוב משנה לגמרי את החוויה של הילד.
          </p>
          <p className="text-2xl font-black text-inkCare">אנחנו מאמינים שטיפול רפואי יכול להיות:</p>
          <ul className="grid gap-3">
            {beliefs.map((belief) => (
              <li key={belief} className="rounded-2xl bg-mintCare/45 px-5 py-3 font-black text-inkCare">
                {belief}
              </li>
            ))}
          </ul>
          <p>
            המשימה שלנו היא להפוך רגעים קשים לקצת יותר קלים. ולגרום לילדים להרגיש מיוחדים, חזקים
            ובטוחים בעצמם גם כשהם צריכים טיפול.
          </p>
          <p>לא עוד “ציוד רפואי”. אלא מוצרים שנוצרו במיוחד לילדים.</p>
          <p className="text-3xl font-black text-coralCare">עם צבע. עם דמיון. ועם לב.</p>
        </div>
      </article>
      <div className="-mx-5 mt-12 md:-mx-8">
        <SupplierLanguagePanel />
      </div>
    </main>
  );
}
