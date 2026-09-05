import { SiteHeader } from "@/components/SiteHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero shell" id="top">
        <p className="kicker"><span /> Selected work · 2026</p>
        <h1>Building the systems<br />behind the <em>experience.</em></h1>
        <p className="hero__copy">Backend-focused software developer working across real-time systems, APIs, data, and full-stack products.</p>
      </section>

      <section className="work shell" id="work">
        <div className="section-heading">
          <div><p className="section-index">05 / FEATURED PROJECTS</p><h2>Selected work</h2></div>
          <p>A closer look at the products, systems, and collaborative work shaping my development practice.</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
        </div>
      </section>

      <section className="about shell" id="about">
        <p className="section-index">CURRENT FOCUS</p>
        <p>Designing reliable backend systems and documenting the decisions behind them.</p>
      </section>
    </main>
  );
}
