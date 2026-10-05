import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("eyebrow flex items-center gap-3 text-royal", className)}>
      <span className="h-px w-8 bg-current" />
      {children}
    </p>
  );
}

type CtaProps = { href: string; children: ReactNode; variant?: "solid" | "ghost" | "outline" | "light"; className?: string };

export function Cta({ href, children, variant = "solid", className }: CtaProps) {
  const styles = {
    solid: "bg-royal text-on-dark hover:bg-navy",
    light: "bg-on-dark text-navy hover:bg-mist",
    ghost: "border border-on-dark/40 text-on-dark hover:border-on-dark hover:bg-on-dark/10",
    outline: "border border-navy/25 text-navy hover:border-royal hover:text-royal",
  }[variant];
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-3 px-7 py-4 text-[0.72rem] font-bold uppercase tracking-[0.2em] transition-all duration-300",
        styles,
        className,
      )}
    >
      {children}
      <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

/** Animated number that counts up once visible. */
export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e?.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (t: number) => {
        const p = Math.min((t - start) / 1400, 1);
        setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{String(val).padStart(2, "0")}{suffix}</span>;
}

/** Subtle vertical parallax on an image. */
export function ParallaxImage({ src, alt, className, strength = 40, eager }: { src: string; alt: string; className?: string; strength?: number; eager?: boolean }) {
  const wrap = useRef<HTMLDivElement>(null);
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = wrap.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const p = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
      setY(-p * strength);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [strength]);
  return (
    <div ref={wrap} className={cn("overflow-hidden", className)}>
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        className="h-[115%] w-full object-cover will-change-transform"
        style={{ transform: `translate3d(0, ${y - strength / 2}px, 0)` }}
      />
    </div>
  );
}
