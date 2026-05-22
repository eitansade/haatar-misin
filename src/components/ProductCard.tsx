import { Heart, ShoppingBag, Sparkles } from "lucide-react";
import type { Product } from "@/data/products";
import { PlaceholderImage } from "./PlaceholderImage";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-soft bg-white p-4 shadow-soft transition duration-300 hover:-translate-y-1 hover:rotate-[0.15deg] hover:shadow-[0_22px_60px_rgba(34,49,63,0.14)]">
      <PlaceholderImage />
      <div className="flex flex-1 flex-col px-1 pb-1 pt-5">
        {product.ageRange ? (
          <span className="mb-3 w-fit rounded-full bg-mintCare/55 px-3 py-1 text-xs font-black text-inkCare/75">
            {product.ageRange}
          </span>
        ) : null}
        <h3 className="text-xl font-black text-inkCare">{product.title}</h3>
        <p className="mt-3 flex-1 text-base leading-7 text-inkCare/70">{product.description}</p>
        {product.emotionalBenefit ? (
          <p className="mt-4 flex items-start gap-2 rounded-2xl bg-creamCare px-4 py-3 text-sm font-bold leading-6 text-inkCare/75">
            <Heart className="mt-0.5 shrink-0 text-coralCare" size={16} />
            {product.emotionalBenefit}
          </p>
        ) : null}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xl font-black text-inkCare">{product.price}</span>
          <div className="flex flex-wrap gap-2">
            <button className="soft-focus rounded-full border border-inkCare/10 bg-creamCare px-4 py-2 text-sm font-bold text-inkCare transition hover:bg-mintCare">
              לפרטים
            </button>
            <button className="soft-focus inline-flex items-center gap-2 rounded-full bg-coralCare px-4 py-2 text-sm font-bold text-white transition hover:bg-inkCare">
              {product.status === "soon" ? <Sparkles size={16} /> : <ShoppingBag size={16} />}
              {product.status === "soon" ? "בקרוב" : "הוסף לעגלה"}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
