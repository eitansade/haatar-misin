import type { Metadata } from "next";
import { TermsLanguageContent } from "@/components/TermsLanguageContent";

export const metadata: Metadata = {
  title: "תקנון שימוש ובטיחות",
  description: "תקנון שימוש ובטיחות של BloomCare בעברית ובאנגלית.",
};

export default function TermsPage() {
  return (
    <main className="bg-creamCare px-5 py-16 md:px-8">
      <section className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm font-black text-coralCare">BloomCare</p>
        <h1 className="text-4xl font-black leading-tight text-inkCare md:text-6xl">
          תקנון שימוש ובטיחות
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-inkCare/70">
          העמוד זמין בעברית ובאנגלית כדי שגם הורים בישראל וגם ספקים ושותפים בינלאומיים יוכלו להבין
          את תנאי השימוש, הבטיחות והאחריות.
        </p>
        <div className="mt-10">
          <TermsLanguageContent />
        </div>
      </section>
    </main>
  );
}

