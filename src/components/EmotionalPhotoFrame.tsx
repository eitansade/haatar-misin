import { Heart, Home, Sparkles } from "lucide-react";

type EmotionalPhotoFrameProps = {
  title: string;
  caption: string;
  tone?: "blue" | "peach" | "mint";
};

const toneClasses = {
  blue: "from-skyCare/80 via-creamCare to-peachCare/70",
  peach: "from-peachCare/90 via-creamCare to-mintCare/70",
  mint: "from-mintCare/80 via-creamCare to-skyCare/60",
};

export function EmotionalPhotoFrame({ title, caption, tone = "blue" }: EmotionalPhotoFrameProps) {
  return (
    <div className="group rounded-[2.25rem] bg-white p-4 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(34,49,63,0.13)]">
      <div className={`relative min-h-[360px] overflow-hidden rounded-[1.8rem] bg-gradient-to-br ${toneClasses[tone]} p-6`}>
        <div className="absolute -right-10 top-8 h-40 w-40 rounded-full bg-white/55 blur-2xl" />
        <div className="absolute -bottom-16 left-8 h-52 w-52 rounded-full bg-coralCare/20 blur-3xl" />
        <div className="relative flex h-full min-h-[312px] flex-col justify-between">
          <div className="flex items-center justify-between gap-4">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/80 text-coralCare shadow-sm">
              <Home size={23} />
            </span>
            <span className="rounded-full bg-white/75 px-4 py-2 text-xs font-black text-inkCare/70 shadow-sm">
              צילום אמיתי יעלה בקרוב
            </span>
          </div>
          <div className="rounded-[1.6rem] bg-white/78 p-5 shadow-sm backdrop-blur">
            <div className="mb-4 flex gap-2 text-coralCare">
              <Heart size={18} fill="currentColor" />
              <Sparkles size={18} />
            </div>
            <p className="text-2xl font-black leading-tight text-inkCare">{title}</p>
            <p className="mt-3 text-base font-bold leading-7 text-inkCare/65">{caption}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
