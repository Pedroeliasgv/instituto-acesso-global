import { ArrowUpRight } from "lucide-react";
import { courses } from "@/data/site";
import { Eyebrow } from "./ui";

export function Courses() {
  return (
    <section id="cursos" className="overflow-hidden bg-[#f4f1eb] py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-14">
        <div className="reveal mb-16 md:mb-24">
          <Eyebrow className="text-[#6f6b65]">03 / Cursos</Eyebrow>

          <h2 className="headline mt-8 text-[clamp(3.5rem,10vw,10rem)] leading-[0.82] text-[#080808]">
            Aprenda.
            <br />
            Aprofunde.
            <br />
            Viva.
          </h2>
        </div>

        <div className="course-list space-y-20 md:space-y-32">
          {courses.map((course, index) => {
            const reversed = index === 1;

            return (
              <article
                key={course.id}
                className="course-feature group grid items-center gap-8 transition-opacity duration-500 md:grid-cols-12 md:gap-10"
              >
                {/* IMAGEM */}
                <div
                  className={`course-image relative overflow-hidden md:col-span-7 ${
                    reversed
                      ? "md:col-start-6 md:row-start-1"
                      : "md:col-start-1"
                  }`}
                >
                  <img
                    src={course.image}
                    alt={`Imagem do ${course.title}`}
                    loading="lazy"
                    className={`course-photo h-full w-full bg-[#111] object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04] ${
                      index === 0
                        ? "aspect-square md:aspect-[1.12/1]"
                        : "aspect-square md:aspect-[1.5/1]"
                    }`}
                  />

                  <div className="course-image-overlay absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-black/15" />

                  <span className="absolute left-4 top-4 font-display text-sm font-bold tracking-[0.18em] text-white md:left-7 md:top-7 md:text-base">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="absolute bottom-4 right-4 font-display text-[clamp(4rem,10vw,9rem)] font-bold leading-none text-white/35 md:bottom-7 md:right-7">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* CONTEÚDO */}
                <div
                  className={`reveal md:col-span-5 md:row-start-1 ${
                    reversed ? "md:col-start-1" : "md:col-start-8"
                  }`}
                >
                  <Eyebrow className="text-[#6f6b65]">
                    {course.label
                      ? `Curso ${String(index + 1).padStart(2, "0")}`
                      : `Curso ${String(index + 1).padStart(2, "0")}`}
                  </Eyebrow>

                  <h3 className="course-title headline mt-6 text-[clamp(2.7rem,5.8vw,6rem)] leading-[0.84] text-[#080808] transition-transform duration-500 group-hover:-translate-y-1">
                    {course.title.split(" ")[0]}

                    {course.title.split(" ").length > 1 && (
                      <span className="block">
                        {course.title.split(" ").slice(1).join(" ")}
                      </span>
                    )}
                  </h3>

                  <p className="mt-6 max-w-md text-base leading-relaxed text-[#494641] md:text-lg">
                    {course.description}
                  </p>

                  <a
                    href={course.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-4 border-b border-[#080808]/35 pb-3 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#080808] transition-colors hover:border-[#6f6b65] hover:text-[#6f6b65] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6f6b65]"
                  >
                    {course.label || "Conhecer o curso"}

                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}