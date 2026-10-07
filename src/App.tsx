import {
  About,
  Courses,
  Dores,
  Evanio,
  Faq,
  FinalCta,
  Footer,
  Header,
  Hero,
  HowItWorks,
  Intro,
  Marquee,
  Modules,
  Objections,
  Pricing,
  Presentation,
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
        const total =
          document.documentElement.scrollHeight - window.innerHeight;

        const next = total > 0 ? window.scrollY / total : 0;

        progressRef.current?.style.setProperty(
          "transform",
          `scaleX(${next})`,
        );
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
    const delay = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches
      ? 0
      : 700;

    const timeout = window.setTimeout(() => {
      setVisible(false);
    }, delay);

    return () => window.clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  return (
    <div aria-hidden="true" className="brand-intro">
      <span className="brand-intro-mark">AG</span>

      <span className="brand-intro-name">
        Instituto Acesso Global
      </span>
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
        {/* 01 — Hero / atenção */}
        <Hero />

        {/* 02 — Apresentação / posicionamento */}
        <Presentation />

        {/* 03 — Dor / identificação */}
        <Dores />

        {/* 04 — Transição */}
        <Marquee tone="light" />

        {/* 05 — Contexto / apresentação */}
        <Intro />

        {/* 06 — Produto principal */}
        <About />

        {/* 07 — O que você vai aprender */}
        <Modules />

        {/* 08 — Oferta / planos */}
        <Pricing />

        {/* 09 — Autoridade */}
        <Evanio />

        {/* 10 — Outros produtos */}
        <Courses />

        {/* 11 — Como funciona */}
        <HowItWorks />

        {/* 12 — Objeções */}
        <Objections />

        {/* 13 — CTA final */}
        <FinalCta />

        {/* 14 — FAQ */}
        <Faq />
      </main>

      <Footer />
    </>
  );
}

export default App;