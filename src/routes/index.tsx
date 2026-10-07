import { createFileRoute } from "@tanstack/react-router";
import { Courses } from "@/components/site/Courses";
import { Header } from "@/components/site/Header";
import {
  About,
  Dores,
  Evanio,
  Faq,
  FinalCta,
  Footer,
  Hero,
  HowItWorks,
  Intro,
  Marquee,
  Modules,
  Objections,
  Pricing,
} from "@/components/site/Sections";
import { useRevealAll } from "@/hooks/use-reveal";

const title =
  "Instituto Acesso Global | Conhecimento, Discernimento e Desenvolvimento";

const description =
  "Uma jornada de ensino e aprofundamento em dons espirituais, discernimento, vida profética, propósito, liderança, finanças e oração.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title,
      },
      {
        name: "description",
        content: description,
      },
      {
        property: "og:title",
        content: title,
      },
      {
        property: "og:description",
        content: description,
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:site_name",
        content: "Instituto Acesso Global",
      },
      {
        property: "og:locale",
        content: "pt_BR",
      },
      {
        property: "og:url",
        content: "https://instituto-acesso-global.vercel.app/",
      },
      {
        property: "og:image",
        content:
          "https://instituto-acesso-global.vercel.app/portrait.jpg",
      },
      {
        property: "og:image:type",
        content: "image/jpeg",
      },
      {
        property: "og:image:width",
        content: "1600",
      },
      {
        property: "og:image:height",
        content: "2400",
      },
      {
        property: "og:image:alt",
        content: "Evanio Vale — Instituto Acesso Global",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: title,
      },
      {
        name: "twitter:description",
        content: description,
      },
      {
        name: "twitter:image",
        content:
          "https://instituto-acesso-global.vercel.app/portrait.jpg",
      },
      {
        name: "twitter:image:alt",
        content: "Evanio Vale — Instituto Acesso Global",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://instituto-acesso-global.vercel.app/",
      },
    ],
  }),

  component: Index,
});

function Index() {
  useRevealAll();

  return (
    <div className="min-h-screen bg-[#f4f1eb]">
      <Header />

      <main>
        {/* 01 — Hero / oferta */}
        <Hero />

        {/* 02 — Dor / identificação */}
        <Dores />

        {/* 03 — Transição */}
        <Marquee tone="light" />

        {/* 04 — Apresentação da solução */}
        <Intro />

        {/* 05 — Produto principal */}
        <About />

        {/* 06 — O que você vai aprender */}
        <Modules />

        {/* 07 — Oferta / planos */}
        <Pricing />

        {/* 08 — Autoridade */}
        <Evanio />

        {/* 09 — Outros produtos */}
        <Courses />

        {/* 10 — Como funciona */}
        <HowItWorks />

        {/* 11 — Objeções */}
        <Objections />

        {/* 12 — CTA final */}
        <FinalCta />

        {/* 13 — FAQ */}
        <Faq />
      </main>

      <Footer />
    </div>
  );
}