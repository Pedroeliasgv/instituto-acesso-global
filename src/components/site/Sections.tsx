import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  Play,
  Share2,
  Users,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  faqs,
  images,
  navLinks,
  pillars,
} from "@/data/site";
import { Logo } from "./Header";
import { Courses } from "./Courses";
import {
  Cta,
  Eyebrow,
  ParallaxImage,
} from "./ui";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-abyss text-on-dark"
    >
      <ParallaxImage
        src={images.hero}
        alt="Instituto Acesso Global"
        eager
        strength={55}
        className="absolute inset-0 h-full"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,4,10,.15) 0%, rgba(5,4,10,.42) 45%, rgba(5,4,10,.96) 100%)",
        }}
      />

      <div className="absolute inset-0 bg-royal/10 mix-blend-screen" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-40 md:px-8 md:pb-24">
        <div className="max-w-5xl">
          <Eyebrow className="animate-in fade-in slide-in-from-bottom-4 text-azure duration-1000">
            Instituto Acesso Global
          </Eyebrow>

          <h1 className="headline mt-7 animate-in fade-in slide-in-from-bottom-8 text-[3.4rem] duration-1000 sm:text-7xl lg:text-[7rem]">
            Você pode
            <br />
            <span className="font-serif font-normal normal-case italic text-azure">
              crescer.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl animate-in fade-in text-lg leading-relaxed text-on-dark-muted duration-1000 md:text-xl">
            Conhecimento, ensino e desenvolvimento para quem deseja aprofundar
            sua caminhada, desenvolver maturidade e viver com mais clareza e
            propósito.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Cta href="#cursos">
              Conhecer os cursos
            </Cta>

            <Cta href="#sobre" variant="ghost">
              Conhecer o instituto
            </Cta>
          </div>
        </div>

        <div className="mt-20 border-t border-line-dark pt-6">
          <div className="flex flex-col gap-4 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-on-dark-muted sm:flex-row sm:items-center sm:justify-between">
            <span>Ensino</span>
            <span>Desenvolvimento</span>
            <span>Propósito</span>
            <span>Prática</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Intro() {
  return (
    <section className="bg-background py-24 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 md:grid-cols-12 md:px-8">
        <div className="reveal md:col-span-7">
          <Eyebrow>Uma nova jornada começa aqui</Eyebrow>

          <h2 className="headline mt-7 text-5xl md:text-7xl">
            Você não precisa
            <br />
            parar onde está.
          </h2>

          <p className="mt-9 max-w-2xl text-xl leading-relaxed text-muted-foreground">
            O Instituto Acesso Global nasceu para criar caminhos de aprendizado
            que conectem conhecimento, desenvolvimento e propósito.
          </p>

          <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
            Aqui, o objetivo não é simplesmente acumular informação. É
            compreender, amadurecer e transformar aquilo que você aprende em
            algo que pode ser vivido.
          </p>

          <Cta
            href="#sobre"
            variant="outline"
            className="mt-10"
          >
            Conheça nossa visão
          </Cta>
        </div>

        <div className="reveal relative md:col-span-5 md:col-start-8">
          <ParallaxImage
            src={images.classroom}
            alt="Ambiente de aprendizado"
            className="aspect-[4/5] w-full"
            strength={35}
          />

          <div className="absolute -bottom-8 -left-8 hidden max-w-xs bg-navy p-7 text-on-dark md:block">
            <p className="eyebrow text-azure">
              Acesso Global
            </p>

            <p className="mt-4 font-serif text-2xl italic leading-snug">
              Conhecimento precisa produzir transformação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-abyss py-24 text-on-dark md:py-40"
    >
      <div className="grain absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal max-w-5xl">
          <Eyebrow className="text-azure">
            O Instituto
          </Eyebrow>

          <h2 className="headline mt-7 text-5xl md:text-8xl">
            Mais do que
            <br />
            conteúdo.
            <br />
            <span className="font-serif font-normal normal-case italic text-azure">
              Uma jornada.
            </span>
          </h2>

          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-on-dark-muted md:text-xl">
            O Instituto Acesso Global busca oferecer conteúdos e experiências
            que ajudem pessoas a desenvolver conhecimento, maturidade,
            discernimento e propósito.
          </p>
        </div>

        <div className="mt-20 grid gap-px bg-line-dark md:grid-cols-2">
          {[
            [
              "Nossa visão",
              "Criar caminhos de aprendizado que sejam profundos, acessíveis e aplicáveis.",
            ],
            [
              "Nossa missão",
              "Conectar pessoas ao conhecimento necessário para crescer e desenvolver seu potencial.",
            ],
            [
              "Nossa abordagem",
              "Ensino com clareza, profundidade e responsabilidade.",
            ],
            [
              "Nosso propósito",
              "Transformar conhecimento em prática, maturidade e direção.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="reveal bg-abyss p-8 md:p-12"
            >
              <p className="eyebrow text-azure">
                {title}
              </p>

              <p className="mt-5 max-w-lg text-xl leading-relaxed text-on-dark-muted md:text-2xl">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Evanio() {
  return (
    <section
      id="evanio"
      className="bg-background py-24 md:py-40"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 md:grid-cols-12 md:px-8">
        <div className="reveal relative md:col-span-6">
          <ParallaxImage
            src={images.portrait}
            alt="Evanio Vale"
            className="aspect-[4/5] w-full"
            strength={35}
          />

          <div className="absolute bottom-6 left-6 bg-royal px-5 py-4 text-white">
            <p className="text-[0.58rem] font-bold uppercase tracking-[0.2em]">
              Evanio Vale
            </p>
          </div>
        </div>

        <div className="reveal md:col-span-5 md:col-start-8">
          <Eyebrow>Quem está por trás</Eyebrow>

          <h2 className="headline mt-7 text-6xl md:text-8xl">
            Evanio
            <br />
            <span className="text-royal">Vale.</span>
          </h2>

          <p className="mt-8 font-serif text-2xl italic leading-snug md:text-3xl">
            Ensino, conhecimento e desenvolvimento caminham juntos.
          </p>

          <p className="mt-8 leading-relaxed text-muted-foreground">
            Evanio Vale está associado à construção dos conteúdos e experiências
            apresentados pelo Instituto Acesso Global, contribuindo com ensino,
            comunicação e desenvolvimento de pessoas.
          </p>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            O propósito é compartilhar conhecimento de forma clara e profunda,
            criando espaço para que cada pessoa possa desenvolver sua própria
            caminhada.
          </p>

          <Cta
            href="#cursos"
            variant="outline"
            className="mt-10"
          >
            Conhecer os cursos
          </Cta>
        </div>
      </div>
    </section>
  );
}

export function Methodology() {
  return (
    <section className="border-t bg-muted py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal max-w-4xl">
          <Eyebrow>Como pensamos</Eyebrow>

          <h2 className="headline mt-7 text-5xl md:text-7xl">
            O conhecimento
            <br />
            precisa ir além
            <br />
            da teoria.
          </h2>
        </div>

        <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.n}
              className="reveal group bg-background p-8 transition-colors duration-500 hover:bg-navy hover:text-on-dark md:p-10"
            >
              <p className="headline text-7xl text-royal/20 transition-colors group-hover:text-azure md:text-8xl">
                {pillar.n}
              </p>

              <h3 className="mt-10 font-display text-xl font-bold uppercase tracking-wide">
                {pillar.title}
              </h3>

              <p className="mt-4 leading-relaxed text-muted-foreground transition-colors group-hover:text-on-dark-muted">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  if (!testimonials.length) return null;

  return (
    <section className="bg-background py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Eyebrow className="reveal">
          Experiências
        </Eyebrow>

        <h2 className="reveal headline mt-7 max-w-4xl text-5xl md:text-7xl">
          O que pessoas estão
          <br />
          dizendo.
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="reveal border border-border p-8 md:p-10"
            >
              <blockquote className="font-serif text-2xl italic leading-snug md:text-3xl">
                “{testimonial.quote}”
              </blockquote>

              <figcaption className="mt-10 border-t border-border pt-5">
                <p className="font-bold">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-xs font-bold uppercase tracking-[0.15em] text-royal">
                  {testimonial.course}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section
      id="faq"
      className="bg-muted py-24 md:py-36"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-12 md:px-8">
        <div className="reveal md:col-span-4">
          <Eyebrow>
            Perguntas frequentes
          </Eyebrow>

          <h2 className="headline mt-7 text-5xl md:text-6xl">
            Antes de
            <br />
            começar.
          </h2>

          <p className="mt-6 text-muted-foreground">
            Ainda ficou com alguma dúvida? Confira as perguntas mais comuns.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="reveal md:col-span-7 md:col-start-6"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.q}
              value={`faq-${index}`}
            >
              <AccordionTrigger className="py-7 text-left font-display text-lg font-bold uppercase hover:text-royal hover:no-underline md:text-xl">
                {faq.q}
              </AccordionTrigger>

              <AccordionContent className="pb-7 text-base leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section
      id="aluno"
      className="relative overflow-hidden bg-abyss text-on-dark"
    >
      <img
        src={images.hero}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-abyss via-abyss/90 to-royal/30" />

      <div className="reveal relative mx-auto max-w-7xl px-5 py-28 md:px-8 md:py-44">
        <Eyebrow className="text-azure">
          Seu próximo passo
        </Eyebrow>

        <h2 className="headline mt-7 max-w-5xl text-5xl md:text-8xl">
          O próximo passo
          <br />
          começa com uma
          <br />
          <span className="font-serif font-normal normal-case italic text-azure">
            decisão.
          </span>
        </h2>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-on-dark-muted">
          Conheça os cursos do Instituto Acesso Global e encontre o conteúdo
          que pode fazer sentido para o seu momento.
        </p>

        <Cta
          href="#cursos"
          className="mt-10"
        >
          Conhecer os cursos
        </Cta>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-abyss text-on-dark">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <Logo />

          <p className="mt-6 max-w-sm text-sm leading-relaxed text-on-dark-muted">
            Instituto Acesso Global. Conhecimento, desenvolvimento e propósito
            para uma jornada de crescimento contínuo.
          </p>

          <div className="mt-8 flex gap-3">
            {(
              [Share2, Play, Users] as LucideIcon[]
            ).map((Icon, index) => (
              <a
                key={index}
                href="#"
                aria-label="Rede social"
                className="grid h-10 w-10 place-items-center border border-line-dark transition-colors hover:border-azure hover:bg-royal"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <nav className="grid grid-cols-2 gap-4 md:col-span-4 md:col-start-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-underline self-start text-sm uppercase tracking-[0.15em] text-on-dark-muted hover:text-on-dark"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="md:col-span-3 md:col-start-10">
          <p className="eyebrow text-azure">
            Comece agora
          </p>

          <Cta
            href="#cursos"
            variant="ghost"
            className="mt-5 w-full"
          >
            Ver cursos
          </Cta>
        </div>
      </div>

      <div className="border-t border-line-dark">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-5 py-6 text-xs text-on-dark-muted md:flex-row md:px-8">
          <p>
            © {new Date().getFullYear()} Instituto Acesso Global. Todos os
            direitos reservados.
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-on-dark">
              Política de privacidade
            </a>

            <a href="#" className="hover:text-on-dark">
              Termos de uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}