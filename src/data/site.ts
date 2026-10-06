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
  { label: "Instituto", href: "#instituto" },
  { label: "Cursos", href: "#cursos" },
  { label: "Evanio Vale", href: "#evanio" },
  { label: "FAQ", href: "#faq" },
];

export const categories = [
  "Todos",
  "Curso de Dons Espirituais",
  "Seminário de Libertação",
] as const;

export type Category = Exclude<(typeof categories)[number], "Todos">;

export interface Course {
  id: string;
  title: string;
  category: Category;
  description: string;
  image: string;
  featured?: boolean;
  href: string;
  label?: string;
}

export const courses: Course[] = [
  {
    id: "curso-dons-espirituais",
    title: "Curso de Dons Espirituais",
    category: "Curso de Dons Espirituais",
    description:
      "Um caminho de formação para reconhecer, desenvolver e viver os dons espirituais com discernimento, responsabilidade e propósito.",
    image: hero,
    featured: true,
    href: "https://hotmart.com/pt-br/marketplace/produtos/hagsxd-curso-de-dons-espirituais-btgoa/S85674996V?preview=true",
    label: "Conhecer o curso",
  },
  {
    id: "seminario-libertacao",
    title: "Seminário de Libertação",
    category: "Seminário de Libertação",
    description:
      "Uma proposta de ensino e reflexão para caminhar em liberdade espiritual, emocional e ministerial com mais clareza e restauração.",
    image: event,
    href: "https://hotmart.com/pt-br/marketplace/produtos/hagsxd-seminario-de-libertacao-0v0aj/E93350393C?sck=HOTMART_PRODUCT_PAGE",
    label: "Conhecer o seminário",
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
    title: "Discernimento",
    text: "A capacidade de perceber com sabedoria e sensibilidade.",
  },
  {
    n: "03",
    title: "Prática",
    text: "Aplicação real do que é ensinado no cotidiano e no ministério.",
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
    title: "Jornada de Liderança e Impacto",
    meta: "Agenda em breve",
    image: event,
  },
  {
    type: "Encontro presencial",
    title: "Caminho de Formação",
    meta: "Próxima edição disponível",
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
    course: "Curso de Dons Espirituais",
    quote:
      "A formação me ajudou a compreender melhor o meu chamado e a agir com mais paz, maturidade e direção.",
  },
  {
    name: "João V.",
    course: "Seminário de Libertação",
    quote:
      "O conteúdo foi profundo, objetivo e muito aplicável à vida real. Senti crescimento em todos os níveis.",
  },
  {
    name: "Claudio S.",
    course: "Curso de Dons Espirituais",
    quote:
      "Mais do que aprender teoria, eu vivi uma transformação de olhar e de discernimento.",
  },
];

export const faqs = [
  {
    q: "Para quem são os cursos?",
    a:
      "Os cursos são voltados para pessoas que desejam aprofundar seu conhecimento, desenvolver maturidade e compreender melhor temas relacionados à vida espiritual e ministerial.",
  },
  {
    q: "Preciso ter experiência para começar?",
    a:
      "Não necessariamente. Cada curso possui sua própria proposta e você pode conhecer os detalhes antes de realizar sua inscrição.",
  },
  {
    q: "Onde os cursos são realizados?",
    a:
      "Os cursos disponíveis online são disponibilizados pela plataforma Hotmart. O acesso e as condições podem variar conforme cada produto.",
  },
  {
    q: "Como faço minha inscrição?",
    a:
      "Escolha o curso que deseja conhecer e clique no botão correspondente. Você será direcionado para a página oficial do produto, onde poderá consultar as informações e realizar sua inscrição.",
  },
  {
    q: "Os cursos possuem certificado?",
    a:
      "As condições de certificação podem variar conforme cada curso. Consulte as informações apresentadas na página oficial do produto antes da inscrição.",
  },
  {
    q: "Posso fazer mais de um curso?",
    a:
      "Sim. Os cursos são independentes, então você pode escolher aqueles que mais fazem sentido para o seu momento.",
  },
  {
    q: "O Instituto Acesso Global é o mesmo que Evanio Vale?",
    a:
      "O Instituto Acesso Global é a instituição por meio da qual as formações e conteúdos são apresentados, sendo Evanio Vale uma referência associada ao ensino e à formação.",
  },
];