import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
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
    solid: "bg-[#5b5fe0] text-white hover:bg-[#4a50d8]",
    light: "bg-white text-[#080808] hover:bg-[#eef0ff]",
    ghost: "border border-white/40 text-white hover:bg-white/5",
    outline: "border border-[#111827] text-[#111827] hover:border-[#5b5fe0] hover:text-[#5b5fe0]",
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
    >
      {children}
      <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      io.disconnect();

      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / 1400, 1);
        setVal(Math.round(to * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    });

    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return (
    <span ref={ref}>
      {String(val).padStart(2, "0")}
      {suffix}
    </span>
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
  const [y, setY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = wrap.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const progress = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
      setY(-progress * strength);
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
        style={{ transform: `translate3d(0, ${y - strength / 2}px, 0) scale(1.04)` }}
      />
    </div>
  );
}
