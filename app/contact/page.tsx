import { CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  const faqs = [
    {
      question: "What should I include in my message?",
      answer: "Share the room or event type, your timeline, what is not working today, and whether you need audio, video, lighting, control, rentals, or live support.",
    },
    {
      question: "Can you help if we are still early in planning?",
      answer: "Yes. Early conversations are useful because they help shape budget, infrastructure, schedule, and realistic system options before decisions get locked in.",
    },
    {
      question: "Do you handle both installations and live events?",
      answer: "Yes. Aloha AVL supports permanent system design and installation, equipment rentals, and live event technician support.",
    },
    {
      question: "Can you work with an existing system?",
      answer: "Yes. We can evaluate existing equipment, simplify controls, improve signal flow, replace weak points, or plan phased upgrades.",
    },
  ];

  return (
    <>
      {/* ── Hero ── */}
      <section className="services-hero">
        <div className="services-hero-inner">
          <p className="eyebrow">Contact</p>
          <h1>Tell us what needs to work better.</h1>
          <p className="services-hero-sub">
            Whether you are planning a new installation, upgrading an existing system, renting gear, or staffing an event — Aloha AVL can help shape the next step.
          </p>
        </div>
      </section>

      {/* ── Form + aside ── */}
      <section className="contact-main" id="contact-form">
        <div className="contact-main-inner">

          {/* Left aside */}
          <aside className="contact-aside-new">
            <div className="contact-aside-top">
              <p className="eyebrow">Project intake</p>
              <h2>Share the essentials and we'll follow up.</h2>
              <p>Tell us what kind of space or event you are working on, what is not working today, and what needs to happen next.</p>
              <ul className="contact-checklist">
                <li><CheckCircle2 size={17} />Room or event type</li>
                <li><CheckCircle2 size={17} />Desired timeline</li>
                <li><CheckCircle2 size={17} />Audio, video, lighting, or control needs</li>
              </ul>
            </div>
            <div className="contact-info-cards">
              <div className="contact-info-card">
                <Mail size={18} />
                <div>
                  <strong>Email</strong>
                  <span>hello@alohaavl.com</span>
                </div>
              </div>
              <div className="contact-info-card">
                <Phone size={18} />
                <div>
                  <strong>Phone</strong>
                  <span>(937) 555-0100</span>
                </div>
              </div>
              <div className="contact-info-card">
                <MapPin size={18} />
                <div>
                  <strong>Location</strong>
                  <span>Ohio and growing</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Form */}
          <form className="contact-form-new" id="form">
            <div className="contact-form-section">
              <h3>About you</h3>
              <div className="form-row">
                <label>
                  Name
                  <input name="name" placeholder="Your name" aria-label="Name" />
                </label>
                <label>
                  Email
                  <input name="email" type="email" placeholder="you@example.com" aria-label="Email" />
                </label>
              </div>
              <label>
                Organization
                <input name="organization" placeholder="Church, venue, school, company…" aria-label="Organization" />
              </label>
            </div>

            <div className="contact-form-divider" />

            <div className="contact-form-section">
              <h3>About the project</h3>
              <div className="form-row">
                <label>
                  Project type
                  <select name="projectType" defaultValue="" aria-label="Project type">
                    <option value="" disabled>Select one</option>
                    <option>Design &amp; Installation</option>
                    <option>Sales &amp; Rentals</option>
                    <option>Live Event Support</option>
                    <option>Service or Support</option>
                  </select>
                </label>
                <label>
                  Timeline
                  <select name="timeline" defaultValue="" aria-label="Timeline">
                    <option value="" disabled>Select one</option>
                    <option>As soon as possible</option>
                    <option>Next 1–3 months</option>
                    <option>Planning for later</option>
                    <option>Not sure yet</option>
                  </select>
                </label>
              </div>
              <label>
                What are you working on?
                <textarea name="message" placeholder="Tell us about the room, event, system, pain points, or goals." aria-label="Message" />
              </label>
            </div>

            <button className="button primary contact-submit" type="button">
              <Send size={17} />
              Send Message
            </button>
          </form>

        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="contact-faq-section">
        <div className="contact-faq-inner">
          <div className="contact-faq-header">
            <p className="eyebrow">FAQ</p>
            <h2>A few things people ask before reaching out.</h2>
            <p>You do not need to have everything figured out. These answers can help you frame the first conversation.</p>
          </div>
          <div className="faq-grid">
            {faqs.map((faq) => (
              <article className="faq-card" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
