"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hide icon on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScrollY && currentScroll > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* FLOATING MENU BUTTON */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => setIsOpen(true)}
        className="
          fixed top-6 right-6 z-[60]
          bg-orange-600 text-white p-3 rounded-full shadow-lg
          hover:scale-105 transition 
        "
      >
        {/* simple hamburger */}
        <div className="space-y-[5px]">
          <span className="block w-6 h-[2px] bg-white" />
          <span className="block w-6 h-[2px] bg-white" />
          <span className="block w-6 h-[2px] bg-white" />
        </div>
      </motion.button>

      {/* OVERLAY + MENU PANEL */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-[55]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-in Menu */}
            <motion.div
              className="fixed top-0 right-0 h-full w-64 bg-white z-[60] shadow-xl p-6
             flex flex-col items-center justify-center"
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              {/* Close button */}
              <button
                className="absolute top-4 right-4 text-3xl"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>

              <nav className="flex flex-col gap-15 text-2xl text-center">
                <MenuItem href="/">Home</MenuItem>
                <MenuItem href="#partner-with-us">Partner With Us</MenuItem>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

/* MENU LINK */
/* MENU LINK WITH UNDERLINE ANIMATION */
function MenuItem({ href, children }) {
  return (
    <Link
      href={href}
      className="
        relative text-2xl font-medium text-black transition
        after:content-['']
        after:absolute after:left-1/2 after:-bottom-1
        after:h-[2px] after:w-0
        after:bg-black
        after:transition-all after:duration-300
        hover:after:w-full hover:after:left-0
      "
    >
      {children}
    </Link>
  );
}


