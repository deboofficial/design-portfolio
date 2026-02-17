"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
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
        <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-border/30 mb-4">
          {project.thumbnail ? (
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.01]"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI3NTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2U1ZTVlNSIvPjwvc3ZnPg=="
            />
          ) : (
            <div className="absolute inset-0 bg-border/20" />
          )}
          <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/[0.02]" />
        </div>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-[15px] font-medium text-foreground mb-1">
              {project.title}
            </h3>
            <p className="text-[13px] text-muted leading-relaxed">
              {project.description}
            </p>
          </div>
          <span className="text-[12px] text-muted tabular-nums shrink-0 mt-0.5">
            {project.year}
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
