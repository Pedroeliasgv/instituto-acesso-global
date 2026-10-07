import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  authorityPoints,
  faqs,
  howItWorks,
  images,
  institutePoints,
  modules,
  navLinks,
  painPoints,
} from "@/data/site";
import { Eyebrow } from "./ui";

interface HeroProps {
  onOpenPricing: () => void;
}

export function Hero({ onOpenPricing }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-end overflow-hidden bg-[#080808] text-white"
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={images.hero}
          alt="Instituto Acesso Global"
          className="h-full w-full object-cover object-[center_15%] opacity-60"
        />

        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/70 via-black/25 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 pb-14 pt-40 sm:px-8 md:pb-20 lg:px-14">
        <div className="max-w-4xl">
          <Eyebrow className="text-white/60">
            Instituto Acesso Global
          </Eyebrow>

          <h1 className="mt-5 max-w-4xl font-display text-[clamp(3.2rem,7vw,7.5rem)] font-bold uppercase leading-[0.86] tracking-[-0.06em]">
            Conhecimento.
            <span className="block text-white/55">Discernimento.</span>
            <span className="block">Propósito.</span>
          </h1>

          <div className="mt-7 flex max-w-2xl flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <p className="max-w-lg text-sm leading-relaxed text-white/70 md:text-base">
              Uma jornada de ensino e aprofundamento para quem deseja crescer
              em conhecimento, vida espiritual e desenvolvimento ministerial.
            </p>

            <button
              type="button"
              onClick={onOpenPricing}
              className="inline-flex w-fit shrink-0 items-center gap-4 rounded-full bg-white px-6 py-4 font-display text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[#080808] transition-transform duration-300 hover:scale-[1.03]"
            >
              Conhecer o Instituto

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#080808] text-white">
                <ArrowRight size={15} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Presentation() {
  return (
    <section
      id="apresentacao"
      className="relative overflow-hidden bg-white px-5 py-28 sm:px-8 md:py-36 lg:px-14"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="reveal">
          <Eyebrow className="text-[#6f6b65]">
            Instituto Acesso Global
          </Eyebrow>

          <h2 className="mt-6 max-w-6xl font-display text-[clamp(3.8rem,9vw,9rem)] font-bold uppercase leading-[0.82] tracking-[-0.075em] text-[#080808]">
            Você não precisa
            <span className="block text-[#77736c]">continuar no</span>
            <span className="block">superficial.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-24">
          <div className="reveal">
            <p className="max-w-3xl text-xl font-medium leading-relaxed tracking-[-0.02em] text-[#080808] md:text-3xl">
              Existe uma diferença entre simplesmente ouvir sobre esses
              assuntos e realmente{" "}
              <span className="text-[#77736c]">
                estudá-los, compreendê-los e desenvolver discernimento.
              </span>
            </p>

            <p className="mt-7 max-w-2xl text-base leading-relaxed text-[#6f6b65] md:text-lg">
              O Instituto Acesso Global foi criado para quem deseja sair da
              superficialidade e construir uma base mais sólida de
              conhecimento sobre vida espiritual, dons, profecia, propósito,
              liderança, finanças e oração.
            </p>

            <a
              href="#modulos"
              className="group mt-9 inline-flex items-center gap-4 rounded-full bg-[#080808] px-6 py-4 font-display text-[0.65rem] font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:scale-[1.03]"
            >
              Quero conhecer o Instituto

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={15} />
              </span>
            </a>
          </div>

          <div className="reveal">
            <div className="overflow-hidden rounded-[2rem] bg-[#080808] text-white">
              <div className="border-b border-white/10 p-7 md:p-9">
                <span className="font-display text-[0.6rem] font-bold uppercase tracking-[0.18em] text-white/40">
                  Uma jornada completa
                </span>

                <strong className="mt-5 block font-display text-[clamp(4rem,8vw,7rem)] font-bold leading-none tracking-[-0.07em]">
                  08
                </strong>

                <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/50">
                  módulos para aprofundar diferentes áreas do conhecimento
                  espiritual e ministerial.
                </p>
              </div>

              <div className="grid grid-cols-2">
                <div className="border-r border-white/10 p-7 md:p-9">
                  <strong className="font-display text-3xl font-bold tracking-[-0.05em] md:text-4xl">
                    01
                  </strong>

                  <p className="mt-2 text-xs uppercase tracking-[0.12em] text-white/40">
                    Instituto
                  </p>
                </div>

                <div className="p-7 md:p-9">
                  <strong className="font-display text-3xl font-bold tracking-[-0.05em] md:text-4xl">
                    02
                  </strong>

                  <p className="mt-2 text-xs uppercase tracking-[0.12em] text-white/40">
                    Formas de acesso
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal mt-20 border-y border-[#080808]/10 py-8 md:mt-28 md:py-10">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <p className="max-w-3xl font-display text-2xl font-bold uppercase leading-tight tracking-[-0.04em] text-[#080808] md:text-4xl">
              Conhecimento muda a forma como você enxerga.
            </p>

            <span className="shrink-0 font-display text-[0.6rem] font-bold uppercase tracking-[0.16em] text-[#77736c]">
              Comece sua jornada
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Dores() {
  return (
    <section
      id="dores"
      className="relative overflow-hidden bg-[#080808] px-5 py-24 text-white sm:px-8 md:py-32 lg:px-14"
    >
      <div className="absolute inset-0">
        <img
          src={images.bible}
          alt=""
          className="h-full w-full object-cover opacity-45"
        />

        <div className="absolute inset-0 bg-[#080808]/55" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1180px]">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div className="reveal">
            <Eyebrow className="text-white/45">
              Talvez você esteja buscando
            </Eyebrow>

            <h2 className="mt-6 max-w-xl font-display text-[clamp(3.2rem,7vw,7rem)] font-bold uppercase leading-[0.88] tracking-[-0.06em]">
              Mais
              <span className="block text-white/45">clareza.</span>
            </h2>

            <p className="mt-7 max-w-md text-base leading-relaxed text-white/55">
              Existem perguntas que fazem parte da caminhada de quem deseja
              crescer em conhecimento, discernimento e maturidade espiritual.
            </p>
          </div>

          <div className="grid gap-0">
            {painPoints.map((point, index) => (
              <div
                key={point}
                className="reveal flex gap-5 border-t border-white/15 py-6"
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                <span className="font-display text-xs font-bold text-white/35">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Intro() {
  return (
    <section
      id="instituto"
      className="bg-white px-5 py-24 sm:px-8 md:py-32 lg:px-14"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="reveal max-w-5xl">
          <Eyebrow className="text-[#6f6b65]">O Instituto</Eyebrow>

          <h2 className="mt-6 font-display text-[clamp(3.5rem,8vw,8rem)] font-bold uppercase leading-[0.86] tracking-[-0.065em] text-[#080808]">
            Uma jornada
            <span className="block text-[#77736c]">de aprendizado.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <p className="reveal max-w-3xl text-xl leading-relaxed text-[#494641] md:text-2xl">
            O Instituto Acesso Global reúne conteúdos organizados para quem
            deseja aprofundar temas relacionados à vida espiritual, dons,
            discernimento, propósito, liderança, finanças e oração.
          </p>

          <div className="reveal border-l border-[#080808]/15 pl-6">
            <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-[#6f6b65]">
              Produto principal
            </p>

            <p className="mt-4 text-sm leading-relaxed text-[#494641]">
              Uma experiência completa de estudo, com oito módulos organizados
              em uma única jornada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Marquee({
  tone = "dark",
}: {
  tone?: "dark" | "light";
}) {
  const items = [
    "ENSINO",
    "DISCERNIMENTO",
    "PROPÓSITO",
    "VIDA ESPIRITUAL",
    "CHAMADO",
    "DESENVOLVIMENTO",
  ];

  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <section
      className={`overflow-hidden ${
        tone === "light"
          ? "bg-[#f4f1eb] text-[#080808]"
          : "bg-[#080808] text-white"
      }`}
    >
      <div className="relative flex overflow-hidden py-7 md:py-9">
        <div className="flex w-max shrink-0 animate-marquee items-center">
          {repeatedItems.map((item, index) => (
            <div key={`${item}-${index}`} className="flex items-center">
              <span className="px-6 font-display text-[clamp(1.5rem,3vw,3rem)] font-bold uppercase tracking-[-0.04em] md:px-10">
                {item}
              </span>

              <span className="h-2 w-2 shrink-0 rounded-full bg-current opacity-40" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section
      id="conteudos"
      className="bg-[#080808] px-5 py-24 text-white sm:px-8 md:py-32 lg:px-14"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div className="reveal">
            <Eyebrow className="text-white/40">O que você encontra</Eyebrow>

            <h2 className="mt-6 font-display text-[clamp(3rem,7vw,6.5rem)] font-bold uppercase leading-[0.86] tracking-[-0.06em]">
              Conteúdo
              <span className="block text-white/45">com propósito.</span>
            </h2>
          </div>

          <div className="grid gap-0">
            {institutePoints.map((item, index) => (
              <div
                key={item.number}
                className="reveal grid gap-4 border-t border-white/10 py-7 md:grid-cols-[70px_1fr]"
                style={{
                  transitionDelay: `${index * 80}ms`,
                }}
              >
                <span className="font-display text-xs font-bold text-white/35">
                  {item.number}
                </span>

                <div>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-[-0.03em] md:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/55 md:text-base">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


export function Modules() {
  const [current, setCurrent] = useState(0);

  const nextModule = () => {
    setCurrent((prev) => Math.min(prev + 1, modules.length - 1));
  };

  const previousModule = () => {
    setCurrent((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section
      id="modulos"
      className="overflow-hidden bg-[#f4f1eb] px-5 py-24 sm:px-8 md:py-32 lg:px-14"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="reveal flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow className="text-[#6f6b65]">
              O que você vai aprender
            </Eyebrow>

            <h2 className="mt-6 max-w-4xl font-display text-[clamp(3.2rem,7vw,7rem)] font-bold uppercase leading-[0.86] tracking-[-0.065em] text-[#080808]">
              8 módulos.
              <span className="block text-[#77736c]">Uma jornada.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-[#6f6b65] md:text-right">
            Uma jornada progressiva de aprendizado, organizada em oito módulos.
          </p>
        </div>

        <div className="relative mt-14">
          <button
            type="button"
            onClick={previousModule}
            disabled={current === 0}
            aria-label="Módulo anterior"
            className="absolute left-0 top-1/2 z-20 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-[#080808]/10 bg-white text-[#080808] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#080808] hover:text-white disabled:pointer-events-none disabled:opacity-20 lg:flex"
          >
            <ArrowRight size={19} className="rotate-180" />
          </button>

          <div className="mx-auto w-full max-w-[820px] overflow-hidden px-0 lg:px-20">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                transform: `translateX(-${current * 100}%)`,
              }}
            >
              {modules.map((module, index) => (
                <article
                  key={module.number}
                  className="w-full shrink-0 px-0"
                >
                  <div
                    className="reveal group mx-auto max-w-[620px] overflow-hidden rounded-[2rem] bg-white shadow-sm transition-all duration-500"
                    style={{
                      transitionDelay: `${index * 70}ms`,
                    }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={module.image}
                        alt={module.title}
                        loading="lazy"
                        className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

                      <span className="absolute left-6 top-6 rounded-full bg-white px-4 py-2 font-display text-[0.6rem] font-bold uppercase tracking-[0.15em] text-[#080808]">
                        Módulo {module.number}
                      </span>
                    </div>

                    <div className="p-7 md:p-9">
                      <div className="flex items-start justify-between gap-6">
                        <h3 className="max-w-xl font-display text-[clamp(2.2rem,5vw,4rem)] font-bold uppercase leading-[0.88] tracking-[-0.055em] text-[#080808]">
                          {module.title}
                        </h3>

                        <span className="hidden shrink-0 font-display text-xs font-bold text-[#77736c] md:block">
                          {module.number} / 08
                        </span>
                      </div>

                      <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#494641] md:text-base">
                        {module.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={nextModule}
            disabled={current === modules.length - 1}
            aria-label="Próximo módulo"
            className="absolute right-0 top-1/2 z-20 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-[#080808]/10 bg-white text-[#080808] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#080808] hover:text-white disabled:pointer-events-none disabled:opacity-20 lg:flex"
          >
            <ArrowRight size={19} />
          </button>

          <div className="mt-7 flex items-center justify-center gap-3 lg:hidden">
            <button
              type="button"
              onClick={previousModule}
              disabled={current === 0}
              aria-label="Módulo anterior"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#080808]/10 bg-white text-[#080808] transition-all duration-300 disabled:opacity-25"
            >
              <ArrowRight size={16} className="rotate-180" />
            </button>

            <span className="min-w-[70px] text-center font-display text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[#77736c]">
              {String(current + 1).padStart(2, "0")} / 08
            </span>

            <button
              type="button"
              onClick={nextModule}
              disabled={current === modules.length - 1}
              aria-label="Próximo módulo"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#080808]/10 bg-white text-[#080808] transition-all duration-300 disabled:opacity-25"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {modules.map((module, index) => (
            <button
              key={module.number}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Ir para o módulo ${module.number}`}
              className={`h-1 rounded-full transition-all duration-500 ${
                index === current
                  ? "w-8 bg-[#080808]"
                  : "w-2 bg-[#080808]/20 hover:bg-[#080808]/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}



export function Pricing() {
  return (
    <section
      id="planos"
      className="relative overflow-hidden bg-[#080808] px-5 py-24 text-white sm:px-8 md:py-32 lg:px-14"
    >
      {/* Brilhos decorativos */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#b18a4a]/10 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#7957d5]/10 blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-[1180px]">
        {/* CABEÇALHO */}
        <div className="reveal mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#b18a4a]" />

            <Eyebrow className="text-white/50">
              Escolha seu acesso
            </Eyebrow>
          </div>

          <h2 className="mt-7 font-display text-[clamp(3.4rem,8vw,8rem)] font-bold uppercase leading-[0.84] tracking-[-0.065em]">
            Comece sua
            <span className="block bg-gradient-to-r from-[#b18a4a] via-[#d0ad70] to-[#8a6938] bg-clip-text text-transparent">
              jornada.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/55 md:text-lg">
            Tenha acesso ao conteúdo do Instituto Acesso Global e escolha a
            modalidade que melhor acompanha sua jornada de estudo.
          </p>
        </div>

        {/* PLANOS */}
        <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-2">
          {/* PLANO ANUAL */}
          <article
            className="reveal relative overflow-hidden rounded-[2rem] border border-[#b18a4a]/30 bg-gradient-to-br from-white via-[#fffdf8] to-[#eadcc5] p-7 text-[#080808] shadow-[0_20px_70px_rgba(177,138,74,0.12)] transition-transform duration-500 hover:-translate-y-1 md:p-9"
          >
            {/* Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#b18a4a]/15 blur-3xl"
            />

            <div className="relative">
              {/* Badge */}
              <span className="absolute right-0 top-0 rounded-full bg-gradient-to-r from-[#8a6938] to-[#b18a4a] px-4 py-2 font-display text-[0.58rem] font-bold uppercase tracking-[0.14em] text-white shadow-md">
                Mais vantajoso
              </span>

              <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-[#8a6938]">
                Acesso anual
              </p>

              <div className="mt-8">
                <span className="text-sm text-[#918b82] line-through">
                  R$ 1.497,00
                </span>

                <div className="mt-1 flex flex-wrap items-end gap-x-3 gap-y-1">
                  <span className="font-display text-6xl font-bold tracking-[-0.06em]">
                    R$ 897
                  </span>

                  <span className="mb-2 text-sm text-[#625e58]">
                    / ano
                  </span>
                </div>

                <p className="mt-2 text-sm font-semibold text-[#8a6938]">
                  ou 12x de R$ 94,97
                </p>
              </div>

              <div className="mt-8 border-t border-[#8a6938]/15 pt-7">
                <div className="space-y-4">
                  <Benefit text="Acesso integral por 1 ano" />

                  <Benefit text="8 módulos do Instituto Acesso Global" />

                  <Benefit text="Estudo no seu próprio ritmo" />
                </div>
              </div>

              <a
                href="https://pay.hotmart.com/M107931141B?bid=1791397163725"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-9 flex w-full items-center justify-between rounded-full bg-[#080808] px-6 py-4 font-display text-[0.65rem] font-bold uppercase tracking-[0.15em] text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-[#211d18] hover:shadow-xl"
              >
                <span>Quero acesso anual</span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a4a] text-white transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={15} />
                </span>
              </a>
            </div>
          </article>

          {/* PLANO MENSAL */}
          <article
            className="reveal relative overflow-hidden rounded-[2rem] border border-[#7957d5]/30 bg-gradient-to-br from-[#15111f] via-[#0c0a10] to-[#080808] p-7 text-white shadow-[0_20px_70px_rgba(121,87,213,0.14)] transition-transform duration-500 hover:-translate-y-1 md:p-9"
          >
            {/* Glows */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#7957d5]/20 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 -left-24 h-64 w-64 rounded-full bg-[#4c347c]/20 blur-3xl"
            />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#9b7cf0]/25 bg-[#9b7cf0]/10 px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#9b7cf0]" />

                <p className="font-display text-[0.58rem] font-bold uppercase tracking-[0.16em] text-[#bba7ff]">
                  Assinatura mensal
                </p>
              </div>

              <div className="mt-8">
                <span className="text-sm text-white/35 line-through">
                  R$ 147,00
                </span>

                <div className="mt-1 flex flex-wrap items-end gap-x-3 gap-y-1">
                  <span className="font-display text-6xl font-bold tracking-[-0.06em]">
                    R$ 97
                  </span>

                  <span className="mb-2 text-sm text-white/40">
                    / mês
                  </span>
                </div>

                <p className="mt-2 text-sm font-semibold text-[#bba7ff]">
                  assinatura recorrente
                </p>
              </div>

              <div className="mt-8 border-t border-white/10 pt-7">
                <div className="space-y-4">
                  <Benefit
                    text="Acesso enquanto a assinatura estiver ativa"
                    dark
                  />

                  <Benefit
                    text="8 módulos do Instituto Acesso Global"
                    dark
                  />

                  <Benefit
                    text="Cobrança recorrente mensal"
                    dark
                  />
                </div>
              </div>

              <a
                href="https://pay.hotmart.com/M107931141B?off=iaddcka9&checkoutMode=6&bid=1791397625677"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-9 flex w-full items-center justify-between rounded-full bg-white px-6 py-4 font-display text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[#080808] shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-[#eeeaff] hover:shadow-xl"
              >
                <span>Quero assinar</span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#7957d5] text-white transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={15} />
                </span>
              </a>
            </div>
          </article>
        </div>

        {/* RODAPÉ */}
        <div className="reveal mt-8 flex items-center justify-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-[#b18a4a]" />

          <p className="text-center text-xs leading-relaxed text-white/30">
            Escolha a modalidade que melhor se encaixa na sua jornada.
          </p>

          <span className="h-1.5 w-1.5 rounded-full bg-[#7957d5]" />
        </div>
      </div>
    </section>
  );
}


function Benefit({
  text,
  dark = false,
}: {
  text: string;
  dark?: boolean;
}) {
  return (
    <div className="flex items-start gap-3">
      <span
        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
          dark ? "bg-white/10 text-white" : "bg-[#080808] text-white"
        }`}
      >
        <Check size={12} strokeWidth={2.5} />
      </span>

      <span
        className={`text-sm leading-relaxed ${
          dark ? "text-white/65" : "text-[#494641]"
        }`}
      >
        {text}
      </span>
    </div>
  );
}

export function Evanio() {
  return (
    <section
      id="evanio"
      className="bg-[#f4f1eb] px-5 py-24 sm:px-8 md:py-32 lg:px-14"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
          <div className="reveal overflow-hidden rounded-[2rem] bg-[#080808]">
            <img
              src={images.evanio}
              alt="Evanio Vale"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
          </div>

          <div>
            <div className="reveal">
              <Eyebrow className="text-[#6f6b65]">
                Quem é Evanio Vale?
              </Eyebrow>

              <h2 className="mt-6 font-display text-[clamp(3.2rem,7vw,7rem)] font-bold uppercase leading-[0.86] tracking-[-0.065em] text-[#080808]">
                Quem é
                <span className="block text-[#77736c]">Evanio</span>
                <span className="block">Vale?</span>
              </h2>
            </div>

            <div className="reveal mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-[#494641] md:text-lg">
              <p>
                Evanio Vale é pai do Pedro Elias e do Lucas José, casado com
                Paulyceya do Vale.
              </p>

              <p>
                São milhões de pessoas alcançadas que têm suas vidas
                transformadas ao ouvirem a voz de Deus.
              </p>

              <p>
                Há anos, tenho dedicado minha vida a ensinar, desenvolver
                pessoas e ajudá-las a crescer em conhecimento e discernimento.
                Depois de tantos anos de experiências, estudos, encontros e
                ensinamentos, reúno parte dessa jornada no Instituto Acesso
                Global para que mais pessoas possam aprender, crescer e
                desenvolver aquilo que Deus colocou em suas mãos.
              </p>
            </div>

            <div className="reveal mt-10 grid grid-cols-2 gap-5 border-t border-[#080808]/10 pt-8">
              <div>
                <strong className="font-display text-4xl font-bold tracking-[-0.05em] text-[#080808] md:text-5xl">
                  +50 mil
                </strong>

                <p className="mt-2 font-display text-[0.6rem] font-bold uppercase tracking-[0.15em] text-[#6f6b65]">
                  Inscritos no YouTube
                </p>
              </div>

              <div>
                <strong className="font-display text-4xl font-bold tracking-[-0.05em] text-[#080808] md:text-5xl">
                  +15 mil
                </strong>

                <p className="mt-2 font-display text-[0.6rem] font-bold uppercase tracking-[0.15em] text-[#6f6b65]">
                  Seguidores no Instagram
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="bg-white px-5 py-24 sm:px-8 md:py-32 lg:px-14"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="reveal">
          <Eyebrow className="text-[#6f6b65]">Como funciona</Eyebrow>

          <h2 className="mt-6 max-w-5xl font-display text-[clamp(3.2rem,7vw,7rem)] font-bold uppercase leading-[0.86] tracking-[-0.065em] text-[#080808]">
            Simples para
            <span className="block text-[#77736c]">começar.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-0 md:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((item, index) => (
            <div
              key={item.number}
              className="reveal border-t border-[#080808]/10 py-7 md:px-6 md:first:pl-0 md:last:pr-0 lg:border-l lg:border-t-0"
              style={{
                transitionDelay: `${index * 80}ms`,
              }}
            >
              <span className="font-display text-xs font-bold text-[#77736c]">
                {item.number}
              </span>

              <h3 className="mt-8 font-display text-2xl font-bold uppercase tracking-[-0.04em] text-[#080808]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#6f6b65]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Objections() {
  const items = [
    {
      q: "Preciso ter conhecimento prévio?",
      a: "Não necessariamente. A proposta é apresentar os conteúdos de forma organizada para pessoas que desejam estudar e aprofundar esses temas.",
    },
    {
      q: "Para quem é o Instituto?",
      a: "Para pessoas que desejam crescer em conhecimento, compreender melhor temas relacionados à vida espiritual e desenvolver maturidade pessoal e ministerial.",
    },
    {
      q: "Os oito módulos fazem parte do Instituto?",
      a: "Sim. Os oito módulos são o conteúdo principal do Instituto Acesso Global e fazem parte da jornada de acesso.",
    },
    {
      q: "Posso estudar no meu próprio ritmo?",
      a: "Sim. O acesso permite que você organize seus estudos de acordo com sua rotina durante o período contratado.",
    },
  ];

  return (
    <section
      id="objecoes"
      className="bg-[#f4f1eb] px-5 py-24 sm:px-8 md:py-32 lg:px-14"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div className="reveal">
            <Eyebrow className="text-[#6f6b65]">Antes de começar</Eyebrow>

            <h2 className="mt-6 font-display text-[clamp(3rem,7vw,6.5rem)] font-bold uppercase leading-[0.86] tracking-[-0.06em] text-[#080808]">
              Ainda tem
              <span className="block text-[#77736c]">dúvidas?</span>
            </h2>
          </div>

          <div>
            {items.map((item, index) => (
              <div
                key={item.q}
                className="reveal border-t border-[#080808]/10 py-7"
                style={{
                  transitionDelay: `${index * 60}ms`,
                }}
              >
                <h3 className="font-display text-xl font-bold uppercase tracking-[-0.025em] text-[#080808] md:text-2xl">
                  {item.q}
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#6f6b65] md:text-base">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="bg-[#080808] px-5 py-28 text-white sm:px-8 md:py-40 lg:px-14">
      <div className="mx-auto max-w-[1100px] text-center">
        <div className="reveal">
          <Eyebrow className="text-white/40">Sua próxima etapa</Eyebrow>

          <h2 className="mx-auto mt-6 max-w-5xl font-display text-[clamp(3.5rem,9vw,9rem)] font-bold uppercase leading-[0.84] tracking-[-0.07em]">
            Comece a
            <span className="block text-white/45">aprender.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/55 md:text-lg">
            Tenha acesso ao Instituto Acesso Global e comece sua jornada pelos
            oito módulos de conteúdo.
          </p>

          <a
            href="#planos"
            className="mx-auto mt-9 inline-flex items-center gap-4 rounded-full bg-white px-7 py-4 font-display text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[#080808] transition-transform duration-300 hover:scale-[1.03]"
          >
            Ver planos

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#080808] text-white">
              <ArrowRight size={15} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section
      id="faq"
      className="bg-white px-5 py-24 sm:px-8 md:py-32 lg:px-14"
    >
      <div className="mx-auto max-w-[1000px]">
        <div className="reveal text-center">
          <Eyebrow className="text-[#6f6b65]">
            Perguntas frequentes
          </Eyebrow>

          <h2 className="mt-6 font-display text-[clamp(3.2rem,7vw,7rem)] font-bold uppercase leading-[0.86] tracking-[-0.065em] text-[#080808]">
            FAQ
          </h2>
        </div>

        <div className="mt-12">
          {faqs.map((faq, index) => (
            <details
              key={faq.q}
              className="reveal group border-t border-[#080808]/10 py-6"
              style={{
                transitionDelay: `${index * 40}ms`,
              }}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                <span className="font-display text-lg font-bold uppercase tracking-[-0.02em] text-[#080808] md:text-xl">
                  {faq.q}
                </span>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#080808]/10 transition-transform duration-300 group-open:rotate-180">
                  <ChevronDown size={16} />
                </span>
              </summary>

              <p className="max-w-3xl pr-10 pt-4 text-sm leading-relaxed text-[#6f6b65] md:text-base">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080808] px-5 py-10 text-white sm:px-8 lg:px-14">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-sm font-bold uppercase tracking-[0.12em]">
            Instituto Acesso Global
          </p>

          <p className="mt-2 text-sm text-white/40">
            Conhecimento, discernimento e desenvolvimento.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-5 gap-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-bold uppercase tracking-[0.12em] text-white/45 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mx-auto mt-8 max-w-[1180px] border-t border-white/10 pt-6">
        <p className="text-xs text-white/25">
          © {new Date().getFullYear()} Instituto Acesso Global. Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
}

/* Componentes visuais auxiliares/legados.
   Mantidos para evitar erros caso ainda estejam sendo importados em algum arquivo. */

export function CinematicImage() {
  return null;
}

export function AuthorityProof() {
  return (
    <section className="bg-[#080808] px-5 py-24 text-white sm:px-8 lg:px-14">
      <div className="mx-auto max-w-[1180px]">
        <Eyebrow className="text-white/40">Nossa proposta</Eyebrow>

        <div className="mt-10 grid gap-0 md:grid-cols-2">
          {authorityPoints.map((point, index) => (
            <div
              key={point}
              className="border-t border-white/10 px-0 py-6 md:px-6 md:first:pl-0"
            >
              <span className="font-display text-xs font-bold text-white/30">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="mt-4 max-w-md text-base leading-relaxed text-white/65">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ValueSection() {
  return null;
}

export function SecuritySection() {
  return null;
}

export function Manifesto() {
  return null;
}

export function Methodology() {
  return null;
}

export function Deliverables() {
  return null;
}