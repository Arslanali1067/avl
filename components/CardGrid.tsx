import Image from "next/image";
import Link from "next/link";

export type CardItem = {
  title: string;
  summary: string;
  image: string;
  href: string;
  meta?: string;
};

export function CardGrid({ items }: { items: CardItem[] }) {
  return (
    <div className="card-grid">
      {items.map((item) => (
        <Link className="feature-card" href={item.href} key={item.href}>
          <span className="card-image">
            <Image src={item.image} alt="" fill sizes="(max-width: 900px) 100vw, 33vw" />
          </span>
          <span className="card-content">
            {item.meta ? <span className="card-meta">{item.meta}</span> : null}
            <strong>{item.title}</strong>
            <span>{item.summary}</span>
          </span>
        </Link>
      ))}
    </div>
  );
}
