import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/ArrowIcon";
import { ProjectSummary } from "@/components/ProjectSummary";
import { SiteHeader, contactHref } from "@/components/SiteHeader";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "About | Silvio Mazza",
  description: "About Silvio Mazza, a Backend / Full-Stack Developer working with Node.js, TypeScript, Express, PostgreSQL, React and Next.js.",
};

const technicalFocus = {
  Backend: ["Node.js", "TypeScript", "Express", "REST APIs", "JWT", "Socket.IO", "WebSockets"],
  Data: ["PostgreSQL", "Prisma", "Sequelize", "MongoDB"],
  Frontend: ["React", "Next.js", "TypeScript", "HTML / CSS", "Tailwind CSS"],
  Engineering: ["Git", "GitHub", "Docker", "Linux", "Testing", "CI/CD"],
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader currentPage="about" />
      <main className="about-page shell">
        <section className="about-hero" aria-labelledby="about-title">
          <div>
            <p className="eyebrow">ABOUT</p>
            <h1 id="about-title">I build reliable web applications with a backend-first mindset.</h1>
            <p className="about-role">Silvio Mazza · Junior Backend / Full-Stack Developer</p>
            <div className="about-copy">
              <p>I&apos;m Silvio Mazza, a Backend / Full-Stack Developer based in Germany. I work primarily with Node.js, TypeScript, Express, APIs and databases, while also building modern interfaces with React and Next.js.</p>
              <p>My focus is on understanding how applications work beyond the interface: how data is modeled, how services communicate, how state is managed and how systems behave when multiple clients depend on them.</p>
            </div>
          </div>
          <Image className="about-portrait" src="/images/Silvio_Mazza_CV_Photo.png" alt="Portrait of Silvio Mazza" width={1106} height={1422} sizes="(max-width: 800px) min(320px, calc(100vw - 28px)), (max-width: 1100px) 320px, 360px" preload />
        </section>

        <section className="about-section about-background" aria-labelledby="background-title">
          <div className="section-heading"><h2 id="background-title">From operations to software engineering</h2></div>
          <div className="about-copy">
            <p>Before moving into software development, I worked in international logistics and operations environments in Germany, Poland and Italy. That experience taught me to work within structured processes, take responsibility for production-critical tasks and communicate clearly across teams.</p>
            <p>I later completed an intensive Software Development program at Digital Career Institute, covering full-stack development from JavaScript and TypeScript to backend APIs, databases, React, Next.js, testing, Docker and CI/CD.</p>
            <p>During my internship with CROWDS, I moved further toward backend engineering by working with a real-time multi-device platform and studying its backend architecture, Socket.IO communication, application state, persistence, recovery and frontend/backend integration.</p>
          </div>
        </section>

        <section className="about-section" aria-labelledby="focus-title">
          <div className="section-heading"><h2 id="focus-title">What I work with</h2></div>
          <div className="about-skills">
            {Object.entries(technicalFocus).map(([group, technologies]) => (
              <div key={group}>
                <h3>{group}</h3>
                <ul>{technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>

        <section className="about-section" aria-labelledby="selected-work-title">
          <div className="section-heading">
            <h2 id="selected-work-title">Selected work</h2>
            <p>These projects represent different parts of my development experience, from real-time backend systems to full-stack products.</p>
          </div>
          {projects.filter((project) => project.featured).map((project) => <ProjectSummary key={project.slug} project={project} />)}
        </section>

        <section className="about-section" aria-labelledby="direction-title">
          <div className="section-heading"><h2 id="direction-title">What I&apos;m looking for</h2></div>
          <div className="about-copy"><p>I&apos;m interested in Backend Developer and Full-Stack Developer opportunities where I can continue working with Node.js, TypeScript, APIs, databases and production web systems.</p></div>
          <div className="about-actions">
            <Link className="case-link" href="/#work">View Projects <ArrowIcon /></Link>
            <a className="nav-cta" href={contactHref}>Get in Touch <ArrowIcon diagonal /></a>
          </div>
        </section>
      </main>
    </>
  );
}
