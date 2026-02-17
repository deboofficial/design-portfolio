"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Work" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-12">
        <Link
          href="/"
          className="text-[15px] font-medium tracking-tight text-foreground hover:opacity-70 transition-opacity duration-200"
        >
          Portfolio
        </Link>
        <ul className="flex items-center gap-8">
          {links.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`relative text-[14px] transition-all duration-200 ${
                    isActive
                      ? "text-foreground font-medium"
                      : "text-muted hover:text-foreground font-normal"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
