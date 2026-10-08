import event from "@/assets/event.jpg";
import cdons from "@/assets/curso_dons.jpg";
import hero from "@/assets/hero.jpg";
import evanio from "@/assets/evanio.jpg";
import mac from "@/assets/mac.jpg";
import bible from "@/assets/bible.jpg";

import intimidade from "@/assets/intimidade.jpg";
import dons from "@/assets/dons.jpg";
import sonhos from "@/assets/sonhos.jpg";
import profetica from "@/assets/profetica.jpg";
import proposito from "@/assets/proposito.jpg";
import financeiro from "@/assets/financeiro.jpg";
import lideranca from "@/assets/lideranca.jpg";

/* =========================================================
   IMAGENS
   ========================================================= */

export const images = {
  event,
  hero,
  portrait: "/portrait.jpg",
  evanio,
  cdons,
  mac,
  bible,
};

/* =========================================================
   NAVEGAÇÃO
   ========================================================= */

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "O Instituto", href: "#instituto" },
  { label: "Conteúdos", href: "#conteudos" },
  { label: "Planos", href: "#planos" },
  { label: "Cursos", href: "#outros-cursos" },
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
    image: intimidade,
  },
  {
    number: "02",
    title: "Dons Espirituais e Discernimento",
    description:
      "Estudo dos dons espirituais e do discernimento necessário para compreender suas manifestações à luz das Escrituras.",
    image: dons,
  },
  {
    number: "03",
    title: "Interpretação de Sonhos à Luz da Bíblia",
    description:
      "Uma abordagem sobre sonhos, interpretações e critérios para compreender esse tema a partir da perspectiva bíblica.",
    image: sonhos,
  },
  {
    number: "04",
    title: "Vida Profética",
    description:
      "Estudos relacionados à profecia, ao desenvolvimento da vida profética e à compreensão do chamado profético.",
    image: profetica,
  },
  {
    number: "05",
    title: "Propósito e Chamado",
    description:
      "Reflexões sobre propósito, chamado e a construção de uma vida alinhada àquilo que Deus confiou a cada pessoa.",
    image: proposito,
  },
  {
    number: "06",
    title: "Sabedoria Financeira e Prosperidade do Reino",
    description:
      "Princípios de sabedoria financeira, administração e compreensão da prosperidade dentro de uma perspectiva do Reino.",
    image: financeiro,
  },
  {
    number: "07",
    title: "Liderança e Multiplicação",
    description:
      "Fundamentos de liderança, desenvolvimento de pessoas e multiplicação de conhecimento, influência e propósito.",
    image: lideranca,
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

export interface InstitutePoint {
  number: string;
  title: string;
  text: string;
}

export const institutePoints: InstitutePoint[] = [
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

export interface Pillar {
  n: string;
  title: string;
  text: string;
}

export const pillars: Pillar[] = [
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

export interface Deliverable {
  number: string;
  title: string;
  text: string;
}

export const deliverables: Deliverable[] = [
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

export interface AuthorityPoint {
  number: string;
  title: string;
  text: string;
}

export const authorityPoints: AuthorityPoint[] = [
  {
    number: "01",
    title: "Ensino",
    text: "Ensino focado em estudo e aprofundamento.",
  },
  {
    number: "02",
    title: "Conteúdo",
    text: "Conteúdo desenvolvido para temas específicos.",
  },
  {
    number: "03",
    title: "Escrituras",
    text: "Perspectiva fundamentada nas Escrituras.",
  },
  {
    number: "04",
    title: "Maturidade",
    text: "Busca por clareza, discernimento e maturidade.",
  },
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
    image: cdons,
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

export interface Objection {
  q: string;
  a: string;
}

export const objections: Objection[] = [
  {
    q: "Preciso ter conhecimento prévio?",
    a: "Não. O Instituto foi pensado para pessoas que desejam aprofundar seus conhecimentos e desenvolver uma compreensão mais madura dos temas apresentados.",
  },
  {
    q: "O que está incluído no acesso?",
    a: "O acesso ao Instituto inclui os 7 módulos que compõem sua jornada de aprendizado.",
  },
  {
    q: "Posso escolher entre plano anual e mensal?",
    a: "Sim. Você pode escolher entre o acesso anual ou a assinatura mensal, de acordo com a opção que fizer mais sentido para você.",
  },
  {
    q: "Como funciona o acesso?",
    a: "A inscrição é realizada pela Hotmart. Após a confirmação, o acesso ao conteúdo é disponibilizado pela própria plataforma.",
  },
];

/* =========================================================
   COMO FUNCIONA
   ========================================================= */

export interface HowItWorksItem {
  number: string;
  title: string;
  text: string;
}

export const howItWorks: HowItWorksItem[] = [
  {
    number: "01",
    title: "Escolha seu acesso",
    text: "Escolha entre o plano anual ou a assinatura mensal do Instituto Acesso Global.",
  },
  {
    number: "02",
    title: "Faça sua inscrição",
    text: "Clique no plano escolhido e conclua sua inscrição pela plataforma Hotmart.",
  },
  {
    number: "03",
    title: "Acesse o Instituto",
    text: "Após a confirmação da inscrição, você recebe acesso ao conteúdo adquirido.",
  },
  {
    number: "04",
    title: "Comece sua jornada",
    text: "Explore os 7 módulos e avance no seu ritmo através dos conteúdos do Instituto.",
  },
];

/* =========================================================
   FAQ
   ========================================================= */

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: "O que é o Instituto Acesso Global?",
    answer:
      "O Instituto Acesso Global é uma jornada de aprendizado voltada ao aprofundamento da vida espiritual, desenvolvimento de discernimento, compreensão do propósito e crescimento ministerial.",
  },
  {
    question: "O que está incluído no Instituto?",
    answer:
      "O Instituto reúne 7 módulos de conteúdo: Intimidade com Deus; Dons Espirituais e Discernimento; Interpretação de Sonhos à Luz da Bíblia; Vida Profética; Propósito e Chamado; Sabedoria Financeira e Prosperidade do Reino; e Liderança e Multiplicação.",
  },
  {
    question: "Preciso ter conhecimento prévio para entrar?",
    answer:
      "Não. O Instituto foi pensado para pessoas que desejam aprofundar seus conhecimentos e desenvolver uma compreensão mais madura dos temas apresentados.",
  },
  {
    question: "Como funciona o acesso ao Instituto?",
    answer:
      "O acesso é realizado online pela plataforma Hotmart. Após a inscrição, você recebe acesso ao conteúdo adquirido pela própria plataforma.",
  },
  {
    question: "Qual a diferença entre o plano anual e o mensal?",
    answer:
      "No plano anual, você tem acesso integral ao Instituto durante 1 ano. No plano mensal, o acesso funciona por meio de uma assinatura recorrente de R$ 97 por mês.",
  },
  {
    question: "Posso cancelar a assinatura mensal?",
    answer:
      "O plano mensal funciona como uma assinatura recorrente. As condições de cancelamento e gerenciamento da assinatura são apresentadas pela Hotmart durante o processo de contratação.",
  },
  {
    question: "O Instituto possui quantos módulos?",
    answer:
      "Atualmente, o Instituto Acesso Global possui 7 módulos, abordando diferentes temas relacionados à vida espiritual, propósito, desenvolvimento e liderança.",
  },
  {
    question: "Os módulos são separados ou fazem parte do Instituto?",
    answer:
      "Os 7 módulos fazem parte do Instituto Acesso Global. Eles compõem a jornada de conteúdo oferecida dentro do acesso ao Instituto.",
  },
  {
    question: "Também existem outros cursos além do Instituto?",
    answer:
      "Sim. Além do Instituto Acesso Global, existem outros produtos disponíveis, como Dons Espirituais e Seminário de Libertação, cada um com sua própria proposta e página de acesso.",
  },
  {
    question: "Como faço para entrar no Instituto?",
    answer:
      "Clique em uma das opções de acesso apresentadas no site, escolha o plano que melhor atende você e siga para a página de contratação na Hotmart.",
  },
];