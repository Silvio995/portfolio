export type ProjectStatus = "In progress" | "Live" | "Completed";

export type CaseStudySection = {
  id: "overview" | "role" | "context" | "architecture" | "built" | "decisions" | "challenges";
  title: string;
  body?: string[];
  items?: string[];
  temporary?: boolean;
};

export type Project = {
  title: string;
  slug: string;
  shortDescription: string;
  role: string;
  status?: ProjectStatus;
  technologies: string[];
  highlights?: string[];
  architecture?: string[];
  repositoryUrl?: string;
  liveUrl?: string;
  images?: { src: string; alt: string; caption?: string }[];
  featured: boolean;
  priority: "primary" | "featured" | "supporting";
  accent: "lime" | "violet" | "coral" | "sky";
  caseStudy: CaseStudySection[];
};

export const projects: Project[] = [
  {
    title: "CROWDS",
    slug: "crowds",
    shortDescription: "A real-time application being developed during my software development internship, with a focus on backend communication, state, and persistence.",
    role: "Backend development · Internship project",
    status: "In progress",
    technologies: ["Node.js", "Socket.IO", "MongoDB", "Real-time systems"],
    featured: true,
    priority: "primary",
    accent: "lime",
    caseStudy: [
      {
        id: "overview",
        title: "Overview",
        body: ["CROWDS is a real-time application I am working on during my software development internship. The work involves backend communication, shared application state, persistence, and reconnect/recovery behaviour."],
      },
      {
        id: "role",
        title: "My Role",
        body: ["This project is being developed as part of my software development internship."],
      },
      {
        id: "context",
        title: "Problem / Context",
        body: ["A detailed description of the product context will be added after the project information can be reviewed and shared accurately."],
        temporary: true,
      },
      {
        id: "architecture",
        title: "Architecture",
        items: ["Node.js backend", "Socket.IO real-time communication", "MongoDB persistence", "Controller/client communication", "Shared application state", "Reconnect and recovery behaviour"],
      },
    ],
  },
  {
    title: "Aura Drinks",
    slug: "aura-drinks",
    shortDescription: "A full-stack e-commerce application presented through the backend systems I was primarily responsible for building.",
    role: "Primary backend developer · Full-stack project",
    status: "Completed",
    technologies: ["Node.js", "TypeScript", "Express", "PostgreSQL", "Prisma", "JWT", "PayPal Sandbox"],
    featured: true,
    priority: "featured",
    accent: "violet",
    caseStudy: [
      {
        id: "overview",
        title: "Overview",
        body: ["Aura Drinks is a full-stack e-commerce project where my primary responsibility was backend development."],
      },
      {
        id: "role",
        title: "My Role",
        body: ["I worked primarily on the backend side of the application."],
      },
      {
        id: "built",
        title: "Backend Scope",
        items: ["REST API", "Authentication and authorization", "Product and catalog endpoints", "Order management", "Relational database modeling", "PayPal Sandbox integration", "Frontend/backend integration"],
      },
      {
        id: "architecture",
        title: "Architecture",
        body: ["The detailed request flow, data model, and architectural rationale will be documented after the repository review."],
        temporary: true,
      },
    ],
  },
  {
    title: "Marihandmade",
    slug: "marihandmade",
    shortDescription: "A real e-commerce application with separate customer storefront and administration functionality.",
    role: "Full-stack development · Deployed application",
    status: "Live",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Supabase", "Vercel"],
    featured: true,
    priority: "featured",
    accent: "coral",
    caseStudy: [
      {
        id: "overview",
        title: "Overview",
        body: ["Marihandmade is a real e-commerce application with separate storefront and administration functionality."],
      },
      {
        id: "context",
        title: "Project Context",
        body: ["This is a deployed application rather than only a learning exercise. Architecture and implementation details will be added after an accurate repository review."],
        temporary: true,
      },
    ],
  },
  {
    title: "Sweater Weather",
    slug: "sweater-weather",
    shortDescription: "A collaborative React application built from an existing repository, demonstrating frontend delivery and team codebase experience.",
    role: "Frontend development · Collaborative project",
    status: "Completed",
    technologies: ["React", "Vite", "Git", "GitHub", "Deployment"],
    featured: true,
    priority: "supporting",
    accent: "sky",
    caseStudy: [
      {
        id: "overview",
        title: "Overview",
        body: ["Sweater Weather is a React/Vite project developed collaboratively from an existing repository."],
      },
      {
        id: "built",
        title: "Project Scope",
        items: ["Frontend application architecture", "Component work", "Git/GitHub collaboration", "Working with an existing codebase", "Deployment"],
      },
      {
        id: "role",
        title: "My Role",
        body: ["Specific contributions will be documented after the repository history has been reviewed."],
        temporary: true,
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
