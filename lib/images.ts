import { isArrayOfInterface } from "@/utils/objects";

export interface imageReference {
  src: string;
  name: string;
  description?: string;
}

export interface slideshowInfo {
  currentIndex: number;
  images: imageReference[];
}

export function isSlideshowInfo(arg: any): arg is slideshowInfo {
  return (
    arg &&
    typeof arg.currentIndex === "number" &&
    arg.images &&
    Array.isArray(arg.images) &&
    isArrayOfInterface(arg.images, isimageReference)
  );
}

export function isimageReference(arg: any): arg is imageReference {
  return (
    arg &&
    arg.src &&
    typeof arg.src === "string" &&
    arg.name &&
    typeof arg.name === "string"
  );
}

const anonymousBlogCardImage: imageReference = {
  src: "/assets/images/anon-blog/image-5.JPG",
  name: "Anonymous Blog Project",
};

const anonymousBlogDetailImages: imageReference[] = [
  {
    src: "/assets/images/anon-blog/image-1.JPG",
    name: "Anonymous Blog Homepage",
    description: "Homepage displaying all posts made by anyone.",
  },
  {
    src: "/assets/images/anon-blog/image-2.JPG",
    name: "Anonymous Blog Post Detail",
    description: "Look at each post individually in detail.",
  },
  {
    src: "/assets/images/anon-blog/image-3.JPG",
    name: "Anonymous Blog User Detail",
    description: "Look at users individually to see what posts they have made.",
  },
  {
    src: "/assets/images/anon-blog/image-4.JPG",
    name: "Anonymous Blog Comments and replies",
    description:
      "Users can comment on existing posts, and reply to any comments without censorship.",
  },
  {
    src: "/assets/images/anon-blog/image-5.JPG",
    name: "Anonymous Blog Dark Mode",
    description: "Responsive web design with dark theme.",
  },
  {
    src: "/assets/images/anon-blog/image-6.JPG",
    name: "Anonymous Blog Auth",
    description:
      "Server-side validation for signing up and logging in. OAuth by PassportJS using JWT tokens.",
  },
  {
    src: "/assets/images/anon-blog/image-7.JPG",
    name: "Anonymous Blog members names",
    description:
      "Only admins and premium members can see the 'real' names of users.",
  },
];

export const anonymousBlogImages = {
  cardImage: anonymousBlogCardImage,
  detailImages: anonymousBlogDetailImages,
};

const inventoryApplicationCardImage: imageReference = {
  src: "/assets/images/inventory-application/card-image.JPG",
  name: "Inventory Application Project",
};

const inventoryApplicationDetailImages: imageReference[] = [
  {
    src: "/assets/images/inventory-application/image-1.JPG",
    name: "Inventory Application Homepage",
    description: "Homepage of application",
  },
  {
    src: "/assets/images/inventory-application/image-2.JPG",
    name: "Inventory Application Brands Page",
    description:
      "Brands page, with list of brands and option to generate more into the database.",
  },
  {
    src: "/assets/images/inventory-application/image-3.JPG",
    name: "Inventory Application Brand Creation page",
    description:
      "Log more brands into the database by filling in details about it.",
  },
  {
    src: "/assets/images/inventory-application/image-4.JPG",
    name: "Inventory Application Drink Detail",
    description:
      "Products must include instances, each with properties on its sale status.",
  },
  {
    src: "/assets/images/inventory-application/image-5.JPG",
    name: "Inventory Application Brand Detail",
    description:
      "You can look at each brands' registered product and their sale numbers.",
  },
];

export const inventoryApplicationImages = {
  cardImage: inventoryApplicationCardImage,
  detailImages: inventoryApplicationDetailImages,
};

const knightsTravailsCardImage: imageReference = {
  src: "/assets/images/knights-travails/card-image.JPG",
  name: "Knights Travails Project",
};

