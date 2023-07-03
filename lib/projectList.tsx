import * as tech from "./techStackList";

export interface projectReference {
  projectName: string;
  githubName: string;
  href?: string;
  cardDescription: string;
  longDescription?: string;
  cardImage?: string;
  popupImage?: string;
  techStack: tech.techStack;
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
    cardDescription: "The current page you are scrolling through",
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
    cardDescription:
      "A simple imitation of Reddit, with front-end UI and back-end API",
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
    cardDescription: "A simple app for registering the statuses of inventory.",
    longDescription: "another long description here",
    techStack: [tech.bootstrap, tech.express, tech.mongodb, tech.nodejs],
  },
  {
    projectName: "Weather App",
    githubName: "Weather-App",
    href: "https://benjyongzh.github.io/Weather-App/",
    cardDescription: "Simple API fetching to publicly-available live data",
    longDescription: "guess whats the weather today lmao",
    techStack: [tech.html, tech.css, tech.javascript],
  },
  {
    projectName: "Memory Card",
    githubName: "Memory-Card",
    href: "https://benjyongzh.github.io/Memory-Card/",
    cardDescription: "A game of remembering what you last clicked",
    longDescription: "for animal lovers for sure",
    techStack: [tech.react, tech.css],
  },
  {
    projectName: "Knights Travails",
    githubName: "Knights-Travails",
    href: "https://benjyongzh.github.io/Knights-Travails/",
    cardDescription: "Finding the shortest path for a Knight to reach his goal",
    longDescription:
      "Find out how many steps it takes for a knight piece to reach a particular board position",
    techStack: [tech.html, tech.css, tech.javascript],
  },
  {
    projectName: "Cursed Game",
    githubName: "", //have to update
    cardDescription: "A Dota2 custom game of horror and deception",
    longDescription: "untouched for years",
    techStack: [tech.css, tech.javascript, tech.lua],
  },
  {
    projectName: "Cursed Game in Unity",
    githubName: "", //have to update
    cardDescription: "An attempt at recreating the Cursed Game in Unity3D",
    longDescription: "also untouched for years",
    techStack: [tech.unity, tech.csharp],
  },
];

export default projectList;
