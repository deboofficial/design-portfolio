"use client";

import Link from "next/link";
import { ComponentProps } from "react";

type AnimatedLinkProps = ComponentProps<"a"> & {
  href: string;
};

export function AnimatedLink({
  href,
  children,
  className = "",
  ...props
}: AnimatedLinkProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  const linkClasses = `group relative inline-block cursor-pointer transition-colors duration-200 hover:text-foreground ${className}`;

  const underline = (
    <span className="absolute bottom-0 left-0 h-px w-0 bg-current transition-all duration-300 ease-out group-hover:w-full" />
  );

  if (isExternal) {
    return (
      <a href={href} className={linkClasses} {...props}>
        {children}
        {underline}
      </a>
    );
  }

  return (
    <Link href={href} className={linkClasses} {...props}>
      {children}
      {underline}
    </Link>
  );
}
