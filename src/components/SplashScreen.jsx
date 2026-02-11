"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [stage, setStage] = useState(0);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    setTimeout(() => setStage(2), 2200); // ball slides left + fade
    // bounce
    setTimeout(() => setStage(2), 2500); // ball slides left exactly when bounce ends
    // ball slides left + fade
    setTimeout(() => setStage(3), 2700); // logo fade in
    setTimeout(() => setStage(4), 3300); // bg white
    setTimeout(() => setExit(true), 5200); // slide up
    setTimeout(() => setStage(999), 6200); // delay removal for smooth finish
  }, []);

  if (stage === 999) return null;

  return (
    <div
      className={`
        fixed inset-0 flex items-center justify-center
        transition-all duration-[700ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
        ${stage >= 4 ? "bg-white" : "bg-black"}
        ${exit ? "-translate-y-full" : "translate-y-0"}
        z-[9999]
      `}
    >
      {/* BALL */}
      <div
        className={`
    absolute left-1/2 -translate-x-1/2
    w-16 h-16 rounded-full bg-white
    transition-all duration-700
    ${stage === 0 ? "animate-bounce" : ""}
    ${stage >= 1 ? "translate-x-[-140px]" : ""}
    ${stage >= 2 ? "opacity-0" : "opacity-100"}
  `}
      ></div>

      {/* LOADING TEXT */}
      <div
        className={`
            absolute left-1/2 -translate-x-1/2
    absolute mt-56 text-white text-3xl
    transition-opacity duration-500
    ${stage >= 2 ? "opacity-0" : "opacity-100"}
  `}
      >
        Loading...
      </div>

      {/* LOGO */}
      <div
        className={`
          transition-all duration-700
          ${stage >= 3 ? "opacity-100 scale-100" : "opacity-0 scale-75"}
        `}
      >
        <Image
          src="/SplashScreenLogo.png"
          alt="Futurepro Skill Logo"
          width={1000}
          height={200}
          priority
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
}
