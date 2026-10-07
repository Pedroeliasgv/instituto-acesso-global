import { ArrowUpRight, Menu, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <a
      href="#inicio"
      className={cn("flex items-center gap-3 text-on-dark", className)}
      aria-label="Instituto Acesso Global — início"
    >
      <span className="grid h-9 w-9 place-items-center border border-current font-display text-sm font-bold">
        AG
      </span>
      <span className="leading-none">
        <span className="block text-[0.58rem] font-semibold uppercase tracking-[0.24em] opacity-60">
          Instituto
        </span>
        <span className="mt-1 block font-display text-sm font-bold uppercase tracking-[0.12em]">
          Acesso Global
        </span>
      </span>
    </a>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menuMounted, setMenuMounted] = useState(false);
  const [active, setActive] = useState("#inicio");
  const menuTriggerRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);
  const closeTimeoutRef = useRef<number | undefined>(undefined);

  const openMenu = useCallback(() => {
    window.clearTimeout(closeTimeoutRef.current);
    setMenuMounted(true);
    setOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setOpen(false);
    closeTimeoutRef.current = window.setTimeout(() => setMenuMounted(false), 350);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActive(`#${visible.target.id}`);
      },
      { threshold: [0.25, 0.5, 0.75], rootMargin: "-20% 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const trigger = menuTriggerRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstMenuLinkRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
        return;
      }

      if (event.key !== "Tab") return;
      const focusable = document.querySelectorAll<HTMLElement>(
        "#mobile-navigation a, #mobile-navigation button",
      );
      const first = focusable.item(0);
      const last = focusable.item(focusable.length - 1);

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      trigger?.focus();
    };
  }, [closeMenu, open]);

  useEffect(() => () => window.clearTimeout(closeTimeoutRef.current), []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[80] text-white transition-all duration-500",
        scrolled
          ? "border-b border-white/10 bg-[#080808]/85 py-3 backdrop-blur-xl"
          : "bg-transparent py-5 md:py-7",
      )}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-14">
        <Logo />

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={active === link.href ? "location" : undefined}
              className={cn(
                "link-underline text-[0.64rem] font-semibold uppercase tracking-[0.16em] transition-colors",
                active === link.href ? "text-white" : "text-white/60 hover:text-white",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#cursos"
            className="hidden items-center gap-2 bg-[#f4f1eb] px-4 py-3 text-[0.6rem] font-bold uppercase tracking-[0.12em] text-[#080808] transition-colors hover:bg-white sm:flex"
          >
            Inscreva-se
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>

          <button
            ref={menuTriggerRef}
            type="button"
            className="grid h-11 w-11 place-items-center text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:hidden"
            onClick={open ? closeMenu : openMenu}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuMounted && (
        <div
          id="mobile-navigation"
          aria-hidden={!open}
          inert={!open}
          className={cn(
            "mobile-navigation fixed inset-0 z-[90] flex min-h-svh flex-col overflow-y-auto bg-[#080808] px-5 pb-8 pt-6 text-white sm:px-8",
            open && "is-open",
          )}
        >
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              className="grid h-11 w-11 place-items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              onClick={closeMenu}
              aria-label="Fechar menu"
            >
              <X size={22} />
            </button>
          </div>

          <nav aria-label="Navegação móvel" className="my-auto flex flex-col py-12">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                ref={index === 0 ? firstMenuLinkRef : undefined}
                href={link.href}
                onClick={closeMenu}
                className="mobile-menu-link border-b border-white/15 py-3 font-display text-[clamp(2.3rem,9vw,5rem)] font-bold uppercase leading-[0.95] tracking-[-0.05em]"
                style={{ transitionDelay: `${index * 55}ms` }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#cursos"
            onClick={closeMenu}
            className="inline-flex items-center justify-between border-t border-white/20 py-5 text-xs font-bold uppercase tracking-[0.18em]"
          >
            Inscreva-se
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      )}
    </header>
  );
}
