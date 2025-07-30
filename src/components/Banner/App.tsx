import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Banner: React.FC = () => {
  return (
    <div className="banner-container flex flex-col md:flex-row items-center justify-center gap-6 py-20 px-10 text-center">
      <div className="banner-text w-full md:w-1/2 ">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Bem-vindo ao <br />
          Memória a Dois
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Crie memórias inesquecíveis e <br />
          compartilhe momentos especiais com quem você ama.
        </p>
        <Button asChild>
          <a href="/formulario">Comece Agora</a>
        </Button>
      </div>

      {/* Espaço para a imagem do banner */}
      <div className="banner-image w-full md:w-1/2 flex items-center justify-center">
        {/* Placeholder para a imagem */}
        <Image
          src="/casak.png"
          alt="foto"
          width={400}
          height={400}
          className="rounded-lg"
          priority
        />
      </div>

      {/* Texto do banner */}
    </div>
  );
};

export default Banner;
