import * as tech from "./techStackList";

export interface projectReference {
  projectName: string;
  githubName: string;
  href?: string;
  cardDescription: string;
  longDescription?: string;
  cardImage?: string;
  popupImage?: string;
  techStack?: tech.techStack;
}

export function isProjectReference(arg: any): arg is projectReference {
  return (
    arg &&
    arg.projectName &&
    typeof arg.projectName === "string" &&
    arg.githubLink &&
    typeof arg.githubLink === "string" &&
    arg.cardDescription &&
    typeof arg.cardDescription === "string"
  );
}

const projectList: projectReference[] = [
  {
    projectName: "Portfolio",
    githubName: "Personal-Portfolio",
    href: "/", //have to update
    cardDescription: "It's my portfolio",
    longDescription: "In progress",
    techStack: [
      tech.typescript,
      tech.nextjs,
      tech.framermotion,
      tech.react,
      tech.nodejs,
      tech.redux,
    ],
  },
  {
    projectName: "Anonymous Blog",
    githubName: "anonymous-blog",
    href: "https://anonymous-blog-production-93e5.up.railway.app/",
    cardDescription: "lmao anon blog description",
    longDescription: "some long description here",
    techStack: [
      tech.bootstrap,
      tech.express,
      tech.mongodb,
      tech.react,
      tech.passportjs,
      tech.nodejs,
      tech.redux,
    ],
  },
  {
    projectName: "Inventory Application",
    githubName: "Inventory-Application",
    href: "https://inventory-application-production-a970.up.railway.app/",
    cardDescription: "inventory app thingy with drinks",
    longDescription: "another long description here",
    techStack: [tech.bootstrap, tech.express, tech.mongodb, tech.nodejs],
  },
  {
    projectName: "Weather App",
    githubName: "Weather-App",
    href: "https://benjyongzh.github.io/Weather-App/",
    cardDescription: "simple weather app",
    longDescription: "guess whats the weather today lmao",
    techStack: [tech.html, tech.css, tech.javascript],
  },
  {
    projectName: "Memory Card",
    githubName: "Memory-Card",
    href: "https://benjyongzh.github.io/Memory-Card/",
    cardDescription: "Test your memory",
    longDescription: "for animal lovers for sure",
    techStack: [tech.react, tech.css],
  },
  {
    projectName: "Tic Tac Toe",
    githubName: "Tic-Tac-Toe",
    href: "https://benjyongzh.github.io/Tic-Tac-Toe/",
    cardDescription: "Its tic tac toe",
    longDescription: "What more do you want",
    techStack: [tech.html, tech.css, tech.javascript],
  },
  {
    projectName: "Library App",
    githubName: "Library-App",
    href: "https://benjyongzh.github.io/Library-App/",
    cardDescription: "Its recording your books",
    longDescription: "Even though we all know you don't read",
    techStack: [tech.html, tech.css, tech.javascript],
  },
  {
    projectName: "Cursed Game",
    githubName: "", //have to update
    cardDescription: "dota 2 custom game",
    longDescription: "untouched for years",
    techStack: [tech.css, tech.javascript, tech.lua],
  },
  {
    projectName: "Cursed Game Unity",
    githubName: "", //have to update
    cardDescription: "Attempt at starting from scratch",
    longDescription: "also untouched for years",
    techStack: [tech.unity, tech.csharp],
  },
];

export default projectList;
