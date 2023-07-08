import techStackList from "./techStackList";
import {
  imageReference,
  anonymousBlogImages,
  inventoryApplicationImages,
  knightsTravailsImages,
  memoryCardImages,
  weatherAppImages,
  cursedDota2Images,
} from "./images";

export interface projectReference {
  projectName: string;
  githubName: string;
  href?: string;
  cardDescription: string;
  longDescription?: string;
  cardImage?: imageReference;
  detailImages?: Array<imageReference>;
  techStack: Array<string>;
}

export function isProjectReference(arg: any): arg is projectReference {
  return (
    arg &&
    arg.projectName &&
    typeof arg.projectName === "string" &&
    arg.githubName &&
    typeof arg.githubName === "string" &&
    arg.cardDescription &&
    typeof arg.cardDescription === "string" &&
    arg.techStack &&
    Array.isArray(arg.techStack)
  );
}

const projectList: projectReference[] = [
  {
    projectName: "Portfolio Website",
    githubName: "Personal-Portfolio",
    href: "/", //have to update
    cardDescription: "Literally the current webpage you are scrolling through",
    longDescription:
      "A simple portfolio website to showcase some of the projects I have done on my own. This is the first project where I try my hand at NextJS, Tailwind, Framer Motion and TypeScript. I enjoy creating clean and simple UI and animations, and tried to move away from the typical 'Bootstrap-style' menu UI common everywhere. I created React HOCs for pop-ups and scrolling animations. Every UI component (minus the SVGs) on this website was made from scratch with Tailwind.",
    techStack: [
      techStackList.typescript.id,
      techStackList.nextjs.id,
      techStackList.redux.id,
      techStackList.tailwind.id,
      techStackList.framermotion.id,
      techStackList.react.id,
      techStackList.nodejs.id,
      techStackList.railway.id,
    ].sort(),
  },
  {
    projectName: "Anonymous Blog",
    githubName: "anonymous-blog",
    href: "https://anonymous-blog-production-93e5.up.railway.app/",
    cardDescription:
      "A simple imitation of Reddit, with front-end UI and back-end API",
    longDescription:
      "The sole purpose of this project was to train myself in creating an API which I would use a front-end to fetch from. It was also a refresher for ReactJS, and a chance to try out Redux for the first time. Features include dark mode and OAuth via JWT and sessions in the context of a MERN stack. I used cURL and Postman when developing the API. Both the front and back-end are deployed on Railway.",
    cardImage: anonymousBlogImages.cardImage,
    detailImages: anonymousBlogImages.detailImages,
    techStack: [
      techStackList.bootstrap.id,
      techStackList.express.id,
      techStackList.mongodb.id,
      techStackList.react.id,
      techStackList.passportjs.id,
      techStackList.nodejs.id,
      techStackList.redux.id,
      techStackList.railway.id,
    ].sort(),
  },
  {
    projectName: "Inventory Application",
    githubName: "Inventory-Application",
    href: "https://inventory-application-production-a970.up.railway.app/",
    cardDescription: "A simple app for registering the statuses of inventory.",
    longDescription:
      "This was the first back-end focused project I attempted, using MongoDB, ExpressJS and NodeJS. It was also my first time using Bootstrap, and it's more of a bonus since I had to create a UI eventually. The default Bootstrap components were used. Through this project, I gained confidence in planning out model schemas, routes and the necessary controller methods, working with MVC architecture. Pug was used for the views. Railway was used for deployment.",
    cardImage: inventoryApplicationImages.cardImage,
    detailImages: inventoryApplicationImages.detailImages,
    techStack: [
      techStackList.express.id,
      techStackList.mongodb.id,
      techStackList.nodejs.id,
      techStackList.bootstrap.id,
      techStackList.railway.id,
    ].sort(),
  },
  {
    projectName: "Weather App",
    githubName: "Weather-App",
    href: "https://benjyongzh.github.io/Weather-App/",
    cardDescription: "Simple API fetching to publicly-available live data",
    longDescription:
      "Typically, the OpenWeather API was fetched for this project. Vanilla html, css and JavaScript was used for the entire project. I learned the importance of understanding how to work with asynchronous requests. This site was not designed with web-responsiveness in mind.",
    cardImage: weatherAppImages.cardImage,
    detailImages: weatherAppImages.detailImages,
    techStack: [
      techStackList.html.id,
      techStackList.css.id,
      techStackList.javascript.id,
    ].sort(),
  },
  {
    projectName: "Memory Card",
    githubName: "Memory-Card",
    href: "https://benjyongzh.github.io/Memory-Card/",
    cardDescription: "A game of remembering what you last clicked",
    longDescription:
      "Everytime you click a card, the position of the cards reshuffle. The player has to remember which cards he/she has clicked. Every new card clicked is a point earned. Clicking on an old card ends the game, but the highscore is remembered. The focus of this tiny game was to try out React for the first time, learning to create reusable components and understanding the component lifecycle. This site was not designed with web-responsiveness in mind.",
    cardImage: memoryCardImages.cardImage,
    detailImages: memoryCardImages.detailImages,
    techStack: [techStackList.react.id, techStackList.css.id].sort(),
  },
  {
    projectName: "Knights Travails",
    githubName: "Knights-Travails",
    href: "https://benjyongzh.github.io/Knights-Travails/",
    cardDescription: "Finding the shortest path for a Knight to reach his goal",
    longDescription:
      "Find out how many steps it takes for a knight piece to reach a particular board position. I learned to keep in mind of the algorithms used to get the application to do what I want, and the different datastructures to work with. In this case, the BFS algorithm was employed since we are dealing with shortest paths. This site was not designed with web-responsiveness in mind.",
    cardImage: knightsTravailsImages.cardImage,
    detailImages: knightsTravailsImages.detailImages,
    techStack: [
      techStackList.html.id,
      techStackList.css.id,
      techStackList.javascript.id,
    ].sort(),
  },

  {
    projectName: "Cursed Game Mod",
    githubName: "Cursed-Game-Dota2", //have to update
    cardDescription: "A DotA2 custom game of horror and deception",
    longDescription:
      "This ia a DotA 2 Mod. The game logic is written in Lua, while the UI was written in vanilla CSS and JavaScript. Some UI assets were custom-made. The premise of the game lies in having 1 villain among the players. No one knows who the villain is, except the villain himself. There are objectives to complete around the map which can be sabotaged by the villain. All players can choose a character to play as, and upgrade themselves along the way to be more capable of standing face to face against the villain Every character has strengths and weaknesses, so playing and communicating as a team is vital.",
    cardImage: cursedDota2Images.cardImage,
    detailImages: cursedDota2Images.detailImages,
    techStack: [
      techStackList.css.id,
      techStackList.javascript.id,
      techStackList.lua.id,
    ],
  },
  /*
  {
    projectName: "Cursed Game in Unity",
    githubName: "", //have to update
    cardDescription: "An attempt at recreating the Cursed Game in Unity3D",
    longDescription: "also untouched for years",
    techStack: [techStackList.unity.id, techStackList.csharp.id],
  },
  */
];

export default projectList;
