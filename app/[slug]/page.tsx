import { notFound } from "next/navigation";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { industries, services } from "@/lib/site-data";

export function generateStaticParams() {
  return [...services, ...industries].map((item) => ({ slug: item.slug }));
}

type RouteParams = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: RouteParams }) {
  const { slug } = await params;
  const page = services.find((item) => item.slug === slug) || industries.find((item) => item.slug === slug);
  return {
    title: page?.title ?? "Aloha AVL",
    description: page?.summary,
  };
}

export default async function DetailPage({ params }: { params: RouteParams }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  const industry = industries.find((item) => item.slug === slug);
  const page = service || industry;

  if (!page) {
    notFound();
  }

  const isService = Boolean(service);
  const eyebrow = service?.eyebrow ?? "Industry";

  return (
    <>
      <PageHero eyebrow={eyebrow} title={page.title} body={page.summary} image={page.image} />
      <section className="section">
        <div className="split">
          <div className="split-copy">
            <p className="eyebrow">{isService ? "How Aloha AVL helps" : "Designed for this environment"}</p>
            <h2>{isService ? "Complete support without unnecessary complexity." : "Technology that fits the daily rhythm of the space."}</h2>
            <p>
              Every Aloha AVL project starts with the room and the people who use it. The result is a system that feels natural to operate,
              supports the audience experience, and can be maintained after the installation is complete.
            </p>
          </div>
          <div>
            <SectionHeader title={isService ? "Core capabilities" : "Typical needs"} />
            <ul className="detail-list">
              {(service?.bullets ?? ["Clear audio coverage", "Reliable presentation and video", "Lighting and control that match the space"]).map(
                (item) => (
                  <li key={item}>{item}</li>
                ),
              )}
            </ul>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
