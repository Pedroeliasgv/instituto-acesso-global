import {
  About,
  Courses,
  Evanio,
  Faq,
  FinalCta,
  Footer,
  Header,
  Hero,
  Intro,
  Marquee,
  Manifesto,
  Methodology,
  CinematicImage,
} from "@/components";
import { useRevealAll } from "@/hooks/use-reveal";
import { useEffect, useRef, useState } from "react";

function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const total = document.documentElement.scrollHeight - window.innerHeight;
        const next = total > 0 ? window.scrollY / total : 0;
        progressRef.current?.style.setProperty("transform", `scaleX(${next})`);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-px bg-white/10"
    >
      <div
        ref={progressRef}
        className="h-full origin-left bg-[#bcb8b1]"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}

function BrandIntro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const delay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 700;
    const timeout = window.setTimeout(() => setVisible(false), delay);
    return () => window.clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  return (
    <div aria-hidden="true" className="brand-intro">
      <span className="brand-intro-mark">AG</span>
      <span className="brand-intro-name">Instituto Acesso Global</span>
    </div>
  );
}

function App() {
  useRevealAll();

  return (
    <>
      <BrandIntro />
      <ScrollProgress />
      <Header />

      <main>
        <Hero />
        <Intro />
        <Marquee tone="light" />
        <About />
        <Manifesto />
        <Marquee tone="dark" reverse />
        <Methodology />
        <CinematicImage />
        <Evanio />
        <Courses />
        <FinalCta />
        <Faq />
      </main>

      <Footer />
    </>
  );
}

export default App;