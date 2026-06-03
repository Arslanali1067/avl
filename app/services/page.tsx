import { CardGrid } from "@/components/CardGrid";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { services } from "@/lib/site-data";

export const metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="AVL services from design to show day."
        body="Aloha AVL helps with permanent system design, equipment sales and rentals, and live event support for spaces that need to work every time."
        image="/uploads/2025/10/Digico-Close-Up-1.jpg"
      />
      <section className="section">
        <SectionHeader title="Choose the support your space needs" />
        <CardGrid items={services.map((item) => ({ ...item, href: `/${item.slug}` }))} />
      </section>
      <CTA />
    </>
  );
}
