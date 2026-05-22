"use client";

import Link from "next/link";
import { useState } from "react";
import { ShieldAlert } from "lucide-react";

const shortHebrew = [
  "המידע באתר אינו מהווה ייעוץ רפואי, אבחון רפואי או תחליף להנחיה של גורם רפואי מוסמך.",
  "לפני שימוש במוצר רפואי או אביזר טיפולי יש להיוועץ בגורם רפואי מתאים.",
  "השימוש במוצרים הינו באחריות המשתמש ו/או ההורה בלבד ובהתאם להוראות השימוש והנחיות היצרן.",
  "התמונות, העיצובים וההמחשות באתר נועדו להמחשה בלבד.",
];

const shortEnglish = [
  "The information on this website is not medical advice, diagnosis, or a substitute for guidance from a qualified medical professional.",
  "Before using any medical product or therapeutic accessory, consult an appropriate medical professional.",
  "Use of products is the sole responsibility of the user and/or parent, according to the product instructions and manufacturer guidelines.",
  "Images, designs, and visual materials on the website are for illustration purposes only.",
];

export function LegalNotice() {
  const [language, setLanguage] = useState<"he" | "en">("he");

  return (
    <section className="bg-white px-5 py-16 md:px-8">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-inkCare/10 bg-creamCare p-7 shadow-soft md:p-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div>
            <ShieldAlert className="mb-5 text-coralCare" size={34} />
            <p className="text-sm font-black text-coralCare">בטיחות ותקנון</p>
            <h2 className="mt-2 text-3xl font-black text-inkCare">חשוב לדעת</h2>
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

        <div className={language === "en" ? "mt-7 space-y-4 text-left text-base leading-8 text-inkCare/75" : "mt-7 space-y-4 text-base leading-8 text-inkCare/75"} dir={language === "en" ? "ltr" : "rtl"} lang={language}>
          {(language === "he" ? shortHebrew : shortEnglish).map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <details className="mt-7 rounded-[1.5rem] bg-white p-5">
          <summary className="cursor-pointer text-base font-black text-inkCare">תקנון מלא / Full terms</summary>
          <p className="mt-4 text-sm leading-7 text-inkCare/65">
            התקנון המלא זמין בעמוד ייעודי בעברית ובאנגלית, כולל שימוש במוצרים, בטיחות ילדים,
            אחריות מוגבלת, תמונות, קניין רוחני ופרטיות.
          </p>
          <Link href="/terms" className="mt-5 inline-flex rounded-full bg-inkCare px-5 py-3 text-sm font-black text-white">
            מעבר לתקנון המלא
          </Link>
        </details>
      </div>
    </section>
  );
}
