// "use client";

import ImageCarousel from "@/components/ImageCarousel";
import { projectReference } from "@/lib/projectList";
import { motion, Variants } from "framer-motion";
import PopupWrapper from "./PopupWrapper";
import { useAppSelector, useAppDispatch } from "@/hooks/reduxHooks";
import { removePopup } from "./popupSlice";
import TechIcon from "@/components/TechIcon";
import techStackList from "@/lib/techStackList";
import Link from "next/link";

import GithubIcon from "@/public/assets/icons/github-original.svg";

const ProjectPopup = (props: {
  project: projectReference;
  popupId: string;
  variants: Variants;
  initial: string;
  animate: string;
  exit: string;
}) => {
  const dispatch = useAppDispatch();
  const {
    projectName,
    href,
    githubName,
    cardDescription,
    longDescription,
    cardImage,
    detailImages,
    techStack,
  } = props.project;
  const currentPopups = useAppSelector((state) => state.popup.popups);
  const githubAPI = `https://api.github.com/repos/benjyongzh/${githubName}`; ///relevant methods: updated_At

  const close = () => {
    dispatch(
      removePopup({
        id: props.popupId,
        type: { type: "projectPopup", info: props.project },
      })
    );
  };

  const popupIndex = currentPopups
    .map((popup) => popup.id)
    .indexOf(props.popupId);

  return (
    <motion.div
      layout
      initial={props.initial}
      animate={props.animate}
      exit={[props.initial, props.exit]}
      variants={props.variants}
      data-popupid={props.popupId!}
      className="flex flex-col items-start justify-start w-[90%] h-[80%] rounded-[36px] gap-7 m-auto left-0 right-0 top-0 bottom-0 popup"
      style={{ zIndex: 10 + (popupIndex + 1) * 10 }}
    >
      <motion.header
        layout="position"
        transition={{ type: "spring", duration: 0.4 }}
        className={`pageText pageText-pageTitle font-bold`}
      >
        {projectName}
      </motion.header>
      <motion.div className="flex flex-wrap items-center justify-center w-full gap-4 pb-5 border-b-2 sm:justify-start border-secondarydarkmode dark:border-accentdarkmode">
        {techStack.map((tech) => (
          <TechIcon
            tech={techStackList[tech as keyof typeof techStackList]}
            size="sm"
            key={tech}
          />
        ))}
      </motion.div>
      {detailImages ? <ImageCarousel images={detailImages} /> : null}

      <div className="flex items-center justify-start w-full gap-5">
        <Link href="#" rel="noopener noreferrer" target="_blank">
          {/* need to use github API to get github repo link */}
          <GithubIcon className="w-6 h-6 link-icon" alt="Github project link" />
        </Link>
        {href ? (
          <Link href={href} rel="noopener noreferrer" target="_blank">
            project site link here
          </Link>
        ) : null}
      </div>

      <p className="pageText pageText-bodytext">{longDescription}</p>
      <button
        className="btn-popup-secondary-blue justify-self-end"
        type="button"
        onClick={() => close()}
      >
        Close
      </button>
    </motion.div>
  );
};

export default PopupWrapper(ProjectPopup);