const knightsTravailsDetailImages: imageReference[] = [
  {
    src: "/assets/images/knights-travails/image-1.JPG",
    name: "Knights Travails starting view",
    description: "You are given a standard chessboard",
  },
  {
    src: "/assets/images/knights-travails/image-2.JPG",
    name: "Knights Travails click 1",
    description:
      "Click on any board position to choose where your knight wants to start from.",
  },
  {
    src: "/assets/images/knights-travails/image-3.JPG",
    name: "Knights Travails click 2",
    description:
      "Click another position to choose where the knight is suppose to reach.",
  },
  {
    src: "/assets/images/knights-travails/image-4.JPG",
    name: "Knights Travails sample",
    description: "The minimum steps required are shown.",
  },
  {
    src: "/assets/images/knights-travails/image-5.JPG",
    name: "Knights Travails sample",
    description: "Click again to determine a new journey for the knight.",
  },
];

export const knightsTravailsImages = {
  cardImage: knightsTravailsCardImage,
  detailImages: knightsTravailsDetailImages,
};

const memoryCardCardImage: imageReference = {
  src: "/assets/images/memory-card/card-image.JPG",
  name: "Memory Card Project",
};

const memoryCardDetailImages: imageReference[] = [
  {
    src: "/assets/images/memory-card/image-1.JPG",
    name: "Memory Card starting view",
    description: "There are cards of animals to choose from.",
  },
  {
    src: "/assets/images/memory-card/image-2.JPG",
    name: "Memory Card click 1",
    description: "Click on cards which you have not clicked.",
  },
  {
    src: "/assets/images/memory-card/image-3.JPG",
    name: "Memory Card click 2",
    description: "You highscore is recorded.",
  },
];

export const memoryCardImages = {
  cardImage: memoryCardCardImage,
  detailImages: memoryCardDetailImages,
};

const weatherAppCardImage: imageReference = {
  src: "/assets/images/weather-app/card-image.JPG",
  name: "Weather App Project",
};

const weatherAppDetailImages: imageReference[] = [
  {
    src: "/assets/images/weather-app/image-1.JPG",
    name: "Weather App starting view",
    description: "Search for your desired city.",
  },
  {
    src: "/assets/images/weather-app/image-2.JPG",
    name: "Weather App click 1",
    description: "Information shown is publicly available.",
  },
  {
    src: "/assets/images/weather-app/image-3.JPG",
    name: "Weather App click 2",
    description: "Powered by OpenWeather API.",
  },
];

export const weatherAppImages = {
  cardImage: weatherAppCardImage,
  detailImages: weatherAppDetailImages,
};

const cursedDota2CardImage: imageReference = {
  src: "/assets/images/cursed-dota2/card-image.jpg",
  name: "Cursed DotA 2 custom game",
};

const cursedDota2DetailImages: imageReference[] = [
  {
    src: "/assets/images/cursed-dota2/assassin_original.jpg",
    name: "assassin class",
    description: "A range of different playable characters",
  },
  {
    src: "/assets/images/cursed-dota2/barbarian_original.jpg",
    name: "barbarian class",
    description: "A range of different playable characters",
  },
  {
    src: "/assets/images/cursed-dota2/illusionist_original.jpg",
    name: "illusionist class",
    description: "A range of different playable characters",
  },
  {
    src: "/assets/images/cursed-dota2/samurai_original.jpg",
    name: "samurai class",
    description: "A range of different playable characters",
  },
  {
    src: "/assets/images/cursed-dota2/scout_original.jpg",
    name: "scout class",
    description: "A range of different playable characters",
  },
  {
    src: "/assets/images/cursed-dota2/vampire_original.jpg",
    name: "vampire villain",
    description: "Everyone has a chance to play as the villain",
  },
  {
    src: "/assets/images/cursed-dota2/werewolf.jpg",
    name: "werewolf villain",
    description: "It could be anyone in the game, including yourself",
  },
  {
    src: "/assets/images/cursed-dota2/zombie_original.PNG",
    name: "zombie villain",
    description: "No one knows who the villain is",
  },
  {
    src: "/assets/images/cursed-dota2/class_selection.jpg",
    name: "class selection",
    description: "A range of different playable characters",
  },
  {
    src: "/assets/images/cursed-dota2/level_up.jpg",
    name: "level up characters",
    description:
      "Each character has its strengths and weaknesses, capable of upgrading in-game",
  },
  {
    src: "/assets/images/cursed-dota2/objectives.jpg",
    name: "objectives",
    description: "There are objectives across the map to complete together",
  },
  {
    src: "/assets/images/cursed-dota2/escape.jpg",
    name: "escape",
    description:
      "Complete enough objectives to stand a chance to escape and win",
  },
  {
    src: "/assets/images/cursed-dota2/zombie_hoarding.jpg",
    name: "evil",
    description:
      "The villain has to prevent the objectives from getting completed, or take everyone else down",
  },
];

