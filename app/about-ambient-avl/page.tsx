import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Headphones, Lightbulb, UsersRound, Wrench } from "lucide-react";
import { CTA } from "@/components/CTA";

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
    {
      icon: Wrench,
      title: "Support beyond install day",
      body: "We answer the phone after the job is done. Long-term relationships are the goal, not one-time transactions.",
    },
  ];

  const steps = [
    { num: "01", title: "Listen first", body: "We learn the room, the team, the expectations, and the pain points before talking gear." },
    { num: "02", title: "Design clearly", body: "We keep the signal path, controls, documentation, and physical installation understandable." },
    { num: "03", title: "Install carefully", body: "Every cable run, rack, and label is done like the next technician will have to service it." },
    { num: "04", title: "Stay useful", body: "We train, support, and adjust so the system continues to serve the people who rely on it." },
  ];

  return (
    <>
      {/* ── Hero ── */}
      <section className="services-hero">
        <div className="services-hero-inner">
          <p className="eyebrow">About Aloha AVL</p>
          <h1>Built by AVL people who know what showtime feels like.</h1>
          <p className="services-hero-sub">
            Aloha AVL designs, installs, rents, and supports audio, video, lighting, and control systems for teams that need dependable technology and practical guidance.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/contact">
              Work with us <ArrowRight size={18} />
            </Link>
            <Link className="button ghost" href="/projects">
              See our work
            </Link>
          </div>
        </div>
      </section>

      {/* ── Story / split ── */}
      <section className="section about-story">
        <div className="about-story-grid">
          <div className="about-story-copy">
            <p className="eyebrow">Our approach</p>
            <h2>We bring production experience into every design decision.</h2>
            <p>
              Because Aloha AVL supports live events as well as permanent installations, our recommendations are grounded in what works under pressure. We care about clean signal flow, clear documentation, operator confidence, and systems that remain useful long after the install is finished.
            </p>
            <ul className="about-checklist">
              <li><CheckCircle2 size={18} />Room-first system planning</li>
              <li><CheckCircle2 size={18} />Practical operator workflows</li>
              <li><CheckCircle2 size={18} />Support beyond installation day</li>
            </ul>
            <Link className="button primary" href="/contact">
              Start a conversation <ArrowRight size={17} />
            </Link>
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

      {/* ── Values ── */}
      <section className="section about-values">
        <div className="about-values-header">
          <p className="eyebrow">What guides the work</p>
          <h2>Technology should make the room easier to use, not harder.</h2>
          <p>A good AVL partner understands the experience, the infrastructure, and the people responsible for running it.</p>
        </div>
        <div className="about-value-grid">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <article className="about-value-card" key={value.title}>
                <Icon size={24} />
                <h3>{value.title}</h3>
                <p>{value.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* ── Process ── */}
      <section className="section about-process dark">
        <div className="about-process-header">
          <p className="eyebrow">How we work</p>
          <h2>Design the system around the moment it has to support.</h2>
          <p>Whether it is a Sunday service, a gala, a graduation, a training session, or a concert — the system should be ready before the pressure shows up.</p>
        </div>
        <div className="about-process-grid">
          {steps.map((step) => (
            <article className="about-process-card" key={step.num}>
              <span className="about-process-num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Photo band ── */}
      <section className="about-photo-band">
        <div className="about-photo-item">
          <Image src="/uploads/2025/10/FOH-w_Stage-2.jpg" alt="" fill sizes="25vw" />
        </div>
        <div className="about-photo-item">
          <Image src="/uploads/2025/10/Digico-Close-Up-1.jpg" alt="" fill sizes="25vw" />
        </div>
        <div className="about-photo-item">
          <Image src="/uploads/2025/11/Lights-in-a-row-1.jpg" alt="" fill sizes="25vw" />
        </div>
        <div className="about-photo-item">
          <Image src="/uploads/2025/10/Copy-of-QSC-Amp.jpg" alt="" fill sizes="25vw" />
        </div>
      </section>

      <CTA />
    </>
  );
}
