"use client";

import { useRef } from "react";
//animations
import { useScroll, useTransform, useSpring } from "framer-motion";

export interface ISpring {
  damping?: number; //25
  stiffness?: number; //120
  restDelta?: number; //if the delta per tick is less than this, calculations stop (less taxing for processing. too high = movement stops too early)
}

const defaultSpring: ISpring = {
  damping: 100,
  stiffness: 10000,
  restDelta: 1,
};

//exported in case it is used by another component
export const dampSpring: ISpring = {
  damping: 25,
  stiffness: 125,
};

export interface IScrollAnimations {
  opacityMin?: number;
  opacityMax?: number;
  xIn?: number;
  xOut?: number;
  yIn?: number;
  yOut?: number;
  scaleMin?: number;
  spring?: ISpring;
  animType?: string;
}

interface animationType {
  [key: string]: number[];
}

const animTypes: animationType = {
  focusCenter: [0, 0.2, 0.8, 1],
  focusCenterlg: [0, 0.35, 0.65, 1],
  linear: [0, 0.5, 0.5, 1],
};

const defaultScrollAnimations: IScrollAnimations = {
  opacityMin: 1,
  opacityMax: 1,
  xIn: 0,
  xOut: 0,
  yIn: 0,
  yOut: 0,
  scaleMin: 1,
  spring: defaultSpring,
  animType: Object.keys(animTypes)[0], //focusCenter
};

export default function ScrollAnimationWrapper({
  children,
  animationProps = defaultScrollAnimations,
}: {
  children: React.ReactElement;
  animationProps?: IScrollAnimations;
}) {
  const spring: ISpring = { ...defaultSpring, ...animationProps.spring };
  const {
    opacityMin,
    opacityMax,
    xIn,
    xOut,
    yIn,
    yOut,
    scaleMin,
    animType,
  }: IScrollAnimations = {
    ...defaultScrollAnimations,
    ...animationProps,
  };

  let animPattern: Array<number>;
  if (Object.keys(animTypes).includes(animType!)) {
    animPattern = animTypes[animType!];
  } else {
    animPattern = animTypes["focusCenter"];
  }

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const scrollOpacity = useTransform(scrollYProgress, animPattern, [
    opacityMin,
    opacityMax,
    opacityMax,
    opacityMin,
  ]);

  const scrollTranslateX = useTransform(scrollYProgress, animPattern, [
    xIn,
    0,
    0,
    xOut,
  ]);

  const scrollTranslateY = useTransform(scrollYProgress, animPattern, [
    yIn,
    0,
    0,
    yOut,
  ]);

  const scrollScale = useTransform(scrollYProgress, animPattern, [
    scaleMin,
    1,
    1,
    scaleMin,
  ]);

  // console.log("original children: ", children);

  const addedStyle = {
    translateX: useSpring(scrollTranslateX, spring),
    translateY: useSpring(scrollTranslateY, spring),
    opacity: useSpring(scrollOpacity, spring),
    scale: useSpring(scrollScale, spring),
  };

  const newStyle = {
    ...children.props.style,
    ...addedStyle,
  };
  // console.log("newStyle: ", newStyle);

  const newProps = { ...children.props, style: newStyle };
  // console.log("newProps: ", newProps);

  const newChildren = { ...children, props: newProps, ref: targetRef };
  // console.log("newChildren: ", newChildren);

  return <>{newChildren}</>;
}
