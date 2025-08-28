import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faGithub,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

import {
  codecademy,
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  threeIcon,
  tailwindIcon,
  reduxIcon,
  gitIcon,
  githubIcon,
  gsapIcon,
  shopifyIcon,
  webflowIcon,
  framerIcon,
  figmaIcon,
  jammmingProject,
  teslaProject,
  venomsoulProject,
  memojiHand,
  memojiHello,
  memojiOk,
  htmlCertificate,
  cssCertificate,
  jsCertificate,
  reactCertificate,
  webflowCertificate,
} from "../assets";

const media = {
  codecademy,
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  threeIcon,
  tailwindIcon,
  reduxIcon,
  gitIcon,
  githubIcon,
  gsapIcon,
  shopifyIcon,
  webflowIcon,
  framerIcon,
  figmaIcon,
  jammmingProject,
  teslaProject,
  venomsoulProject,
  memojiHand,
  memojiHello,
  memojiOk,
  htmlCertificate,
  cssCertificate,
  jsCertificate,
  reactCertificate,
  webflowCertificate,
}

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faYoutube,
  faTiktok,
};

const introduction = {
  text: [
    "Olá, seja bem-vindo(a)! Fico feliz por ter você aqui no meu portfólio.",

    "Meu nome é José Luiz e sou desenvolvedor front-end no Brasil. Minha paixão pela programação começou quando percebi o poder da tecnologia em transformar rotinas do dia a dia em soluções práticas e criativas. Desde então, venho me dedicando a criar projetos que unem design moderno e funcionalidade.",

    "Desde então, venho evoluindo constantemente e ampliando meus conhecimentos na área. Decidi mergulhar de vez no desenvolvimento web, aprendendo HTML, CSS, JavaScript e ReactJS. A cada projeto que desenvolvo, busco criar soluções únicas e eficazes, sempre aplicando as tecnologias mais atuais e alinhadas às necessidades reais do usuário.",

    "Estou sempre animado para colaborar com pessoas e equipes que compartilham minha paixão por criar experiências digitais excepcionais. Obrigado por dedicar um tempo para visitar meu portfólio!",
  ],
};

const journeys = [
  {
    title: "Web Foundations",
    company_name: "Codecademy",
    icon: codecademy,
    iconBg: "#204056",
    date: "5 Dec 2022 - 14 Dec 2022",
    points: [
      "Fundamentals of HTML",
      "Fundamentals of CSS",
      "Developing Websites Locally",
      "Deploying Websites",
    ],
  },
  {
    title: "Improved Styling with CSS",
    company_name: "Codecademy",
    icon: codecademy,
    iconBg: "#204056",
    date: "15 Dec 2022 - 29 Dec 2022",
    points: [
      "Fundamentals of Web Design",
      "Making a Website Responsive",
      "CSS Transitions and Animations",
    ],
  },
  {
    title: "Building Interactive Websites",
    company_name: "Codecademy",
    icon: codecademy,
    iconBg: "#204056",
    date: "30 Dec 2022 -  9 Feb 2023",
    points: [
      "JavaScript Syntax",
      "Building Interactive Websites",
      "Making a Website Accessible",
      "Git and Github",
    ],
  },
  {
    title: "Front-End Development",
    company_name: "Codecademy",
    icon: codecademy,
    iconBg: "#204056",
    date: "10 Feb - Present",
    points: [
      "JavaScript Syntax",
      "JavaScript Testing",
      "Async JavaScript",
      "Web Apps",
      "React Framework",
    ],
  },
];

const projects = [
  {
    name: "Gerador de Folha Simples",
    description: "Sistema para gerar folhas de pagamento de empregadas domésticas de forma simples e automatizada.",
    image: venomsoulProject, // aqui você coloca a imagem que já tem importada
    source_code_link: "https://github.com/josehtl07/gerador-folha-simples",
    demo_link: "https://seusite.com/gerador-folha",
  },
  {
    name: "Sistema DP Fácil",
    description: "Plataforma educativa para cálculos de Departamento Pessoal, incluindo férias, 13º, rescisões e conferência de valores.",
    image: teslaProject, // aqui também substitua pela sua imagem correspondente
    source_code_link: "https://github.com/josehtl07/dp-facil",
    demo_link: "https://seusite.com/dp-facil",
  },
  {
    name: "Controle de Economias",
    description: "Aplicativo para gerenciamento financeiro da casa, com entradas e saídas por morador, metas e gráficos.",
    image: jammmingProject, // mesma coisa, use sua imagem
    source_code_link: "https://github.com/josehtl07/controle-economias",
    demo_link: "https://seusite.com/controle-economias",
  },
];


const certificates = {
  image: [
    htmlCertificate,
    cssCertificate,
    jsCertificate,
    reactCertificate,
    webflowCertificate,
  ],
};

const memoji = {
  image: [memojiHello, memojiHand, memojiOk],
};

const skills = [
  {
    id: "html",
    title: "HTML",
    icon: htmlIcon,
    description: "Tenho experiência em HTML para estruturar páginas web de forma organizada.",
  },
  {
    id: "css",
    title: "CSS",
    icon: cssIcon,
    description: "Uso CSS para estilizar páginas web e deixar o design agradável.",
  },
  {
    id: "javascript",
    title: "JavaScript",
    icon: jsIcon,
    description: "Uso JavaScript para adicionar interatividade em páginas web.",
  },
  {
    id: "react",
    title: "React",
    icon: reactIcon,
    description: "Tenho conhecimento em React para criar componentes reutilizáveis e gerenciar estados simples.",
  },
  {
    id: "tailwind",
    title: "Tailwind CSS",
    icon: tailwindIcon,
    description: "Uso Tailwind CSS para estilização rápida e eficiente das páginas.",
  },
  {
    id: "git",
    title: "Git",
    icon: gitIcon,
    description: "Sei usar Git para versionamento de código e controle de alterações.",
  },
  {
    id: "github",
    title: "GitHub",
    icon: githubIcon,
    description: "Uso GitHub para hospedar meus projetos e colaborar no código.",
  },
];


const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

const N = 1;
const globeData = [...Array(N).keys()].map(() => ({
  lat: 48.0,
  lng: 11.0,
  size: 20,
  color: "red",
}));

export {
  media,
  introduction,
  journeys,
  projects,
  certificates,
  memoji,
  skills,
  markerSvg,
  globeData,
  icons,
};
