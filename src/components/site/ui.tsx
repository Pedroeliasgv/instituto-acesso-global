import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("eyebrow flex items-center gap-3 text-[#5b5fe0]", className)}>
      <span className="h-px w-8 bg-current" />
      {children}
    </p>
  );
}

type CtaProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost" | "outline" | "light";
  className?: string;
  target?: string;
  rel?: string;
};

export function Cta({ href, children, variant = "solid", className, target, rel }: CtaProps) {
  const styles = {
    solid: "bg-[#080808] text-white hover:bg-[#34312d]",
    light: "bg-[#f4f1eb] text-[#080808] hover:bg-white",
    ghost: "border border-white/40 text-white hover:bg-white/10",
    outline: "border border-[#080808]/40 text-[#080808] hover:border-[#6f6b65] hover:text-[#6f6b65]",
  }[variant];

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={cn(
        "group inline-flex items-center justify-center gap-3 px-7 py-4 text-[0.72rem] font-bold uppercase tracking-[0.2em] transition-all duration-300",
        styles,
        className,
      )}
      aria-label={typeof children === "string" ? children : undefined}
    >
      {children}
      <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
    </a>
  );
}

export function ParallaxImage({
  src,
  alt,
  className,
  strength = 40,
  eager,
}: {
  src: string;
  alt: string;
  className?: string;
  strength?: number;
  eager?: boolean;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const image = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let frame = 0;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
      const el = wrap.current;
        const img = image.current;
        if (!el || !img) return;
        if (reducedMotion.matches) {
          img.style.transform = "translate3d(0, 0, 0) scale(1)";
          return;
        }

      const rect = el.getBoundingClientRect();
        const progress = Math.min(
          1,
          Math.max(-1, (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight),
        );
        img.style.transform = `translate3d(0, ${-progress * strength - strength / 2}px, 0) scale(1.04)`;
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    reducedMotion.addEventListener("change", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      reducedMotion.removeEventListener("change", update);
    };
  }, [strength]);

  return (
    <div ref={wrap} className={cn("parallax-image overflow-hidden", className)}>
      <img
        ref={image}
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        className="h-[115%] w-full object-cover will-change-transform"
        style={{ transform: "translate3d(0, 0, 0) scale(1.04)" }}
      />
    </div>
  );
}
