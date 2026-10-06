import {
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { categories, courses, type Course } from "@/data/site";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./ui";

function CourseCard({
  course,
  index,
}: {
  course: Course;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative overflow-hidden bg-background"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-navy">
        <img
          src={course.image}
          alt={course.title}
          loading="lazy"
          className={cn(
            "h-full w-full object-cover transition-transform duration-[1.4s] ease-out",
            hovered ? "scale-110" : "scale-100",
          )}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/20 to-transparent" />

        <div
          className={cn(
            "absolute inset-0 bg-royal/20 transition-opacity duration-500",
            hovered ? "opacity-100" : "opacity-0",
          )}
        />

        <span className="absolute left-6 top-6 bg-paper px-3 py-2 text-[0.58rem] font-bold uppercase tracking-[0.18em] text-navy">
          {course.category}
        </span>

        <span className="absolute bottom-5 right-6 font-display text-7xl font-bold tracking-tighter text-white/15 transition-all duration-500 group-hover:text-white/30">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="absolute bottom-5 left-6 flex items-center gap-2 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-white">
          <CheckCircle2 size={14} className="text-azure" />
          Disponível
        </div>
      </div>

      <div className="border-x border-b border-border p-7 md:p-9">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="eyebrow text-royal">
              {course.category}
            </p>

            <h3 className="mt-4 font-display text-2xl font-bold uppercase leading-[0.95] tracking-tight md:text-4xl">
              {course.title}
            </h3>
          </div>

          <div
            className={cn(
              "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-500",
              hovered
                ? "border-royal bg-royal text-white"
                : "border-border",
            )}
          >
            <ArrowUpRight
              size={18}
              className={cn(
                "transition-transform duration-500",
                hovered && "rotate-45",
              )}
            />
          </div>
        </div>

        <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
          {course.description}
        </p>

        <a
          href={course.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group/button mt-8 flex w-full items-center justify-between bg-royal px-5 py-4 text-white transition-all duration-300 hover:bg-navy"
        >
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em]">
            {course.label ?? "Conhecer curso"}
          </span>

          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30">
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1"
            />
          </span>
        </a>
      </div>
    </article>
  );
}

export function Courses() {
  const [active, setActive] =
    useState<(typeof categories)[number]>("Todos");

  const list =
    active === "Todos"
      ? courses
      : courses.filter((course) => course.category === active);

  return (
    <section
      id="cursos"
      className="relative overflow-hidden bg-muted py-24 md:py-36"
    >
      <div className="pointer-events-none absolute -right-60 top-20 h-[600px] w-[600px] rounded-full bg-royal/5 blur-3xl" />

      <div className="pointer-events-none absolute -left-60 bottom-0 h-[500px] w-[500px] rounded-full bg-azure/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3">
            <Eyebrow>Cursos e conteúdos</Eyebrow>

            <span className="hidden h-px w-16 bg-border md:block" />

            <span className="hidden items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-muted-foreground md:flex">
              <Sparkles size={12} />
              {courses.length} disponíveis
            </span>
          </div>

          <h2 className="headline mt-6 text-5xl md:text-7xl lg:text-8xl">
            Aprenda.
            <br />
            Desenvolva.
            <br />
            <span className="font-serif font-normal normal-case italic text-royal">
              Avance.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Conheça os cursos disponíveis no Instituto Acesso Global e escolha
            o conteúdo que mais se conecta com o seu momento.
          </p>
        </div>

        <div className="mt-14 border-y border-border">
          <div className="-mx-5 overflow-x-auto px-5 md:mx-0 md:px-0">
            <div className="flex min-w-max">
              {categories.map((category) => {
                const isActive = active === category;

                return (
                  <button
                    key={category}
                    onClick={() => setActive(category)}
                    className={cn(
                      "relative px-5 py-5 text-[0.65rem] font-bold uppercase tracking-[0.18em] transition-all duration-300 first:pl-0 md:px-7",
                      isActive
                        ? "text-royal"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {category}

                    <span
                      className={cn(
                        "absolute bottom-0 left-0 h-0.5 bg-royal transition-all duration-500",
                        isActive ? "w-full" : "w-0",
                      )}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div
          key={active}
          className="mt-10 grid gap-6 lg:grid-cols-2"
        >
          {list.map((course, index) => (
            <CourseCard
              key={course.id}
              course={course}
              index={index}
            />
          ))}
        </div>

        <div className="mt-14 border-t border-border pt-7">
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Novos conteúdos e cursos podem ser adicionados ao catálogo ao
            longo do tempo. Acompanhe o Instituto para saber das próximas
            novidades.
          </p>
        </div>
      </div>
    </section>
  );
}