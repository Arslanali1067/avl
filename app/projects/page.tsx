import { CardGrid } from "@/components/CardGrid";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/lib/site-data";

export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="AVL work across worship, education, venues, arenas, and corporate spaces."
        body="Explore recent Aloha AVL integrations and production environments."
        image="/uploads/2025/10/United-Grinding-LED-wall-2048x1365.jpg"
      />
      <section className="section">
        <SectionHeader title="Featured projects" />
        <CardGrid items={projects.map((item) => ({ ...item, href: `/projects/${item.slug}`, meta: item.category }))} />
      </section>
      <CTA />
    </>
  );
}
