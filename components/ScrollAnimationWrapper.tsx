"use client";

import { useRef } from "react";
//animations
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

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

export interface IScrollAnimations {
  opacityMin?: number;
  opacityMax?: number;
  xIn?: number;
  xOut?: number;
  yIn?: number;
  yOut?: number;
  scaleMin?: number;
  spring?: ISpring;
}

const defaultScrollAnimations: IScrollAnimations = {
  opacityMin: 1,
  opacityMax: 1,
  xIn: 0,
  xOut: 0,
  yIn: 0,
  yOut: 0,
  scaleMin: 1,
  spring: defaultSpring,
};

export const dampSpring: ISpring = {
  damping: 25,
  stiffness: 125,
};

export default function ScrollAnimationWrapper({
  children,
  animationProps,
}: {
  children: React.ReactElement;
  animationProps: IScrollAnimations;
}) {
  const spring = { ...defaultSpring, ...animationProps.spring };
  const { opacityMin, opacityMax, xIn, xOut, yIn, yOut, scaleMin } = {
    ...defaultScrollAnimations,
    ...animationProps,
  };

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const screenCutoffPoints: Array<number> = [0, 0.2, 0.8, 1];

  const scrollOpacity = useTransform(scrollYProgress, screenCutoffPoints, [
    opacityMin,
    opacityMax,
    opacityMax,
    opacityMin,
  ]);

  const scrollTranslateX = useTransform(scrollYProgress, screenCutoffPoints, [
    xIn,
    0,
    0,
    xOut,
  ]);

  const scrollTranslateY = useTransform(scrollYProgress, screenCutoffPoints, [
    yIn,
    0,
    0,
    yOut,
  ]);

  const scrollScale = useTransform(scrollYProgress, screenCutoffPoints, [
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
