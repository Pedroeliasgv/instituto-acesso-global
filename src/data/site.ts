import classroom from "@/assets/classroom.jpg";
import event from "@/assets/event.jpg";
import hero from "@/assets/hero.jpg";
import portrait from "@/assets/portrait.jpg";

export const images = { classroom, event, hero, portrait };

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Cursos", href: "#cursos" },
  { label: "Formações", href: "#formacoes" },
  { label: "Eventos", href: "#eventos" },
  { label: "Evanio Vale", href: "#evanio" },
];

export const categories = [
  "Todos",
  "Formação",
  "Profético",
  "Liderança",
  "Ministério",
  "Desenvolvimento",
  "Especializações",
] as const;

export type Category = Exclude<(typeof categories)[number], "Todos">;

export interface Course {
  id: string;
  title: string;
  category: Category;
  description: string;
  image: string;
  modules?: number;
  lessons?: number;
  duration?: string;
  featured?: boolean;
  href?: string;
}

/**
 * Catálogo de cursos. Para adicionar um curso, basta incluir um novo objeto.
 * Todos os itens abaixo são PLACEHOLDERS até receber os cursos oficiais.
 */
export const courses: Course[] = [
  { id: "c1", title: "[Curso de Formação 01]", category: "Formação", description: "Placeholder — descrição breve do curso de formação base da instituição.", image: classroom, modules: 8, lessons: 32, duration: "12 semanas", featured: true },
  { id: "c2", title: "[Curso Profético 01]", category: "Profético", description: "Placeholder — descrição breve do curso na trilha profética.", image: hero, modules: 6, lessons: 24 },
  { id: "c3", title: "[Curso de Liderança 01]", category: "Liderança", description: "Placeholder — descrição breve do curso de liderança.", image: event, modules: 5, lessons: 20 },
  { id: "c4", title: "[Curso de Ministério 01]", category: "Ministério", description: "Placeholder — descrição breve do curso voltado ao ministério.", image: portrait, modules: 7, lessons: 28 },
  { id: "c5", title: "[Curso de Desenvolvimento 01]", category: "Desenvolvimento", description: "Placeholder — descrição breve do curso de desenvolvimento pessoal.", image: classroom, modules: 4, lessons: 16 },
  { id: "c6", title: "[Especialização 01]", category: "Especializações", description: "Placeholder — descrição breve de uma especialização avançada.", image: event, modules: 10, lessons: 40 },
];

export const journey = [
  { n: "01", title: "Fundamentos", text: "Bases sólidas para compreender antes de avançar." },
  { n: "02", title: "Desenvolvimento", text: "Aprofundamento contínuo, com conteúdo e acompanhamento." },
  { n: "03", title: "Maturidade", text: "Discernimento que nasce do tempo, da prática e da revisão." },
  { n: "04", title: "Aplicação", text: "O que foi aprendido passa a ser vivido no dia a dia e no chamado." },
];

export const pillars = [
  { n: "01", title: "Ensino", text: "Conhecimento com profundidade." },
  { n: "02", title: "Prática", text: "Aplicação do que foi aprendido." },
  { n: "03", title: "Maturidade", text: "Desenvolvimento e discernimento." },
  { n: "04", title: "Propósito", text: "Direcionamento para viver aquilo que foi aprendido." },
];

export const experiences = [
  { type: "Conferência", title: "[Nome da Conferência]", meta: "Data e local a confirmar", image: event },
  { type: "Encontro presencial", title: "[Nome do Encontro]", meta: "Data e local a confirmar", image: classroom },
  { type: "Aula especial", title: "[Título da Aula Especial]", meta: "Online · data a confirmar", image: hero },
];

export const testimonials = [
  { name: "[Nome do aluno]", course: "[Curso realizado]", quote: "Placeholder — espaço reservado para um depoimento real de um aluno sobre sua experiência de formação." },
  { name: "[Nome da aluna]", course: "[Curso realizado]", quote: "Placeholder — depoimento real a ser inserido. Um relato curto, sincero e específico." },
  { name: "[Nome do aluno]", course: "[Curso realizado]", quote: "Placeholder — depoimento real a ser inserido." },
];

export const faqs = [
  { q: "Para quem são os cursos?", a: "Para pessoas que desejam crescer em conhecimento, maturidade e propósito — de iniciantes a líderes. Cada curso indica o público recomendado." },
  { q: "Preciso ter experiência ministerial?", a: "Não. As trilhas de Fundamentos foram pensadas para quem está começando. Algumas especializações recomendam formação prévia." },
  { q: "Os cursos são online?", a: "Sim, os cursos são online e podem ser assistidos pela área do aluno. Eventos e encontros presenciais são divulgados separadamente." },
  { q: "Como funciona o acesso?", a: "Após a matrícula, você recebe as credenciais para entrar na área do aluno, onde estão todas as aulas e materiais." },
  { q: "Existe certificado?", a: "Placeholder — informar a política oficial de certificação da instituição." },
  { q: "Quanto tempo tenho para concluir?", a: "Placeholder — informar o prazo de acesso de cada curso." },
  { q: "Posso fazer mais de um curso?", a: "Sim. Você pode cursar formações em paralelo ou seguir a jornada sugerida, etapa por etapa." },
  { q: "Como funciona a matrícula?", a: "Escolha o curso, clique em “Conhecer curso” e siga as instruções da página de inscrição." },
];
