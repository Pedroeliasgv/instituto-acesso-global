import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { faqs, images, navLinks, pillars } from "@/data/site";
import { Logo } from "./Header";
import { Cta, Eyebrow, ParallaxImage } from "./ui";

const marqueeWords = [
  "Ensino",
  "Formação",
  "Desenvolvimento",
  "Propósito",
  "Maturidade",
  "Conhecimento",
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-[#080808] text-white"
    >
      <ParallaxImage
        src={images.hero}
        alt=""
        eager
        strength={22}
        className="hero-image absolute inset-0 h-full"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,8,0.88)_0%,rgba(8,8,8,0.45)_60%,rgba(8,8,8,0.2)_100%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(8,8,8,0.85)_0%,transparent_70%)]" />

      <div className="relative mx-auto w-full max-w-[1600px] px-5 pb-8 pt-32 sm:px-8 md:pb-10 lg:px-14">
        <p className="reveal eyebrow mb-8 text-[#d1ccc4]">
          Instituto Acesso Global
        </p>

        <h1 className="hero-title headline" aria-label="Você pode crescer">
          {["VOCÊ", "PODE", "CRESCER."].map((word, index) => (
            <span
              key={word}
              className="reveal hero-word block"
              style={{ transitionDelay: `${index * 140}ms` }}
            >
              {word}
            </span>
          ))}
        </h1>

        <div className="mt-8 flex flex-col gap-8 border-t border-white/25 pt-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-wrap gap-3">
            <Cta
              href="#cursos"
              className="bg-[#f4f1eb] text-[#080808] hover:bg-white"
            >
              Conhecer os cursos
            </Cta>

            <Cta
              href="#instituto"
              variant="ghost"
              className="border-white/50 text-white hover:bg-white/10"
            >
              Conhecer o instituto
            </Cta>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-white/75 sm:grid-cols-4">
            {["Ensino", "Discernimento", "Prática", "Propósito"].map(
              (item) => (
                <span key={item}>{item}</span>
              ),
            )}
          </div>

          <a
            href="#instituto"
            className="group hidden items-center gap-3 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-white/65 transition-colors hover:text-white lg:flex"
          >
            Conheça o instituto

            <ArrowDown
              size={14}
              className="transition-transform group-hover:translate-y-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export function Intro() {
  return (
    <section className="overflow-hidden bg-[#f4f1eb] py-28 md:py-48">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-14">
        <Eyebrow className="reveal text-[#6f6b65]">
          Uma jornada de aprendizado
        </Eyebrow>

        <h2 className="headline mt-10 text-[clamp(3.4rem,10.7vw,10rem)] leading-[0.82] text-[#080808]">
          <span className="reveal block">Sempre existe</span>

          <span
            className="reveal block text-right"
            style={{ transitionDelay: "100ms" }}
          >
            algo novo
          </span>

          <span
            className="reveal outline-text-dark block"
            style={{ transitionDelay: "200ms" }}
          >
            para aprender.
          </span>
        </h2>

        <p className="reveal mt-14 max-w-2xl text-lg leading-relaxed text-[#494641] md:ml-auto md:text-2xl">
          Conhecimento amplia a nossa visão.
          <br />
          Maturidade muda a forma como enxergamos a vida.
          <br />
          E o aprendizado ganha sentido quando chega à prática.
        </p>
      </div>
    </section>
  );
}

export function Marquee({
  tone,
  reverse = false,
}: {
  tone: "light" | "dark";
  reverse?: boolean;
}) {
  const group = (
    <span className="marquee-group" aria-hidden="true">
      {marqueeWords.map((word) => (
        <span key={word} className="marquee-word">
          {word}
          <span className="marquee-separator">×</span>
        </span>
      ))}
    </span>
  );

  return (
    <div
      className={`marquee-band marquee-band-${tone}`}
      role="img"
      aria-label={marqueeWords.join(", ")}
    >
      <div
        className={`marquee-track${reverse ? " marquee-track-reverse" : ""}`}
      >
        {group}
        {group}
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="instituto" className="bg-[#f4f1eb] py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="reveal min-w-0 lg:col-span-6">
            <Eyebrow className="text-[#6f6b65]">
              01 / O Instituto
            </Eyebrow>

            <h2 className="headline mt-8 text-[clamp(2.8rem,7.7vw,7.5rem)] leading-[0.86] text-[#080808]">
              Aprender é
              <span className="outline-text-dark block">crescer.</span>
              <span className="block">E crescer exige</span>
              <span className="block">caminho.</span>
            </h2>
          </div>

          <p className="reveal min-w-0 max-w-xl text-lg leading-relaxed text-[#494641] lg:col-span-5 lg:col-start-8 lg:pb-2 lg:text-xl">
            O Instituto Acesso Global nasceu para reunir ensino, experiência e
            desenvolvimento em um só lugar. Aqui, você encontra conteúdos,
            cursos e oportunidades para aprofundar o conhecimento e transformar
            aquilo que aprende em prática.
          </p>
        </div>

        <div className="mt-14 overflow-hidden md:mt-20">
          <ParallaxImage
            src={images.event}
            alt="Pessoas reunidas em um auditório"
            strength={24}
            className="reveal aspect-[4/3] md:aspect-[2.2/1]"
          />
        </div>
      </div>
    </section>
  );
}

