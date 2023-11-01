import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  freaky,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "DApp Developer",
    icon: mobile,
  },
  {
    title: "Graphic Designer",
    icon: backend,
  },
  {
    title: "Freelancer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Freelance Graphic Designer",
    company_name: "Freaky Graphics",
    icon: freaky,
    iconBg: "#383E56",
    date: "May 2020 - Present",
    points: [
      "Translated client visions into captivating visual designs, enhancing brand identity and storytelling.",
      "Produced visually stunning graphics for various projects, spanning branding and social media designs.",
      "Specialized eSports branding and Stream Graphics",
      "Participating in design reviews and providing constructive feedback to other designers.",
    ],
  },
  {
    title: "Lead Graphic Designer",
    company_name: "Sunday Esports",
    icon: freaky,
    iconBg: "#E6DEDD",
    date: "June 2020 - July 2020",
    points: [
      "Designing eSports brand Assets",
      "Collaborating with cross-functional teams including designers, team managers, and other esports atheletes to create high-quality designs.",
      "Implementing modern design and ensuring quality.",
      
    ],
  },
  {
    title: "Lead Graphic Designer",
    company_name: "Hexagon Esports",
    icon: freaky,
    iconBg: "#383E56",
    date: "Sep 2021 - Oct 2021",
    points: [
      "Designed the Hexagon Esports logo, which is now instantly recognizable by fans and gamers alike.",
      "Created a series of social media graphics that helped to increase engagement on Hexagon Esports' channels by 20%.",
      "Collaborated with other departments to create engaging and informative content, such as blog posts, infographics, and video thumbnails.",
    ],
  },
];

const projects = [
  {
    name: "NFT-Marketplace",
    description:
      "The NFT Claiming Platform is a web3 Dapp. Its main goal is to let users connect their wallets and claim unique NFTs from an Ethereum smart contract.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "thirdweb",
        color: "green-text-gradient",
      },
      {
        name: "chakra-ui",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "De-Lance",
    description:
      "DeLance: Decentralized freelance marketplace connecting clients and freelancers securely on the blockchain, ensuring trust, and efficient transactions.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "chakra-ui",
        color: "green-text-gradient",
      },
      {
        name: "solidity",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Accessimate",
    description:
      "Accessimate: Empowering inclusivity through innovative navigation solutions for individuals with disabilities, enhancing independence and safety in everyday life.",
    tags: [
      {
        name: "React-Native",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDb",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
