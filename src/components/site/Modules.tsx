import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Eyebrow } from "./ui";

export const modules: TeachingModule[] = [
  {
    number: "01",
    title: "Intimidade com Deus",
    description:
      "Um aprofundamento sobre relacionamento com Deus, vida espiritual e fundamentos para uma caminhada mais consciente.",
    image: event,
  },
  {
    number: "02",
    title: "Dons Espirituais e Discernimento",
    description:
      "Estudo dos dons espirituais e do discernimento necessário para compreender suas manifestações à luz das Escrituras.",
    image: lion,
  },
  {
    number: "03",
    title: "Interpretação de Sonhos à Luz da Bíblia",
    description:
      "Uma abordagem sobre sonhos, interpretações e critérios para compreender esse tema a partir da perspectiva bíblica.",
    image: bible,
  },
  {
    number: "04",
    title: "Vida Profética",
    description:
      "Estudos relacionados à profecia, ao desenvolvimento da vida profética e à compreensão do chamado profético.",
    image: hero,
  },
  {
    number: "05",
    title: "Propósito e Chamado",
    description:
      "Reflexões sobre propósito, chamado e a construção de uma vida alinhada àquilo que Deus confiou a cada pessoa.",
    image: evanio,
  },
  {
    number: "06",
    title: "Sabedoria Financeira e Prosperidade do Reino",
    description:
      "Princípios de sabedoria financeira, administração e compreensão da prosperidade dentro de uma perspectiva do Reino.",
    image: mac,
  },
  {
    number: "07",
    title: "Liderança e Multiplicação",
    description:
      "Fundamentos de liderança, desenvolvimento de pessoas e multiplicação de conhecimento, influência e propósito.",
    image: event,
  },
];

export function Modules() {
  const [current, setCurrent] = useState(0);

  const previousModule = () => {
    setCurrent((prev) => Math.max(prev - 1, 0));
  };

  const nextModule = () => {
    setCurrent((prev) => Math.min(prev + 1, modules.length - 1));
  };

  return (
    <section
      id="modulos"
      className="relative overflow-hidden bg-[#080808] py-24 text-[#f4f1eb] md:py-36"
    >
      <div className="mx-auto max-w-[1800px]">
        <div className="px-5 sm:px-8 lg:px-14">
          <div className="reveal flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <Eyebrow className="text-white/45">
                04 / Conteúdo
              </Eyebrow>

              <h2 className="headline mt-8 max-w-[1000px] text-[clamp(4rem,10vw,10rem)] leading-[0.8]">
                Conheça o
                <span className="block text-white/35">conteúdo.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-white/50 md:mb-3 md:text-base">
              Um universo de conteúdos para aprofundar o conhecimento,
              desenvolver discernimento e estudar temas relacionados à vida
              espiritual e ministerial.
            </p>
          </div>
        </div>

        <div className="relative mt-16 md:mt-24">
          <button
            type="button"
            onClick={previousModule}
            disabled={current === 0}
            aria-label="Módulo anterior"
            className="absolute left-4 top-1/2 z-30 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#151515]/90 text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white hover:text-black disabled:pointer-events-none disabled:opacity-20 lg:flex xl:left-8"
          >
            <ArrowLeft size={18} />
          </button>

          <div className="mx-auto w-full max-w-[1050px] overflow-hidden px-5 sm:px-8 lg:px-20">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                transform: `translateX(-${current * 100}%)`,
              }}
            >
              {modules.map((module, index) => (
                <div
                  key={module.number}
                  className="w-full shrink-0 px-1"
                >
                  <article className="module-card group relative mx-auto aspect-[3/4] w-full max-w-[620px] overflow-hidden bg-[#151515]">
                    <img
                      src={module.image}
                      alt={`Módulo ${module.number} — ${module.title}`}
                      loading={index < 4 ? "eager" : "lazy"}
                      className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-[1200ms] ease-out group-hover:scale-[1.06] group-hover:grayscale-0"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/10" />

                    <div className="absolute inset-0 border border-white/10 transition-colors duration-500 group-hover:border-white/30" />

                    <span className="absolute left-6 top-6 font-display text-xs font-bold tracking-[0.22em] text-white/70 md:left-8 md:top-8">
                      MÓDULO {module.number}
                    </span>

                    <span className="absolute right-5 top-2 font-display text-[8rem] font-bold leading-none tracking-[-0.08em] text-white/10 transition-transform duration-700 group-hover:-translate-y-2 md:right-8 md:text-[11rem]">
                      {module.number}
                    </span>

                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
                      <div className="mb-6 h-px w-10 bg-white/40 transition-all duration-500 group-hover:w-20" />

                      <h3 className="max-w-[520px] font-display text-[clamp(2.4rem,5vw,5rem)] font-bold uppercase leading-[0.86] tracking-[-0.045em]">
                        {module.title}
                      </h3>

                      <p className="mt-5 max-w-[520px] text-sm leading-relaxed text-white/60 md:text-base">
                        {module.description}
                      </p>

                      <div className="mt-7 flex items-center justify-between">
                        <span className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white/40">
                          Instituto Acesso Global
                        </span>

                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-black">
                          <ArrowRight
                            size={15}
                            className="transition-transform duration-500 group-hover:translate-x-0.5"
                          />
                        </span>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={nextModule}
            disabled={current === modules.length - 1}
            aria-label="Próximo módulo"
            className="absolute right-4 top-1/2 z-30 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#151515]/90 text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white hover:text-black disabled:pointer-events-none disabled:opacity-20 lg:flex xl:right-8"
          >
            <ArrowRight size={18} />
          </button>

          <div className="mt-7 flex items-center justify-center gap-4 lg:hidden">
            <button
              type="button"
              onClick={previousModule}
              disabled={current === 0}
              aria-label="Módulo anterior"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-300 disabled:opacity-20"
            >
              <ArrowLeft size={16} />
            </button>

            <span className="min-w-[70px] text-center font-display text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white/40">
              {String(current + 1).padStart(2, "0")} /{" "}
              {String(modules.length).padStart(2, "0")}
            </span>

            <button
              type="button"
              onClick={nextModule}
              disabled={current === modules.length - 1}
              aria-label="Próximo módulo"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-300 disabled:opacity-20"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 px-5">
          {modules.map((module, index) => (
            <button
              key={module.number}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Ir para o módulo ${module.number}`}
              className={`h-1 transition-all duration-500 ${
                index === current
                  ? "w-8 bg-white"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        <div className="mt-16 px-5 sm:px-8 md:mt-24 lg:px-14">
          <a
            href="#cursos"
            className="group inline-flex items-center gap-5 border-b border-white/30 pb-4 text-[0.68rem] font-bold uppercase tracking-[0.18em] transition-colors duration-300 hover:border-white"
          >
            Conhecer os cursos

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-2"
            />
          </a>
        </div>
      </div>
    </section>
  );
}