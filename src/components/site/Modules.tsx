import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { modules } from "@/data/site";
import { Eyebrow } from "./ui";

interface ModulesProps {
  onOpenPricing: () => void;
}

export function Modules({ onOpenPricing }: ModulesProps) {
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
      className="relative overflow-hidden bg-[#f4f1eb] px-5 py-28 sm:px-8 md:py-36 lg:px-14"
    >
      {/* DECORAÇÕES */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#080808]/[0.03] blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-[45%] h-[30rem] w-[30rem] rounded-full bg-[#080808]/[0.03] blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#b18a4a]/[0.04] blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-[1180px]">
        {/* CABEÇALHO */}
        <div className="reveal mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#080808]/10 bg-white/70 px-4 py-2 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#b18a4a]" />

            <Eyebrow className="text-[#6f6b65]">
              Conteúdo do Instituto
            </Eyebrow>
          </div>

          <h2 className="mt-7 font-display text-[clamp(3.5rem,8vw,8rem)] font-bold uppercase leading-[0.82] tracking-[-0.07em] text-[#080808]">
            7 módulos.
            <span className="block text-[#6f6b65]">
              Uma jornada.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-[#5f5a53] md:text-lg">
            Um percurso organizado para aprofundar diferentes áreas da vida
            espiritual, desenvolver discernimento e ampliar sua compreensão
            sobre propósito e chamado.
          </p>
        </div>

        {/* INDICADOR SUPERIOR */}
        <div className="reveal mx-auto mt-12 flex max-w-3xl items-center justify-center gap-4">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#080808]/10" />

          <span className="rounded-full border border-[#080808]/10 bg-white/70 px-4 py-2 font-display text-[0.6rem] font-bold uppercase tracking-[0.18em] text-[#77736c]">
            Módulo {String(current + 1).padStart(2, "0")} de 07
          </span>

          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#080808]/10" />
        </div>

        {/* CARROSSEL */}
        <div className="relative mt-12">
          {/* SETA ESQUERDA */}
          <button
            type="button"
            onClick={previousModule}
            disabled={current === 0}
            aria-label="Módulo anterior"
            className="absolute left-0 top-1/2 z-30 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-[#080808]/10 bg-white/90 text-[#080808] shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-x-1 hover:bg-[#080808] hover:text-white disabled:pointer-events-none disabled:opacity-20 lg:flex"
          >
            <ArrowRight size={18} className="rotate-180" />
          </button>

          {/* ÁREA DO CARD */}
          <div className="mx-auto w-full max-w-[850px] overflow-hidden px-0 lg:px-16">
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
                    className="reveal group mx-auto max-w-[650px] overflow-hidden rounded-[2.25rem] border border-[#080808]/10 bg-white shadow-[0_25px_80px_rgba(8,8,8,0.08)]"
                    style={{
                      transitionDelay: `${index * 60}ms`,
                    }}
                  >
                    {/* IMAGEM */}
                    <div className="relative overflow-hidden">
                      <img
                        src={module.image}
                        alt={module.title}
                        loading="lazy"
                        className="aspect-[16/9] w-full object-cover grayscale-[15%] transition-all duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                      {/* NÚMERO GRANDE */}
                      <span className="absolute bottom-5 right-7 font-display text-7xl font-bold leading-none tracking-[-0.08em] text-white/15 md:text-8xl">
                        {module.number}
                      </span>

                      {/* BADGE */}
                      <span className="absolute left-6 top-6 rounded-full border border-white/20 bg-black/30 px-4 py-2 font-display text-[0.58rem] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                        Módulo {module.number}
                      </span>
                    </div>

                    {/* CONTEÚDO */}
                    <div className="p-7 md:p-10">
                      <div className="flex items-start justify-between gap-5">
                        <div>
                          <span className="font-display text-[0.58rem] font-bold uppercase tracking-[0.18em] text-[#8a6938]">
                            Instituto Acesso Global
                          </span>

                          <h3 className="mt-4 max-w-xl font-display text-[clamp(2.2rem,5vw,4rem)] font-bold uppercase leading-[0.88] tracking-[-0.055em] text-[#080808]">
                            {module.title}
                          </h3>
                        </div>

                        <span className="hidden shrink-0 rounded-full border border-[#080808]/10 px-3 py-2 font-display text-[0.55rem] font-bold uppercase tracking-[0.15em] text-[#77736c] md:block">
                          {module.number} / 07
                        </span>
                      </div>

                      <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#5f5a53] md:text-base">
                        {module.description}
                      </p>

                      {/* FAIXA */}
                      <div className="mt-7 overflow-hidden rounded-2xl border border-[#080808]/5 bg-[#080808]">
                        <img
                          src="/assets/faixa.jpg"
                          alt=""
                          aria-hidden="true"
                          className="h-14 w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>

                      {/* RODAPÉ DO CARD */}
                      <div className="mt-7 flex items-center justify-between border-t border-[#080808]/10 pt-6">
                        <span className="font-display text-[0.58rem] font-bold uppercase tracking-[0.15em] text-[#77736c]">
                          Conteúdo exclusivo
                        </span>

                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#080808] text-white transition-transform duration-300 group-hover:translate-x-1">
                          <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* SETA DIREITA */}
          <button
            type="button"
            onClick={nextModule}
            disabled={current === modules.length - 1}
            aria-label="Próximo módulo"
            className="absolute right-0 top-1/2 z-30 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-[#080808]/10 bg-white/90 text-[#080808] shadow-xl backdrop-blur-sm transition-all duration-300 hover:translate-x-1 hover:bg-[#080808] hover:text-white disabled:pointer-events-none disabled:opacity-20 lg:flex"
          >
            <ArrowRight size={18} />
          </button>

          {/* CONTROLES MOBILE */}
          <div className="mt-8 flex items-center justify-center gap-4 lg:hidden">
            <button
              type="button"
              onClick={previousModule}
              disabled={current === 0}
              aria-label="Módulo anterior"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#080808]/10 bg-white text-[#080808] shadow-sm transition-all disabled:opacity-25"
            >
              <ArrowRight size={16} className="rotate-180" />
            </button>

            <span className="min-w-[80px] text-center font-display text-[0.6rem] font-bold uppercase tracking-[0.16em] text-[#77736c]">
              {String(current + 1).padStart(2, "0")} / 07
            </span>

            <button
              type="button"
              onClick={nextModule}
              disabled={current === modules.length - 1}
              aria-label="Próximo módulo"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#080808]/10 bg-white text-[#080808] shadow-sm transition-all disabled:opacity-25"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* PAGINAÇÃO */}
        <div className="reveal mt-9 flex items-center justify-center gap-2">
          {modules.map((module, index) => (
            <button
              key={module.number}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Ir para o módulo ${module.number}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === current
                  ? "w-10 bg-[#b18a4a]"
                  : "w-2 bg-[#080808]/15 hover:bg-[#080808]/30"
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="reveal mt-24 border-t border-[#080808]/10 pt-16 md:mt-32 md:pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#080808]/10 bg-white/70 px-4 py-2 font-display text-[0.58rem] font-bold uppercase tracking-[0.18em] text-[#77736c]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#b18a4a]" />
              Instituto Acesso Global
            </span>

            <h3 className="mt-6 font-display text-[clamp(3rem,7vw,6rem)] font-bold uppercase leading-[0.86] tracking-[-0.065em] text-[#080808]">
              Pronto para
              <span className="block text-[#6f6b65]">
                começar?
              </span>
            </h3>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#5f5a53] md:text-lg">
              Tenha acesso aos sete módulos do Instituto Acesso Global e
              desenvolva sua jornada de estudo no seu próprio ritmo.
            </p>

            {/* BOTÃO CENTRALIZADO */}
            <div className="mt-9 flex justify-center">
              <button
                type="button"
                onClick={onOpenPricing}
                className="group inline-flex items-center gap-5 rounded-full bg-[#080808] px-8 py-4 font-display text-[0.65rem] font-bold uppercase tracking-[0.16em] text-white shadow-[0_15px_40px_rgba(8,8,8,0.16)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(8,8,8,0.22)]"
              >
                <span>Quero fazer parte</span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#b18a4a] text-white transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={15} />
                </span>
              </button>
            </div>

            <p className="mt-5 text-[0.6rem] font-medium uppercase tracking-[0.15em] text-[#77736c]">
              Escolha seu plano e comece sua jornada
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}