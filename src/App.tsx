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
  Methodology,
} from "@/components";

import { useRevealAll } from "@/hooks/use-reveal";

function App() {
  useRevealAll();

  return (
    <>
      <Header />

      <main>
        <Hero />
        <Intro />
        <About />
        <Courses />
        <Evanio />
        <Methodology />
        <Faq />
        <FinalCta />
      </main>

      <Footer />
    </>
  );
}

export default App;