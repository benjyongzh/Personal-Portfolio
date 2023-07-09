import techStackList, { tech } from "./techStackList";

interface resumeText {
  pageTitle: string;
  skills: {
    languages: Array<tech>;
    frontend: Array<tech>;
    backend: Array<tech>;
    fullstack: Array<tech>;
    tools: Array<tech>;
    graphics: Array<tech>;
  };
  professions: Array<profession>;
  educations: Array<education>;
}

interface profession {
  title: string;
  company: string;
  description: Array<string>;
  yearStarted: number;
  yearEnded: string | number;
}

interface education {
  title: string;
  institution: string;
  country: string;
  description: Array<string>;
  yearStarted: number;
  yearEnded: string | number;
}

const text: resumeText = {
  pageTitle: "RESUME",
  skills: {
    languages: [
      techStackList.html,
      techStackList.css,
      techStackList.javascript,
      techStackList.typescript,
      techStackList.lua,
      techStackList.python,
      techStackList.csharp,
    ],
    frontend: [
      techStackList.react,
      techStackList.redux,
      techStackList.tailwind,
      techStackList.bootstrap,
      techStackList.framermotion,
      techStackList.webpack,
    ],
    backend: [
      techStackList.mongodb,
      techStackList.express,
      techStackList.nodejs,
      techStackList.passportjs,
    ],
    fullstack: [techStackList.nextjs, techStackList.railway],
    tools: [
      techStackList.npm,
      techStackList.bashcli,
      techStackList.ubuntu,
      techStackList.jest,
      techStackList.git,
      techStackList.unity,
    ],
    graphics: [
      techStackList.photoshop,
      techStackList.aftereffects,
      techStackList.premierepro,
    ],
  },
  professions: [
    {
      title: "Design Manager",
      company: "seele",
      description: [
        "Technical project management role.",
        "Management and coordination of project requirements, timelines and deliverables between clients and subcontractors.",
        "Problem solving in engineering for technical feasibility and commercial viability.",
      ],
      yearStarted: 2019,
      yearEnded: 2023,
    },
  ],
  educations: [
    {
      title: "MSc Architecture, specializing in Building Technology",
      institution: "Delft University of Technology",
      country: "Netherlands",
      description: [
        "Established a parametric workflow for a high-rise building project to facilitate efficient communication of design intent and structural necessities between team members.",
        "Created Python and C# scripts for optimization of structure, material use, construction feasibility and environmental impact of building projects.",
      ],
      yearStarted: 2017,
      yearEnded: 2019,
    },
    {
      title: "BSc Architecture and Sustainable Design",
      institution: "Singapore University of Technology and Design",
      country: "Singapore",
      description: [
        "Use Python and C# for generative form-finding methods to optimize building design for various objectives such as material use and structural efficiency.",
      ],
      yearStarted: 2017,
      yearEnded: 2019,
    },
  ],
};

export default text;
