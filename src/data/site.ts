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
  { label: "Conteúdos", href: "#conteudos" },
  { label: "Cursos", href: "#cursos" },
  { label: "Evanio Vale", href: "#evanio" },
  { label: "FAQ", href: "#faq" },
];

/* =========================================================
   MÓDULOS
   ========================================================= */

export interface TeachingModule {
  number: string;
  title: string;
  description: string;
  image: string;
}

export const modules: TeachingModule[] = [
  {
    number: "01",
    title: "Intimidade com Deus",
    description:
      "Um aprofundamento sobre relacionamento com Deus, vida espiritual e fundamentos para uma caminhada mais consciente.",
    image: event,
  },
  {
    number: "02",
    title: "Dons Espirituais e Discernimento",
    description:
      "Estudo dos dons espirituais e do discernimento necessário para compreender suas manifestações à luz das Escrituras.",
    image: lion,
  },
  {
    number: "03",
    title: "Interpretação de Sonhos à Luz da Bíblia",
    description:
      "Uma abordagem sobre sonhos, interpretações e critérios para compreender esse tema a partir da perspectiva bíblica.",
    image: bible,
  },
  {
    number: "04",
    title: "Vida Profética",
    description:
      "Estudos relacionados à profecia, ao desenvolvimento da vida profética e à compreensão do chamado profético.",
    image: hero,
  },
  {
    number: "05",
    title: "Propósito e Chamado",
    description:
      "Reflexões sobre propósito, chamado e a construção de uma vida alinhada àquilo que Deus confiou a cada pessoa.",
    image: evanio,
  },
  {
    number: "06",
    title: "Sabedoria Financeira e Prosperidade do Reino",
    description:
      "Princípios de sabedoria financeira, administração e compreensão da prosperidade dentro de uma perspectiva do Reino.",
    image: mac,
  },
  {
    number: "07",
    title: "Liderança e Multiplicação",
    description:
      "Fundamentos de liderança, desenvolvimento de pessoas e multiplicação de conhecimento, influência e propósito.",
    image: event,
  },
  {
    number: "08",
    title: "Tipos de Oração",
    description:
      "Um estudo sobre diferentes formas de oração e sua importância na vida espiritual.",
    image: bible,
  },
];

/* =========================================================
   DORES / PERGUNTAS
   ========================================================= */

export const painPoints = [
  "Você já se perguntou como funcionam os dons espirituais?",
  "Já teve dificuldade para discernir se algo realmente é profético?",
  "Você sabe diferenciar dom de profecia e ofício de profeta?",
  "Como desenvolver discernimento sem depender apenas de experiências?",
  "Como compreender melhor o mundo espiritual à luz das Escrituras?",
  "O que a Bíblia realmente ensina sobre libertação?",
  "Como compreender questões relacionadas à batalha espiritual?",
  "Como crescer em conhecimento e maturidade ministerial?",
];

/* =========================================================
   INSTITUTO
   ========================================================= */

export const institutePoints = [
  {
    number: "01",
    title: "Estudo",
    text: "Conteúdo organizado para quem deseja ir além da superficialidade e compreender cada tema com mais profundidade.",
  },
  {
    number: "02",
    title: "Discernimento",
    text: "Conhecimento para analisar, refletir e desenvolver uma visão mais clara sobre assuntos da vida espiritual.",
  },
  {
    number: "03",
    title: "Desenvolvimento",
    text: "Uma proposta de aprendizado que busca transformar conhecimento em crescimento pessoal e ministerial.",
  },
  {
    number: "04",
    title: "Propósito",
    text: "Conteúdos que ajudam você a compreender melhor seu caminho, seu chamado e sua responsabilidade.",
  },
];

/* =========================================================
   PILARES
   ========================================================= */

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

/* =========================================================
   O QUE VOCÊ ENCONTRA
   ========================================================= */

export const deliverables = [
  {
    number: "01",
    title: "Cursos",
    text: "Conteúdos estruturados para aprofundar temas específicos.",
  },
  {
    number: "02",
    title: "Seminários",
    text: "Estudos concentrados em assuntos relevantes da vida espiritual e ministerial.",
  },
  {
    number: "03",
    title: "Ensino",
    text: "Conteúdo desenvolvido para ampliar conhecimento e compreensão.",
  },
  {
    number: "04",
    title: "Escrituras",
    text: "Uma perspectiva fundamentada no estudo e na compreensão bíblica.",
  },
  {
    number: "05",
    title: "Desenvolvimento",
    text: "Conhecimento aplicado ao crescimento pessoal e ministerial.",
  },
  {
    number: "06",
    title: "Aprofundamento",
    text: "Uma jornada para quem deseja ir além do conteúdo superficial.",
  },
];

/* =========================================================
   AUTORIDADE
   ========================================================= */

