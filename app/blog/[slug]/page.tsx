import Image from "next/image";
import { notFound } from "next/navigation";
import { CTA } from "@/components/CTA";
import { posts } from "@/lib/site-data";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

type RouteParams = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: RouteParams }) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  return {
    title: post?.title ?? "Blog",
    description: post?.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: RouteParams }) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <section className="post-hero">
        <Image src={post.image} alt="" fill sizes="100vw" priority />
        <div>
          <p className="eyebrow">{post.date}</p>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
        </div>
      </section>
      <article className="post-body">
        <p>
          Aloha AVL projects are built around the same principle: the technology should support the people in the room without distracting
          from the moment. For this installation, the team focused on reliable audio coverage, clear video presentation, practical lighting,
          and controls that make sense for day-to-day use.
        </p>
        <p>
          The result is an AVL environment that can flex for services, events, meetings, performances, and special productions while staying
          approachable for the people responsible for running it.
        </p>
      </article>
      <CTA />
    </>
  );
}
