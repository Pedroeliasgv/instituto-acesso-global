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

function App() {
  useRevealAll();

  return (
    <>
      <ScrollProgress />
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