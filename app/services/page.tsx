import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { CTA } from "@/components/CTA";
import { services } from "@/lib/site-data";

export const metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="services-hero">
        <div className="services-hero-bg">
          <Image
            src="/uploads/2025/10/FOH-w_Stage-2.jpg"
            alt=""
            fill
            sizes="100vw"
            priority
          />
        </div>
        <div className="services-hero-overlay" />
        <div className="services-hero-inner">
          <p className="eyebrow">What we do</p>
          <h1>AVL services from design to show day.</h1>
          <p className="services-hero-sub">
            Aloha AVL covers permanent system design, equipment sales and rentals, and live event support — so your space works every time the doors open.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/contact">
              Start a Project <ArrowRight size={18} />
            </Link>
            <Link className="button ghost" href="/projects">
              See the Work
            </Link>
          </div>
        </div>
      </section>

      {/* ── Service cards ── */}
      <section className="services-list">
        {services.map((service, index) => (
          <article key={service.slug} className={`service-feature ${index % 2 === 1 ? "service-feature-reverse" : ""}`}>
            <div className="service-feature-media">
              <Image src={service.image} alt={service.title} fill sizes="(max-width: 900px) 100vw, 50vw" />
              <span className="service-feature-index">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="service-feature-copy">
              <p className="eyebrow">{service.eyebrow}</p>
              <h2>{service.title}</h2>
              <p>{service.summary}</p>
              <ul className="service-bullets">
                {service.bullets.map((b) => (
                  <li key={b}>
                    <Check size={16} />
                    {b}
                  </li>
                ))}
              </ul>
              <Link className="button primary" href={`/${service.slug}`}>
                Learn More <ArrowRight size={17} />
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* ── Why Aloha AVL ── */}
      <section className="section services-why">
        <div className="services-why-inner">
          <div className="services-why-copy">
            <p className="eyebrow">Why Aloha AVL</p>
            <h2>One team. Every part of the AVL path.</h2>
            <p>
              Most spaces need more than gear. They need design that fits the room, installation that stays clean, operators who know the system, and someone to call when something feels off. That is what we provide.
            </p>
          </div>
          <div className="services-why-grid">
            {[
              { title: "Room-first thinking", body: "We learn how the space is actually used before recommending any equipment." },
              { title: "Clean installs", body: "Every cable run, rack, and label is done like the next technician will have to service it." },
              { title: "Operator training", body: "We stay until your team feels confident running the system on their own." },
              { title: "Ongoing support", body: "We answer the phone after the job is done. Long-term relationships are the goal." },
            ].map((item) => (
              <div key={item.title} className="services-why-card">
                <strong>{item.title}</strong>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTA />
    </>
  );
}
