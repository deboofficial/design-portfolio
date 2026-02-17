import Image from "next/image";
import { ImageGallery } from "./image-gallery";
import { VideoEmbed } from "./video-embed";
import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  // Override default elements with styled versions
  h1: (props) => (
    <h1
      className="text-[2rem] font-medium tracking-tight leading-[1.2] mt-12 mb-6"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="text-[1.375rem] font-medium tracking-tight leading-[1.3] mt-10 mb-4"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="text-[1.125rem] font-medium leading-[1.4] mt-8 mb-3"
      {...props}
    />
  ),
  p: (props) => (
    <p className="text-[15px] leading-[1.7] mb-5 text-foreground" {...props} />
  ),
  ul: (props) => <ul className="mb-5 pl-5 text-[15px] leading-[1.7]" {...props} />,
  ol: (props) => <ol className="mb-5 pl-5 text-[15px] leading-[1.7]" {...props} />,
  li: (props) => <li className="mb-1.5" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="border-l-2 border-border pl-5 my-8 text-muted italic"
      {...props}
    />
  ),
  hr: () => <hr className="border-t border-border my-12" />,
  a: (props) => (
    <a
      className="underline underline-offset-[3px] decoration-border hover:decoration-foreground transition-colors duration-200"
      {...props}
    />
  ),
  strong: (props) => <strong className="font-semibold" {...props} />,
  img: (props) => (
    <Image
      src={props.src ?? ""}
      alt={props.alt ?? ""}
      width={1200}
      height={750}
      className="rounded-sm my-8 w-full h-auto"
    />
  ),
  // Custom components available in MDX
  ImageGallery,
  VideoEmbed,
  Callout: ({
    children,
    type = "info",
  }: {
    children: React.ReactNode;
    type?: "info" | "warning";
  }) => (
    <aside
      className={`my-8 p-5 rounded-sm border text-[14px] leading-[1.6] ${
        type === "warning"
          ? "border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950"
          : "border-border bg-border/10"
      }`}
      role="note"
    >
      {children}
    </aside>
  ),
  ProjectMeta: ({
    items,
  }: {
    items: { label: string; value: string }[];
  }) => (
    <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6 my-8 py-6 border-y border-border">
      {items.map((item) => (
        <div key={item.label}>
          <dt className="text-[11px] uppercase tracking-wider text-muted mb-1">
            {item.label}
          </dt>
          <dd className="text-[14px] text-foreground">{item.value}</dd>
        </div>
      ))}
    </dl>
  ),
};
