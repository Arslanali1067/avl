import { CheckCircle2, Send } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";

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
      <PageHero
        eyebrow="Contact"
        title="Tell us what needs to work better."
        body="Whether you are planning a new installation, upgrading an existing system, renting gear, or staffing an event, Aloha AVL can help shape the next step."
        image="/uploads/2025/10/Copy-of-QSC-Amp.jpg"
        ctaLabel="Use the Form"
        ctaHref="#contact-form"
      />

      <section className="section contact-intake" id="contact-form">
        <div className="contact-grid">
          <aside className="contact-aside">
            <p className="eyebrow">Project intake</p>
            <h2>Share the essentials and we’ll follow up.</h2>
            <p>
              Tell us what kind of space or event you are working on, what is not working today, and what needs to happen next.
            </p>
            <ul className="contact-checklist">
              <li>
                <CheckCircle2 size={18} />
                Room or event type
              </li>
              <li>
                <CheckCircle2 size={18} />
                Desired timeline
              </li>
              <li>
                <CheckCircle2 size={18} />
                Audio, video, lighting, or control needs
              </li>
            </ul>
          </aside>
          <form className="contact-form contact-form-panel">
            <div className="form-row">
              <label>
                Name
                <input aria-label="Name" name="name" placeholder="Your name" />
              </label>
              <label>
                Email
                <input aria-label="Email" name="email" placeholder="you@example.com" type="email" />
              </label>
            </div>
            <label>
              Organization
              <input aria-label="Organization" name="organization" placeholder="Church, venue, school, company..." />
            </label>
            <div className="form-row">
              <label>
                Project type
                <select aria-label="Project type" name="projectType" defaultValue="">
                  <option value="" disabled>
                    Select one
                  </option>
                  <option>Design & Installation</option>
                  <option>Sales & Rentals</option>
                  <option>Live Event Support</option>
                  <option>Service or Support</option>
                </select>
              </label>
              <label>
                Timeline
                <select aria-label="Timeline" name="timeline" defaultValue="">
                  <option value="" disabled>
                    Select one
                  </option>
                  <option>As soon as possible</option>
                  <option>Next 1-3 months</option>
                  <option>Planning for later</option>
                  <option>Not sure yet</option>
                </select>
              </label>
            </div>
            <label>
              What are you working on?
              <textarea aria-label="Message" name="message" placeholder="Tell us about the room, event, system, pain points, or goals." />
            </label>
            <button className="button primary" type="button">
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </section>

      <section className="section contact-faq">
        <SectionHeader
          eyebrow="FAQ"
          title="A few things people ask before reaching out."
          body="You do not need to have everything figured out. These answers can help you frame the first conversation."
          align="split"
        />
        <div className="faq-list">
          {faqs.map((faq) => (
            <article className="faq-item" key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
