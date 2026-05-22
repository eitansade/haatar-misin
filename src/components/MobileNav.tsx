"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

type NavItem = {
  href: string;
  label: string;
};

export function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        className="soft-focus grid h-11 w-11 place-items-center rounded-full bg-white text-inkCare shadow-sm"
        type="button"
        aria-label={open ? "סגירת תפריט" : "פתיחת תפריט"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
      {open ? (
        <div className="absolute inset-x-4 top-[76px] rounded-[1.5rem] border border-inkCare/10 bg-white p-4 shadow-soft">
          <nav className="grid gap-2">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-base font-black text-inkCare transition hover:bg-creamCare"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/categories"
            className="mt-3 flex justify-center rounded-full bg-coralCare px-5 py-3 text-sm font-black text-white"
            onClick={() => setOpen(false)}
          >
            לגלות את המוצרים
          </Link>
        </div>
      ) : null}
    </div>
  );
}
