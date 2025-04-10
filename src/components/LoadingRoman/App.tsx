"use client";

import React, { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine, type ISourceOptions } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { motion } from "framer-motion";

// componente das particulas e loading 

interface LoadingRomanticoProps {
  onFinish: () => void;
}

const frases = [
  "Preparando sua carta de amor...",
  "Cada memória vale ouro... 💛",
  "Logo você verá o que preparamos com carinho...",
];

const particlesOptions: ISourceOptions = {
  fullScreen: { enable: false },
  background: { color: { value: "backgroud" } },
  particles: {
    number: { value: 40, density: { enable: true, width: 700 } },
    shape: {
      type: "char",
      options: {
        char: {
          value: ["💖", "💘", "💗", "💕"]
        },
      },
    },
    size: { value: { min: 16, max: 26 } },
    move: {
      enable: true,
      speed: 1,
      direction: "bottom",
      outModes: { default: "out" },
    },
    opacity: { value: 1 },
  },
};

export default function LoadingRomantico({ onFinish }: LoadingRomanticoProps) {
  const [init, setInit] = useState(false);
  const [currentFrase, setCurrentFrase] = useState(0);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => setInit(true));
  }, []);

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
      {init && (
        <Particles options={particlesOptions} className="absolute inset-0 z-0" />
      )}

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
        <motion.span animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 1 }} className="text-3xl">
          
        </motion.span>
        <motion.span animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="text-3xl">
          
        </motion.span>
        <motion.span animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="text-3xl">
          
        </motion.span>
      </div>
    </div>
  );
}
