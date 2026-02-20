import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";
import { renderMDX } from "@/lib/mdx";
import { PageTransition } from "@/components/page-transition";
import { FloatingButtons } from "@/components/floating-buttons";
import { TableOfContents } from "@/components/table-of-contents";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.thumbnail ? [project.thumbnail] : [],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const content = await renderMDX(project.content);

  // Extract headings from raw markdown for sidebar
  const headingRegex = /^#{1,6}\s+(.+)$/gm;
  const headings: { text: string; id: string }[] = [];
  let match;
  while ((match = headingRegex.exec(project.content)) !== null) {
    const text = match[1];
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
    headings.push({ text, id });
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#ffffff] dark:bg-[#0a0a0a]">
      <article className="w-[600px] max-w-full mx-auto px-6 pt-24 pb-32">
        {/* Title — h6 */}
        <h1 className="text-[14px] leading-[20px] font-[560] tracking-[-0.05px] text-[#090909] dark:text-[#e5e5e5] mb-1">
          {project.title}
        </h1>

        {/* Date — Body default, muted */}
        <p className="text-[14px] leading-[20px] font-[460] tracking-[-0.05px] text-[#989897] dark:text-[#999] mb-8">
          {project.date}
        </p>

        {/* Overview — body default */}
        <p className="text-[14px] leading-[20px] font-[460] tracking-[-0.05px] text-[#111111] dark:text-[#e5e5e5] mb-6">
          {project.overview}
        </p>

        {/* Placeholder after overview */}
        <div
          className="w-full rounded-sm bg-[#fafafa] dark:bg-[#141414] mb-10"
          style={{ aspectRatio: "16/9" }}
        />

        {/* Hero image/video slot */}
        {project.thumbnail && (
          <div className="relative overflow-hidden rounded-sm mb-10">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-auto"
            />
          </div>
        )}

        {/* Summary — body default */}
        <p className="text-[14px] leading-[20px] font-[460] tracking-[-0.05px] text-[#111111] dark:text-[#e5e5e5] mb-12">
          {project.summary}
        </p>

        {/* MDX content */}
        <div className="prose">{content}</div>

        <p className="text-[12px] leading-[17px] font-[460] tracking-[-0.05px] text-[#989897] dark:text-[#999] mt-24">
          All content, designs, and case studies on this website are my
          intellectual property. Unauthorised use, reproduction, or distribution
          of any material is strictly prohibited.
        </p>
      </article>

      <TableOfContents headings={headings} />
      <FloatingButtons showBack showSocials={false} />
      </div>
    </PageTransition>
  );
}
