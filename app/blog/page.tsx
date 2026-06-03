import { CardGrid } from "@/components/CardGrid";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { posts } from "@/lib/site-data";

export const metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Project stories and AVL notes."
        body="A collection of recent Aloha AVL project updates, system launches, and production stories."
        image="/uploads/2025/11/Lights-in-a-row-1.jpg"
      />
      <section className="section">
        <SectionHeader title="Latest posts" />
        <CardGrid items={posts.map((item) => ({ ...item, summary: item.excerpt, href: `/blog/${item.slug}`, meta: item.date }))} />
      </section>
    </>
  );
}
