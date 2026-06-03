import { CardGrid } from "@/components/CardGrid";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { industries } from "@/lib/site-data";

export const metadata = {
  title: "Industries",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="AVL systems shaped around the people using them."
        body="Churches, venues, schools, universities, and corporate teams all need different systems. Aloha AVL designs for the room and the workflow."
        image="/uploads/2025/10/Full-Theater-From-Balcony.jpg"
      />
      <section className="section">
        <SectionHeader title="Where we work" />
        <CardGrid items={industries.map((item) => ({ ...item, href: `/${item.slug}` }))} />
      </section>
      <CTA />
    </>
  );
}
