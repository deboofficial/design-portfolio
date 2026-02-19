"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

interface WorkGridProps {
  projects: Project[];
}

const PLACEHOLDER_ASPECTS = ["4/3", "3/4", "1/1", "16/10", "5/4", "3/2"];

function ProjectItem({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      role="listitem"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <Link
        href={`/work/${project.slug}`}
        className="group block cursor-pointer"
        aria-label={`View ${project.title} case study`}
      >
        <div className="rounded-sm bg-[#f4f4f4] dark:bg-[#141414] p-6 transition-all duration-300 ease-out group-hover:bg-[#eeeeee] dark:group-hover:bg-[#1a1a1a] group-hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] dark:group-hover:shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
          <div className="flex items-baseline justify-between mb-4">
            <span className="text-[13px] text-[#999] dark:text-[#555]">
              {project.title}
            </span>
            <span className="text-[12px] font-mono text-[#bbb] dark:text-[#444] tabular-nums">
              {project.year}
            </span>
          </div>
          {project.thumbnail ? (
            <div className="relative overflow-hidden rounded-sm bg-white dark:bg-[#1a1a1a] shadow-[0_1px_3px_rgba(0,0,0,0.04)] dark:shadow-[0_1px_3px_rgba(0,0,0,0.2)]">
              <Image
                src={project.thumbnail}
                alt={project.title}
                width={800}
                height={500}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-[1.01]"
              />
            </div>
          ) : (
            <div
              style={{ aspectRatio: PLACEHOLDER_ASPECTS[project.order % PLACEHOLDER_ASPECTS.length] }}
            />
          )}
        </div>
      </Link>
    </motion.div>
  );
}

export function WorkGrid({ projects }: WorkGridProps) {
  const columns: Project[][] = [[], [], []];
  projects.forEach((project, i) => {
    columns[i % 3].push(project);
  });

  return (
    <>
      {/* Mobile: single column */}
      <div
        className="flex flex-col gap-1 p-1 md:hidden"
        role="list"
        aria-label="Projects"
      >
        {projects.map((project, i) => (
          <ProjectItem key={project.slug} project={project} index={i} />
        ))}
      </div>

      {/* Desktop: 3 columns */}
      <div
        className="hidden md:grid grid-cols-3 gap-1 p-1"
        role="list"
        aria-label="Projects"
      >
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-1">
            {column.map((project, i) => (
              <ProjectItem
                key={project.slug}
                project={project}
                index={colIndex * column.length + i}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
