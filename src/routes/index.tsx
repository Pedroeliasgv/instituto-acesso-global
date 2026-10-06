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
const description = "Instituto Acesso Global — ensino, formação e desenvolvimento para pessoas que desejam crescer em conhecimento, maturidade e propósito.";

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
      { property: "og:url", content: "https://instituto-acesso-global.vercel.app/" },
      { property: "og:image", content: "https://instituto-acesso-global.vercel.app/portrait.jpg" },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1600" },
      { property: "og:image:height", content: "2400" },
      { property: "og:image:alt", content: "Evanio Vale, pessoa associada ao Instituto Acesso Global" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: "https://instituto-acesso-global.vercel.app/portrait.jpg" },
      { name: "twitter:image:alt", content: "Evanio Vale, pessoa associada ao Instituto Acesso Global" },
    ],
    links: [{ rel: "canonical", href: "https://instituto-acesso-global.vercel.app/" }],
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
