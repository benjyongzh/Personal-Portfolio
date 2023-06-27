"use client";

import { useRef } from "react";
//animations
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ISpring {
  damping?: number; //25
  stiffness?: number; //120
  restDelta?: number; //if the delta per tick is less than this, calculations stop (less taxing for processing. too high = movement stops too early)
}

const defaultSpring: ISpring = {
  damping: 100,
  stiffness: 10000,
  restDelta: 1,
};

interface IScrollAnimations {
  opacityMin?: number;
  opacityMax?: number;
  translateXIn?: number;
  translateXOut?: number;
  spring?: ISpring;
}

const defaultScrollAnimations: IScrollAnimations = {
  opacityMin: 0,
  opacityMax: 1,
  translateXIn: 150,
  translateXOut: -150,
  spring: defaultSpring,
};

export default function ScrollAnimationWrapper({
  children,
  animationProps,
}: {
  children: React.ReactNode;
  animationProps: IScrollAnimations;
}) {
  const spring = { ...defaultSpring, ...animationProps.spring };
  const { opacityMin, opacityMax, translateXIn, translateXOut } = {
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
    translateXIn,
    0,
    0,
    translateXOut,
  ]);

  return (
    <motion.div
      style={{
        translateX: useSpring(scrollTranslateX, spring),
        opacity: useSpring(scrollOpacity, spring),
      }}
      ref={targetRef}
    >
      {children}
    </motion.div>
  );
}

export const createScrollAnimation = (
  opacity: number,
  translateX: number,
  dampenSpring = false
): IScrollAnimations => {
  return {
    opacityMin: opacity,
    opacityMax: 1,
    translateXIn: translateX,
    translateXOut: -1 * translateX,
    spring: dampenSpring ? dampSpring : defaultSpring,
  };
};

export const dampSpring: ISpring = {
  damping: 25,
  stiffness: 125,
};