export const cursedDota2Images = {
  cardImage: cursedDota2CardImage,
  detailImages: cursedDota2DetailImages,
};

const cursedUnityCardImage: imageReference = {
  src: "/assets/images/cursed-unity/card-image-cropped.jpg",
  name: "Cursed Game Unity Project",
};

const cursedUnityDetailImages: imageReference[] = [
  {
    src: "/assets/images/cursed-unity/image-1.jpg",
    name: "Basic character movements",
    description: "Created basic character movement.",
  },
  {
    src: "/assets/images/cursed-unity/image-2.jpg",
    name: "Basic animations",
    description: "Added basic movement animations to character.",
  },
  {
    src: "/assets/images/cursed-unity/image-3.jpg",
    name: "Cameras",
    description: "Created different cameras for player.",
  },
  {
    src: "/assets/images/cursed-unity/image-4.jpg",
    name: "Add attack animations",
    description: "Added attack animations.",
  },
  {
    src: "/assets/images/cursed-unity/image-5.jpg",
    name: "Aim locked animations",
    description:
      "Altered bones to align animations with player's aim direction.",
  },
  {
    src: "/assets/images/cursed-unity/image-6.jpg",
    name: "Simple waypoint behaviour",
    description: "Create simple AI behaviours.",
  },
  {
    src: "/assets/images/cursed-unity/image-7.jpg",
    name: "Simple waypoint behaviour",
    description: "Further streamlining the use of behaviour tree.",
  },

  {
    src: "/assets/images/cursed-unity/image-8.jpg",
    name: "Raw sound detection",
    description: "Created detection system based on in-game sounds.",
  },
  {
    src: "/assets/images/cursed-unity/image-9.jpg",
    name: "Smoothen detection atrophy.",
    description:
      "Tweaked sound detection to rely on dissipation instead of raw audio data.",
  },
  {
    src: "/assets/images/cursed-unity/image-10.jpg",
    name: "Add audio detection to AI",
    description:
      "Added audio and visual detection to AI behaviour, with UI compass for player.",
  },
  {
    src: "/assets/images/cursed-unity/image-11.jpg",
    name: "Add healthbar",
    description: "Added more UI elements.",
  },
  {
    src: "/assets/images/cursed-unity/image-12.jpg",
    name: "Online testing of interaction",
    description:
      "Use Mirror networking solution to create online server to test player interactions.",
  },
  {
    src: "/assets/images/cursed-unity/image-13.jpg",
    name: "Modular ability objects",
    description:
      "Created class of abilities for modularity and ease of tweaking for balance.",
  },
  {
    src: "/assets/images/cursed-unity/image-14.jpg",
    name: "Modular ability objects",
    description:
      "Modularity of ability objects means different conditions and effects can be created.",
  },
];

export const cursedUnityImages = {
  cardImage: cursedUnityCardImage,
  detailImages: cursedUnityDetailImages,
};
