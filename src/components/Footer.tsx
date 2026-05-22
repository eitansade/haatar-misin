import Link from "next/link";

const links = [
  { href: "/our-story", label: "הסיפור שלנו" },
  { href: "/how-we-choose", label: "איך אנחנו בוחרים" },
  { href: "/categories", label: "קטגוריות" },
  { href: "/faq", label: "שאלות נפוצות" },
  { href: "/contact", label: "צור קשר" },
];

export function Footer() {
  return (
    <footer className="bg-inkCare text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:px-8">
        <div>
          <h2 className="text-3xl font-black">CareKids Israel</h2>
          <p className="mt-3 max-w-xl text-base leading-7 text-white/70">
            ציוד רפואי לילדים — עם צבע, ביטחון ולב.
          </p>
          <p className="mt-8 max-w-3xl text-sm leading-7 text-white/60">
            המידע באתר אינו מהווה ייעוץ רפואי. יש להתייעץ עם גורם רפואי מוסמך לפני שימוש במוצר רפואי.
          </p>
        </div>
        <nav className="grid gap-3 text-sm font-bold text-white/75">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="rounded-[1.5rem] bg-white/8 p-5">
          <p className="text-sm font-black text-white">בעתיד הקרוב</p>
          <p className="mt-3 text-sm leading-7 text-white/65">
            חיבור ל־Shopify או Stripe, טופס וואטסאפ, המלצות לפי גיל, ותמונות מוצר אמיתיות.
          </p>
        </div>
      </div>
    </footer>
  );
}
