import Link from "next/link";
import { HeartPulse, ShoppingBag } from "lucide-react";
import { MobileNav } from "./MobileNav";

const navItems = [
  { href: "/our-story", label: "הסיפור שלנו" },
  { href: "/how-we-choose", label: "איך בוחרים" },
  { href: "/why-it-matters", label: "למה זה חשוב" },
  { href: "/categories", label: "קטגוריות" },
  { href: "/parents", label: "להורים" },
  { href: "/faq", label: "שאלות נפוצות" },
  { href: "/terms", label: "תקנון" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-inkCare/10 bg-creamCare/90 backdrop-blur-xl">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link href="/" className="soft-focus flex items-center gap-3 rounded-full">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-skyCare text-inkCare shadow-sm">
            <HeartPulse size={24} />
          </span>
          <span>
            <span className="block text-lg font-black leading-none text-inkCare">CareKids Israel</span>
            <span className="hidden text-xs font-bold text-inkCare/60 sm:block">עם צבע, ביטחון ולב</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-bold text-inkCare/70 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="soft-focus rounded-full transition hover:text-coralCare">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="soft-focus hidden rounded-full bg-white px-4 py-2 text-sm font-extrabold text-inkCare shadow-sm transition hover:bg-mintCare sm:inline-flex"
          >
            צור קשר
          </Link>
          <button className="soft-focus grid h-11 w-11 place-items-center rounded-full bg-coralCare text-white shadow-sm" aria-label="עגלה">
            <ShoppingBag size={19} />
          </button>
          <MobileNav items={navItems} />
        </div>
      </div>
    </header>
  );
}
