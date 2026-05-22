import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeader } from "@/components/SectionHeader";
import { categories, getCategoryProducts } from "@/data/products";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    return {};
  }

  return {
    title: category.title,
    description: category.intro,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  const products = getCategoryProducts(category.slug);

  return (
    <main className="bg-creamCare px-5 py-16 md:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] bg-white p-7 shadow-soft md:p-10">
          <SectionHeader eyebrow={category.title} title={category.subtitle} text={category.intro} />
          <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {category.points.map((point) => (
              <div key={point} className="flex items-center gap-2 rounded-full bg-mintCare/45 px-4 py-3 font-bold text-inkCare">
                <Check size={17} className="text-coralCare" />
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <SectionHeader eyebrow="מוצרים לדוגמה" title="כרטיסי מוצר בקטגוריה" />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
