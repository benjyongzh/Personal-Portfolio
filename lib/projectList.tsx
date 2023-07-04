import techStackList from "./techStackList";

export interface projectReference {
  projectName: string;
  githubName: string;
  href?: string;
  cardDescription: string;
  longDescription?: string;
  cardImage?: string;
  detailImages?: Array<string>;
  techStack: Array<string>;
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
      techStackList.typescript.id,
      techStackList.nextjs.id,
      techStackList.framermotion.id,
      techStackList.react.id,
      techStackList.nodejs.id,
      techStackList.redux.id,
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
      techStackList.bootstrap.id,
      techStackList.express.id,
      techStackList.mongodb.id,
      techStackList.react.id,
      techStackList.passportjs.id,
      techStackList.nodejs.id,
      techStackList.redux.id,
    ],
  },
  {
    projectName: "Inventory Application",
    githubName: "Inventory-Application",
    href: "https://inventory-application-production-a970.up.railway.app/",
    cardDescription: "A simple app for registering the statuses of inventory.",
    longDescription: "another long description here",
    cardImage: "/assets/images/inventory-application-card-image.JPG",
    detailImages: [
      "/assets/images/inventory-application-image-1.JPG",
      "/assets/images/inventory-application-image-2.JPG",
      "/assets/images/inventory-application-image-3.JPG",
      "/assets/images/inventory-application-image-4.JPG",
      "/assets/images/inventory-application-image-5.JPG",
    ],
    techStack: [
      techStackList.bootstrap.id,
      techStackList.express.id,
      techStackList.mongodb.id,
      techStackList.nodejs.id,
    ],
  },
  {
    projectName: "Weather App",
    githubName: "Weather-App",
    href: "https://benjyongzh.github.io/Weather-App/",
    cardDescription: "Simple API fetching to publicly-available live data",
    longDescription: "guess whats the weather today lmao",
    cardImage: "/assets/images/weather-app-card-image.JPG",
    detailImages: [
      "/assets/images/weather-app-image-1.JPG",
      "/assets/images/weather-app-image-2.JPG",
      "/assets/images/weather-app-image-3.JPG",
    ],
    techStack: [
      techStackList.html.id,
      techStackList.css.id,
      techStackList.javascript.id,
    ],
  },
  {
    projectName: "Memory Card",
    githubName: "Memory-Card",
    href: "https://benjyongzh.github.io/Memory-Card/",
    cardDescription: "A game of remembering what you last clicked",
    longDescription: "for animal lovers for sure",
    cardImage: "/assets/images/memory-card-card-image.JPG",
    detailImages: [
      "/assets/images/memory-card-image-1.JPG",
      "/assets/images/memory-card-image-2.JPG",
      "/assets/images/memory-card-image-3.JPG",
    ],
    techStack: [techStackList.react.id, techStackList.css.id],
  },
  {
    projectName: "Knights Travails",
    githubName: "Knights-Travails",
    href: "https://benjyongzh.github.io/Knights-Travails/",
    cardDescription: "Finding the shortest path for a Knight to reach his goal",
    longDescription:
      "Find out how many steps it takes for a knight piece to reach a particular board position",
    cardImage: "/assets/images/knights-travails-card-image.JPG",
    detailImages: [
      "/assets/images/knights-travails-image-1.JPG",
      "/assets/images/knights-travails-image-2.JPG",
      "/assets/images/knights-travails-image-3.JPG",
      "/assets/images/knights-travails-image-4.JPG",
      "/assets/images/knights-travails-image-5.JPG",
    ],
    techStack: [
      techStackList.html.id,
      techStackList.css.id,
      techStackList.javascript.id,
    ],
  },
  {
    projectName: "Cursed Game",
    githubName: "", //have to update
    cardDescription: "A Dota2 custom game of horror and deception",
    longDescription: "untouched for years",
    techStack: [
      techStackList.css.id,
      techStackList.javascript.id,
      techStackList.lua.id,
    ],
  },
  {
    projectName: "Cursed Game in Unity",
    githubName: "", //have to update
    cardDescription: "An attempt at recreating the Cursed Game in Unity3D",
    longDescription: "also untouched for years",
    techStack: [techStackList.unity.id, techStackList.csharp.id],
  },
];

export default projectList;
