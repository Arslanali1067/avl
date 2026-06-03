type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center" | "split";
  tone?: "default" | "dark";
};

export function SectionHeader({ eyebrow, title, body, align = "left", tone = "default" }: SectionHeaderProps) {
  return (
    <div className={`section-header section-header-${align} section-header-${tone}`}>
      <div className="section-heading-main">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
      </div>
      {body ? <p className="section-heading-body">{body}</p> : null}
    </div>
  );
}
