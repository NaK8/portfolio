"use client";

import { motion } from "framer-motion";
import { ElementRef, useRef } from "react";

interface HobbiesProps {
  hobbies: {
    title: string;
    emoji: string;
    left: string;
    top: string;
  }[];
}

const Hobbies = ({ hobbies }: HobbiesProps) => {
  const constrainRef = useRef<ElementRef<"div">>(null);
  return (
    <div className="relative flex-1" ref={constrainRef}>
      {hobbies.map((hobby) => (
        <motion.div
          key={crypto.randomUUID()}
          className="absolute inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 px-6 py-1.5 hover:cursor-grab"
          style={{
            left: hobby.left,
            top: hobby.top,
          }}
          drag
          dragConstraints={constrainRef}
        >
          <span className="font-medium text-gray-950">{hobby.title}</span>
          <span>{hobby.emoji}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default Hobbies;
