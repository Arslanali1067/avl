import Image from "next/image";
import { CheckCircle2, Headphones, Lightbulb, UsersRound } from "lucide-react";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  const values = [
    {
      icon: Headphones,
      title: "Production-minded design",
      body: "Every recommendation is shaped by real rooms, real operators, and what has to happen when the audience arrives.",
    },
    {
      icon: UsersRound,
      title: "Clear handoff",
      body: "We care about training, documentation, and systems that make sense to the people who use them every week.",
    },
    {
      icon: Lightbulb,
      title: "Atmosphere with control",
      body: "Audio, video, lighting, and control are planned together so the room feels intentional instead of patched together.",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="About Aloha AVL"
        title="Built by AVL people who know what showtime feels like."
        body="Aloha AVL designs, installs, rents, and supports audio, video, lighting, and control systems for teams that need dependable technology and practical guidance."
        image="/uploads/2025/10/ambient_edited-1066.jpg"
      />
      <section className="section about-story">
        <div className="about-story-grid">
          <div className="split-copy">
            <p className="eyebrow">Our approach</p>
            <h2>We bring production experience into every design decision.</h2>
            <p>
              Because Aloha AVL supports live events as well as permanent installations, our recommendations are grounded in what works under
              pressure. We care about clean signal flow, clear documentation, operator confidence, and systems that remain useful long after
              the install is finished.
            </p>
            <ul className="about-checklist">
              <li>
                <CheckCircle2 size={19} />
                Room-first system planning
              </li>
              <li>
                <CheckCircle2 size={19} />
                Practical operator workflows
              </li>
              <li>
                <CheckCircle2 size={19} />
                Support beyond installation day
              </li>
            </ul>
          </div>
          <div className="about-image-stack">
            <div className="about-image-large">
              <Image src="/uploads/2025/10/ambient_edited-1067.jpg" alt="" fill sizes="(max-width: 900px) 100vw, 44vw" />
            </div>
            <div className="about-image-small">
              <Image src="/uploads/2025/11/Tim-Drilling.jpg" alt="" fill sizes="(max-width: 900px) 70vw, 22vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="section about-values">
        <SectionHeader
          eyebrow="What guides the work"
          title="Technology should make the room easier to use, not harder."
          body="A good AVL partner understands the experience, the infrastructure, and the people responsible for running it."
          align="split"
        />
        <div className="about-value-grid">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <article className="about-value-card" key={value.title}>
                <Icon size={25} />
                <h3>{value.title}</h3>
                <p>{value.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section about-proof dark">
        <SectionHeader
          eyebrow="How we think"
          title="Design the system around the moment it has to support."
          body="Whether it is a Sunday service, a gala, a graduation, a training session, or a concert, the system should be ready before the pressure shows up."
          align="split"
          tone="dark"
        />
        <div className="about-proof-grid">
          <article>
            <strong>01</strong>
            <h3>Listen first</h3>
            <p>We learn the room, the team, the expectations, and the pain points before talking gear.</p>
          </article>
          <article>
            <strong>02</strong>
            <h3>Build clearly</h3>
            <p>We keep the signal path, controls, documentation, and physical installation understandable.</p>
          </article>
          <article>
            <strong>03</strong>
            <h3>Stay useful</h3>
            <p>We train, support, and adjust so the system continues to serve the people who rely on it.</p>
          </article>
        </div>
      </section>
      <CTA />
    </>
  );
}
