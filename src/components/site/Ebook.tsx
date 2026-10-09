
import { ArrowRight, ArrowDownRight, Check } from "lucide-react";
import { Eyebrow } from "./ui";
import livroVideo from "@/assets/livro.mp4";

const ebookFeatures = [
  "Um convite diário para se aproximar de Deus",
  "Conteúdo digital para sua caminhada de fé",
  "Acesso pela plataforma Hotmart",
];

export function Ebook() {
  return (
    <section
      id="ebook-devocional-fe"
      className="relative overflow-hidden bg-[#071a35] px-5 py-24 text-white sm:px-8 md:py-32 lg:px-14"
    >
      {/* DETALHES AZUIS DE FUNDO */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full border border-blue-400/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-36 h-64 w-64 rounded-full border border-blue-300/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* MOCKUP EM VÍDEO */}
        <div className="reveal relative mx-auto w-full max-w-[500px]">
          <div className="absolute -inset-4 rounded-[2rem] border border-blue-300/25" />

          <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#0b2345] shadow-[0_30px_100px_rgba(0,0,0,0.4)]">
            <video
              src={livroVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Mockup do E-book Devocional Fé"
              className="block w-full object-contain"
            />
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 text-center">
            <span className="h-px w-10 bg-blue-300" />
            <span className="text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-blue-100">
              E-book digital
            </span>
            <span className="h-px w-10 bg-blue-300" />
          </div>
        </div>

        {/* APRESENTAÇÃO */}
        <div className="reveal reveal-delay-1">
          <Eyebrow className="text-blue-300">
            Um convite à reflexão
          </Eyebrow>

          <h2 className="mt-7 font-display text-[clamp(3rem,6vw,6.5rem)] font-bold uppercase leading-[0.86] tracking-[-0.065em] text-white">
            Devocional
                <span className="block text-blue-300">Fé sem limites.</span>
            </h2>

          <p className="mt-6 max-w-[600px] text-xl font-medium leading-relaxed text-white sm:text-2xl">
            365 dias de intimidade com Deus.
          </p>

          <p className="mt-5 max-w-[600px] text-base leading-7 text-blue-100/80 sm:text-lg sm:leading-8">
            Separe um momento do seu dia para fortalecer sua caminhada com
            Deus, refletir sobre a fé e cultivar uma vida devocional mais
            intencional.
          </p>

          <div className="mt-8 h-px w-20 bg-blue-300" />

          <div className="mt-8 space-y-4">
            {ebookFeatures.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-blue-300/40 bg-blue-400/10 text-blue-200">
                  <Check size={12} strokeWidth={2.5} />
                </span>

                <p className="text-sm leading-relaxed text-white/90 sm:text-base">
                  {feature}
                </p>
              </div>
            ))}
          </div>

          {/* CTA AZUL */}
          <div className="mt-10">
            <a
              href="https://pay.hotmart.com/A107952951N"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-between gap-5 rounded-full border border-blue-400 bg-blue-500 px-5 py-3 text-white transition-all duration-300 hover:border-blue-300 hover:bg-blue-400 sm:w-auto sm:min-w-[290px] sm:px-6"
            >
              <span className="py-1 text-[0.68rem] font-bold uppercase tracking-[0.12em]">
                Adquirir e-book
              </span>

              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={17} />
              </span>
            </a>

            <p className="mt-4 flex items-center gap-2 text-xs leading-relaxed text-blue-100/60">
              <ArrowDownRight size={14} className="text-blue-300" />
              Compra realizada pela plataforma Hotmart.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}