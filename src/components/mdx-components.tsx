import Image from "next/image";
import { ImageGallery } from "./image-gallery";
import { VideoEmbed } from "./video-embed";
import type { MDXComponents } from "mdx/types";
import type { ReactNode } from "react";

function getTextContent(children: ReactNode): string {
  if (typeof children === "string") return children;
  if (typeof children === "number") return String(children);
  if (Array.isArray(children)) return children.map(getTextContent).join("");
  if (children && typeof children === "object" && "props" in children) {
    return getTextContent((children as { props: { children?: ReactNode } }).props.children);
  }
  return "";
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

const headingClass =
  "text-[14px] leading-[20px] font-[560] tracking-[-0.05px] text-[#090909] dark:text-[#e5e5e5] mt-[40px] mb-2";

function Heading({ as: Tag, ...props }: { as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"; children?: ReactNode; [key: string]: unknown }) {
  const id = slugify(getTextContent(props.children));
  return <Tag id={id} className={headingClass} {...props} />;
}

export const mdxComponents: MDXComponents = {
  h1: (props) => <Heading as="h1" {...props} />,
  h2: (props) => <Heading as="h2" {...props} />,
  h3: (props) => <Heading as="h3" {...props} />,
  h4: (props) => <Heading as="h4" {...props} />,
  h5: (props) => <Heading as="h5" {...props} />,
  h6: (props) => <Heading as="h6" {...props} />,
  p: (props) => (
    <p className="text-[14px] leading-[20px] font-[460] tracking-[-0.05px] text-[#111111] dark:text-[#e5e5e5] mb-5" {...props} />
  ),
  ul: (props) => <ul className="mb-5 pl-5 text-[14px] leading-[20px] font-[460] text-[#111111] dark:text-[#e5e5e5]" {...props} />,
  ol: (props) => <ol className="mb-5 pl-5 text-[14px] leading-[20px] font-[460] text-[#111111] dark:text-[#e5e5e5]" {...props} />,
  li: (props) => <li className="mb-1.5" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="border-l-2 border-border pl-5 my-8 text-[14px] leading-[20px] font-[460] text-[#747474] dark:text-[#999] italic"
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
  strong: (props) => <strong className="font-[600]" {...props} />,
  img: (props) => (
    <Image
      src={props.src ?? ""}
      alt={props.alt ?? ""}
      width={1200}
      height={750}
      className="rounded-sm my-8 w-full h-auto"
    />
  ),
  ImageGallery,
  VideoEmbed,
  PlaceholderImage: ({
    aspect = "16/9",
    caption,
  }: {
    aspect?: string;
    caption?: string;
  }) => (
    <figure className="my-8">
      <div
        className="w-full rounded-sm bg-[#fafafa] dark:bg-[#141414]"
        style={{ aspectRatio: aspect }}
      />
      {caption && (
        <figcaption className="text-[12px] leading-[17px] font-[460] tracking-[-0.05px] text-[#989897] dark:text-[#999] mt-4 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  ),
  Callout: ({
    children,
    type = "info",
  }: {
    children: React.ReactNode;
    type?: "info" | "warning";
  }) => (
    <aside
      className={`my-8 p-5 rounded-sm border text-[14px] leading-[20px] font-[460] ${
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
          <dt className="text-[11px] leading-[15px] font-[460] uppercase tracking-[-0.05px] text-[#747474] dark:text-[#999] mb-1">
            {item.label}
          </dt>
          <dd className="text-[14px] leading-[20px] font-[460] text-[#111111] dark:text-[#e5e5e5]">{item.value}</dd>
        </div>
      ))}
    </dl>
  ),
};
