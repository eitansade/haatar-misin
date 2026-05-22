import { MessageCircleHeart } from "lucide-react";

const whatsappText = encodeURIComponent("היי, אשמח לקבל מידע על BloomCare Kids");

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/972500000000?text=${whatsappText}`}
      className="soft-focus fixed bottom-24 left-4 z-50 hidden items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-black text-white shadow-soft transition hover:-translate-y-1 md:inline-flex"
      target="_blank"
      rel="noreferrer"
      aria-label="יצירת קשר בוואטסאפ"
    >
      <MessageCircleHeart size={18} />
      וואטסאפ
    </a>
  );
}
