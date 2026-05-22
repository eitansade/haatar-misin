import Link from "next/link";

const links = [
  { href: "/our-story", label: "הסיפור שלנו" },
  { href: "/categories", label: "קטגוריות" },
  { href: "/articles", label: "מדריכי הורים" },
  { href: "/seo", label: "מרכז מידע" },
  { href: "/faq", label: "שאלות נפוצות" },
  { href: "/terms", label: "תקנון" },
  { href: "/contact", label: "צור קשר" },
];

export function Footer() {
  return (
    <footer className="bg-inkCare text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:px-8">
        <div>
          <h2 className="text-3xl font-black">BloomCare</h2>
          <p className="mt-3 max-w-xl text-base leading-7 text-white/70">
            מותג טיפול לילדים עם צמיחה, רוגע, ביטחון ותקווה.
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
            חיבור ל-Shopify או Stripe, טופס וואטסאפ, המלצות לפי גיל וצורך, ותמונות מוצר אמיתיות.
          </p>
        </div>
      </div>
    </footer>
  );
}

