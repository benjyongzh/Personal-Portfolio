import { tech } from "@/lib/techStackList";
import { motion } from "framer-motion";

const TechIcon = (props: { tech: tech; size: string }) => {
  const iconSizes: { [key: string]: string } = {
    xs: "w-6 h-6",
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
    xl: "w-14 h-14",
  };

  return (
    <motion.div
      className={`relative flex item-center justify-center group hover:scale-125 transition-all duration-200 ${
        Object.keys(iconSizes).includes(props.size)
          ? iconSizes[props.size]
          : "w-6 h-6"
      }`}
    >
      {props.tech.icon}

      <span className="absolute w-auto px-3 py-1.5 pt-2 text-xs font-bold text-center transition-all duration-200 origin-bottom scale-0 rounded-md shadow-lg bottom-10 min-w-max group-hover:scale-100 bg-secondarydarkmode text-accentdarkmode">
        {props.tech.name}
      </span>
    </motion.div>
  );
};

export default TechIcon;
