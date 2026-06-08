import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTA } from "@/components/CTA";
import { projects } from "@/lib/site-data";

export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="services-hero">
        <div className="services-hero-inner">
          <p className="eyebrow">Projects</p>
          <h1>AVL work across worship, education, venues, arenas, and corporate spaces.</h1>
          <p className="services-hero-sub">
            Explore recent Aloha AVL integrations and production environments built for real operators and real audiences.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/contact">
              Start a Project <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Project cards ── */}
      <section className="services-list">
        {projects.map((project, index) => (
          <article key={project.slug} className={`service-feature ${index % 2 === 1 ? "service-feature-reverse" : ""}`}>
            <div className="service-feature-media">
              <Image src={project.image} alt={project.title} fill sizes="(max-width: 900px) 100vw, 50vw" />
              <span className="service-feature-index">{project.category}</span>
            </div>
            <div className="service-feature-copy">
              <p className="eyebrow">{project.category}</p>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <ul className="service-bullets">
                {project.highlights.map((h) => (
                  <li key={h}>
                    <ArrowRight size={15} />
                    {h}
                  </li>
                ))}
              </ul>
              <Link className="button primary" href={`/projects/${project.slug}`}>
                View Case Study <ArrowRight size={17} />
              </Link>
            </div>
          </article>
        ))}
      </section>

      <CTA />
    </>
  );
}
