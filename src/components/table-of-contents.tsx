"use client";

import { useState, useEffect } from "react";

export interface TOCItem {
  text: string;
  id: string;
}

export function TableOfContents({ headings }: { headings: TOCItem[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="hidden xl:block fixed top-24 w-[160px] right-[calc(50%+348px)]">
      <a
        href="#"
        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        className="block text-[12px] leading-[17px] font-[460] tracking-[-0.05px] text-[#b4b4b4] dark:text-[#555] hover:text-[#111111] dark:hover:text-[#e5e5e5] transition-colors duration-200 mb-[24px]"
      >
        Top
      </a>
      <ul className="space-y-1.5">
        {headings.map(({ text, id }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`block text-[12px] leading-[17px] font-[460] tracking-[-0.05px] transition-colors duration-200 ${
                activeId === id
                  ? "text-[#111111] dark:text-[#e5e5e5]"
                  : "text-[#b4b4b4] dark:text-[#555] hover:text-[#111111] dark:hover:text-[#e5e5e5]"
              }`}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
