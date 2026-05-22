import { Mail, MapPin, MessageCircleHeart } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const contactItems = [
  { title: "אימייל", text: "carekids@example.com", Icon: Mail },
  { title: "אזור פעילות", text: "משלוחים לכל הארץ", Icon: MapPin },
  { title: "פניות הורים", text: "שאלות על התאמה, קטגוריות ומוצרים עתידיים", Icon: MessageCircleHeart },
];

export default function ContactPage() {
  return (
    <main className="bg-creamCare px-5 py-16 md:px-8">
      <section className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeader
          eyebrow="צור קשר"
          title="רוצים לשאול על מוצר, התאמה או שיתוף פעולה?"
          text="זהו עמוד קשר ראשוני לגרסת V1. בהמשך אפשר לחבר כאן טופס, וואטסאפ, מערכת פניות או אינטגרציה לחנות."
        />
        <div className="grid gap-4">
          {contactItems.map(({ title, text, Icon }) => (
            <article key={title} className="rounded-soft bg-white p-7 shadow-soft">
              <Icon className="mb-5 text-coralCare" size={28} />
              <h2 className="text-2xl font-black text-inkCare">{title}</h2>
              <p className="mt-3 text-lg leading-8 text-inkCare/70">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
