import classroom from "@/assets/classroom.jpg";
import event from "@/assets/event.jpg";
import hero from "@/assets/hero.jpg";

export const images = {
  classroom,
  event,
  hero,
  portrait: "/portrait.jpg",
};

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "O Instituto", href: "#instituto" },
  { label: "Cursos", href: "#cursos" },
  { label: "Evanio Vale", href: "#evanio" },
  { label: "FAQ", href: "#faq" },
];

export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  label?: string;
}

export const courses: Course[] = [
  {
    id: "curso-dons-espirituais",
    title: "Dons Espirituais",
    description: "Conteúdo dedicado ao estudo dos dons espirituais.",
    image: "/portrait.jpg",
    href: "https://hotmart.com/pt-br/marketplace/produtos/hagsxd-curso-de-dons-espirituais-btgoa/S85674996V?preview=true",
    label: "Conhecer o curso",
  },
  {
    id: "seminario-libertacao",
    title: "Seminário de Libertação",
    description: "Conteúdo dedicado ao tema da libertação.",
    image: hero,
    href: "https://hotmart.com/pt-br/marketplace/produtos/hagsxd-seminario-de-libertacao-0v0aj/E93350393C?sck=HOTMART_PRODUCT_PAGE",
    label: "Conhecer o seminário",
  },
];

export const pillars = [
  {
    n: "01",
    title: "Ensino",
    text: "Conteúdo para aprender e aprofundar.",
  },
  {
    n: "02",
    title: "Discernimento",
    text: "Espaço para compreender com clareza.",
  },
  {
    n: "03",
    title: "Prática",
    text: "Aprendizado em diálogo com a vida.",
  },
  {
    n: "04",
    title: "Propósito",
    text: "Formação orientada por propósito.",
  },
];

export const faqs = [
  {
    q: "Para quem são os cursos?",
    a:
      "Os cursos são voltados para pessoas que desejam aprofundar seu conhecimento, desenvolver maturidade e compreender melhor temas relacionados à vida espiritual e ministerial.",
  },
  {
    q: "Preciso ter experiência?",
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