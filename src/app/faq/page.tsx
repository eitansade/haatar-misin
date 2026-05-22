import { CircleHelp } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { faqs } from "@/data/faq";

export default function FaqPage() {
  return (
    <main className="bg-skyCare/30 px-5 py-16 md:px-8">
      <section className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="שאלות נפוצות" title="תשובות קצרות לפני שמתקדמים" align="center" />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-soft bg-white p-7 shadow-soft">
              <CircleHelp className="mb-5 text-coralCare" size={28} />
              <h2 className="text-2xl font-black text-inkCare">{faq.question}</h2>
              <p className="mt-4 text-lg leading-8 text-inkCare/70">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
