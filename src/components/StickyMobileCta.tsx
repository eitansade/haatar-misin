import Link from "next/link";

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-inkCare/10 bg-creamCare/95 px-4 py-3 shadow-[0_-12px_30px_rgba(34,49,63,0.12)] backdrop-blur-xl md:hidden">
      <Link
        href="/categories"
        className="soft-focus flex min-h-12 items-center justify-center rounded-full bg-coralCare px-5 text-base font-black text-white"
      >
        לגלות את BloomCare Kids
      </Link>
    </div>
  );
}
