import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="flex items-center justify-center">
      {[...Array(10)].map((_, index) => (
        <motion.div
          key={index}
          className="w-2 h-20 bg-gradient-to-tr from-[#f20a86] to-[#7e0af2] border rounded-full m-1"
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            transition: {
              delay: index * 0.1,
              duration: 1,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "linear",
            },
          }}
        ></motion.div>
      ))}
    </div>
  );
};
export default Loading;
