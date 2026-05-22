import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import type { Category } from "@/data/products";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group block rounded-soft bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(34,49,63,0.14)]"
    >
      <p className="text-sm font-extrabold text-coralCare">{category.title}</p>
      <h3 className="mt-3 text-2xl font-black leading-tight text-inkCare">{category.subtitle}</h3>
      <p className="mt-4 text-base leading-7 text-inkCare/70">{category.intro}</p>
      <ul className="mt-5 grid gap-2">
        {category.points.slice(0, 3).map((point) => (
          <li key={point} className="flex items-center gap-2 text-sm font-bold text-inkCare/75">
            <Check size={16} className="text-coralCare" />
            {point}
          </li>
        ))}
      </ul>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-black text-inkCare transition group-hover:text-coralCare">
        לעמוד הקטגוריה
        <ArrowLeft size={16} />
      </span>
    </Link>
  );
}
