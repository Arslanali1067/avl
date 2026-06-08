import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTA } from "@/components/CTA";
import { industries } from "@/lib/site-data";

export const metadata = {
  title: "Industries",
};

export default function IndustriesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="services-hero">
        <div className="services-hero-inner">
          <p className="eyebrow">Industries</p>
          <h1>AVL systems shaped around the people using them.</h1>
          <p className="services-hero-sub">
            Churches, venues, schools, universities, and corporate teams all need different systems. Aloha AVL designs for the room and the workflow.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/contact">
              Start a Project <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Industry cards ── */}
      <section className="services-list">
        {industries.map((industry, index) => (
          <article key={industry.slug} className={`service-feature ${index % 2 === 1 ? "service-feature-reverse" : ""}`}>
            <div className="service-feature-media">
              <Image src={industry.image} alt={industry.title} fill sizes="(max-width: 900px) 100vw, 50vw" />
              <span className="service-feature-index">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="service-feature-copy">
              <p className="eyebrow">Industry</p>
              <h2>{industry.title}</h2>
              <p>{industry.summary}</p>
              <Link className="button primary" href={`/${industry.slug}`}>
                Learn More <ArrowRight size={17} />
              </Link>
            </div>
          </article>
        ))}
      </section>

      <CTA />
    </>
  );
}
