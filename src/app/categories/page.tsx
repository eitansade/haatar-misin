import { CategoryCard } from "@/components/CategoryCard";
import { SectionHeader } from "@/components/SectionHeader";
import { categories } from "@/data/products";

export default function CategoriesPage() {
  return (
    <main className="bg-creamCare px-5 py-16 md:px-8">
      <section className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="קטגוריות מוצרים"
          title="מוצרים רפואיים לילדים שלא מרגישים כמו ציוד קר ומבוגר"
          text="כל קטגוריה נבנית סביב הצורך הרפואי, אבל גם סביב החוויה הרגשית של הילד וההורה."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>
    </main>
  );
}
