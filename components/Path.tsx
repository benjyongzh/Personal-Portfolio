import { motion } from "framer-motion";
import { ReactElement } from "react";

export default function Path<T>(props: T): ReactElement {
  return <motion.path fill="transparent" strokeLinecap="round" {...props} />;
}
