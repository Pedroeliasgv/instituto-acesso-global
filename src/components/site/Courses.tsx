
import { ArrowRight } from "lucide-react";
import { courses } from "@/data/site";
import { Eyebrow } from "./ui";
import livro from "@/assets/livro.jpg";

const ebook = {
  id: "ebook-devocional-fe",
  title: "E-book Devocional Fé",
  type: "E-book",
  description:
    "Um conteúdo digital para acompanhar sua caminhada de fé e fortalecer seu tempo de devocional.",
  image: livro,
  href: "https://pay.hotmart.com/A107952951N",
  label: "Adquirir e-book",
  highlights: [
    "Formato digital",
    "Acesso pela Hotmart",
    "Conteúdo para sua jornada de fé",
  ],
};

const products = [...courses, ebook];

export function Courses() {
  return (
    <section
      id="outros-cursos"
      className="bg-[#f4f1eb] px-5 py-20 sm:px-8 md:py-28 lg:px-14"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* HEADER */}
        <div className="reveal mx-auto max-w-4xl text-center">
          <Eyebrow className="text-[#6f6b65]">
            Continue sua jornada
          </Eyebrow>

          <h2 className="mt-6 font-display text-[clamp(3rem,7vw,7rem)] font-bold uppercase leading-[0.82] tracking-[-0.065em] text-[#080808]">
            Outros
            <span className="block text-[#77736c]">cursos.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-[#494641] md:text-lg">
            Além dos conteúdos do Instituto Acesso Global, conheça outros
            cursos, seminários e materiais digitais para aprofundar seus estudos.
          </p>
        </div>

        {/* PRODUTOS */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <article
              key={product.id}
              className="reveal group flex flex-col overflow-hidden rounded-3xl border border-[#080808]/10 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* IMAGEM */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                <span className="absolute left-5 top-5 rounded-full bg-white px-3 py-1.5 font-display text-[0.58rem] font-bold uppercase tracking-[0.16em] text-[#080808]">
                  {product.type}
                </span>
              </div>

              {/* CONTEÚDO */}
              <div className="flex flex-1 flex-col p-6 md:p-8">
                <span className="font-display text-[0.6rem] font-bold uppercase tracking-[0.18em] text-[#77736c]">
                  Conteúdo complementar
                </span>

                <h3 className="mt-4 font-display text-[clamp(2rem,3vw,3rem)] font-bold uppercase leading-[0.9] tracking-[-0.055em] text-[#080808]">
                  {product.title}
                </h3>

                <p className="mt-5 text-sm leading-relaxed text-[#494641] md:text-base">
                  {product.description}
                </p>

                {product.highlights && product.highlights.length > 0 && (
                  <ul className="mt-6 space-y-3 border-t border-[#080808]/10 pt-6">
                    {product.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-relaxed text-[#494641]"
                      >
                        <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#b18a4a]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* BOTÃO */}
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 flex w-full items-center justify-between gap-4 rounded-full bg-[#080808] px-5 py-4 font-display text-[0.65rem] font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-[#292724]"
                >
                  <span>{product.label || "Conhecer o curso"}</span>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight size={15} />
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* FECHAMENTO */}
        <div className="reveal mt-12 text-center">
          <p className="text-sm leading-relaxed text-[#6f6b65]">
            O Instituto Acesso Global é a jornada principal. Estes conteúdos
            complementam seus estudos de acordo com seus interesses.
          </p>
        </div>
      </div>
    </section>
  );
}