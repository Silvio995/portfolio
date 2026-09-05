import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon } from "@/components/ArrowIcon";
import { getProject, projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return project ? { title: `${project.title} — Case Study`, description: project.shortDescription } : {};
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className={`case-study case-study--${project.accent}`}>
      <header className="site-header shell">
        <Link className="monogram" href="/">DEV<span>.</span></Link>
        <Link className="back-link" href="/#work"><span>←</span> All projects</Link>
      </header>

      <section className="case-hero shell">
        <div className="case-hero__meta"><span>CASE STUDY</span><span>•</span><span>{project.status}</span></div>
        <h1>{project.title}</h1>
        <p>{project.shortDescription}</p>
        <dl>
          <div><dt>Role / type</dt><dd>{project.role}</dd></div>
          <div><dt>Core stack</dt><dd>{project.technologies.slice(0, 4).join(" · ")}</dd></div>
        </dl>
      </section>

      <div className="case-layout shell">
        <aside>
          <p>On this page</p>
          <nav>{project.caseStudy.map((section) => <a key={section.id} href={`#${section.id}`}>{section.title}</a>)}</nav>
        </aside>
        <article className="case-content">
          {project.caseStudy.map((section, index) => (
            <section id={section.id} key={section.id}>
              <p className="section-number">{String(index + 1).padStart(2, "0")}</p>
              <div>
                <div className="case-title-row"><h2>{section.title}</h2>{section.temporary && <span className="draft-label">DETAILS PENDING</span>}</div>
                {section.body?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.items && <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
              </div>
            </section>
          ))}

          <section id="technologies">
            <p className="section-number">{String(project.caseStudy.length + 1).padStart(2, "0")}</p>
            <div><h2>Technologies</h2><ul className="tech-list tech-list--large">{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul></div>
          </section>

          {(project.repositoryUrl || project.liveUrl) && <section className="project-links">
            <p className="section-number">{String(project.caseStudy.length + 2).padStart(2, "0")}</p>
            <div><h2>Explore the project</h2>
              {project.repositoryUrl && <a href={project.repositoryUrl}>Repository <ArrowIcon diagonal /></a>}
              {project.liveUrl && <a href={project.liveUrl}>Live demo <ArrowIcon diagonal /></a>}
            </div>
          </section>}
        </article>
      </div>

      <footer className="case-footer shell"><Link href="/#work">← Back to selected work</Link></footer>
    </main>
  );
}
