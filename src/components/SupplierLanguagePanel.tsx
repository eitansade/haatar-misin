"use client";

import { useState } from "react";
import { Globe2 } from "lucide-react";

export function SupplierLanguagePanel() {
  const [language, setLanguage] = useState<"he" | "en">("he");

  return (
    <section className="bg-white px-5 py-14 md:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-inkCare/10 bg-creamCare p-6 shadow-sm md:p-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-2 inline-flex items-center gap-2 text-sm font-black text-coralCare">
              <Globe2 size={17} />
              מידע לספקים ולשותפים
            </p>
            <h2 className="text-3xl font-black leading-tight text-inkCare">
              להבין את BloomCare Kids גם באנגלית
            </h2>
          </div>
          <div className="flex w-fit rounded-full bg-white p-1 shadow-sm">
            <button
              className={`rounded-full px-5 py-2 text-sm font-black transition ${
                language === "he" ? "bg-inkCare text-white" : "text-inkCare/65 hover:bg-mintCare"
              }`}
              type="button"
              onClick={() => setLanguage("he")}
            >
              עברית
            </button>
            <button
              className={`rounded-full px-5 py-2 text-sm font-black transition ${
                language === "en" ? "bg-inkCare text-white" : "text-inkCare/65 hover:bg-mintCare"
              }`}
              type="button"
              onClick={() => setLanguage("en")}
            >
              English
            </button>
          </div>
        </div>

        {language === "he" ? (
          <div className="mt-7 grid gap-5 text-lg leading-9 text-inkCare/75 md:grid-cols-2">
            <p>
              BloomCare Kids הוא מותג ישראלי לטיפול רגשי-פדיאטרי, שנוצר כדי לעזור לילדים להרגיש
              רגועים, בטוחים ומובנים יותר בזמן טיפול רפואי או שיקום.
            </p>
            <p>
              המוצרים נבחרים מתוך מחשבה על בטיחות, איכות וחוויה רגשית: איך הילד מרגיש כשהוא משתמש
              במוצר, ואיך ההורה יכול להפוך רגע קשה לקצת יותר קל.
            </p>
          </div>
        ) : (
          <div className="mt-7 grid gap-5 text-left text-lg leading-8 text-inkCare/75 md:grid-cols-2" dir="ltr" lang="en">
            <p>
              BloomCare Kids is an Israeli emotional pediatric care brand designed to help children feel safer, calmer,
              and more confident during medical or rehabilitation experiences.
            </p>
            <p>
              We select products not only by quality and usability, but also by the emotional experience of the child:
              growth, confidence, calmness, comfort, warmth, healing, and hope.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
