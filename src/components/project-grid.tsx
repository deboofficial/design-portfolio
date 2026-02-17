"use client";

import { ProjectCard } from "./project-card";
import type { Project } from "@/lib/projects";

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16"
      role="list"
      aria-label="Projects"
    >
      {projects.map((project, index) => (
        <div key={project.slug} role="listitem">
          <ProjectCard project={project} index={index} />
        </div>
      ))}
    </div>
  );
}
