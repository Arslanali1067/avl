import Link from "next/link";

export function CTA() {
  return (
    <section className="cta-band">
      <div>
        <p className="eyebrow">Ready when you are</p>
        <h2>Let’s design an AVL system that works as hard as your space does.</h2>
      </div>
      <Link className="button primary" href="/contact">
        Get a Quote
      </Link>
    </section>
  );
}
