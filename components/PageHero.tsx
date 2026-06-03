import Image from "next/image";
import Link from "next/link";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  body: string;
  image: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function PageHero({ eyebrow, title, body, image, ctaLabel = "Start a Project", ctaHref = "/contact" }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="hero-copy">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        <p>{body}</p>
        <Link className="button primary" href={ctaHref}>
          {ctaLabel}
        </Link>
      </div>
      <div className="hero-media">
        <Image src={image} alt="" fill sizes="(max-width: 900px) 100vw, 50vw" priority />
      </div>
    </section>
  );
}
