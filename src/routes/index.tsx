import { createFileRoute } from "@tanstack/react-router";
import { Courses } from "@/components/site/Courses";
import { Header } from "@/components/site/Header";
import { About, Evanio, Experiences, Faq, FinalCta, Featured, Footer, Hero, Intro, Journey, Methodology, Testimonials } from "@/components/site/Sections";
import { useRevealAll } from "@/hooks/use-reveal";

const title = "Profeta Evanio Vale — Instituto de Formação";
const description = "Cursos, formações, eventos e conteúdos do Profeta Evanio Vale. Uma jornada de formação para quem foi chamado a crescer.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useRevealAll();
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <About />
        <Evanio />
        <Methodology />
        <Courses />
        <Featured />
        <Journey />
        <Experiences />
        <Testimonials />
        <FinalCta />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
