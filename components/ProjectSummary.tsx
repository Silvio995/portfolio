import Link from "next/link";
import type { Project } from "@/data/projects";
import { ArrowIcon } from "./ArrowIcon";

export function ProjectSummary({ project }: { project: Project }) {
  return (
    <article className="project-summary">
      <div>
        <p className="eyebrow">{project.role}</p>
        <h3><Link href={`/projects/${project.slug}`}>{project.title} <ArrowIcon /></Link></h3>
      </div>
      <div>
        <p className="project-summary__description">{project.shortDescription}</p>
        <ul className="tech-list" aria-label={`${project.title} technologies`}>
          {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
      </div>
    </article>
  );
}
