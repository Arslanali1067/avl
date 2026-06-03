import Image from "next/image";
import { notFound } from "next/navigation";
import { CTA } from "@/components/CTA";
import { CardGrid } from "@/components/CardGrid";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/lib/site-data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

type RouteParams = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: RouteParams }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return {
    title: project?.title ?? "Project",
    description: project?.summary,
  };
}

export default async function ProjectPage({ params }: { params: RouteParams }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const related = projects.filter((item) => item.slug !== project.slug).slice(0, 3);

  return (
    <>
      <section className="post-hero">
        <Image src={project.image} alt="" fill sizes="100vw" priority />
        <div>
          <p className="eyebrow">{project.category}</p>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
        </div>
      </section>
      <section className="section">
        <div className="split">
          <div className="split-copy">
            <p className="eyebrow">Case study</p>
            <h2>Reliable AVL integration for a space with real production demands.</h2>
            <p>
              Aloha AVL approached the project as a complete environment: the technical backbone, the operator workflow, and the audience
              experience all had to line up. The result is a practical system that supports the venue’s everyday needs and special events.
            </p>
          </div>
          <ul className="detail-list">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section alt">
        <SectionHeader eyebrow="More work" title="Other projects" />
        <CardGrid items={related.map((item) => ({ ...item, href: `/projects/${item.slug}`, meta: item.category }))} />
      </section>
      <CTA />
    </>
  );
}
