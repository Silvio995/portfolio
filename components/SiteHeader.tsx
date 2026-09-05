import Link from "next/link";

export const contactHref = "mailto:mazzasilvio19@gmail.com";

export function SiteHeader({ currentPage }: { currentPage?: "about" }) {
  return (
    <header className="site-header shell">
      <Link className="monogram" href="/" aria-label="Home">DEV<span>.</span></Link>
      <nav aria-label="Primary navigation">
        <Link href="/#work">Work</Link>
        <Link href="/about" aria-current={currentPage === "about" ? "page" : undefined}>About</Link>
        <a className="nav-cta" href={contactHref}>Let&apos;s talk</a>
      </nav>
    </header>
  );
}
