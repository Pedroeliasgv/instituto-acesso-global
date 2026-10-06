import { ArrowUpRight, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { experiences, faqs, images, journey, navLinks, pillars, testimonials } from "@/data/site";
import { Logo } from "./Header";
import { Cta, Eyebrow, ParallaxImage } from "./ui";

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[100svh] items-end overflow-hidden bg-[#080808] text-white">
      <ParallaxImage src={images.hero} alt="Profeta Evanio Vale em formação" eager strength={80} className="absolute inset-0 h-full" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,8,0.9)_0%,rgba(8,8,8,0.75)_30%,rgba(17,22,35,0.38)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(117,119,255,0.2),transparent_38%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-20">
        <div className="mb-8 overflow-hidden border-y border-white/10 text-[0.62rem] font-bold uppercase tracking-[0.28em] text-white/70">
          <div className="marquee-track flex min-w-max gap-12 py-3">
            <span>INSTITUTO ACESSO GLOBAL</span>
            <span>FORMAÇÃO</span>
            <span>DISCERNIMENTO</span>
            <span>PROPÓSITO</span>
            <span>INSTITUTO ACESSO GLOBAL</span>
            <span>FORMAÇÃO</span>
            <span>DISCERNIMENTO</span>
            <span>PROPÓSITO</span>
          </div>
        </div>

        <div className="max-w-5xl">
          <p className="eyebrow reveal text-[#9fb8ff]">Instituto Acesso Global</p>
          <h1 className="headline reveal mt-6 text-[2.85rem] sm:text-6xl lg:text-[7rem]">
            Mais do que <span className="outline-text">conteúdo</span>.
            <br />
            Uma jornada de <span className="text-[#9fb8ff]">formação.</span>
          </h1>
          <p className="reveal mt-8 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
            Uma experiência criada para educar, aprofundar e transformar a maneira como você vive, entende e responde ao seu chamado.
          </p>

          <div className="reveal mt-10 flex flex-col gap-3 sm:flex-row">
            <Cta href="#cursos" className="bg-[#6f73ff] text-white hover:bg-[#5d67f0]">
              Conhecer os cursos
            </Cta>
            <Cta href="#instituto" variant="outline" className="border border-white/30 text-white hover:border-white/60 hover:bg-white/5">
              Conhecer o instituto
            </Cta>
          </div>
        </div>

        <div className="reveal mt-16 grid gap-6 border-t border-white/10 pt-8 md:grid-cols-3">
          {[
            ["Ensino", "Profundo"],
            ["Discernimento", "Claro"],
            ["Propósito", "Real"],
          ].map(([label, value]) => (
            <div key={label}>
              <p className="eyebrow text-[#9fb8ff]">{label}</p>
              <p className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-white">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Intro() {
  return (
    <section id="instituto" className="relative overflow-hidden bg-[#f4f1eb] py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-5 md:grid-cols-12 md:px-8">
        <div className="reveal md:col-span-5">
          <Eyebrow className="text-[#5b5fe0]">01 / O Instituto</Eyebrow>
          <h2 className="headline mt-8 text-[2.8rem] leading-[0.92] text-[#080808] md:text-7xl">
            Mais do que
            <span className="outline-text-dark block">conteúdo.</span>
          </h2>
        </div>

        <div className="reveal md:col-span-6 md:col-start-7">
          <p className="max-w-xl text-[1.05rem] leading-relaxed text-[#303540] md:text-xl">
            A formação é uma jornada de clareza, maturidade e transformação. O Instituto Acesso Global reúne ensino, reflexão e prática para pessoas que desejam crescer com profundidade e propósito.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl px-5 md:px-8">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="reveal overflow-hidden rounded-[2px] border border-[#0d172b]/10 bg-[#dfe6f6]">
            <ParallaxImage src={images.classroom} alt="Sala de formação do Instituto Acesso Global" strength={40} className="aspect-[4/5] md:aspect-[16/10]" />
          </div>

          <div className="reveal flex flex-col justify-between gap-8 border border-[#0d172b]/10 bg-[#0d111a] p-7 text-white md:p-10">
            <div>
              <p className="eyebrow text-[#9fb8ff]">Uma jornada</p>
              <h3 className="mt-4 font-display text-3xl font-bold uppercase leading-none tracking-[-0.04em] md:text-5xl">
                Ensino.
                <br />
                Discernimento.
                <br />
                Prática.
                <br />
                Propósito.
              </h3>
            </div>

            <div className="divide-y divide-white/10">
              {[
                "Formação com profundidade",
                "Conteúdo com clareza",
                "Aprofundamento real",
              ].map((item) => (
                <div key={item} className="flex items-center justify-between py-3 text-sm uppercase tracking-[0.16em] text-white/75">
                  <span>{item}</span>
                  <ArrowUpRight size={14} className="text-[#9fb8ff]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="bg-[#080808] py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal max-w-4xl">
          <Eyebrow className="text-[#9fb8ff]">O que você encontra aqui</Eyebrow>
          <h2 className="headline mt-6 text-[2.8rem] md:text-7xl">
            Uma instituição <span className="text-[#9fb8ff]">que cresce</span>
            <br />
            com clareza.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Nosso propósito",
              text: "Formar pessoas que não apenas aprendem, mas também amadurecem, se posicionem com responsabilidade e vivam com maior consciência do que foram chamadas a ser.",
            },
            {
              title: "Nossa visão",
              text: "Oferecer conteúdos com rigor, sensibilidade e profundidade, criando uma jornada séria de formação para a vida, o ministério e a liderança.",
            },
            {
              title: "Nossa metodologia",
              text: "Ensino que une conteúdo, reflexão e aplicação prática, respeitando o tempo de cada pessoa e o valor do processo real de transformação.",
            },
            {
              title: "Nossa identidade",
              text: "Uma experiência contemporânea, institucional e profunda — com estética elegante, tom equilibrado e foco em formação que produz mudança real.",
            },
          ].map((item) => (
            <div key={item.title} className="reveal border border-white/10 bg-white/[0.02] p-7 md:p-10">
              <p className="eyebrow text-[#9fb8ff]">{item.title}</p>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-white/72 md:text-lg">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Methodology() {
  return (
    <section className="bg-[#0a0d12] py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal max-w-3xl">
          <Eyebrow className="text-[#9fb8ff]">O que você encontra aqui</Eyebrow>
          <h2 className="headline mt-6 text-[2.5rem] md:text-6xl">
            Ensino. Discernimento. Prática. Propósito.
          </h2>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.n}
              className="reveal group border border-white/10 bg-white/[0.02] p-7 transition-all duration-500 hover:border-[#a7b3ff] hover:bg-[#121827]"
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <p className="font-display text-6xl font-bold leading-none text-[#9fb8ff]/25">{pillar.n}</p>
              <h3 className="mt-8 font-display text-2xl font-bold uppercase">{pillar.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/70">{pillar.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Featured() {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const progress = Math.min(Math.max((window.innerHeight - rect.top) / (window.innerHeight + rect.height), 0), 1);
      setScale(0.84 + progress * 0.16);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="formacoes" className="relative overflow-hidden bg-[#f4f1eb] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal mb-10 flex items-end justify-between gap-6">
          <div>
            <Eyebrow className="text-[#5b5fe0]">Curso em destaque</Eyebrow>
            <h2 className="headline mt-5 text-[2.3rem] md:text-6xl">Aprenda. Aprofunde. Viva.</h2>
          </div>
          <p className="hidden max-w-sm text-sm leading-relaxed text-[#3d4253] md:block">
            A formação que abre caminho para entender, liderar e operar com mais consciência e maturidade.
          </p>
        </div>

        <div ref={ref} className="relative overflow-hidden bg-[#0b0e15]">
          <div className="grid md:grid-cols-[1.2fr_0.8fr]">
            <div className="relative overflow-hidden">
              <div className="h-full w-full origin-center transition-transform duration-200 ease-out" style={{ transform: `scale(${scale})` }}>
                <ParallaxImage src={images.hero} alt="Curso de Dons Espirituais" strength={45} className="aspect-[4/3] md:aspect-[16/10]" />
              </div>
            </div>

            <div className="flex flex-col justify-center p-7 text-white md:p-12">
              <p className="eyebrow text-[#9fb8ff]">Curso 01</p>
              <h3 className="headline mt-5 text-4xl md:text-6xl">
                Dons
                <br />
                Espirituais
              </h3>
              <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
                Uma jornada que convida você a compreender melhor a operação dos dons espirituais com profundidade, discernimento e responsabilidade diante do chamado.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Cta href="https://hotmart.com/pt-br/marketplace/produtos/hagsxd-curso-de-dons-espirituais-btgoa/S85674996V?preview=true" target="_blank" rel="noreferrer" className="bg-[#6f73ff] text-white hover:bg-[#5d67f0]">
                  Conhecer curso
                </Cta>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Evanio() {
  return (
    <section id="evanio" className="bg-[#f4f1eb] py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-12 md:px-8">
        <div className="reveal relative md:col-span-6">
          <ParallaxImage src={images.portrait} alt="Evanio Vale" className="aspect-[4/5] w-full" strength={50} />
          <div className="absolute -bottom-8 right-4 bg-[#080808] px-5 py-4 text-white shadow-[0_30px_60px_rgba(0,0,0,0.25)]">
            <p className="eyebrow text-[#9fb8ff]">EVANIO</p>
            <p className="font-display text-2xl uppercase">Vale</p>
          </div>
        </div>

        <div className="reveal md:col-span-5 md:col-start-8">
          <Eyebrow className="text-[#5b5fe0]">Evanio Vale</Eyebrow>
          <h2 className="headline mt-6 text-[2.8rem] md:text-7xl">
            Evanio
            <span className="block text-[#5b5fe0]">Vale</span>
          </h2>

          <p className="mt-8 font-serif text-2xl italic leading-snug text-[#1a1c23]">
            “A verdadeira formação transforma a pessoa antes de transformar a rotina.”
          </p>

          <div className="mt-10 divide-y divide-[#d4d0c7] border-y border-[#d4d0c7]">
            {[
              ["Professor", "Uma referência de ensino e maturidade em formação espiritual."],
              ["Mentor", "Acompanha pessoas em caminhada de discernimento e direção."],
              ["Ensino", "Uma proposta que reúne profundidade, clareza e cuidado com o processo."],
            ].map(([label, description]) => (
              <div key={label} className="grid gap-4 py-4 md:grid-cols-[180px_1fr]">
                <dt className="eyebrow text-[#5b5fe0]">{label}</dt>
                <dd className="text-sm leading-relaxed text-[#40485c]">{description}</dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Experiences() {
  return (
    <section className="bg-[#0b0d12] py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow className="text-[#9fb8ff]">Experiências</Eyebrow>
            <h2 className="headline mt-6 text-[2.5rem] md:text-6xl">O ensino também acontece em comunidade.</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/72">
            Encontros, aulas especiais e experiências em que a formação encontra um contexto real de aprendizagem e convivência.
          </p>
        </div>

        <div className="mt-14 space-y-4">
          {experiences.map((item, index) => (
            <a
              key={item.title}
              href="#cursos"
              className="reveal group block border border-white/10 bg-white/[0.02] p-4 transition-all duration-500 hover:border-[#a7b3ff] hover:bg-[#111827] md:p-6"
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <div className="grid gap-5 md:grid-cols-[240px_1fr_180px] md:items-center">
                <div className="overflow-hidden">
                  <img src={item.image} alt={item.title} loading="lazy" className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                </div>
                <div>
                  <p className="eyebrow text-[#9fb8ff]">{item.type}</p>
                  <h3 className="mt-3 font-display text-3xl font-bold uppercase leading-none tracking-[-0.04em]">{item.title}</h3>
                </div>
                <div className="flex items-center justify-between gap-3 text-sm uppercase tracking-[0.16em] text-white/70 md:justify-end">
                  <span>{item.meta}</span>
                  <ArrowUpRight size={16} className="text-[#9fb8ff]" />
                </div>
              </div>
            </a>
          ))}
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
      const rect = el.getBoundingClientRect();
      const ratio = (window.innerHeight * 0.7 - rect.top) / rect.height;
      setProgress(Math.max(0, Math.min(1, ratio)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="bg-[#f4f1eb] py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-12 md:px-8">
        <div className="reveal md:sticky md:top-28 md:col-span-4 md:self-start">
          <Eyebrow className="text-[#5b5fe0]">Como funciona</Eyebrow>
          <h2 className="headline mt-6 text-[2.6rem] md:text-6xl">Sua jornada não é uma aula, é um processo.</h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-[#40485c]">
            A formação acontece em etapas, com profundidade e direção para que o conhecimento produza transformação real.
          </p>
        </div>

        <div ref={ref} className="relative md:col-span-7 md:col-start-6">
          <div className="absolute left-[1.15rem] top-0 h-full w-px bg-[#b8b7c5]" />
          <div className="absolute left-[1.15rem] top-0 w-px bg-[#5b5fe0] transition-[height] duration-300" style={{ height: `${progress * 100}%` }} />

          {journey.map((step, index) => {
            const active = progress >= (index + 1) / journey.length;

            return (
              <div key={step.n} className="relative pb-16 pl-16 last:pb-0">
                <span
                  className={[
                    "absolute left-0 top-1 grid h-9 w-9 place-items-center border text-xs font-bold",
                    active ? "border-[#5b5fe0] bg-[#5b5fe0] text-white" : "border-[#d4d0c7] bg-[#f4f1eb] text-[#4d5165]",
                  ].join(" ")}
                >
                  {step.n}
                </span>
                <h3 className={[
                  "font-display text-3xl font-bold uppercase tracking-[-0.04em]",
                  active ? "text-[#080808]" : "text-[#8a8497]",
                ].join(" ")}>{step.title}</h3>
                <p className="mt-3 max-w-lg text-base leading-relaxed text-[#4d5165]">{step.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const lead = testimonials[0]!;
  const rest = testimonials.slice(1);

  return (
    <section className="bg-[#080808] py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Eyebrow className="reveal text-[#9fb8ff]">Depoimentos</Eyebrow>
        <h2 className="reveal headline mt-6 max-w-3xl text-[2.5rem] md:text-6xl">Quem viveu a jornada conta melhor.</h2>

        <div className="mt-14 grid gap-8 md:grid-cols-12">
          <figure className="reveal border border-white/10 bg-white/[0.02] p-7 md:col-span-7 md:p-10">
            <Quote className="mb-6 text-[#9fb8ff]" size={28} />
            <blockquote className="font-serif text-2xl leading-snug text-white md:text-4xl">“{lead.quote}”</blockquote>
            <figcaption className="mt-10 flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center bg-[#e3e8ff] font-display text-sm font-bold text-[#080808]">
                {lead.name.slice(0, 2).toUpperCase()}
              </span>
              <span>
                <span className="block font-bold">{lead.name}</span>
                <span className="text-xs uppercase tracking-[0.2em] text-[#9fb8ff]">{lead.course}</span>
              </span>
            </figcaption>
          </figure>

          <div className="space-y-4 md:col-span-5">
            {rest.map((item, index) => (
              <figure key={item.name} className="reveal border border-white/10 bg-white/[0.02] p-6" style={{ transitionDelay: `${index * 80}ms` }}>
                <blockquote className="text-sm leading-relaxed text-white/75">“{item.quote}”</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center bg-[#dfe6f6] text-[0.6rem] font-bold text-[#080808]">
                    {item.name.slice(0, 2).toUpperCase()}
                  </span>
                  <span className="text-sm">
                    <b>{item.name}</b>
                    <span className="block text-[#9fb8ff]">{item.course}</span>
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
    <section className="relative overflow-hidden bg-[#080808] text-white">
      <img src={images.hero} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,8,0.94),rgba(8,8,8,0.7),rgba(17,22,35,0.6))]" />
      <div className="reveal relative mx-auto max-w-7xl px-5 py-28 md:px-8 md:py-36">
        <p className="eyebrow text-[#9fb8ff]">Comece agora</p>
        <h2 className="headline mt-6 max-w-4xl text-[2.8rem] md:text-7xl">
          Comece
          <span className="block">sua jornada.</span>
        </h2>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-white/72 md:text-lg">
          Conheça os conteúdos disponíveis no Instituto Acesso Global e dê o próximo passo com clareza, direção e propósito.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Cta href="#cursos" className="bg-[#6f73ff] text-white hover:bg-[#5d67f0]">
            Conhecer os cursos
          </Cta>
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="bg-[#f4f1eb] py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-12 md:px-8">
        <div className="reveal md:col-span-4">
          <Eyebrow className="text-[#5b5fe0]">FAQ</Eyebrow>
          <h2 className="headline mt-6 text-[2.5rem] md:text-5xl">Perguntas frequentes.</h2>
        </div>

        <div className="reveal md:col-span-8">
          <Accordion type="single" collapsible className="divide-y divide-[#d4d0c7] border-y border-[#d4d0c7]">
            {faqs.map((item, index) => (
              <AccordionItem key={item.q} value={`faq-${index}`}>
                <AccordionTrigger className="flex w-full items-center justify-between gap-4 py-5 text-left font-display text-xl font-bold uppercase tracking-[-0.04em] text-[#080808] hover:no-underline hover:text-[#5b5fe0]">
                  <span className="mr-4 text-[#5b5fe0]">{String(index + 1).padStart(2, "0")}</span>
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 pr-6 text-base leading-relaxed text-[#40485c]">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#080808] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8">
        <div className="md:col-span-4">
          <Logo className="text-white" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/70">
            Formação, discernimento e direção para uma jornada mais profunda e consciente.
          </p>
        </div>

        <nav className="grid gap-4 text-sm uppercase tracking-[0.16em] text-white/70 md:col-span-4 md:col-start-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="md:col-span-3 md:col-start-10">
          <p className="eyebrow text-[#9fb8ff]">Cursos</p>
          <ul className="mt-5 space-y-4 text-sm uppercase tracking-[0.16em] text-white/70">
            <li><a href="https://hotmart.com/pt-br/marketplace/produtos/hagsxd-curso-de-dons-espirituais-btgoa/S85674996V?preview=true" target="_blank" rel="noreferrer" className="hover:text-white">Dons Espirituais</a></li>
            <li><a href="https://hotmart.com/pt-br/marketplace/produtos/hagsxd-seminario-de-libertacao-0v0aj/E93350393C?sck=HOTMART_PRODUCT_PAGE" target="_blank" rel="noreferrer" className="hover:text-white">Libertação</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs uppercase tracking-[0.18em] text-white/55 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© Instituto Acesso Global</p>
          <div className="flex gap-5">
            <a href="#instituto" className="hover:text-white">Instituto</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
