import { ArrowRight } from "lucide-react";
import { Eyebrow } from "./ui";

const modules = [
  {
    number: "01",
    title: "Intimidade com Deus",
    image: "/module-01.jpg",
  },
  {
    number: "02",
    title: "Dons Espirituais e Discernimento",
    image: "/module-02.jpg",
  },
  {
    number: "03",
    title: "Interpretação de Sonhos à Luz da Bíblia",
    image: "/module-03.jpg",
  },
  {
    number: "04",
    title: "Vida Profética",
    image: "/module-04.jpg",
  },
  {
    number: "05",
    title: "Propósito e Chamado",
    image: "/module-05.jpg",
  },
  {
    number: "06",
    title: "Sabedoria Financeira e Prosperidade do Reino",
    image: "/module-06.jpg",
  },
  {
    number: "07",
    title: "Liderança e Multiplicação",
    image: "/module-07.jpg",
  },
  {
    number: "08",
    title: "Tipos de Oração",
    image: "/module-08.jpg",
  },
];

export function Modules() {
  return (
    <section
      id="modulos"
      className="relative overflow-hidden bg-[#080808] py-24 text-[#f4f1eb] md:py-36"
    >
      <div className="mx-auto max-w-[1800px]">
        {/* HEADER */}
        <div className="px-5 sm:px-8 lg:px-14">
          <div className="reveal flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <Eyebrow className="text-white/45">
                04 / Conteúdo
              </Eyebrow>

              <h2 className="headline mt-8 max-w-[1000px] text-[clamp(4rem,10vw,10rem)] leading-[0.8]">
                Conheça o
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

        {/* MODULES */}
        <div className="modules-scroll mt-16 overflow-x-auto pb-8 md:mt-24">
          <div className="flex w-max gap-4 px-5 sm:px-8 lg:px-14">
            {modules.map((module, index) => (
              <article
                key={module.number}
                className="module-card group relative aspect-[3/4] w-[72vw] max-w-[390px] shrink-0 overflow-hidden bg-[#151515] sm:w-[45vw] md:w-[30vw] lg:w-[23vw]"
              >
                {/* IMAGE */}
                <img
                  src={module.image}
                  alt={`Módulo ${module.number} — ${module.title}`}
                  loading={index < 4 ? "eager" : "lazy"}
                  className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-[1200ms] ease-out group-hover:scale-[1.06] group-hover:grayscale-0"
                />

                {/* DARK GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/10 transition-opacity duration-700 group-hover:opacity-80" />

                {/* BORDER */}
                <div className="absolute inset-0 border border-white/10 transition-colors duration-500 group-hover:border-white/30" />

                {/* NUMBER */}
                <span className="absolute left-5 top-5 font-display text-xs font-bold tracking-[0.22em] text-white/70 md:left-7 md:top-7">
                  MÓDULO {module.number}
                </span>

                {/* LARGE NUMBER */}
                <span className="absolute right-4 top-2 font-display text-[7rem] font-bold leading-none tracking-[-0.08em] text-white/10 transition-transform duration-700 group-hover:-translate-y-2 md:right-6 md:text-[9rem]">
                  {module.number}
                </span>

                {/* CONTENT */}
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
                  <div className="mb-5 h-px w-8 bg-white/40 transition-all duration-500 group-hover:w-16" />

                  <h3 className="max-w-[330px] font-display text-[clamp(2rem,3.4vw,3.8rem)] font-bold uppercase leading-[0.86] tracking-[-0.04em]">
                    {module.title}
                  </h3>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white/45">
                      Instituto Acesso Global
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-black">
                      <ArrowRight
                        size={15}
                        className="transition-transform duration-500 group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* PROGRESS / DRAG INDICATOR */}
        <div className="mt-4 flex items-center gap-5 px-5 sm:px-8 lg:px-14">
          <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-white/35">
            01
          </span>

          <div className="h-px w-full max-w-[280px] bg-white/15">
            <div className="h-px w-[12.5%] bg-white/60" />
          </div>

          <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-white/35">
            08
          </span>

          <span className="ml-auto hidden text-[0.6rem] font-bold uppercase tracking-[0.2em] text-white/30 md:block">
            Arraste para explorar
          </span>
        </div>

        {/* CTA */}
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