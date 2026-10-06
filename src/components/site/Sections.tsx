import type { LucideIcon } from "lucide-react";
import { Share2, Play, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  experiences,
  faqs,
  images,
  journey,
  navLinks,
  pillars,
  testimonials,
} from "@/data/site";
import { Logo } from "./Header";
import { Counter, Cta, Eyebrow, ParallaxImage } from "./ui";

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
        strength={60}
        className="absolute inset-0 h-full"
      />

      <div
        className="absolute inset-0"
        style={{ background: "var(--overlay-hero)" }}
      />

      <div
        className="absolute inset-0"
        style={{ background: "var(--overlay-bottom)" }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-40 md:px-8 md:pb-24">
        <p className="eyebrow animate-in fade-in slide-in-from-bottom-4 text-azure duration-1000">
          Instituto Acesso Global
        </p>

        <h1 className="headline mt-6 max-w-4xl animate-in fade-in slide-in-from-bottom-8 text-[2.6rem] duration-1000 sm:text-6xl lg:text-[5.5rem]">
          Conhecimento que gera
          <span className="font-serif font-normal normal-case italic text-azure">
            {" "}
            transformação.
          </span>
        </h1>

        <p className="mt-8 max-w-xl animate-in fade-in text-lg leading-relaxed text-on-dark-muted duration-1000">
          Cursos, formação e experiências para quem deseja crescer em
          conhecimento, propósito, liderança e prática.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Cta href="#cursos">Conhecer os cursos</Cta>

          <Cta href="#sobre" variant="ghost">
            Conhecer o instituto
          </Cta>
        </div>

        <div className="mt-20 hidden grid-cols-3 border-t border-line-dark pt-8 md:grid">
          {[
            ["Cursos disponíveis", 2],
            ["Pilares de ensino", 4],
            ["Áreas de atuação", 4],
          ].map(([label, n]) => (
            <div key={label as string}>
              <p className="font-display text-4xl font-bold">
                <Counter to={n as number} />
              </p>

              <p className="eyebrow mt-2 text-on-dark-muted">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Intro() {
  return (
    <section className="py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-12 md:px-8">
        <div className="reveal md:col-span-6">
          <Eyebrow>Sobre o instituto</Eyebrow>

          <h2 className="headline mt-6 text-4xl md:text-6xl">
            Conhecimento que vai além da
            <span className="font-serif font-normal italic text-royal">
              {" "}
              sala de aula.
            </span>
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            O Instituto Acesso Global existe para tornar conhecimento,
            formação e desenvolvimento mais acessíveis a pessoas que desejam
            crescer de forma consistente.
          </p>

          <p className="mt-4 leading-relaxed text-muted-foreground">
            Por meio de cursos, conteúdos, eventos e experiências, o instituto
            conecta ensino e prática para transformar conhecimento em
            desenvolvimento real.
          </p>

          <ul className="mt-12 grid grid-cols-2 gap-px border bg-border">
            {["Ensino", "Desenvolvimento", "Maturidade", "Propósito"].map(
              (w, i) => (
                <li
                  key={w}
                  className="flex items-baseline gap-3 bg-background p-5"
                >
                  <span className="font-serif text-lg italic text-royal">
                    0{i + 1}
                  </span>

                  <span className="font-display text-sm font-bold uppercase tracking-[0.15em]">
                    {w}
                  </span>
                </li>
              ),
            )}
          </ul>
        </div>

        <div className="reveal relative md:col-span-5 md:col-start-8">
          <ParallaxImage
            src={images.classroom}
            alt="Alunos em sala de aula"
            className="aspect-[4/5] w-full"
          />

          <div className="absolute -bottom-6 -left-6 hidden bg-navy p-6 text-on-dark md:block">
            <p className="eyebrow text-azure">
              Instituto Acesso Global
            </p>

            <p className="mt-2 max-w-[14rem] font-serif text-xl italic">
              Conhecimento que transforma pessoas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  const items = [
    [
      "Por que existimos",
      "Para ampliar o acesso ao conhecimento e criar caminhos de desenvolvimento que gerem transformação real.",
    ],
    [
      "Quem queremos alcançar",
      "Pessoas que desejam crescer em conhecimento, propósito, liderança e desenvolvimento pessoal e ministerial.",
    ],
    [
      "Nossa visão",
      "Construir uma comunidade de aprendizado que una profundidade, prática e transformação.",
    ],
    [
      "Nossa filosofia",
      "Profundidade em vez de superficialidade. Clareza em vez de excesso. Conhecimento que pode ser aplicado à vida real.",
    ],
  ];

  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-abyss py-24 text-on-dark md:py-36"
    >
      <div className="grain absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal max-w-4xl">
          <Eyebrow className="text-azure">
            Instituto Acesso Global
          </Eyebrow>

          <h2 className="headline mt-6 text-4xl md:text-7xl">
            Uma instituição. Uma visão. Um
            <span className="font-serif font-normal italic text-azure">
              {" "}
              propósito.
            </span>
          </h2>
        </div>

        <div className="mt-20 grid gap-px bg-line-dark md:grid-cols-2">
          {items.map(([t, d]) => (
            <div key={t} className="reveal bg-abyss p-8 md:p-12">
              <p className="eyebrow text-azure">{t}</p>

              <p className="mt-5 text-xl leading-relaxed text-on-dark-muted md:text-2xl">
                {d}
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
    <section id="evanio" className="bg-background py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:grid-cols-12 md:px-8">
        <div className="reveal relative md:col-span-6">
          <ParallaxImage
            src={images.portrait}
            alt="Evanio Vale"
            className="aspect-[4/5] w-full"
            strength={50}
          />

          <p className="headline pointer-events-none absolute -bottom-8 right-0 hidden text-[7rem] text-royal/15 lg:block">
            EV
          </p>
        </div>

        <div className="reveal md:col-span-5 md:col-start-8">
          <Eyebrow>Conheça Evanio Vale</Eyebrow>

          <h2 className="headline mt-6 text-6xl md:text-8xl">
            Evanio
            <br />
            <span className="text-royal">Vale</span>
          </h2>

          <p className="mt-8 font-serif text-2xl italic leading-snug">
            “Conhecimento, maturidade e propósito precisam caminhar juntos.”
          </p>

          <dl className="mt-10 divide-y border-y">
            {[
              [
                "Trajetória",
                "Uma caminhada dedicada ao ensino, desenvolvimento e formação de pessoas.",
              ],
              [
                "Atuação",
                "Professor, mentor e comunicador, com experiência em diferentes contextos de ensino.",
              ],
              [
                "Contribuição",
                "Participação na construção de conteúdos e experiências oferecidos pelo Instituto Acesso Global.",
              ],
            ].map(([k, v]) => (
              <div key={k} className="grid grid-cols-3 gap-4 py-4">
                <dt className="eyebrow text-royal">{k}</dt>

                <dd className="col-span-2 text-sm text-muted-foreground">
                  {v}
                </dd>
              </div>
            ))}
          </dl>

          <Cta href="#sobre" variant="outline" className="mt-10">
            Conheça o instituto
          </Cta>
        </div>
      </div>
    </section>
  );
}

export function Methodology() {
  return (
    <section className="border-t bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal max-w-3xl">
          <Eyebrow>O que ensinamos</Eyebrow>

          <h2 className="headline mt-6 text-4xl md:text-6xl">
            Formação que vai além do conteúdo.
          </h2>
        </div>

        <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <div
              key={p.n}
              className="reveal group bg-background p-8 transition-colors duration-500 hover:bg-navy hover:text-on-dark"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <p className="headline text-7xl text-royal/25 transition-colors group-hover:text-azure md:text-8xl">
                {p.n}
              </p>

              <h3 className="mt-10 font-display text-xl font-bold uppercase tracking-wide">
                {p.title}
              </h3>

              <p className="mt-3 text-muted-foreground transition-colors group-hover:text-on-dark-muted">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Featured() {
  return (
    <section id="formacoes" className="relative overflow-hidden bg-navy text-on-dark">
      <div className="grid md:grid-cols-12">
        <ParallaxImage
          src={images.event}
          alt="Formação em auditório"
          className="aspect-[4/3] md:col-span-7 md:aspect-auto md:min-h-[720px]"
        />

        <div className="reveal flex flex-col justify-center p-8 md:col-span-5 md:p-16">
          <p className="eyebrow text-azure">
            Formação em destaque
          </p>

          <h2 className="headline mt-6 text-4xl md:text-6xl">
            Fundamentos da Formação Cristã
          </h2>

          <p className="mt-6 leading-relaxed text-on-dark-muted">
            A trilha principal do Instituto para quem deseja entender melhor
            o chamado, fortalecer a base espiritual e caminhar com maior
            clareza, prontidão e propósito.
          </p>

          <dl className="mt-10 grid grid-cols-3 border-y border-line-dark py-6">
            {[
              ["Módulos", "08"],
              ["Aulas", "32"],
              ["Duração", "12 sem."],
            ].map(([k, v]) => (
              <div key={k}>
                <dd className="font-display text-3xl font-bold">{v}</dd>
                <dt className="eyebrow mt-1 text-on-dark-muted">{k}</dt>
              </div>
            ))}
          </dl>

          <Cta
            href="#cursos"
            variant="light"
            className="mt-10 self-start"
          >
            Conhecer a formação
          </Cta>
        </div>
      </div>
    </section>
  );
}

export function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;

      if (!el) return;

      const r = el.getBoundingClientRect();
      const p = (window.innerHeight * 0.6 - r.top) / r.height;

      setProgress(Math.max(0, Math.min(1, p)));
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="bg-background py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-12 md:px-8">
        <div className="reveal md:sticky md:top-32 md:col-span-5 md:self-start">
          <Eyebrow>Como funciona a formação</Eyebrow>

          <h2 className="headline mt-6 text-4xl md:text-6xl">
            Sua formação não termina em uma{" "}
            <span className="font-serif font-normal normal-case italic text-royal">
              aula.
            </span>
          </h2>

          <p className="mt-6 text-muted-foreground">
            Uma jornada em quatro etapas, pensada para gerar crescimento
            contínuo.
          </p>
        </div>

        <div ref={ref} className="relative md:col-span-6 md:col-start-7">
          <div className="absolute left-[1.15rem] top-0 h-full w-px bg-border" />

          <div
            className="absolute left-[1.15rem] top-0 w-px bg-royal transition-[height] duration-200"
            style={{ height: `${progress * 100}%` }}
          />

          {journey.map((s, i) => {
            const on = progress >= i / journey.length;

            return (
              <div
                key={s.n}
                className="relative pb-16 pl-16 last:pb-0"
              >
                <span
                  className={`absolute left-0 top-0 grid h-9 w-9 place-items-center border text-xs font-bold transition-all duration-500 ${
                    on
                      ? "border-royal bg-royal text-on-dark"
                      : "bg-background text-muted-foreground"
                  }`}
                >
                  {s.n}
                </span>

                <h3
                  className={`font-display text-3xl font-bold uppercase transition-colors duration-500 md:text-4xl ${
                    on
                      ? "text-foreground"
                      : "text-muted-foreground/50"
                  }`}
                >
                  {s.title}
                </h3>

                <p className="mt-3 max-w-md text-muted-foreground">
                  {s.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Experiences() {
  return (
    <section id="eventos" className="bg-muted py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow>Eventos e experiências</Eyebrow>

            <h2 className="headline mt-6 text-4xl md:text-6xl">
              Existe mais para{" "}
              <span className="font-serif font-normal normal-case italic text-royal">
                viver.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-muted-foreground">
            Conferências, encontros, aulas especiais e experiências
            presenciais.
          </p>
        </div>

        <div className="mt-14 divide-y border-y">
          {experiences.map((e) => (
            <a
              key={e.title}
              href="#"
              className="reveal group grid items-center gap-6 py-8 md:grid-cols-12"
            >
              <div className="overflow-hidden md:col-span-3">
                <img
                  src={e.image}
                  alt=""
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                />
              </div>

              <p className="eyebrow text-royal md:col-span-2 md:col-start-5">
                {e.type}
              </p>

              <h3 className="font-display text-2xl font-bold uppercase transition-colors group-hover:text-royal md:col-span-4 md:text-3xl">
                {e.title}
              </h3>

              <p className="text-sm text-muted-foreground md:col-span-2 md:text-right">
                {e.meta}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const lead = testimonials[0]!;
  const rest = testimonials.slice(1);

  return (
    <section className="bg-background py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Eyebrow className="reveal">Depoimentos</Eyebrow>

        <h2 className="reveal headline mt-6 max-w-3xl text-4xl md:text-6xl">
          Quem já viveu essa jornada.
        </h2>

        <div className="mt-16 grid gap-10 md:grid-cols-12">
          <figure className="reveal md:col-span-7">
            <blockquote className="font-serif text-3xl leading-snug md:text-5xl">
              “{lead.quote}”
            </blockquote>

            <figcaption className="mt-10 flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center bg-mist font-display font-bold text-navy">
                {lead.name
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </span>

              <span>
                <span className="block font-bold">{lead.name}</span>

                <span className="eyebrow text-royal">
                  {lead.course}
                </span>
              </span>
            </figcaption>
          </figure>

          <div className="space-y-px bg-border md:col-span-4 md:col-start-9">
            {rest.map((t, i) => (
              <figure
                key={i}
                className="reveal bg-background py-8"
              >
                <blockquote className="leading-relaxed text-muted-foreground">
                  “{t.quote}”
                </blockquote>

                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center bg-mist text-xs font-bold text-navy">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </span>

                  <span className="text-sm">
                    <b>{t.name}</b> ·{" "}
                    <span className="text-royal">{t.course}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
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

      <div className="absolute inset-0 bg-gradient-to-r from-abyss via-abyss/90 to-navy/60" />

      <div className="reveal relative mx-auto max-w-7xl px-5 py-28 md:px-8 md:py-44">
        <p className="eyebrow text-azure">Próximo passo</p>

        <h2 className="headline mt-6 max-w-4xl text-5xl md:text-8xl">
          Sua jornada de formação começa{" "}
          <span className="font-serif font-normal normal-case italic text-azure">
            aqui.
          </span>
        </h2>

        <p className="mt-8 max-w-lg text-lg text-on-dark-muted">
          Escolha a formação certa para o seu momento e dê o primeiro passo
          com clareza, direção e propósito.
        </p>

        <Cta href="#cursos" className="mt-12">
          Conhecer os cursos
        </Cta>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-12 md:px-8">
        <div className="reveal md:col-span-4">
          <Eyebrow>Dúvidas frequentes</Eyebrow>

          <h2 className="headline mt-6 text-4xl md:text-5xl">
            Perguntas e respostas.
          </h2>
        </div>

        <Accordion
          type="single"
          collapsible
          className="reveal md:col-span-7 md:col-start-6"
        >
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`i${i}`}>
              <AccordionTrigger className="py-6 text-left font-display text-lg font-semibold hover:text-royal hover:no-underline">
                {f.q}
              </AccordionTrigger>

              <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-abyss text-on-dark">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-12 md:px-8">
        <div className="md:col-span-4">
          <Logo />

          <p className="mt-6 max-w-xs text-sm leading-relaxed text-on-dark-muted">
            Cursos, formações e conteúdos do Instituto Acesso Global.
          </p>

          <div className="mt-8 flex gap-3">
            {([Share2, Play, Users] as LucideIcon[]).map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Rede social"
                  className="grid h-10 w-10 place-items-center border border-line-dark transition-colors hover:border-azure hover:bg-royal"
                >
                  <Icon size={16} />
                </a>
              ),
            )}
          </div>
        </div>

        <nav className="grid grid-cols-2 gap-3 md:col-span-4 md:col-start-6">
          {[...navLinks, { label: "Contato", href: "#" }].map(
            (l) => (
              <a
                key={l.label}
                href={l.href}
                className="link-underline self-start text-sm uppercase tracking-[0.15em] text-on-dark-muted hover:text-on-dark"
              >
                {l.label}
              </a>
            ),
          )}
        </nav>

        <div className="md:col-span-3 md:col-start-10">
          <p className="eyebrow text-azure">Já é aluno?</p>

          <Cta
            href="#aluno"
            variant="ghost"
            className="mt-5 w-full"
          >
            Área do aluno
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