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
import ExternalLinkIcon from "@/public/assets/icons/external-link.svg";
import CloseButtonIcon from "@/public/assets/icons/x.svg";

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
      className="flex-col items-center justify-center gap-5 popup-full-base"
      style={{ zIndex: 10 + (popupIndex + 1) * 10 }}
    >
      <motion.div
        layout
        className="popup-full-underlay"
        style={{ zIndex: 9 + (popupIndex + 1) * 10 }}
        onClick={() => close()}
      />

      <motion.div
        className="w-[90%] h-[80%] rounded-[36px] bg-popup"
        style={{ zIndex: 11 + (popupIndex + 1) * 10 }}
      >
        <motion.div
          layout
          className="flex flex-col items-start justify-start w-full h-full overflow-y-auto gap-7 p-7 sm:p-9 popup-gradient-topbottom-edges"
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

          <div className="flex items-center justify-between w-full gap-5 sm:gap-8 sm:justify-start">
            <Link
              // need to use github API to get github repo link
              href="#"
              rel="noopener noreferrer"
              target="_blank"
              className="flex items-center justify-start gap-2 group"
            >
              <span className="pageText pageText-bodytext group-hover:underline">
                Github Repo
              </span>
              <GithubIcon
                className="w-6 h-6 link-icon text-secondarydarkmode dark:text-primarylightmode group-hover:text-secondarydarkmode-light group-hover:dark:text-primarylightmode-light"
                alt="Github repo link"
              />
            </Link>
            {href ? (
              <Link
                href={href}
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center justify-start gap-2 group"
              >
                <span className="pageText pageText-bodytext group-hover:underline">
                  Project Site
                </span>
                <ExternalLinkIcon
                  className="w-5 h-5 link-icon text-secondarydarkmode dark:text-primarylightmode group-hover:text-secondarydarkmode-light group-hover:dark:text-primarylightmode-light"
                  alt="Project site link"
                />
              </Link>
            ) : null}
          </div>

          <p className="pageText pageText-bodytext">{longDescription}</p>
        </motion.div>
      </motion.div>

      <motion.button
        layout
        className="btn-circle-primary"
        type="button"
        onClick={() => close()}
        style={{ zIndex: 11 + (popupIndex + 1) * 10 }}
      >
        <CloseButtonIcon className="w-6 h-6" alt="close" />
      </motion.button>
    </motion.div>
  );
};

export default PopupWrapper(ProjectPopup);
