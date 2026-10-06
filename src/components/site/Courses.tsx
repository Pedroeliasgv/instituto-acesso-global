import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Layers3,
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

  const isAvailable = Boolean(course.href);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex min-h-[560px] flex-col overflow-hidden border border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:border-royal/30 hover:shadow-[var(--shadow-card)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-navy">
        <img
          src={course.image}
          alt={course.title}
          loading="lazy"
          className={cn(
            "h-full w-full object-cover transition-transform duration-[1.2s] ease-out",
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

        <span className="absolute left-5 top-5 bg-paper px-3 py-2 text-[0.58rem] font-bold uppercase tracking-[0.18em] text-navy">
          {course.category}
        </span>

        <span className="absolute bottom-4 right-5 font-display text-6xl font-bold tracking-tighter text-white/20 transition-all duration-500 group-hover:text-white/40">
          {String(index + 1).padStart(2, "0")}
        </span>

        {isAvailable && (
          <div className="absolute bottom-5 left-5 flex items-center gap-2 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-white">
            <CheckCircle2 size={14} className="text-azure" />
            Curso disponível
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-7 md:p-8">
        <div className="flex items-start justify-between gap-5">
          <h3 className="max-w-[85%] font-display text-2xl font-bold uppercase leading-[0.95] tracking-tight md:text-3xl">
            {course.title}
          </h3>

          <div
            className={cn(
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500",
              hovered
                ? "border-royal bg-royal text-white"
                : "border-border",
            )}
          >
            <ArrowUpRight
              size={17}
              className={cn(
                "transition-transform duration-500",
                hovered && "rotate-45",
              )}
            />
          </div>
        </div>

        <p className="mt-5 max-w-[95%] text-sm leading-relaxed text-muted-foreground">
          {course.description}
        </p>

        {(course.modules || course.lessons || course.duration) && (
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-4 border-t border-border pt-6">
            {course.modules && (
              <div className="flex items-center gap-2">
                <Layers3 size={14} className="text-royal" />

                <div>
                  <span className="block text-sm font-bold">
                    {course.modules}
                  </span>

                  <span className="text-[0.55rem] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                    módulos
                  </span>
                </div>
              </div>
            )}

            {course.lessons && (
              <div className="flex items-center gap-2">
                <Clock3 size={14} className="text-royal" />

                <div>
                  <span className="block text-sm font-bold">
                    {course.lessons}
                  </span>

                  <span className="text-[0.55rem] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                    aulas
                  </span>
                </div>
              </div>
            )}

            {course.duration && (
              <div className="flex items-center gap-2">
                <Sparkles size={14} className="text-royal" />

                <div>
                  <span className="block text-sm font-bold">
                    {course.duration}
                  </span>

                  <span className="text-[0.55rem] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                    duração
                  </span>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="mt-auto pt-8">
          {course.href ? (
            <a
              href={course.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group/button flex w-full items-center justify-between bg-royal px-5 py-4 text-white transition-all duration-300 hover:bg-navy"
            >
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em]">
                Ver curso
              </span>

              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 transition-transform duration-300 group-hover/button:translate-x-1">
                <ArrowUpRight size={14} />
              </span>
            </a>
          ) : (
            <div className="flex w-full items-center justify-between border border-border px-5 py-4 text-muted-foreground">
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em]">
                Em breve
              </span>

              <span className="text-[0.6rem] font-bold uppercase tracking-[0.15em]">
                Aguarde
              </span>
            </div>
          )}
        </div>
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
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <div className="flex items-center gap-3">
              <Eyebrow>Instituto Acesso Global</Eyebrow>

              <span className="hidden h-px w-16 bg-border md:block" />

              <span className="hidden items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-muted-foreground md:flex">
                <Sparkles size={12} />
                {courses.length} cursos
              </span>
            </div>

            <h2 className="headline mt-6 max-w-5xl text-4xl md:text-6xl lg:text-7xl">
              Conheça nossos cursos.
              <br />
              <span className="font-serif font-normal normal-case italic text-royal">
                Escolha seu próximo passo.
              </span>
            </h2>
          </div>

          <div className="md:col-span-4 md:pb-2">
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:ml-auto">
              Conheça os cursos oferecidos pelo Instituto Acesso Global e
              encontre o conteúdo que melhor corresponde ao seu momento e aos
              seus objetivos.
            </p>
          </div>
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

        <div className="mt-8 flex items-center justify-between">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">
            {active === "Todos" ? "Todos os cursos" : active}
          </p>

          <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">
            {String(list.length).padStart(2, "0")} resultados
          </p>
        </div>

        {list.length > 0 ? (
          <div
            key={active}
            className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {list.map((course, index) => (
              <CourseCard
                key={course.id}
                course={course}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="flex min-h-[300px] items-center justify-center">
            <p className="text-sm text-muted-foreground">
              Novos cursos desta categoria em breve.
            </p>
          </div>
        )}

        <div className="mt-16 flex flex-col gap-5 border-t border-border pt-7 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-royal">
              Instituto Acesso Global
            </p>

            <p className="mt-2 max-w-xl text-xs leading-relaxed text-muted-foreground">
              Escolha um curso, conheça o conteúdo e faça sua inscrição
              diretamente pela plataforma de acesso.
            </p>
          </div>

          <a
            href="#cursos"
            className="group inline-flex shrink-0 items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-royal"
          >
            <span className="link-underline">Explorar cursos</span>

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-royal transition-all duration-300 group-hover:bg-royal group-hover:text-white">
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}