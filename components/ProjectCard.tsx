import Link from "next/link";
import type { Project } from "@/data/projects";
import { ArrowIcon } from "./ArrowIcon";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className={`project-card project-card--${project.accent} ${project.priority === "primary" ? "project-card--primary" : ""}`}>
      <div className="project-card__top">
        <span className="project-card__number">0{index + 1}</span>
        {project.status && <span className="status"><i />{project.status}</span>}
      </div>
      <div className="project-card__body">
        <p className="eyebrow">{project.role}</p>
        <h3>{project.title}</h3>
        <p className="project-card__description">{project.shortDescription}</p>
      </div>
      <div className="project-card__footer">
        <ul className="tech-list" aria-label="Technologies">
          {project.technologies.slice(0, project.priority === "primary" ? 4 : 3).map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        <div className="project-card__actions">
          {project.repositoryUrl && <a href={project.repositoryUrl} target="_blank" rel="noreferrer">Repository <ArrowIcon diagonal /></a>}
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live <ArrowIcon diagonal /></a>}
          <Link className="case-link" href={`/projects/${project.slug}`}>View case study <ArrowIcon /></Link>
        </div>
      </div>
    </article>
  );
}
