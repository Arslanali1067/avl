import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Headphones, Lightbulb, RadioTower, Video } from "lucide-react";
import { CTA } from "@/components/CTA";
import { CardGrid } from "@/components/CardGrid";
import { SectionHeader } from "@/components/SectionHeader";
import { industries, processSteps, projects, services } from "@/lib/site-data";

export default function Home() {
  const featuredProject = projects[1];
  const productionPillars = [
    { icon: Headphones, title: "Audio", body: "Coverage, clarity, control, and mix positions that make sense." },
    { icon: Video, title: "Video", body: "Screens, cameras, signal flow, and presentation systems that stay dependable." },
    { icon: Lightbulb, title: "Lighting", body: "Looks, safety, mood, and practical operation for every kind of room." },
    { icon: RadioTower, title: "Support", body: "Training, rentals, live technicians, and follow-up when the doors open." },
  ];

  return (
    <>
      <section className="home-hero">
        <div className="home-hero-inner">
          <div className="hero-copy-panel">
            <div className="hero-copy">
              <p className="eyebrow">Audio · Video · Lighting · Production Support</p>
              <h1>Make the room feel ready before anyone walks in.</h1>
              <p>
                Aloha AVL designs and supports integrated systems for worship, venues, schools, corporate spaces, and live events where
                clarity and atmosphere have to show up together.
              </p>
              <div className="hero-actions">
                <Link className="button primary" href="/contact">
                  Start a Project
                  <ArrowRight size={18} />
                </Link>
                <Link className="button ghost" href="/projects">
                  See the Work
                </Link>
              </div>
            </div>
            <div className="hero-metrics">
              <div className="hero-metric">
                <strong>AVL</strong>
                <span>Design + Install</span>
              </div>
              <div className="hero-metric">
                <strong>Live</strong>
                <span>Event Support</span>
              </div>
              <div className="hero-metric">
                <strong>Rooms</strong>
                <span>Built for Operators</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-visual-main">
              <video
                className="hero-video"
                src="/bg-video.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        </div>
      </section>

      <section className="home-intro">
        <div>
          <p className="eyebrow">Built for operators and audiences</p>
          <h2>Reliable systems with the atmosphere dialed in.</h2>
        </div>
        <p>
          The best AVL disappears into the experience. We plan the technical backbone, the operator workflow, and the room feel together so
          your team is not fighting the gear when the room is full.
        </p>
      </section>

      <section className="section home-pillars-section">
        <div className="pillar-grid">
          {productionPillars.map((item) => {
            const Icon = item.icon;
            return (
              <article className="pillar-card" key={item.title}>
                <Icon size={24} />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section service-showcase">
        <SectionHeader
          eyebrow="What we do"
          title="One team for the whole AVL path."
          body="From permanent integrations to live production support, Aloha AVL keeps the technology focused on the experience."
          align="split"
        />
        <div className="service-lanes">
          {services.map((service, index) => (
            <Link className="service-lane" href={`/${service.slug}`} key={service.slug}>
              <span className="service-index">{String(index + 1).padStart(2, "0")}</span>
              <span className="service-lane-copy">
                <strong>{service.title}</strong>
                <span>{service.summary}</span>
              </span>
              <span className="service-lane-image">
                <Image src={service.image} alt="" fill sizes="(max-width: 900px) 100vw, 28vw" />
              </span>
              <ArrowRight size={22} />
            </Link>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="split">
          <div className="split-copy">
            <p className="eyebrow">What makes us different</p>
            <h2>Designed like a system. Supported like a relationship.</h2>
            <p>
              We look at the space, workflow, operators, and audience before choosing gear. That keeps systems reliable, understandable,
              and ready for the next event, service, class, or meeting.
            </p>
          </div>
          <div className="split-media">
            <Image src="/uploads/2025/11/Tim-Drilling.jpg" alt="" fill sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      <section className="section dark">
        <SectionHeader
          eyebrow="Our process"
          title="Clear steps from first conversation to long-term support."
          body="A good system is not just purchased. It is understood, scoped, installed, and cared for."
          align="split"
          tone="dark"
        />
        <div className="process-grid">
          {processSteps.map(([title, body]) => (
            <article className="process-card" key={title}>
              <strong>{title}</strong>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section industry-band">
        <SectionHeader
          eyebrow="Industries"
          title="Spaces we serve"
          body="Focused AVL solutions for different kinds of teams and audiences."
          align="center"
        />
        <CardGrid items={industries.map((item) => ({ ...item, href: `/${item.slug}` }))} />
      </section>

      <section className="section featured-work">
        <SectionHeader
          eyebrow="Featured work"
          title="Recent projects"
          body="A few rooms where Aloha AVL helped bring sound, image, light, and control together."
          align="split"
          tone="dark"
        />
        <div className="project-feature">
          <Link className="project-feature-media" href={`/projects/${featuredProject.slug}`}>
            <Image src={featuredProject.image} alt="" fill sizes="(max-width: 900px) 100vw, 58vw" />
          </Link>
          <div className="project-feature-copy">
            <p className="eyebrow">{featuredProject.category}</p>
            <h3>{featuredProject.title}</h3>
            <p>{featuredProject.summary}</p>
            <Link className="button primary" href={`/projects/${featuredProject.slug}`}>
              View Case Study
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
        <div className="project-rack">
          {projects
            .filter((item) => item.slug !== featuredProject.slug)
            .slice(0, 4)
            .map((project) => (
              <Link href={`/projects/${project.slug}`} key={project.slug}>
                <span>{project.category}</span>
                <strong>{project.title}</strong>
              </Link>
            ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
