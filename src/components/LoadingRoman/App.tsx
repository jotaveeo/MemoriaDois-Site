"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// componente de loading sem partículas

interface LoadingRomanticoProps {
  onFinish: () => void;
}

const frases = [
  "Preparando sua carta de amor...",
  "Cada memória vale ouro... 💛",
  "Logo você verá o que preparamos com carinho...",
];

export default function LoadingRomantico({ onFinish }: LoadingRomanticoProps) {
  const [currentFrase, setCurrentFrase] = useState(0);

  useEffect(() => {
    const fraseTimer = setInterval(() => {
      setCurrentFrase((prev) => (prev + 1) % frases.length);
    }, 2000);

    const endTimer = setTimeout(() => {
      clearInterval(fraseTimer);
      onFinish();
    }, 7500);

    return () => {
      clearInterval(fraseTimer);
      clearTimeout(endTimer);
    };
  }, [onFinish]);

  return (
    <div className="relative h-screen w-full bg-background flex flex-col items-center justify-center overflow-hidden">
      <motion.p
        key={currentFrase}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="text-xl sm:text-2xl font-semibold text-center z-10"
      >
        {frases[currentFrase]}
      </motion.p>

      <div className="flex mt-6 space-x-2 z-10">
        <motion.span
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="text-3xl"
        >
          💖
        </motion.span>
        <motion.span
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
          className="text-3xl"
        >
          💌
        </motion.span>
        <motion.span
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
          className="text-3xl"
        >
          💕
        </motion.span>
      </div>
    </div>
  );
}
