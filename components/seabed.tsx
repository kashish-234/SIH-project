"use client";

import { motion } from "framer-motion";

const Seaweed = () => {
  // Define the sway animation
  const sway = {
    initial: { rotate: 0 },
    animate: {
      rotate: [-2, 2, -2],
      transition: {
        repeat: Infinity,
        duration: 4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative w-full h-[50vh] bg-blue-600 flex flex-wrap justify-center items-end overflow-hidden">
      {/* Array to generate multiple seaweed */}
      {Array.from({ length: 30 }).map((_, index) => (
        <motion.div
          key={index}
          className="w-1/24 h-[20%] flex flex-col justify-end items-center mx-1"
          variants={sway}
          initial="initial"
          animate="animate"
        >
          <div className="w-1 bg-green-600 h-full rounded-t-full"></div>
        </motion.div>
      ))}
    </div>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen bg-blue-600 flex flex-col justify-end">
      <Seaweed />
    </div>
  );
};

export default Home;
