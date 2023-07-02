"use client";
import { motion } from "framer-motion";
import ScrollAnimationWrapper, {
  IScrollAnimations,
  dampSpring,
} from "./ScrollAnimationWrapper";
import { useAppSelector } from "@/hooks/reduxHooks";
import { getRandomArbitrary } from "@/utils/numbers";

const animationPropsXS: IScrollAnimations = {
  yIn: 100,
  yOut: -100,
  animType: "focusCenterxs",
};

const ProjectCard = (props: {
  projectName?: string;
  click: Function;
  index: number;
}) => {
  const currentBreakpoint: string = useAppSelector(
    (state) => state.display.currentBreakpoint
  );

  const getAnimPropsFromIndex = (index: number) => {
    const randomStartDistance = getRandomArbitrary(0, 200);
    const randomEndDistance = getRandomArbitrary(0, 200);
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

  return (
    <ScrollAnimationWrapper
      animationProps={
        currentBreakpoint === "xs"
          ? animationPropsXS
          : getAnimPropsFromIndex(props.index)
      }
    >
      <motion.button
        className="flex flex-col items-start justify-between bg-opacity-50 backdrop-blur-sm bg-secondarylightmode dark:bg-secondarydarkmode-light rounded-[24px] max-w-lg h-52 sm:h-80 min-w-[200px] gap-3 p-5 shadow-xl hover:shadow-2xl hover:shadow-slate-400"
        type="button"
        transition={{ type: "spring", duration: 0.4 }}
        layout
        whileHover={{ scale: 1.05 }}
        onClick={() => {
          props.click();
        }}
      >
        <header
          className={`text-accentlightmode dark:text-accentdarkmode font-bold text-lg`}
        >
          {props.projectName}
        </header>
      </motion.button>
    </ScrollAnimationWrapper>
  );
};

export default ProjectCard;
