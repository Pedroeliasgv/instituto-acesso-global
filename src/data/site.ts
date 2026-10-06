import classroom from "@/assets/classroom.jpg";
import event from "@/assets/event.jpg";
import hero from "@/assets/hero.jpg";
import portrait from "@/assets/portrait.jpg";

export const images = {
  classroom,
  event,
  hero,
  portrait,
};

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Cursos", href: "#cursos" },
  { label: "Formações", href: "#formacoes" },
  { label: "Eventos", href: "#eventos" },
  { label: "Evanio Vale", href: "#evanio" },
  { label: "Área do aluno", href: "#aluno" },
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

export type Category = Exclude<
  (typeof categories)[number],
  "Todos"
>;

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

export const courses: Course[] = [
  {
    id: "c1",
    title: "Curso de Dons Espirituais",
    category: "Profético",
    description:
      "Uma formação para compreender, desenvolver e exercer os dons espirituais com discernimento, maturidade e responsabilidade.",
    image: classroom,
    featured: true,
    href: "https://hotmart.com/pt-br/marketplace/produtos/hagsxd-curso-de-dons-espirituais-btgoa/S85674996V?preview=true",
  },
  {
    id: "c2",
    title: "Seminário de Libertação",
    category: "Ministério",
    description:
      "Uma jornada de ensino e aprofundamento sobre libertação, discernimento espiritual e fundamentos para o ministério.",
    image: hero,
    href: "https://hotmart.com/pt-br/marketplace/produtos/hagsxd-seminario-de-libertacao-0v0aj/E93350393C?sck=HOTMART_PRODUCT_PAGE",
  },
  {
    id: "c3",
    title: "Liderança com Propósito",
    category: "Liderança",
    description:
      "Aprenda a liderar com autoridade, clareza e responsabilidade em contextos reais de influência.",
    image: event,
    modules: 5,
    lessons: 20,
    duration: "8 semanas",
  },
  {
    id: "c4",
    title: "Ministério e Sustentação",
    category: "Ministério",
    description:
      "Fortaleça sua formação ministerial com conteúdos que unem espiritualidade, discernimento e prática.",
    image: portrait,
    modules: 7,
    lessons: 28,
    duration: "11 semanas",
  },
  {
    id: "c5",
    title: "Desenvolvimento Humano",
    category: "Desenvolvimento",
    description:
      "Aprofunde sua identidade, disciplina e força interior para viver com coerência e propósito.",
    image: classroom,
    modules: 4,
    lessons: 16,
    duration: "6 semanas",
  },
  {
    id: "c6",
    title: "Especialização em Ensino e Impacto",
    category: "Especializações",
    description:
      "Uma formação avançada para líderes e comunicadores que desejam multiplicar conhecimento com profundidade.",
    image: event,
    modules: 10,
    lessons: 40,
    duration: "14 semanas",
  },
];

export const journey = [
  {
    n: "01",
    title: "Fundamentos",
    text: "Estrutura sólida para que cada próximo passo seja guiado por clareza e discernimento.",
  },
  {
    n: "02",
    title: "Desenvolvimento",
    text: "Aprofundamento constante em conteúdo, prática, visão e maturidade espiritual.",
  },
  {
    n: "03",
    title: "Maturidade",
    text: "Uma formação que transforma a forma como você pensa, lidera e responde ao chamado.",
  },
  {
    n: "04",
    title: "Aplicação",
    text: "O que foi aprendido passa a ser vivido, multiplicado e sustentado em realidade.",
  },
];

export const pillars = [
  {
    n: "01",
    title: "Ensino",
    text: "Conteúdo com profundidade, clareza e rigor intelectual.",
  },
  {
    n: "02",
    title: "Prática",
    text: "Aplicação real do que é ensinado no cotidiano e no ministério.",
  },
  {
    n: "03",
    title: "Maturidade",
    text: "Crescimento emocional, espiritual e conceitual de forma equilibrada.",
  },
  {
    n: "04",
    title: "Propósito",
    text: "Formação que conduz a uma vida mais coerente e duradoura.",
  },
];

export const experiences = [
  {
    type: "Conferência",
    title: "Edição de Liderança e Impacto",
    meta: "São Paulo · 2026",
    image: event,
  },
  {
    type: "Encontro presencial",
    title: "Jornada de Formação",
    meta: "Próxima edição em breve",
    image: classroom,
  },
  {
    type: "Aula especial",
    title: "Momento de Formação Online",
    meta: "Ao vivo · agenda aberta",
    image: hero,
  },
];

export const testimonials = [
  {
    name: "Renata M.",
    course: "Fundamentos da Formação Cristã",
    quote:
      "A formação me ajudou a compreender melhor o meu chamado e a agir com mais paz, maturidade e direção.",
  },
  {
    name: "João V.",
    course: "Liderança com Propósito",
    quote:
      "O conteúdo foi profundo, objetivo e muito aplicável à vida real. Senti crescimento em todos os níveis.",
  },
  {
    name: "Claudio S.",
    course: "Trilha Profética",
    quote:
      "Mais do que aprender teoria, eu vivi uma transformação de olhar e de discernimento.",
  },
];

export const faqs = [
  {
    q: "Para quem são os cursos?",
    a: "Para pessoas que desejam crescer em conhecimento, maturidade e propósito — desde quem está começando até líderes que desejam aprofundar sua formação.",
  },
  {
    q: "Preciso ter experiência ministerial?",
    a: "Não. As trilhas de fundamentos foram pensadas para quem está se estruturando. Algumas especializações recomendam um nível anterior de vivência.",
  },
  {
    q: "Os cursos são online?",
    a: "Sim. A maioria das formações é online, com acesso pela área do aluno, e os eventos e encontros presenciais são anunciados separadamente.",
  },
  {
    q: "Como funciona o acesso?",
    a: "Após a matrícula, você recebe suas credenciais e pode acessar as aulas, materiais e acompanhamento da trilha escolhida.",
  },
  {
    q: "Existe certificado?",
    a: "Sim. Cada formação oferece certificação conforme o programa e as regras específicas da instituição.",
  },
  {
    q: "Quanto tempo tenho para concluir?",
    a: "O prazo varia conforme a formação, mas o objetivo é permitir um aprendizado profundo e consistente sem pressa.",
  },
  {
    q: "Posso fazer mais de um curso?",
    a: "Sim. Você pode seguir uma trilha completa ou cursar mais de uma formação conforme seu momento e objetivo.",
  },
  {
    q: "Como funciona a matrícula?",
    a: "Escolha a formação que melhor atende ao seu momento, clique em conhecer a formação e siga as instruções de inscrição.",
  },
];