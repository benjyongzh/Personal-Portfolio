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
    arg.image &&
    typeof arg.image === "string" &&
    arg.name &&
    typeof arg.name === "string"
  );
}

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
