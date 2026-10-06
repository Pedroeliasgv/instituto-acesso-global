import { createFileRoute } from "@tanstack/react-router";
import { Courses } from "@/components/site/Courses";
import { Header } from "@/components/site/Header";
import {
  About,
  CinematicImage,
  Evanio,
  Faq,
  FinalCta,
  Footer,
  Hero,
  Intro,
  Marquee,
  Manifesto,
  Methodology,
} from "@/components/site/Sections";
import { useRevealAll } from "@/hooks/use-reveal";

const title = "Instituto Acesso Global | Ensino, Formação e Desenvolvimento";
const description = "Conheça as formações do Instituto Acesso Global, incluindo o Curso de Dons Espirituais e o Seminário de Libertação.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Instituto Acesso Global" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
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
