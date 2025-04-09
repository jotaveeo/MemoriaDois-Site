import React from "react";
import { Button } from "@/components/ui/button";

const FraseButton: React.FC = () => {
  return (
    <section className="call-to-action bg-primary text-white py-10 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Um presente que não se apaga: memórias guardadas para sempre!
      </h2>
      <p className="text-lg md:text-xl">
        Dê um presente inesquecível: um site com as memórias de vocês, um QR
        Code exclusivo e uma linha do tempo com os melhores momentos. Surpreenda
        quem você ama!
      </p>
      <Button asChild className="mt-6 bg-white text-primary hover:bg-gray-200 transition duration-300">
        <a href="/start">Comece Agora</a>
      </Button>
    </section>
  );
};

export default FraseButton;
