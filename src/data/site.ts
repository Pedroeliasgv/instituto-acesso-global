import event from "@/assets/event.jpg";
import hero from "@/assets/hero.jpg";
import evanio from "@/assets/evanio.jpg";
import lion from "@/assets/lion.jpg";
import mac from "@/assets/mac.jpg";
import bible from "@/assets/bible.jpg";

export const images = {
  event,
  hero,
  portrait: "/portrait.jpg",
  evanio,
  lion,
  mac,
  bible,
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
    description:
      "Um estudo sobre os dons espirituais e sua compreensão à luz das Escrituras.",
    image: lion,
    href: "https://hotmart.com/pt-br/marketplace/produtos/hagsxd-curso-de-dons-espirituais-btgoa/S85674996V?preview=true",
    label: "Conhecer o curso",
  },
  {
    id: "seminario-libertacao",
    title: "Seminário de Libertação",
    description:
      "Um conteúdo dedicado ao estudo da libertação e de seus principais fundamentos.",
    image: bible,
    href: "https://hotmart.com/pt-br/marketplace/produtos/hagsxd-seminario-de-libertacao-0v0aj/E93350393C?sck=HOTMART_PRODUCT_PAGE",
    label: "Conhecer o seminário",
  },
];

export const pillars = [
  {
    n: "01",
    title: "Ensino",
    text: "Conteúdo pensado para ampliar o conhecimento e aprofundar cada tema.",
  },
  {
    n: "02",
    title: "Discernimento",
    text: "Estudo e reflexão para compreender cada assunto com mais clareza.",
  },
  {
    n: "03",
    title: "Prática",
    text: "O conhecimento precisa sair da teoria e encontrar espaço na vida real.",
  },
  {
    n: "04",
    title: "Propósito",
    text: "Aprender também é entender como aquilo que sabemos pode servir a um propósito.",
  },
];

export const faqs = [
  {
    q: "Para quem são os cursos?",
    a: "Os cursos são para pessoas que desejam estudar, aprofundar seus conhecimentos e compreender melhor temas relacionados à vida espiritual e ministerial. Cada curso possui uma proposta própria.",
  },
  {
    q: "Preciso ter experiência ou conhecimento prévio?",
    a: "Não necessariamente. A necessidade de conhecimento prévio pode variar de acordo com o curso. Antes de se inscrever, você pode consultar os detalhes e entender se aquele conteúdo é adequado para você.",
  },
  {
    q: "Onde os cursos são realizados?",
    a: "Os cursos disponíveis online são realizados por meio da Hotmart. Depois da inscrição, o acesso ao conteúdo é feito pela própria plataforma.",
  },
  {
    q: "Como faço minha inscrição?",
    a: "É simples. Escolha o curso que deseja conhecer e clique em “Conhecer o curso”. Você será levado à página oficial do produto na Hotmart, onde encontrará as informações sobre conteúdo, acesso e inscrição.",
  },
  {
    q: "Os cursos possuem certificado?",
    a: "A disponibilidade de certificado pode variar de acordo com cada curso. Para saber se o curso escolhido oferece certificação, consulte as informações apresentadas na página oficial do produto.",
  },
  {
    q: "Posso fazer mais de um curso?",
    a: "Sim. Os cursos são independentes e você pode escolher mais de um de acordo com seus interesses e objetivos.",
  },
];