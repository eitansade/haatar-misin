"use client";

import { useState } from "react";

const hebrewTerms = [
  ["תקנון שימוש ובטיחות", "ברוכים הבאים ל־BloomCare Kids. השימוש באתר, במוצרים ובשירותים המוצעים בו כפוף לתנאים המפורטים בתקנון זה. גלישה באתר או רכישת מוצר מהווים הסכמה לתנאים אלו."],
  ["מידע כללי", "המוצרים באתר נועדו לסייע ביצירת חוויית שימוש נעימה, ידידותית ורגועה יותר לילדים הזקוקים לאביזרים, ציוד או מוצרים הקשורים לעולם הבריאות והטיפול. האתר אינו מהווה גורם רפואי, מוסד רפואי, קליניקה או גוף מטפל."],
  ["היעדר ייעוץ רפואי", "המידע באתר, לרבות טקסטים, תמונות, המלצות, תיאורים או תוכן שיווקי, אינו מהווה ייעוץ רפואי, אבחון רפואי או תחליף לייעוץ מקצועי של רופא, מטפל או גורם רפואי מוסמך. לפני כל שימוש במוצר רפואי או אביזר טיפולי, יש להיוועץ בגורם רפואי מתאים. אין להסתמך על המידע באתר לצורך קבלת החלטות רפואיות."],
  ["שימוש במוצרים", "השימוש במוצרים הינו באחריות המשתמש ו/או ההורה או האפוטרופוס בלבד. יש להשתמש בכל מוצר בהתאם להוראות השימוש, להנחיות היצרן, להנחיות גורם רפואי מוסמך ובהתאם לגיל ולצרכים האישיים של הילד. אין לעשות שימוש בלתי תקין, מסוכן או שאינו מיועד במוצר."],
  ["בטיחות ילדים", "אין להשאיר ילדים ללא השגחת מבוגר בעת שימוש במוצרים. חלק מהמוצרים עשויים לכלול חלקים קטנים, רצועות, חומרים שונים או אביזרים נלווים, ולכן יש להשתמש בהם בזהירות ותחת השגחת מבוגר בהתאם לגיל הילד."],
  ["אחריות מוגבלת", "האתר ו/או מפעיליו אינם אחראים לכל נזק ישיר או עקיף, פציעה, אי־נוחות, תגובה רפואית, שימוש שגוי, שימוש בלתי מתאים או הסתמכות על מידע המופיע באתר. האחריות לבדיקת התאמת המוצר לצרכי הילד מוטלת על המשתמש בלבד."],
  ["מוצרים ותמונות", "תמונות, צבעים, עיצובים והמחשות באתר נועדו להמחשה בלבד וייתכנו הבדלים בין התמונות לבין המוצר בפועל. החברה רשאית לעדכן, לשנות או להסיר מוצרים, מחירים, עיצובים ותכנים בכל עת וללא הודעה מוקדמת."],
  ["קניין רוחני", "כל זכויות היוצרים, העיצובים, הטקסטים, הלוגואים, הגרפיקות והתכנים באתר שייכים ל־BloomCare Kids ואין להעתיק, לשכפל או להשתמש בהם ללא אישור מראש ובכתב."],
  ["פרטיות", "האתר עשוי לאסוף מידע בסיסי לצורך שיפור חוויית המשתמש, שירות לקוחות, הזמנות ושיווק, בהתאם למדיניות הפרטיות של האתר."],
  ["יצירת קשר", "לשאלות, בקשות או בירורים ניתן ליצור קשר דרך עמוד צור קשר באתר."],
];

const englishTerms = [
  ["Terms of Use and Safety", "Welcome to BloomCare Kids. Use of this website, products, and services is subject to these terms. Browsing the website or purchasing a product constitutes acceptance of these terms."],
  ["General Information", "The products on this website are intended to help create a friendlier, calmer, and more child-centered experience for children who need health-related accessories, equipment, or products. The website is not a medical provider, medical institution, clinic, or treating body."],
  ["No Medical Advice", "The information on this website, including text, images, recommendations, descriptions, or marketing content, does not constitute medical advice, medical diagnosis, or a substitute for professional advice from a physician, therapist, or qualified medical professional. Before using any medical product or therapeutic accessory, consult an appropriate medical professional. Do not rely on website content for medical decision-making."],
  ["Product Use", "Use of products is the sole responsibility of the user and/or parent or legal guardian. Each product must be used according to the instructions for use, manufacturer guidelines, guidance from a qualified medical professional, and the child's age and individual needs. Products must not be used improperly, dangerously, or for unintended purposes."],
  ["Child Safety", "Children must not be left without adult supervision while using products. Some products may include small parts, straps, different materials, or accessories, and must therefore be used carefully and under adult supervision according to the child's age."],
  ["Limited Liability", "The website and/or its operators are not responsible for any direct or indirect damage, injury, discomfort, medical reaction, incorrect use, unsuitable use, or reliance on information appearing on the website. Responsibility for checking product suitability for the child's needs rests solely with the user."],
  ["Products and Images", "Images, colors, designs, and illustrations on the website are for illustration purposes only, and differences may exist between the images and the actual product. The company may update, change, or remove products, prices, designs, and content at any time without prior notice."],
  ["Intellectual Property", "All copyrights, designs, texts, logos, graphics, and website content belong to BloomCare Kids and may not be copied, duplicated, or used without prior written permission."],
  ["Privacy", "The website may collect basic information for improving user experience, customer service, orders, and marketing, according to the website privacy policy."],
  ["Contact", "For questions, requests, or inquiries, contact us through the Contact page on the website."],
];

export function TermsLanguageContent() {
  const [language, setLanguage] = useState<"he" | "en">("he");
  const items = language === "he" ? hebrewTerms : englishTerms;

  return (
    <div>
      <div className="mb-8 flex w-fit rounded-full bg-white p-1 shadow-sm">
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
      <div className={language === "en" ? "space-y-5 text-left" : "space-y-5"} dir={language === "en" ? "ltr" : "rtl"} lang={language}>
        {items.map(([title, body]) => (
          <section key={title} className="rounded-[1.5rem] bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black text-inkCare">{title}</h2>
            <p className="mt-3 text-lg leading-8 text-inkCare/72">{body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
