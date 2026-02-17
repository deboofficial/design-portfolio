import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";
import { renderMDX } from "@/lib/mdx";
import { PageTransition } from "@/components/page-transition";
import { AnimatedLink } from "@/components/animated-link";

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

  const allProjects = getAllProjects();
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const nextProject = allProjects[currentIndex + 1] ?? allProjects[0];

  return (
    <PageTransition>
      <article className="max-w-[1200px] mx-auto px-6 pt-24 pb-16">
        {/* Header */}
        <header className="max-w-[680px] mb-12">
          <AnimatedLink
            href="/"
            className="text-[13px] text-muted mb-8 inline-block"
          >
            &larr; All projects
          </AnimatedLink>
          <h1 className="text-[clamp(1.75rem,4vw,2.5rem)] font-medium tracking-tight leading-[1.15] mb-4">
            {project.title}
          </h1>
          <p className="text-[15px] text-muted leading-relaxed mb-8">
            {project.description}
          </p>

          {/* Project meta */}
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-y border-border">
            <div>
              <dt className="text-[11px] uppercase tracking-wider text-muted mb-1">
                Role
              </dt>
              <dd className="text-[14px]">{project.role}</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-wider text-muted mb-1">
                Year
              </dt>
              <dd className="text-[14px]">{project.year}</dd>
            </div>
            {project.tags.length > 0 && (
              <div className="col-span-2">
                <dt className="text-[11px] uppercase tracking-wider text-muted mb-1">
                  Focus
                </dt>
                <dd className="text-[14px]">{project.tags.join(", ")}</dd>
              </div>
            )}
          </dl>
        </header>

        {/* Content */}
        <div className="prose max-w-[680px]">{content}</div>

        {/* Next project */}
        {nextProject && nextProject.slug !== slug && (
          <nav
            className="max-w-[680px] border-t border-border mt-24 pt-8"
            aria-label="Next project"
          >
            <span className="text-[11px] uppercase tracking-wider text-muted block mb-2">
              Next project
            </span>
            <AnimatedLink
              href={`/work/${nextProject.slug}`}
              className="text-[1.25rem] font-medium tracking-tight text-foreground"
            >
              {nextProject.title}
            </AnimatedLink>
          </nav>
        )}
      </article>
    </PageTransition>
  );
}
