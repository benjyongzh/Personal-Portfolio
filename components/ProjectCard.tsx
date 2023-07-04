// "use client";
import { motion } from "framer-motion";
import ScrollAnimationWrapper, {
  IScrollAnimations,
  dampSpring,
} from "./ScrollAnimationWrapper";
import { useAppSelector } from "@/hooks/reduxHooks";
import { getRandomArbitrary } from "@/utils/numbers";
import { projectCardVariant } from "@/lib/framerVariants";
import { projectReference } from "@/lib/projectList";
import TechIcon from "./TechIcon";
import techStackList from "@/lib/techStackList";
import Image from "next/image";

const ProjectCard = (props: {
  project: projectReference;
  click: Function;
  index: number;
}) => {
  const currentBreakpoint: string = useAppSelector(
    (state) => state.display.currentBreakpoint
  );
  const { project } = props;

  const getAnimPropsFromIndex = () => {
    const randomStartDistance = getRandomArbitrary(0, 150);
    const randomEndDistance = randomStartDistance + getRandomArbitrary(-75, 75);
    const randomXDistance = getRandomArbitrary(-30, 30);
    const newProps: IScrollAnimations = {
      xIn: randomXDistance,
      xOut: randomXDistance,
      yIn: randomStartDistance,
      yOut: -randomEndDistance,
      animType: "fromStartToEnd",
      spring: dampSpring,
    };

    return newProps;
  };

  const cardDetails = (
    <div className="flex flex-col items-start justify-between gap-3">
      <header
        className={`text-accentlightmode dark:text-accentdarkmode font-bold text-lg`}
      >
        {project.projectName}
      </header>
      {currentBreakpoint !== "xs" && project.cardImage ? (
        <Image
          src={project.cardImage}
          width={500}
          height={500}
          alt={project.projectName}
        />
      ) : null}

      <p className="pageText text-start">{project.cardDescription}</p>
      <div className="flex flex-wrap items-center justify-center w-full gap-2 pt-4 border-t-2 justify-self-end border-secondarydarkmode dark:border-accentdarkmode">
        {project.techStack.map((tech, i) => (
          <TechIcon
            tech={techStackList[tech as keyof typeof techStackList]}
            size="xs"
            key={i}
            popup={false}
          />
        ))}
      </div>
    </div>
  );

  return currentBreakpoint === "xs" ? (
    <motion.button
      className="flex flex-col items-stretch justify-between bg-opacity-80 backdrop-blur bg-secondarylightmode/50 dark:bg-secondarylightmode/10 rounded-[24px] max-w-lg min-w-[200px] gap-3 p-5 shadow-xl hover:z-[2] hover:shadow-2xl hover:shadow-slate-500 dark:hover:shadow-slate-900"
      type="button"
      initial="hidden"
      whileInView="visible"
      // viewport={{ once: true }}
      variants={projectCardVariant}
      whileHover={{ scale: 1.05 }}
      onClick={() => {
        props.click();
      }}
    >
      {cardDetails}
    </motion.button>
  ) : (
    <ScrollAnimationWrapper animationProps={getAnimPropsFromIndex()}>
      <motion.button
        className="flex flex-col items-stretch justify-between bg-opacity-80 backdrop-blur bg-secondarylightmode/50 dark:bg-secondarylightmode/10 rounded-[24px] max-w-lg min-w-[200px] gap-3 p-5 shadow-xl hover:z-[2] hover:shadow-2xl hover:shadow-slate-500 dark:hover:shadow-slate-900"
        type="button"
        transition={{ type: "spring", duration: 0.4 }}
        layout
        whileHover={{ scale: 1.05 }}
        onClick={() => {
          props.click();
        }}
      >
        {cardDetails}
      </motion.button>
    </ScrollAnimationWrapper>
  );
};

export default ProjectCard;
