import { getAllProjects } from "@/lib/projects";
import { ProjectGrid } from "@/components/project-grid";
import { PageTransition } from "@/components/page-transition";

export default function HomePage() {
  const projects = getAllProjects();

  return (
    <PageTransition>
      <section className="max-w-[1200px] mx-auto px-6 pt-24 pb-16">
        <header className="max-w-[680px] mb-16">
          <h1 className="text-[clamp(1.75rem,4vw,2.5rem)] font-medium tracking-tight leading-[1.15] mb-4">
            Product Designer
          </h1>
          <p className="text-[15px] text-muted leading-relaxed max-w-[520px]">
            Crafting thoughtful, user-centered digital experiences.
            Currently open to new opportunities.
          </p>
        </header>
        <ProjectGrid projects={projects} />
      </section>
    </PageTransition>
  );
}