export function Manifesto() {
  return (
    <section className="overflow-hidden bg-[#080808] py-28 text-[#f4f1eb] md:py-48">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-14">
        <Eyebrow className="reveal text-white/50">
          Conhecimento que continua depois da aula
        </Eyebrow>

        <h2 className="headline mt-10 text-[clamp(4.5rem,16vw,15rem)] leading-[0.78]">
          <span className="reveal block">Aprenda.</span>

          <span
            className="reveal outline-text block text-right"
            style={{ transitionDelay: "140ms" }}
          >
            Cresça.
          </span>
        </h2>
      </div>
    </section>
  );
}

export function Methodology() {
  return (
    <section className="bg-[#080808] px-5 pb-28 text-[#f4f1eb] sm:px-8 md:pb-40 lg:px-14">
      <div className="mx-auto max-w-[1600px]">
        <div className="reveal mb-12 flex flex-col justify-between gap-6 border-b border-white/20 pb-8 md:mb-16 md:flex-row md:items-end">
          <div>
            <Eyebrow className="text-white/50">
              Como enxergamos a formação
            </Eyebrow>

            <h2 className="headline mt-6 max-w-4xl text-4xl leading-[0.9] sm:text-6xl md:text-7xl">
              Quatro pilares.
              <br />
              Um jeito de caminhar.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-white/60">
            O conhecimento precisa fazer sentido. Por isso, buscamos unir
            aprendizado, reflexão e prática em cada experiência.
          </p>
        </div>

        <ol className="divide-y divide-white/20">
          {pillars.map((pillar, index) => (
            <li
              key={pillar.n}
              className="reveal pillar-row group relative grid min-h-40 grid-cols-[4rem_minmax(0,1fr)] items-center gap-4 py-8 md:min-h-48 md:grid-cols-[5rem_minmax(0,1fr)] md:gap-8 md:py-10 xl:grid-cols-[8rem_minmax(0,1fr)_20rem]"
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <span className="pillar-number font-display text-5xl font-bold leading-none text-white/20 md:text-8xl">
                {pillar.n}
              </span>

              <h3 className="min-w-0 font-display text-[clamp(1.45rem,7.5vw,2rem)] font-bold uppercase tracking-[-0.06em] sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl">
                {pillar.title}
              </h3>

              <p className="col-start-2 mt-1 min-w-0 max-w-sm text-sm leading-relaxed text-white/55 md:mt-0 md:text-base xl:col-start-3">
                {pillar.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function CinematicImage() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    let frame = 0;

    const updateProgress = () => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        if (reducedMotion.matches) {
          section.style.setProperty("--cinema-scale-x", "1");
          section.style.setProperty("--cinema-scale", "1");
          section.style.setProperty("--cinema-radius", "0px");
          section.style.setProperty("--cinema-overlay-opacity", "0.18");
          section.style.setProperty("--cinema-caption-opacity", "1");
          return;
        }

        const rect = section.getBoundingClientRect();

        const progress = Math.min(
          1,
          Math.max(
            0,
            (window.innerHeight - rect.top) /
              (window.innerHeight + rect.height),
          ),
        );

        section.style.setProperty(
          "--cinema-scale-x",
          String(0.55 + progress * 0.45),
        );

        section.style.setProperty(
          "--cinema-scale",
          String(1 + progress * 0.025),
        );

        section.style.setProperty(
          "--cinema-radius",
          `${24 * (1 - progress)}px`,
        );

        section.style.setProperty(
          "--cinema-overlay-opacity",
          String(progress * 0.32),
        );

        section.style.setProperty(
          "--cinema-caption-opacity",
          String(1 - progress),
        );
      });
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    reducedMotion.addEventListener("change", updateProgress);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      reducedMotion.removeEventListener("change", updateProgress);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="cinematic-section relative h-[150svh] bg-[#080808]"
    >
      <div className="cinematic-frame">
        <img
          src={images.event}
          alt="Pessoas acompanhando uma apresentação em um auditório"
          loading="lazy"
        />

        <div className="cinematic-overlay" />

        <p className="cinematic-caption headline" aria-hidden="true">
          Aprender.
          <br />
          Aprofundar.
          <br />
          Aplicar.
        </p>
      </div>
    </section>
  );
}

export function Evanio() {
  return (
    <section id="evanio" className="bg-[#f4f1eb] py-24 md:py-36">
      <div className="mx-auto grid max-w-[1600px] items-center gap-10 px-5 sm:px-8 md:grid-cols-12 lg:gap-16 lg:px-14">
        <div className="reveal md:col-span-6">
          <ParallaxImage
            src={images.evanio}
            alt="Evanio Vale"
            strength={20}
            className="aspect-[4/5] w-full md:aspect-[4/4.5]"
          />
        </div>

        <div className="reveal md:col-span-5 md:col-start-8">
          <Eyebrow className="text-[#6f6b65]">
            02 / Evanio Vale
          </Eyebrow>

          <h2 className="headline mt-8 text-[clamp(4rem,9vw,9rem)] leading-[0.8] text-[#080808]">
            Evanio
            <span className="block">Vale.</span>
          </h2>

          <p className="mt-8 max-w-md text-lg leading-relaxed text-[#494641]">
            Evanio Vale está à frente de conteúdos e ensinamentos que fazem
            parte da proposta do Instituto Acesso Global. Sua atuação reúne
            estudo, experiência e dedicação ao desenvolvimento de pessoas.
          </p>
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="relative flex min-h-[85svh] items-end overflow-hidden bg-[#080808] text-white">
      <ParallaxImage
        src={images.portrait}
        alt=""
        strength={16}
        className="final-cta-image absolute inset-0 h-full"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,#8D8D8D_0px,#8D8D8D_500px,rgba(141,141,141,0.65)_570px,rgba(141,141,141,0.2)_680px,transparent_760px)]" />

      <div className="relative mx-auto w-full max-w-[1600px] px-5 py-20 sm:px-8 md:py-28 lg:px-14">
        <Eyebrow className="reveal text-white/60">
          Instituto Acesso Global
        </Eyebrow>

        <h2 className="headline reveal mt-8 text-[clamp(4.3rem,13vw,12rem)] leading-[0.78]">
          <span className="block text-[0.55em] tracking-[-0.04em] text-white/75">
            Dê o
          </span>

          <span className="block">
            próximo
          </span>

          <span className="outline-text block text-white">
            passo.
          </span>
        </h2>

        <div className="reveal mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-md text-base leading-relaxed text-white/70">
            Conheça os cursos do Instituto e encontre o conteúdo que faz
            sentido para o seu momento.
          </p>

          <Cta
            href="#cursos"
            className="bg-[#f4f1eb] text-[#080808] hover:bg-white"
          >
            Conhecer os cursos
          </Cta>
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="bg-[#f4f1eb] py-24 md:py-36">
      <div className="mx-auto grid max-w-[1600px] gap-10 px-5 sm:px-8 md:grid-cols-12 lg:px-14">
        <div className="reveal md:col-span-4">
          <Eyebrow className="text-[#6f6b65]">
            Perguntas frequentes
          </Eyebrow>

          <h2 className="headline mt-7 text-5xl leading-[0.9] text-[#080808] md:text-6xl">
            Antes de começar,
            <br />
            algumas respostas.
          </h2>
        </div>

        <div className="reveal md:col-span-7 md:col-start-6">
          <div className="divide-y divide-[#c9c4bb] border-y border-[#c9c4bb]">
            {faqs.map((item, index) => (
              <details key={item.q} className="faq-item">
                <summary className="flex cursor-pointer list-none items-start gap-4 py-6 text-left marker:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6f6b65] md:items-center md:gap-6">
                  <span className="pt-1 font-display text-sm text-[#77716a]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="flex-1 font-display text-lg font-bold uppercase leading-tight tracking-[-0.03em] text-[#080808] md:text-2xl">
                    {item.q}
                  </span>

                  <span
                    className="faq-plus text-2xl leading-none text-[#6f6b65]"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>

                <p className="faq-answer pb-6 pl-10 pr-8 text-sm leading-relaxed text-[#494641] md:pl-14 md:text-base">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#080808] text-[#f4f1eb]">
      <div className="mx-auto max-w-[1600px] px-5 pb-12 pt-16 sm:px-8 md:pt-24 lg:px-14">
        <div className="flex flex-col justify-between gap-14 md:flex-row md:items-end">
          <div>
            <Logo className="text-white" />

            <p className="headline mt-12 text-5xl leading-[0.86] sm:text-7xl md:text-8xl">
              Instituto
              <span className="block">Acesso Global</span>
            </p>
          </div>

          <nav
            aria-label="Navegação do rodapé"
            className="grid grid-cols-2 gap-x-10 gap-y-5 text-sm uppercase tracking-[0.12em] text-white/65 md:grid-cols-1 md:gap-y-4"
          >
            {navLinks
              .filter((link) => link.href !== "#inicio")
              .map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="link-underline w-fit transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/20 pt-5 text-[0.65rem] uppercase tracking-[0.16em] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© Instituto Acesso Global</p>

          <a
            href="#inicio"
            className="inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            Voltar ao início
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}