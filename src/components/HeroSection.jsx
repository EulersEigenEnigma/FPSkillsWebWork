"use client";

import { motion } from "framer-motion";
import HeroBackground from "./HeroBackground";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen">
      {/* Background Slideshow */}
      <HeroBackground />

      {/* Text Content */}
      <div className="absolute inset-0 flex items-end pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="z-20 max-w-3xl px-6 md:px-16"
        >
          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
            Empowering Schools With Future Ready Industrial Skills
          </h1>

          <p className="text-white text-base md:text-2xl mt-2 whitespace-nowrap">
            Providing Hands-On Industry Aligned Projects That Brings Real World
            Skills Into Classrooms.
          </p>

          <button className="mt-7 bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 rounded-xl text-lg font-medium transition">
            Partner With Us!
          </button>
        </motion.div>
      </div>

      {/* 🌙 Bottom Curved Divider */}
      <div
        className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20"
        style={{ transform: "translateY(40px)" }}
      >
        <svg
          className="relative block w-full h-28"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 20"
          preserveAspectRatio="none"
        >
          <path
            d="M0,35 C360,70 1080,70 1440,35 L1440,80 L0,80 Z"
            fill="#FF553F"
          />
        </svg>
      </div>
    </section>
  );
}
