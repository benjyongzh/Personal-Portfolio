import React from "react";
import TechIcon from "@/components/TechIcon";
import { tech } from "@/lib/techStackList";
import { motion } from "framer-motion";

const SkillsSection = (props: { skillset: object }) => {
  const domainNames: string[] = Object.keys(props.skillset);

  const techlist = (domain: Array<tech>) => {
    return domain.map((tech, i) => (
      <motion.div key={i} className="pageText pageText-bodytext">
        <TechIcon tech={tech} size="md" key={i} popup={true} />
      </motion.div>
    ));
  };
  const skills = domainNames.map((domain) => {
    const domainSkills: Array<tech> =
      props.skillset[domain as keyof typeof props.skillset];
    const icons = techlist(domainSkills);
    return (
      <div
        key={domain}
        className="flex flex-col items-center justify-start gap-3 p-4 sm:gap-5 pageText"
      >
        <div className="w-full text-lg text-center pageText sm:text-xl">
          {domain}
        </div>
        <ul className="flex flex-wrap items-start justify-center w-full gap-3">
          {icons}
        </ul>
      </div>
    );
  });
  return (
    <div className="grid w-full grid-flow-row grid-cols-1 gap-6 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {skills}
    </div>
  );
};

export default SkillsSection;
