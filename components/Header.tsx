"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/site-data";

export function Header() {
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Aloha AVL home">
        <Image src="/aloha-avl-logo.png" alt="Aloha AVL" width={70} height={68} priority />
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <Link className={`nav-link${isActive(item.href) ? " is-active" : ""}`} aria-current={isActive(item.href) ? "page" : undefined} key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <Link href="/contact" className="header-cta">
        Get a Quote
      </Link>
      <details className="mobile-menu">
        <summary aria-label="Open menu">
          <Menu className="menu-open" size={22} />
          <X className="menu-close" size={22} />
        </summary>
        <nav aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link className={isActive(item.href) ? "is-active" : ""} aria-current={isActive(item.href) ? "page" : undefined} key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/contact">Get a Quote</Link>
        </nav>
      </details>
    </header>
  );
}
