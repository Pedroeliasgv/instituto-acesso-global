import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { categories, courses, type Course } from "@/data/site";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./ui";

function CourseCard({ course }: { course: Course }) {
  return (
    <article className="group flex flex-col bg-card transition-shadow duration-500 hover:shadow-[var(--shadow-card)] animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="relative aspect-[4/3] overflow-hidden bg-navy">
        <img src={course.image} alt="" loading="lazy" className="h-full w-full object-cover opacity-80 transition-transform duration-[1.2s] ease-out group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-abyss/80 to-transparent" />
        <span className="eyebrow absolute left-5 top-5 bg-paper/95 px-3 py-1.5 text-[0.6rem] text-navy">{course.category}</span>
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <h3 className="font-display text-xl font-bold uppercase leading-tight tracking-tight">{course.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{course.description}</p>
        {(course.modules || course.lessons) && (
          <p className="mt-6 flex gap-5 border-t pt-5 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
            {course.modules && <span>{course.modules} módulos</span>}
            {course.lessons && <span>{course.lessons} aulas</span>}
          </p>
        )}
        <a href={course.href ?? "#"} className="mt-6 inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-royal">
          <span className="link-underline">Conhecer curso</span>
          <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </article>
  );
}

export function Courses() {
  const [active, setActive] = useState<(typeof categories)[number]>("Todos");
  const list = active === "Todos" ? courses : courses.filter((c) => c.category === active);

  return (
    <section id="cursos" className="bg-muted py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Eyebrow>Catálogo de cursos</Eyebrow>
            <h2 className="headline mt-6 text-4xl md:text-6xl">Encontre a formação certa para o seu <span className="font-serif font-normal normal-case italic text-royal">momento.</span></h2>
          </div>
          <p className="text-muted-foreground md:col-span-4 md:col-start-9">
            Trilhas organizadas por área e nível. Novos cursos são adicionados ao catálogo continuamente.
          </p>
        </div>

        <div className="reveal -mx-5 mt-14 overflow-x-auto px-5 md:mx-0 md:px-0">
          <div className="flex min-w-max gap-2 border-b">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  "relative px-4 py-4 text-[0.7rem] font-bold uppercase tracking-[0.18em] transition-colors",
                  active === c ? "text-royal" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {c}
                <span className={cn("absolute inset-x-0 -bottom-px h-0.5 bg-royal transition-transform duration-500", active === c ? "scale-x-100" : "scale-x-0")} />
              </button>
            ))}
          </div>
        </div>

        {list.length ? (
          <div key={active} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((c) => <CourseCard key={c.id} course={c} />)}
          </div>
        ) : (
          <p className="mt-16 text-center text-muted-foreground">Novos cursos desta categoria em breve.</p>
        )}
      </div>
    </section>
  );
}
