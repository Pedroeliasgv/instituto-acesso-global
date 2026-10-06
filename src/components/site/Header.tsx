import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <a
      href="#inicio"
      className={cn("flex items-center gap-3", className)}
      aria-label="Instituto Acesso Global — início"
    >
      <span className="grid h-9 w-9 place-items-center border border-current font-display text-sm font-bold">
        AG
      </span>

      <span className="leading-none">
        <span className="block font-display text-sm font-bold uppercase tracking-[0.18em]">
          Acesso Global
        </span>

        <span className="mt-1 block text-[0.6rem] font-semibold uppercase tracking-[0.3em] opacity-70">
          Instituto
        </span>
      </span>
    </a>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => link.href)
      .filter((href) => href.startsWith("#"))
      .map((href) => document.querySelector(href))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActive(`#${visible.target.id}`);
        }
      },
      { threshold: [0.25, 0.5, 0.75], rootMargin: "-15% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 text-on-dark transition-all duration-500",
        scrolled ? "border-b border-line-dark bg-abyss/85 py-3 backdrop-blur-xl" : "py-6",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 md:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => {
            const isActive = active === l.href;

            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative link-underline text-[0.72rem] font-semibold uppercase tracking-[0.2em] transition-colors",
                  isActive ? "text-on-dark" : "text-on-dark-muted hover:text-on-dark",
                )}
              >
                {l.label}
                <span
                  className={cn(
                    "absolute -bottom-3 left-0 h-px bg-azure transition-all duration-300",
                    isActive ? "w-full" : "w-0",
                  )}
                />
              </a>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <a href="#aluno" className="hidden border border-on-dark/40 px-5 py-2.5 text-[0.68rem] font-bold uppercase tracking-[0.2em] transition-colors hover:border-azure hover:bg-royal sm:inline-block">
            Área do aluno
          </a>
          <button className="p-2 lg:hidden" onClick={() => setOpen(!open)} aria-label="Abrir menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div className={cn("overflow-hidden bg-abyss transition-[max-height] duration-500 lg:hidden", open ? "max-h-[80vh]" : "max-h-0")}>
        <nav className="flex flex-col px-5 py-6">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="border-b border-line-dark py-4 font-display text-2xl font-bold uppercase">
              {l.label}
            </a>
          ))}
          <a href="#aluno" className="mt-6 bg-royal py-4 text-center text-xs font-bold uppercase tracking-[0.2em]">Acessar área do aluno</a>
        </nav>
      </div>
    </header>
  );
}
