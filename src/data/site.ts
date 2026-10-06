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
  { label: "O Instituto", href: "#sobre" },
  { label: "Cursos", href: "#cursos" },
  { label: "Evanio Vale", href: "#evanio" },
  { label: "FAQ", href: "#faq" },
];

export const categories = [
  "Todos",
  "Profético",
  "Ministério",
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
  featured?: boolean;
  href: string;
  label?: string;
}

export const courses: Course[] = [
  {
    id: "c1",
    title: "Curso de Dons Espirituais",
    category: "Profético",
    description:
      "Um curso para aprofundar o entendimento sobre os dons espirituais, desenvolvendo discernimento, maturidade e responsabilidade na sua prática.",
    image: classroom,
    featured: true,
    href: "https://hotmart.com/pt-br/marketplace/produtos/hagsxd-curso-de-dons-espirituais-btgoa/S85674996V?preview=true",
    label: "Conhecer o curso",
  },
  {
    id: "c2",
    title: "Seminário de Libertação",
    category: "Ministério",
    description:
      "Um conteúdo de aprofundamento sobre libertação, discernimento espiritual e fundamentos importantes para quem deseja compreender melhor esse tema.",
    image: hero,
    href: "https://hotmart.com/pt-br/marketplace/produtos/hagsxd-seminario-de-libertacao-0v0aj/E93350393C?sck=HOTMART_PRODUCT_PAGE",
    label: "Conhecer o seminário",
  },
];

export const pillars = [
  {
    n: "01",
    title: "Ensino",
    text:
      "Conteúdo apresentado de forma clara, profunda e acessível para gerar compreensão.",
  },
  {
    n: "02",
    title: "Discernimento",
    text:
      "Conhecimento acompanhado de maturidade para interpretar, avaliar e aplicar o que é aprendido.",
  },
  {
    n: "03",
    title: "Prática",
    text:
      "O aprendizado precisa sair da teoria e encontrar espaço na vida real.",
  },
  {
    n: "04",
    title: "Propósito",
    text:
      "Formação que aponta para uma vida com direção, responsabilidade e propósito.",
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
];