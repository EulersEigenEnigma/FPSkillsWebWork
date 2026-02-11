"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const prefix = process.env.NODE_ENV === "production" ? "/FPSkillsWebWork" : "";

const images = [
  `${prefix}/HeroSectionImages/Hero1.webP`,
  `${prefix}/HeroSectionImages/Hero2.webP`,
  `${prefix}/HeroSectionImages/Hero3.webP`,
];


export default function HeroBackground() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 7000); // switch every 7 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/35 z-[1]" />

      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={images[index]}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
