import {
  About,
  Courses,
  Evanio,
  Experiences,
  Faq,
  Featured,
  FinalCta,
  Footer,
  Header,
  Hero,
  Intro,
  Journey,
  Methodology,
  Testimonials,
} from "@/components";
import { useRevealAll } from "@/hooks/use-reveal";
import { useEffect, useState } from "react";

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const next = total > 0 ? window.scrollY / total : 0;
      setProgress(next);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-[2px] bg-white/10">
      <div
        className="h-full origin-left bg-[radial-gradient(circle_at_left,_#a9b7ff,_#6c7cff_25%,_#2a2d63_100%)] shadow-[0_0_20px_rgba(122,167,255,0.9)] transition-transform duration-200"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}

function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [label, setLabel] = useState("VIEW");
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const handleMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setVisible(true);
    };

    const handleLeave = () => setVisible(false);

    const handleTarget = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const element = target?.closest("[data-cursor]") as HTMLElement | null;
      setLabel(element?.dataset.cursor ?? "VIEW");
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerover", handleTarget);
    window.addEventListener("pointerleave", handleLeave);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerover", handleTarget);
      window.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  if (typeof window !== "undefined" && !window.matchMedia("(pointer: fine)").matches) {
    return null;
  }

  return (
    <div
      className={[
        "pointer-events-none fixed left-0 top-0 z-[120] hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-[0.55rem] font-bold uppercase tracking-[0.24em] text-white backdrop-blur-md transition-opacity duration-300 md:flex",
        visible ? "opacity-100" : "opacity-0",
      ].join(" ")}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    >
      {label}
    </div>
  );
}

function App() {
  useRevealAll();

  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Header />

      <main>
        <Hero />
        <Intro />
        <About />
        <Methodology />
        <Featured />
        <Courses />
        <Evanio />
        <Experiences />
        <Journey />
        <Testimonials />
        <FinalCta />
        <Faq />
      </main>

      <Footer />
    </>
  );
}

export default App;