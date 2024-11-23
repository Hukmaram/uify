// import "./styles.css";
import { useState } from "react";
import { motion, Variants } from "framer-motion";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const AnimatedMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const listItems = ["Item1", "Item2", "Item3", "Item4"];

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="w-[300px]"
      style={{ filter: "drop-shadow(1px 1px 1px #4700b3)" }}
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className=" bg-[#fff] text-[#6600ff] border-none rounded-lg p-2.5  px-5 text-lg font-bold cursor-pointer w-full text-left mb-2.5 flex justify-between items-center"
      >
        Menu
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" fill="#6600ff" />
          </svg>
        </motion.div>
      </motion.button>
      <motion.ul
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
        className="flex flex-col gap-[10px] bg-[#fff] list-none m-0 p-2.5"
      >
        {listItems.map((item, index) => (
          <motion.li
            variants={itemVariants}
            className="text-[#6600ff] block list-none m-0 p-2.5"
            key={index}
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
};
export default AnimatedMenu;
