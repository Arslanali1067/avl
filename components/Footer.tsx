import Image from "next/image";
import Link from "next/link";
import { industries, services } from "@/lib/site-data";

const socialIcons = {
  Instagram: (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17" cy="7" r="0.8" />
    </svg>
  ),
  LinkedIn: (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 9h3v10H5z" />
      <path d="M6.5 5.2a1.7 1.7 0 1 1 0 3.4 1.7 1.7 0 0 1 0-3.4z" />
      <path d="M11 9h3v1.4c.6-.9 1.6-1.7 3.2-1.7 2.4 0 3.8 1.6 3.8 4.6V19h-3v-5.1c0-1.4-.5-2.3-1.8-2.3-1.2 0-2.2.8-2.2 2.5V19h-3z" />
    </svg>
  ),
  YouTube: (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M21 8.3a3 3 0 0 0-2.1-2.1C17 5.7 12 5.7 12 5.7s-5 0-6.9.5A3 3 0 0 0 3 8.3 31 31 0 0 0 3 15.7a3 3 0 0 0 2.1 2.1c1.9.5 6.9.5 6.9.5s5 0 6.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 0-7.4z" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  ),
  Email: (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  ),
};

export function Footer() {
  const socialLinks = [
    { label: "Instagram", href: "https://www.instagram.com/", icon: socialIcons.Instagram },
    { label: "LinkedIn", href: "https://www.linkedin.com/", icon: socialIcons.LinkedIn },
    { label: "YouTube", href: "https://www.youtube.com/", icon: socialIcons.YouTube },
    { label: "Email", href: "mailto:hello@alohaavl.com", icon: socialIcons.Email },
  ];

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <Image className="footer-logo" src="/aloha-avl-logo-light.png" alt="Aloha AVL" width={118} height={115} />
          <p className="muted">
            Custom audio, video, lighting, and control systems for venues, churches, schools, and corporate spaces.
          </p>
        </div>
        <div>
          <h2>Services</h2>
          {services.map((service) => (
            <Link href={`/${service.slug}`} key={service.slug}>
              {service.title}
            </Link>
          ))}
        </div>
        <div>
          <h2>Industries</h2>
          {industries.map((industry) => (
            <Link href={`/${industry.slug}`} key={industry.slug}>
              {industry.title}
            </Link>
          ))}
        </div>
        <div>
          <h2>Contact</h2>
          <p>Ohio and growing</p>
          <Link href="/contact">Start a project</Link>
          <div className="footer-socials" aria-label="Social links">
            {socialLinks.map((social) => {
              return (
                <Link aria-label={social.label} href={social.href} key={social.label}>
                  {social.icon}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Aloha AVL. All rights reserved.</p>
        <Link href="/privacy-policy">Privacy Policy</Link>
      </div>
    </footer>
  );
}
