import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { modules } from "@/data/site";
import { Eyebrow } from "./ui";

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
                Conheça o{" "}
                <span className="block text-white/35">
                  conteúdo.
                </span>
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
              {modules.map((module) => (
                <div
                  key={module.number}
                  className="w-full shrink-0 px-1"
                >
                  <article className="module-card group relative mx-auto aspect-[3/4] w-full max-w-[620px] overflow-hidden bg-[#151515]">
                    <img
                      src={module.image}
                      alt={module.title}
                      className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/5" />

                    <div className="absolute inset-0 border border-white/10 transition-colors duration-500 group-hover:border-white/25" />

                    <span className="absolute left-6 top-6 text-[10px] font-medium uppercase tracking-[0.25em] text-white/60">
                      Módulo {module.number}
                    </span>

                    <span className="absolute right-5 top-2 text-[7rem] font-black leading-none tracking-[-0.08em] text-white/10">
                      {module.number}
                    </span>

                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
                      <div className="mb-6 h-px w-10 bg-white/40 transition-all duration-500 group-hover:w-20 group-hover:bg-white" />

                      <h3 className="max-w-[560px] text-3xl font-medium leading-[0.95] tracking-[-0.04em] md:text-5xl">
                        {module.title}
                      </h3>

                      <p className="mt-5 max-w-[520px] text-sm leading-relaxed text-white/60 md:text-base">
                        {module.description}
                      </p>

                      <div className="mt-7 flex items-center justify-between">
                        <span className="text-[9px] uppercase tracking-[0.25em] text-white/35">
                          Instituto Acesso Global
                        </span>

                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black">
                          <ArrowRight size={16} />
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
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-all disabled:opacity-20"
            >
              <ArrowLeft size={16} />
            </button>

            <span className="min-w-[70px] text-center text-xs uppercase tracking-[0.2em] text-white/45">
              {String(current + 1).padStart(2, "0")} /{" "}
              {String(modules.length).padStart(2, "0")}
            </span>

            <button
              type="button"
              onClick={nextModule}
              disabled={current === modules.length - 1}
              aria-label="Próximo módulo"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-all disabled:opacity-20"
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
              className={
                index === current
                  ? "h-1 w-8 bg-white transition-all duration-300"
                  : "h-1 w-2 bg-white/20 transition-all duration-300 hover:bg-white/50"
              }
            />
          ))}
        </div>

        <div className="mt-16 px-5 sm:px-8 md:mt-24 lg:px-14">
          <a
            href="#outros-cursos"
            className="group inline-flex items-center gap-4 border-b border-white/20 pb-3 text-xs font-medium uppercase tracking-[0.2em] text-white/70 transition-colors hover:border-white hover:text-white"
          >
            Conhecer os cursos
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}