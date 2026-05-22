type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "start" | "center";
};

export function SectionHeader({ eyebrow, title, text, align = "start" }: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-extrabold text-coralCare">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-black leading-tight text-inkCare md:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-lg leading-8 text-inkCare/75">{text}</p> : null}
    </div>
  );
}
