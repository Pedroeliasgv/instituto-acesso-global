import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { useState } from "react";

import {
  authorityPoints,
  faqs,
  howItWorks,
  images,
  institutePoints,
  modules,
  painPoints,
} from "@/data/site";

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import faixa from "@/assets/faixa.jpg";
import { Eyebrow } from "./ui";

/* -------------------------------------------------------------------------- */
/* HERO                                                                       */
/* -------------------------------------------------------------------------- */

interface HeroProps {
  onOpenPricing: () => void;
}

export function Hero({ onOpenPricing }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative isolate min-h-[100svh] overflow-hidden bg-[#080808] text-white"
    >
      <div className="absolute inset-0">
        <img
          src={images.hero}
          alt=""
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-[50%_18%]
            scale-[1.08]
            translate-x-[8%]
          "
        />

        <div className="absolute inset-0 bg-black/10" />

        <div
          className="absolute inset-y-0 left-0 w-[52%]"
          style={{
            background:
              "linear-gradient(90deg, rgba(8,8,8,0.72) 0%, rgba(8,8,8,0.38) 48%, transparent 100%)",
          }}
        />

        <div
          className="absolute inset-x-0 bottom-0 h-[28%]"
          style={{
            background:
              "linear-gradient(to top, rgba(8,8,8,0.65), transparent)",
          }}
        />
      </div>

      <div className="relative z-10 min-h-[100svh]">
        <div className="absolute left-7 top-28 sm:left-10 lg:left-14 xl:left-20">
          <div className="reveal flex items-center gap-3">
            <span className="h-px w-8 bg-[#b18a4a]" />

            <span className="text-[9px] font-medium uppercase tracking-[0.32em] text-white/65">
              Instituto Acesso Global
            </span>
          </div>
        </div>

        <div
          className="
            absolute
            left-7
            top-[32%]
            w-[calc(100%-3.5rem)]
            sm:left-10
            sm:w-auto
            lg:left-14
            xl:left-20
          "
        >
          <div className="max-w-[850px]">
            <h1
              className="
                reveal
                text-[clamp(3.8rem,8vw,8.8rem)]
                font-medium
                leading-[0.8]
                tracking-[-0.075em]
              "
            >
              <span className="block">Conhecimento.</span>
              <span className="block">Discernimento.</span>
              <span className="block text-white/50">Propósito.</span>
            </h1>
          </div>
        </div>

        <div
          className="
            absolute
            bottom-24
            left-7
            sm:left-10
            lg:left-14
            xl:left-20
          "
        >
          <div className="max-w-[440px]">
            <p
              className="
                reveal
                reveal-delay-1
                text-[14px]
                leading-6
                text-white/65
                sm:text-[15px]
                sm:leading-7
              "
            >
              Uma jornada de aprendizado para quem deseja aprofundar sua
              vida espiritual, desenvolver discernimento e compreender
              melhor seu chamado.
            </p>

            <div className="reveal reveal-delay-2 mt-7">
              <button
                type="button"
                onClick={onOpenPricing}
                className="
                  group
                  inline-flex
                  items-center
                  gap-4
                  border
                  border-white/30
                  bg-white
                  px-5
                  py-3
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.08em]
                  text-[#080808]
                  transition-all
                  duration-300
                  hover:border-white
                  hover:bg-[#f4f1eb]
                "
              >
                <span>Conhecer o Instituto</span>

                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-[#b18a4a]
                    text-white
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </button>
            </div>
          </div>
        </div>

        <div
          className="
            absolute
            right-7
            top-28
            hidden
            sm:right-10
            md:block
            lg:right-14
            xl:right-20
          "
        >
          <div className="reveal flex items-center gap-3">
            <span className="text-[9px] uppercase tracking-[0.3em] text-white/40">
              Formação
            </span>

            <span className="h-px w-8 bg-white/25" />

            <span className="font-display text-xs text-white/50">
              01
            </span>
          </div>
        </div>

        <div
          className="
            absolute
            right-7
            top-1/2
            hidden
            -translate-y-1/2
            lg:block
            lg:right-14
            xl:right-20
          "
        >
          <span
            className="
              block
              -rotate-90
              whitespace-nowrap
              text-[8px]
              font-medium
              uppercase
              tracking-[0.4em]
              text-white/35
            "
          >
            Fé • Conhecimento • Desenvolvimento
          </span>
        </div>

        <div
          className="
            absolute
            bottom-7
            right-7
            flex
            items-center
            gap-3
            sm:right-10
            lg:right-14
            xl:right-20
          "
        >
          <span className="text-[8px] uppercase tracking-[0.3em] text-white/35">
            Scroll
          </span>

          <span className="h-px w-10 bg-white/25" />

          <span className="h-1.5 w-1.5 rounded-full bg-[#b18a4a]" />
        </div>

        <div
          className="
            absolute
            bottom-7
            left-1/2
            hidden
            h-px
            w-[18%]
            -translate-x-1/2
            bg-white/15
            lg:block
          "
        />
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* PRESENTATION                                                               */
/* -------------------------------------------------------------------------- */

export function Presentation({ onOpenPricing }: HeroProps) {
  return (
    <section className="bg-[#f4f1eb] px-6 py-24 text-[#080808] sm:px-10 md:py-32 lg:px-16 xl:px-20">
      <div className="mx-auto grid max-w-[1280px] gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div className="reveal">
          <Eyebrow>Uma nova profundidade</Eyebrow>

          <h2 className="mt-7 max-w-[780px] text-[clamp(2.8rem,5.5vw,6rem)] font-medium leading-[0.92] tracking-[-0.055em]">
            Você não precisa continuar no superficial.
          </h2>
        </div>

        <div className="reveal reveal-delay-1">
          <p className="max-w-[520px] text-base leading-7 text-[#494641] sm:text-lg">
            O Instituto Acesso Global reúne conteúdos organizados para quem
            deseja estudar, desenvolver discernimento e crescer em diferentes
            áreas da vida espiritual.
          </p>

          <button
            type="button"
            onClick={onOpenPricing}
            className="
              group
              mt-8
              inline-flex
              items-center
              gap-4
              rounded-full
              bg-[#080808]
              px-6
              py-3.5
              text-sm
              font-medium
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
            "
          >
            Conhecer o Instituto

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#b18a4a] text-white transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </button>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-[1280px]">
        <div className="reveal relative overflow-hidden rounded-[2rem] bg-[#080808] p-8 text-white sm:p-12 lg:p-16">
          <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-white/5 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-12 md:flex-row md:items-end">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/45">
                Conteúdo
              </span>

              <p className="mt-5 text-[clamp(4rem,9vw,8rem)] font-medium leading-none tracking-[-0.08em]">
                07
              </p>
            </div>

            <div className="max-w-[390px]">
              <p className="text-xl leading-snug text-white/85">
                módulos organizados para acompanhar uma jornada de
                aprendizado progressiva.
              </p>

              <div className="mt-6 h-px w-16 bg-[#b18a4a]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* DORES                                                                      */
/* -------------------------------------------------------------------------- */

export function Dores({ onOpenPricing }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#080808] px-6 py-24 text-white sm:px-10 md:py-32 lg:px-16 xl:px-20">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
        <img
          src={images.bible}
          alt=""
          className="h-full w-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/65 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1280px]">
        <div className="max-w-[700px]">
          <div className="reveal">
            <Eyebrow className="text-white/50">
              Talvez você esteja aqui
            </Eyebrow>
          </div>

          <h2 className="reveal reveal-delay-1 mt-7 text-[clamp(2.8rem,5vw,5.5rem)] font-medium leading-[0.94] tracking-[-0.055em]">
            Algumas perguntas continuam sem resposta.
          </h2>

          <div className="mt-14 border-t border-white/10">
            {painPoints.map((point, index) => (
              <div
                key={point}
                className="reveal flex gap-5 border-b border-white/10 py-6"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span className="mt-1 text-[10px] tracking-[0.2em] text-[#b18a4a]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="max-w-[620px] text-base leading-7 text-white/70 sm:text-lg">
                  {point}
                </p>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={onOpenPricing}
            className="
              group
              mt-10
              inline-flex
              items-center
              gap-4
              rounded-full
              bg-white
              px-7
              py-4
              text-sm
              font-medium
              text-[#080808]
              transition-all
              duration-300
              hover:-translate-y-0.5
            "
          >
            Quero aprofundar meu conhecimento

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a4a] text-white transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="h-4 w-4" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* INTRO                                                                      */
/* -------------------------------------------------------------------------- */

export function Intro({ onOpenPricing }: HeroProps) {
  return (
    <section className="bg-white px-6 py-24 text-[#080808] sm:px-10 md:py-32 lg:px-16 xl:px-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="reveal flex items-center gap-4">
          <span className="h-1 w-12 rounded-full bg-[#b18a4a]" />

          <span className="text-[10px] uppercase tracking-[0.3em] text-[#6f6b65]">
            Instituto Acesso Global
          </span>
        </div>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <h2 className="reveal max-w-[900px] text-[clamp(3rem,6vw,6.5rem)] font-medium leading-[0.9] tracking-[-0.06em]">
            Uma jornada de aprendizado.
          </h2>

          <div className="reveal reveal-delay-1 self-end">
            <p className="max-w-[500px] text-base leading-7 text-[#494641] sm:text-lg">
              O Instituto foi estruturado em sete módulos que percorrem temas
              importantes para conhecimento, discernimento, propósito,
              desenvolvimento espiritual e liderança.
            </p>

            <button
              type="button"
              onClick={onOpenPricing}
              className="
                group
                mt-8
                inline-flex
                items-center
                gap-4
                rounded-full
                bg-[#080808]
                px-6
                py-3.5
                text-sm
                font-medium
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
              "
            >
              Conhecer o Instituto

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#b18a4a] text-white transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* MARQUEE                                                                    */
/* -------------------------------------------------------------------------- */

interface MarqueeProps {
  tone?: "light" | "dark";
}

export function Marquee({ tone = "light" }: MarqueeProps) {
  const dark = tone === "dark";

  const items = [
    "ENSINO",
    "DISCERNIMENTO",
    "PROPÓSITO",
    "VIDA ESPIRITUAL",
    "CHAMADO",
    "DESENVOLVIMENTO",
  ];

  return (
    <section
      className={`overflow-hidden border-y ${
        dark
          ? "border-white/10 bg-[#080808] text-white"
          : "border-black/10 bg-[#f4f1eb] text-[#080808]"
      }`}
    >
      <div className="flex min-w-max animate-[marquee_25s_linear_infinite]">
        {[...items, ...items].map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center gap-8 px-7 py-7"
          >
            <span className="text-sm font-medium tracking-[0.22em]">
              {item}
            </span>

            <span
              className={`h-1.5 w-1.5 rounded-full ${
                index % 3 === 0
                  ? "bg-[#b18a4a]"
                  : "bg-current opacity-25"
              }`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* ABOUT                                                                      */
/* -------------------------------------------------------------------------- */

export function About({ onOpenPricing }: HeroProps) {
  return (
    <section
      id="instituto"
      className="bg-[#080808] px-6 py-24 text-white sm:px-10 md:py-32 lg:px-16 xl:px-20"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="reveal">
            <Eyebrow className="text-white/50">
              Sobre o Instituto
            </Eyebrow>

            <h2 className="mt-7 max-w-[620px] text-[clamp(2.8rem,5vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.055em]">
              Conteúdo com propósito.
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[1.5rem] bg-white/10 sm:grid-cols-2">
            {institutePoints.map((item, index) => (
              <div
                key={item.number}
                className="reveal bg-[#111111] p-8 sm:p-10"
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.25em] text-[#b18a4a]">
                    {item.number}
                  </span>

                  <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
                </div>

                <h3 className="mt-12 text-2xl font-medium">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-white/55">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal mt-14 flex justify-center">
          <button
            type="button"
            onClick={onOpenPricing}
            className="
              group
              inline-flex
              items-center
              gap-4
              rounded-full
              bg-white
              px-7
              py-4
              text-sm
              font-medium
              text-[#080808]
              transition-all
              duration-300
              hover:-translate-y-0.5
            "
          >
            Quero fazer parte

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a4a] text-white transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="h-4 w-4" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* MODULES                                                                    */
/* -------------------------------------------------------------------------- */

interface ModulesProps {
  onOpenPricing: () => void;
}

export function Modules({ onOpenPricing }: ModulesProps) {
  const [current, setCurrent] = useState(0);

  const module = modules[current];

  const previous = () => {
    setCurrent((value) =>
      value === 0 ? modules.length - 1 : value - 1,
    );
  };

  const next = () => {
    setCurrent((value) =>
      value === modules.length - 1 ? 0 : value + 1,
    );
  };

  return (
    <section
      id="modulos"
      className="bg-[#f4f1eb] px-6 py-24 text-[#080808] sm:px-10 md:py-32 lg:px-16 xl:px-20"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="reveal flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Eyebrow>Conteúdo do Instituto</Eyebrow>

            <h2 className="mt-7 text-[clamp(3rem,6vw,6.5rem)] font-medium leading-[0.88] tracking-[-0.065em]">
              7 módulos.
            </h2>
          </div>

          <p className="max-w-[420px] text-base leading-7 text-[#494641]">
            Uma estrutura pensada para conduzir você por diferentes temas,
            sempre buscando conhecimento, maturidade e discernimento.
          </p>
        </div>

        <div className="reveal mt-16">
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_70px_rgba(8,8,8,0.07)]">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-h-[340px] overflow-hidden bg-[#171717] lg:min-h-[620px]">
                <img
                  src={module.image}
                  alt={module.title}
                  className="h-full w-full object-cover transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

                <div className="absolute left-6 top-6 flex items-center gap-3 rounded-full border border-white/20 bg-black/20 px-4 py-2 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#b18a4a]" />

                  <span className="text-[10px] uppercase tracking-[0.22em] text-white/80">
                    Módulo {module.number}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-6 text-white">
                  <span className="text-[clamp(4rem,8vw,7rem)] font-medium leading-none tracking-[-0.08em]">
                    {module.number}
                  </span>

                  <span className="text-[10px] tracking-[0.25em] text-white/50">
                    07 MÓDULOS
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-14">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#8a6938]">
                      Módulo {module.number}
                    </span>

                    <span className="text-xs text-[#aaa59d]">
                      {String(current + 1).padStart(2, "0")} / 07
                    </span>
                  </div>

                  <h3 className="mt-8 max-w-[620px] text-[clamp(2.3rem,4vw,4.8rem)] font-medium leading-[0.92] tracking-[-0.055em]">
                    {module.title}
                  </h3>

                  <p className="mt-7 max-w-[590px] text-base leading-7 text-[#5b5751] sm:text-lg">
                    {module.description}
                  </p>

                  <div className="mt-8 overflow-hidden rounded-2xl">
                    <img
                      src={faixa}
                      alt=""
                      aria-hidden="true"
                      className="h-12 w-full object-cover opacity-75 transition-transform duration-700 hover:scale-105 sm:h-14"
                    />
                  </div>
                </div>

                <div className="mt-12">
                  <div className="mb-7 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={previous}
                      aria-label="Módulo anterior"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 transition-colors hover:border-[#b18a4a] hover:bg-[#b18a4a] hover:text-white"
                    >
                      <ArrowRight className="h-4 w-4 rotate-180" />
                    </button>

                    <div className="flex items-center gap-2">
                      {modules.map((item, index) => (
                        <button
                          key={item.number}
                          type="button"
                          onClick={() => setCurrent(index)}
                          aria-label={`Ir para módulo ${item.number}`}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            index === current
                              ? "w-9 bg-[#b18a4a]"
                              : "w-1.5 bg-black/15"
                          }`}
                        />
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={next}
                      aria-label="Próximo módulo"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 transition-colors hover:border-[#b18a4a] hover:bg-[#b18a4a] hover:text-white"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col items-center text-center">
            <p className="max-w-[480px] text-sm leading-6 text-[#6f6b65]">
              Acesse o Instituto completo e tenha uma jornada estruturada
              através dos sete módulos.
            </p>

            <button
              type="button"
              onClick={onOpenPricing}
              className="group mt-6 inline-flex items-center gap-4 rounded-full bg-[#080808] px-7 py-4 text-sm font-medium text-white shadow-[0_15px_40px_rgba(8,8,8,0.12)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Quero fazer parte

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a4a] transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="h-4 w-4" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* PRICING                                                                    */
/* -------------------------------------------------------------------------- */

function Benefit({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-black/10">
        <Check className="h-3 w-3" />
      </span>

      <span>{children}</span>
    </li>
  );
}

export function Pricing() {
  return (
    <section
      id="planos"
      className="bg-white px-6 py-24 text-[#080808] sm:px-10 md:py-32 lg:px-16 xl:px-20"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="reveal max-w-[760px]">
          <Eyebrow>Escolha sua forma de acesso</Eyebrow>

          <h2 className="mt-7 text-[clamp(3rem,6vw,6rem)] font-medium leading-[0.9] tracking-[-0.06em]">
            Entre para o Instituto.
          </h2>

          <p className="mt-7 max-w-[580px] text-base leading-7 text-[#5b5751] sm:text-lg">
            Escolha entre o acesso anual ou a assinatura mensal.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="reveal rounded-[2rem] border border-black/10 bg-[#f4f1eb] p-7 sm:p-10 lg:p-12">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-[#b18a4a] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white">
                Mais completo
              </span>

              <span className="text-[10px] uppercase tracking-[0.2em] text-[#6f6b65]">
                Anual
              </span>
            </div>

            <h3 className="mt-12 text-3xl font-medium tracking-tight">
              Acesso por 1 ano
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#635d54]">
              Acesso integral ao Instituto durante um ano.
            </p>

            <div className="mt-10">
              <span className="text-sm text-[#6f6b65] line-through">
                De R$ 1.497,00
              </span>

              <div className="mt-1 text-[clamp(3.5rem,6vw,5rem)] font-medium leading-none tracking-[-0.07em]">
                R$ 897
                <span className="text-2xl tracking-normal">,00</span>
              </div>

              <p className="mt-3 text-sm text-[#635d54]">
                ou 12x de R$ 94,97
              </p>
            </div>

            <ul className="mt-10 space-y-4 text-sm text-[#393631]">
              <Benefit>Acesso aos 7 módulos</Benefit>
              <Benefit>Acesso integral por 1 ano</Benefit>
              <Benefit>Conteúdo completo do Instituto</Benefit>
            </ul>

            <a
              href="https://pay.hotmart.com/M107931141B?bid=1791397163725"
              target="_blank"
              rel="noreferrer"
              className="mt-10 flex items-center justify-between rounded-full bg-[#080808] px-6 py-4 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1a1a1a]"
            >
              Quero o acesso anual

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a4a] text-white">
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </div>

          <div className="reveal reveal-delay-1 rounded-[2rem] border border-white/10 bg-[#11100f] p-7 text-white sm:p-10 lg:p-12">
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-white/10 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white/60">
                Flexível
              </span>

              <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                Mensal
              </span>
            </div>

            <h3 className="mt-12 text-3xl font-medium tracking-tight">
              Assinatura mensal
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/50">
              Acesso ao Instituto através de uma assinatura recorrente.
            </p>

            <div className="mt-10">
              <span className="text-sm text-white/35 line-through">
                De R$ 147,00
              </span>

              <div className="mt-1 text-[clamp(3.5rem,6vw,5rem)] font-medium leading-none tracking-[-0.07em]">
                R$ 97
                <span className="text-2xl tracking-normal">,00</span>
              </div>

              <p className="mt-3 text-sm text-white/45">por mês</p>
            </div>

            <ul className="mt-10 space-y-4 text-sm text-white/65">
              <Benefit>Acesso aos 7 módulos</Benefit>
              <Benefit>Assinatura recorrente</Benefit>
              <Benefit>Acesso ao conteúdo do Instituto</Benefit>
            </ul>

            <a
              href="https://pay.hotmart.com/M107931141B?off=iaddcka9&checkoutMode=6&bid=1791397625677"
              target="_blank"
              rel="noreferrer"
              className="mt-10 flex items-center justify-between rounded-full bg-white px-6 py-4 text-sm font-medium text-[#080808] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f4f1eb]"
            >
              Quero a assinatura mensal

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a4a] text-white">
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* EVANIO                                                                     */
/* -------------------------------------------------------------------------- */

export function Evanio() {
  return (
    <section
      id="evanio"
      className="bg-[#f4f1eb] px-6 py-24 text-[#080808] sm:px-10 md:py-32 lg:px-16 xl:px-20"
    >
      <div className="mx-auto grid max-w-[1280px] gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="reveal overflow-hidden rounded-[2rem] bg-[#080808]">
          <img
            src={images.evanio}
            alt="Evanio Vale"
            className="aspect-[4/5] h-full w-full object-cover"
          />
        </div>

        <div className="reveal reveal-delay-1">
          <Eyebrow>Quem conduz essa jornada</Eyebrow>

          <h2 className="mt-7 text-[clamp(3rem,6vw,6rem)] font-medium leading-[0.9] tracking-[-0.06em]">
            Evanio Vale.
          </h2>

          <p className="mt-8 max-w-[650px] text-base leading-7 text-[#494641] sm:text-lg">
            Professor e comunicador dedicado ao ensino de temas relacionados
            à vida espiritual, conhecimento bíblico, dons, propósito e
            desenvolvimento.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-black/10">
            <div className="bg-white p-7">
              <span className="text-3xl font-medium">+50 mil</span>

              <p className="mt-2 text-xs text-[#6f6b65]">
                pessoas no YouTube
              </p>
            </div>

            <div className="bg-white p-7">
              <span className="text-3xl font-medium">+15 mil</span>

              <p className="mt-2 text-xs text-[#6f6b65]">
                pessoas no Instagram
              </p>
            </div>
          </div>

          <div className="mt-10 h-px w-20 bg-[#b18a4a]" />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* HOW IT WORKS                                                               */
/* -------------------------------------------------------------------------- */

export function HowItWorks({ onOpenPricing }: HeroProps) {
  return (
    <section className="bg-white px-6 py-24 text-[#080808] sm:px-10 md:py-32 lg:px-16 xl:px-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="reveal">
          <Eyebrow>Como funciona</Eyebrow>

          <h2 className="mt-7 max-w-[850px] text-[clamp(3rem,6vw,6rem)] font-medium leading-[0.9] tracking-[-0.06em]">
            Simples para começar.
          </h2>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] bg-black/10 md:grid-cols-3">
          {howItWorks.map((item, index) => (
            <div
              key={item.number}
              className="reveal bg-[#f4f1eb] p-8 sm:p-10"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#080808] text-xs text-white">
                {item.number}
              </div>

              <h3 className="mt-12 text-2xl font-medium">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-[#5b5751]">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal mt-12 flex justify-center">
          <button
            type="button"
            onClick={onOpenPricing}
            className="
              group
              inline-flex
              items-center
              gap-4
              rounded-full
              bg-[#080808]
              px-7
              py-4
              text-sm
              font-medium
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
            "
          >
            Começar minha jornada

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a4a] text-white transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="h-4 w-4" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* OBJECTIONS                                                                 */
/* -------------------------------------------------------------------------- */

export function Objections({ onOpenPricing }: HeroProps) {
  const objections = [
    {
      question: "Preciso ter conhecimento prévio?",
      answer:
        "Não. A proposta é apresentar os conteúdos de forma organizada e progressiva.",
    },
    {
      question: "Preciso fazer todos os módulos de uma vez?",
      answer:
        "Não. Você pode avançar pela jornada no seu próprio ritmo.",
    },
    {
      question: "O conteúdo é baseado em quê?",
      answer:
        "Os conteúdos são apresentados a partir de uma perspectiva de estudo e compreensão à luz das Escrituras.",
    },
    {
      question: "E se eu estiver começando agora?",
      answer:
        "O Instituto foi pensado para organizar diferentes temas em uma jornada de aprendizado.",
    },
  ];

  return (
    <section className="bg-[#f4f1eb] px-6 py-24 text-[#080808] sm:px-10 md:py-32 lg:px-16 xl:px-20">
      <div className="mx-auto max-w-[1000px]">
        <div className="reveal text-center">
          <Eyebrow>Antes de decidir</Eyebrow>

          <h2 className="mx-auto mt-7 max-w-[850px] text-[clamp(3rem,6vw,6rem)] font-medium leading-[0.9] tracking-[-0.06em]">
            Talvez você ainda tenha algumas dúvidas.
          </h2>
        </div>

        <div className="mt-16 space-y-3">
          {objections.map((item, index) => (
            <div
              key={item.question}
              className="reveal rounded-2xl bg-white p-7 sm:p-9"
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <div className="flex gap-5">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#b18a4a]" />

                <div>
                  <h3 className="text-lg font-medium">{item.question}</h3>

                  <p className="mt-3 max-w-[720px] text-sm leading-6 text-[#6f6b65]">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-12 flex justify-center">
          <button
            type="button"
            onClick={onOpenPricing}
            className="
              group
              inline-flex
              items-center
              gap-4
              rounded-full
              bg-[#080808]
              px-7
              py-4
              text-sm
              font-medium
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
            "
          >
            Quero conhecer o Instituto

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a4a] text-white transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="h-4 w-4" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* FINAL CTA                                                                  */
/* -------------------------------------------------------------------------- */

export function FinalCta({ onOpenPricing }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#080808] px-6 py-28 text-white sm:px-10 md:py-40 lg:px-16 xl:px-20">
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1000px] text-center">
        <div className="reveal">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#b18a4a]">
            Instituto Acesso Global
          </span>

          <h2 className="mt-8 text-[clamp(3.2rem,7vw,7rem)] font-medium leading-[0.88] tracking-[-0.07em]">
            Sua jornada começa com conhecimento.
          </h2>

          <p className="mx-auto mt-8 max-w-[580px] text-base leading-7 text-white/55 sm:text-lg">
            Sete módulos. Uma jornada estruturada. Um espaço para aprofundar
            conhecimento, discernimento e propósito.
          </p>

          <button
            type="button"
            onClick={onOpenPricing}
            className="group mt-10 inline-flex items-center gap-4 rounded-full bg-white px-7 py-4 text-sm font-medium text-[#080808] transition-all duration-300 hover:-translate-y-0.5"
          >
            Quero começar

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a4a] text-white transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="h-4 w-4" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* FAQ                                                                        */
/* -------------------------------------------------------------------------- */

export function Faq({ onOpenPricing }: HeroProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="bg-white px-6 py-24 text-[#080808] sm:px-10 md:py-32 lg:px-16 xl:px-20"
    >
      <div className="mx-auto grid max-w-[1280px] gap-14 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="reveal">
          <Eyebrow>FAQ</Eyebrow>

          <h2 className="mt-7 text-[clamp(3rem,5.5vw,5.8rem)] font-medium leading-[0.9] tracking-[-0.06em]">
            Perguntas frequentes.
          </h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <div
                key={faq.question}
                className="reveal overflow-hidden rounded-2xl bg-[#f4f1eb]"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 p-6 text-left sm:p-7"
                >
                  <span className="text-base font-medium sm:text-lg">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-7 text-sm leading-6 text-[#6f6b65] sm:px-7">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="reveal mx-auto mt-14 flex max-w-[1280px] justify-center">
        <button
          type="button"
          onClick={onOpenPricing}
          className="
            group
            inline-flex
            items-center
            gap-4
            rounded-full
            bg-[#080808]
            px-7
            py-4
            text-sm
            font-medium
            text-white
            transition-all
            duration-300
            hover:-translate-y-0.5
          "
        >
          Quero fazer parte

          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a4a] text-white transition-transform duration-300 group-hover:translate-x-1">
            <ArrowRight className="h-4 w-4" />
          </span>
        </button>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* FOOTER                                                                     */
/* -------------------------------------------------------------------------- */

export function Footer() {
  return (
    <footer className="bg-[#080808] px-6 py-14 text-white sm:px-10 lg:px-16 xl:px-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-[11px] font-medium tracking-tight">
                AG
              </span>

              <span className="text-sm font-medium">
                Instituto Acesso Global
              </span>
            </div>

            <p className="mt-6 max-w-[440px] text-sm leading-6 text-white/40">
              Conhecimento, discernimento e propósito para uma jornada de
              aprendizado mais profunda.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <a
                href="https://www.instagram.com/evanio_vale/"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/45 transition-all duration-300 hover:border-[#b18a4a] hover:bg-[#b18a4a] hover:text-white"
              >
                <FaInstagram className="h-4 w-4" />
              </a>

              <a
                href="https://www.youtube.com/@profetaevaniovale"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/45 transition-all duration-300 hover:border-[#b18a4a] hover:bg-[#b18a4a] hover:text-white"
              >
                <FaYoutube className="h-4 w-4" />
              </a>

              <a
                href="https://www.facebook.com/profeta.evanio.vale"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/45 transition-all duration-300 hover:border-[#b18a4a] hover:bg-[#b18a4a] hover:text-white"
              >
                <FaFacebook className="h-4 w-4" />
              </a>

              
            </div>
          </div>

          <div className="md:flex md:justify-end">
            <nav className="grid grid-cols-2 gap-x-12 gap-y-4 sm:flex sm:flex-wrap sm:gap-x-8 sm:gap-y-3 md:flex-col md:items-start md:gap-4">
              <a
                href="#inicio"
                className="text-xs text-white/45 transition-colors hover:text-white"
              >
                Início
              </a>

              <a
                href="#instituto"
                className="text-xs text-white/45 transition-colors hover:text-white"
              >
                O Instituto
              </a>

              <a
                href="#modulos"
                className="text-xs text-white/45 transition-colors hover:text-white"
              >
                Conteúdos
              </a>

              <a
                href="#planos"
                className="text-xs text-white/45 transition-colors hover:text-white"
              >
                Planos
              </a>

              <a
                href="#evanio"
                className="text-xs text-white/45 transition-colors hover:text-white"
              >
                Evanio Vale
              </a>

              <a
                href="#faq"
                className="text-xs text-white/45 transition-colors hover:text-white"
              >
                FAQ
              </a>
            </nav>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 pt-7 text-[10px] uppercase tracking-[0.18em] text-white/25 sm:flex-row">
          <span>
            © {new Date().getFullYear()} Instituto Acesso Global
          </span>

          <span>Todos os direitos reservados</span>
        </div>
      </div>
    </footer>
  );
}

/* -------------------------------------------------------------------------- */
/* LEGACY / COMPATIBILIDADE                                                   */
/* -------------------------------------------------------------------------- */

export function CinematicImage() {
  return null;
}

export function AuthorityProof() {
  return (
    <section className="bg-[#080808] px-6 py-24 text-white sm:px-10 lg:px-16 xl:px-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-px overflow-hidden rounded-[2rem] bg-white/10 md:grid-cols-2">
          {authorityPoints.map((item, index) => (
            <div
              key={item.number || index}
              className="bg-[#111111] p-8 sm:p-10"
            >
              <span className="text-[10px] tracking-[0.25em] text-[#b18a4a]">
                {item.number}
              </span>

              <h3 className="mt-8 text-2xl font-medium">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-white/50">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ValueSection() {
  return <About onOpenPricing={() => {}} />;
}

export function SecuritySection() {
  return null;
}

export function Manifesto() {
  return null;
}

export function Methodology() {
  return <HowItWorks onOpenPricing={() => {}} />;
}

export function Deliverables() {
  return null;
}