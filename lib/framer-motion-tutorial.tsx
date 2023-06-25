import "./styles.css";
import { motion, Variants } from "framer-motion";
// import { useState } from "react";

const boxes = [
  { id: 1, title: "great times", text: " await you" },
  { id: 1, title: "great times", text: " await you" },
  { id: 1, title: "great times", text: " await you" },
  { id: 1, title: "great times", text: " await you" },
  { id: 1, title: "great times", text: " await you" },
  { id: 1, title: "great times", text: " await you" },
];

const ulVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.075,
      staggerDirection: -1,
    },
  },
};

const boxVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
    },
  },
};

export default function App() {
  // const [scale, setScale] = useState(false);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {/*<motion.div
        // style={{ backgroundColor: "skyblue", height: "50px" }}
        // animate={{ scale: scale ? 1 : 0.2 }}
        // onClick={() => setScale((curr) => !curr)}
        // transition={{type: "tween", duration: 0.25, delay: 0}}
        // transition={{type: "spring", bounce: 0.4}}

        // whileHover={{scale: 2}}
        // drag
        // drag="x"
        // dragConstraints={{left:10, top:10, right: 10, bottom: 10}}
        // whileDrag={{ opacity: 0.4, scale: 1.05, backgroundColor: "red" }}

        // animate={{rotate: [-50,50, 50, -50], x: [-50,50,50,-50]}}
        // transition={{repeat: Infinity, duration: 5}}
      >
        Start editing to see some magic happen!
      </motion.div>*/}

      {/* boxes.map((box, i) => (
        <motion.div
          key={box.id}
          style={{ backgroundColor: "steelblue" }}
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.35, delay:i*0.05 }}
        >
          <h2>{box.title}</h2>
          <p>{box.text}</p>
        </motion.div>
      )) */}

      {/*<motion.div variants={overlayVariants} initial="hidden" animate="visible">
        hello world
    </motion.div>*/}
      <motion.ul animate="visible" initial="hidden" variants={ulVariants}>
        {boxes.map((box) => (
          <motion.div
            key={box.id}
            style={{ backgroundColor: "steelblue" }}
            variants={boxVariants}
          >
            <h2>{box.title}</h2>
            <p>{box.text}</p>
          </motion.div>
        ))}
      </motion.ul>
    </div>
  );
}
