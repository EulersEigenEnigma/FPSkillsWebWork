"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function SectionOneSlideshow({ images = [], interval = 3000 }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-full">
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Slide ${index}`}
          fill
          className={`
            object-cover transition-opacity duration-700 ease-out
            ${index === current ? "opacity-100" : "opacity-0"}
          `}
        />
      ))}
    </div>
  );
}
