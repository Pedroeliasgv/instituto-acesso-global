import { ArrowUpRight } from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "eyebrow flex items-center gap-3 text-royal",
        className,
      )}
    >
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
};

export function Cta({
  href,
  children,
  variant = "solid",
  className,
}: CtaProps) {
  const styles = {
    solid:
      "bg-royal text-on-dark hover:bg-navy",
    light:
      "bg-on-dark text-navy hover:bg-mist",
    ghost:
      "border border-on-dark/40 text-on-dark hover:border-on-dark hover:bg-on-dark/10",
    outline:
      "border border-navy/25 text-navy hover:border-royal hover:text-royal",
  }[variant];

  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-3 px-7 py-4 text-[0.7rem] font-bold uppercase tracking-[0.2em] transition-all duration-300",
        styles,
        className,
      )}
    >
      {children}

      <ArrowUpRight
        size={16}
        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </a>
  );
}

export function Counter({
  to,
  suffix = "",
}: {
  to: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;

        io.disconnect();

        const start = performance.now();

        const tick = (time: number) => {
          const progress = Math.min(
            (time - start) / 1400,
            1,
          );

          const eased =
            1 - Math.pow(1 - progress, 3);

          setVal(Math.round(to * eased));

          if (progress < 1) {
            requestAnimationFrame(tick);
          }
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

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

      const progress =
        (rect.top +
          rect.height / 2 -
          window.innerHeight / 2) /
        window.innerHeight;

      setY(-progress * strength);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, [strength]);

  return (
    <div
      ref={wrap}
      className={cn("overflow-hidden", className)}
    >
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        className="h-[115%] w-full object-cover will-change-transform"
        style={{
          transform: `translate3d(0, ${
            y - strength / 2
          }px, 0)`,
        }}
      />
    </div>
  );
}