import { ReactElement } from "react";
import HtmlIcon from "@/public/assets/icons/tech/html.svg";
import CssIcon from "@/public/assets/icons/tech/css.svg";
import JavascriptIcon from "@/public/assets/icons/tech/javascript.svg";
import WebpackIcon from "@/public/assets/icons/tech/webpack.svg";
import ReactIcon from "@/public/assets/icons/tech/react.svg";
import NextjsIcon from "@/public/assets/icons/tech/nextjs.svg";
import MongodbIcon from "@/public/assets/icons/tech/mongodb.svg";
import ExpressIcon from "@/public/assets/icons/tech/express.svg";
import TailwindIcon from "@/public/assets/icons/tech/tailwind.svg";
import NpmIcon from "@/public/assets/icons/tech/npm.svg";
import BootstrapIcon from "@/public/assets/icons/tech/bootstrap.svg";
import CsharpIcon from "@/public/assets/icons/tech/csharp.svg";
import JestIcon from "@/public/assets/icons/tech/jest.svg";
import LuaIcon from "@/public/assets/icons/tech/lua.svg";
import NodejsIcon from "@/public/assets/icons/tech/nodejs.svg";
import ReduxIcon from "@/public/assets/icons/tech/redux.svg";
import TypescriptIcon from "@/public/assets/icons/tech/typescript.svg";
import UbuntuIcon from "@/public/assets/icons/tech/ubuntu.svg";
import UnityIcon from "@/public/assets/icons/tech/unity.svg";
import FramerMotionIcon from "@/public/assets/icons/tech/framer-motion.svg";
import PassportjsIcon from "@/public/assets/icons/tech/passportjs.svg";
import PhotoshopIcon from "@/public/assets/icons/tech/photoshop.svg";
import AftereffectsIcon from "@/public/assets/icons/tech/aftereffects.svg";
import PremiereProIcon from "@/public/assets/icons/tech/premierepro.svg";
import PythonIcon from "@/public/assets/icons/tech/python.svg";
import BashCliIcon from "@/public/assets/icons/tech/bashcli.svg";
import GitIcon from "@/public/assets/icons/tech/git.svg";
import RailwayIcon from "@/public/assets/icons/tech/railway.svg";

export interface tech {
  id: string;
  name: string;
  icon: ReactElement;
}

const techStackList = {
  html: {
    id: "html",
    name: "HTML",
    icon: <HtmlIcon />,
  },
  css: {
    id: "css",
    name: "CSS",
    icon: <CssIcon />,
  },
  javascript: {
    id: "javascript",
    name: "JavaScript",
    icon: <JavascriptIcon />,
  },
  webpack: {
    id: "webpack",
    name: "Webpack",
    icon: <WebpackIcon />,
  },
  react: {
    id: "react",
    name: "React",
    icon: <ReactIcon />,
  },
  nextjs: {
    id: "nextjs",
    name: "Nextjs",
    icon: <NextjsIcon />,
  },
  mongodb: {
    id: "mongodb",
    name: "MongoDB",
    icon: <MongodbIcon />,
  },
  express: {
    id: "express",
    name: "expressjs",
    icon: <ExpressIcon />,
  },
  tailwind: {
    id: "tailwind",
    name: "TailwindCSS",
    icon: <TailwindIcon />,
  },
  npm: {
    id: "npm",
    name: "npm",
    icon: <NpmIcon />,
  },
  bootstrap: {
    id: "bootstrap",
    name: "Bootstrap",
    icon: <BootstrapIcon />,
  },
  csharp: {
    id: "csharp",
    name: "C#",
    icon: <CsharpIcon />,
  },
  jest: {
    id: "jest",
    name: "Jest",
    icon: <JestIcon />,
  },
  lua: {
    id: "lua",
    name: "Lua",
    icon: <LuaIcon />,
  },
  nodejs: {
    id: "nodejs",
    name: "Nodejs",
    icon: <NodejsIcon />,
  },
  redux: {
    id: "redux",
    name: "Redux",
    icon: <ReduxIcon />,
  },
  typescript: {
    id: "typescript",
    name: "TypeScript",
    icon: <TypescriptIcon />,
  },
  ubuntu: {
    id: "ubuntu",
    name: "Ubuntu",
    icon: <UbuntuIcon />,
  },
  unity: {
    id: "unity",
    name: "Unity",
    icon: <UnityIcon />,
  },
  framermotion: {
    id: "framermotion",
    name: "Framer Motion",
    icon: <FramerMotionIcon />,
  },
  passportjs: {
    id: "passportjs",
    name: "Passportjs",
    icon: <PassportjsIcon />,
  },
  photoshop: {
    id: "photoshop",
    name: "Adobe Photoshop",
    icon: <PhotoshopIcon />,
  },
  aftereffects: {
    id: "aftereffects",
    name: "Adobe AfterEffects",
    icon: <AftereffectsIcon />,
  },
  premierepro: {
    id: "premierepro",
    name: "Adobe PremierePro",
    icon: <PremiereProIcon />,
  },
  python: {
    id: "python",
    name: "Python",
    icon: <PythonIcon />,
  },
  bashcli: {
    id: "bashcli",
    name: "Bash CLI",
    icon: <BashCliIcon />,
  },
  git: {
    id: "git",
    name: "Git Version Control",
    icon: <GitIcon />,
  },
  railway: {
    id: "railway",
    name: "Railway PaaS",
    icon: <RailwayIcon />,
  },
};

export default techStackList;
