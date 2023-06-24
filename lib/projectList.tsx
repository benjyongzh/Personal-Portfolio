export interface projectReference {
  projectName: string;
  href?: string;
  githubLink: string;
  cardDescription: string;
  longDescription?: string;
  cardImage?: string;
  popupImage?: string;
  techStack?: tech[];
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

interface tech {
  name: string;
  icon: string;
}

const projectList: projectReference[] = [
  {
    projectName: "Anonymous Blog",
    href: "https://anonymous-blog-production-93e5.up.railway.app/",
    githubLink: "https://github.com/benjyongzh/anonymous-blog",
    cardDescription: "lmao anon blog description",
  },
  {
    projectName: "Inventory Application",
    href: "https://inventory-application-production-a970.up.railway.app/",
    githubLink: "https://github.com/benjyongzh/Inventory-Application",
    cardDescription: "inventory app thingy with drinks",
  },
];

export default projectList;
