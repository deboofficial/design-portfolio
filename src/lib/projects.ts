import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Project {
  slug: string;
  title: string;
  description: string;
  role: string;
  year: string;
  thumbnail: string;
  tags: string[];
  order: number;
  featured: boolean;
}

export interface ProjectWithContent extends Project {
  content: string;
}

const projectsDirectory = path.join(process.cwd(), "src/content/projects");

export function getAllProjects(): Project[] {
  const fileNames = fs.readdirSync(projectsDirectory);
  const projects = fileNames
    .filter((name) => name.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title ?? "",
        description: data.description ?? "",
        role: data.role ?? "",
        year: data.year ?? "",
        thumbnail: data.thumbnail ?? "",
        tags: data.tags ?? [],
        order: data.order ?? 0,
        featured: data.featured ?? false,
      } as Project;
    });

  return projects.sort((a, b) => a.order - b.order);
}

export function getProjectBySlug(slug: string): ProjectWithContent | null {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title ?? "",
      description: data.description ?? "",
      role: data.role ?? "",
      year: data.year ?? "",
      thumbnail: data.thumbnail ?? "",
      tags: data.tags ?? [],
      order: data.order ?? 0,
      featured: data.featured ?? false,
      content,
    };
  } catch {
    return null;
  }
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured);
}