export const authorityPoints = [
  "Ensino focado em estudo e aprofundamento",
  "Conteúdo desenvolvido para temas específicos",
  "Perspectiva fundamentada nas Escrituras",
  "Busca por clareza, discernimento e maturidade",
];

/* =========================================================
   CURSOS / PRODUTOS
   ========================================================= */

export interface Course {
  id: string;
  title: string;
  type: "Curso" | "Seminário";
  description: string;
  image: string;
  href: string;
  label?: string;
  highlights?: string[];
}

export const courses: Course[] = [
  {
    id: "curso-dons-espirituais",
    title: "Dons Espirituais",
    type: "Curso",
    description:
      "Um estudo sobre os dons espirituais e sua compreensão à luz das Escrituras.",
    image: lion,
    href: "https://hotmart.com/pt-br/marketplace/produtos/hagsxd-curso-de-dons-espirituais-btgoa/S85674996V?preview=true",
    label: "Conhecer o curso",
    highlights: [
      "Compreensão dos dons espirituais",
      "Estudo fundamentado nas Escrituras",
      "Reflexão sobre manifestação e discernimento",
    ],
  },
  {
    id: "seminario-libertacao",
    title: "Seminário de Libertação",
    type: "Seminário",
    description:
      "Um conteúdo dedicado ao estudo da libertação e de seus principais fundamentos.",
    image: bible,
    href: "https://hotmart.com/pt-br/marketplace/produtos/hagsxd-seminario-de-libertacao-0v0aj/E93350393C?sck=HOTMART_PRODUCT_PAGE",
    label: "Conhecer o seminário",
    highlights: [
      "Estudo sobre libertação",
      "Fundamentos e discernimento",
      "Aplicação e compreensão do tema",
    ],
  },
];

/* =========================================================
   OBJEÇÕES
   ========================================================= */

export const objections = [
  {
    q: "Preciso ter conhecimento prévio?",
    a: "Nem sempre. Cada conteúdo possui uma proposta própria. Consulte os detalhes do produto escolhido para entender melhor o nível e a abordagem.",
  },
  {
    q: "Para quem são os conteúdos?",
    a: "Para pessoas que desejam estudar, compreender melhor temas relacionados à vida espiritual e aprofundar seu conhecimento.",
  },
  {
    q: "Posso estudar mais de um conteúdo?",
    a: "Sim. Os produtos são independentes e você pode escolher aqueles que mais fazem sentido para seus objetivos.",
  },
  {
    q: "Como funciona o acesso?",
    a: "A inscrição acontece pela página oficial do produto. Depois da compra, o acesso é disponibilizado pela plataforma indicada.",
  },
];

/* =========================================================
   COMO FUNCIONA
   ========================================================= */

export const howItWorks = [
  {
    number: "01",
    title: "Escolha",
    text: "Encontre o curso ou seminário que mais faz sentido para você.",
  },
  {
    number: "02",
    title: "Inscreva-se",
    text: "Acesse a página oficial do produto e faça sua inscrição.",
  },
  {
    number: "03",
    title: "Acesse",
    text: "Depois da inscrição, você recebe acesso ao conteúdo.",
  },
  {
    number: "04",
    title: "Aprofunde",
    text: "Comece sua jornada de estudo no seu próprio ritmo.",
  },
];

/* =========================================================
   FAQ
   ========================================================= */

export const faqs = [
  {
    q: "Para quem são os cursos?",
    a: "Os cursos são para pessoas que desejam estudar, aprofundar seus conhecimentos e compreender melhor temas relacionados à vida espiritual e ministerial. Cada curso possui uma proposta própria.",
  },
  {
    q: "Preciso ter experiência ou conhecimento prévio?",
    a: "Não necessariamente. A necessidade de conhecimento prévio pode variar de acordo com o curso. Antes de se inscrever, você pode consultar os detalhes apresentados na página oficial do produto.",
  },
  {
    q: "Onde os cursos são realizados?",
    a: "Os cursos disponíveis online são realizados por meio da Hotmart. Depois da inscrição, o acesso ao conteúdo é feito pela própria plataforma.",
  },
  {
    q: "Como faço minha inscrição?",
    a: "Escolha o curso que deseja conhecer e clique em “Conhecer o curso”. Você será levado à página oficial do produto na Hotmart, onde encontrará as informações sobre conteúdo, acesso e inscrição.",
  },
  {
    q: "Como recebo acesso?",
    a: "Após a inscrição, o acesso ao conteúdo é disponibilizado pela plataforma indicada na página do produto.",
  },
  {
    q: "Os cursos possuem certificado?",
    a: "A disponibilidade de certificado pode variar de acordo com cada curso. Consulte as informações apresentadas na página oficial do produto.",
  },
  {
    q: "Posso fazer mais de um curso?",
    a: "Sim. Os cursos são independentes e você pode escolher mais de um de acordo com seus interesses e objetivos.",
  },
];