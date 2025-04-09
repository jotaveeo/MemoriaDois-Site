"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function CarouselPlugin(): React.ReactElement {
  const autoplay = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false }) // Delay de 3 segundos, sem parar ao interagir
  );

  return (
    <Carousel
      plugins={[autoplay.current]} // Certifique-se de passar o plugin corretamente
      className="w-full max-w-xs"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

// Exportação padrão para o Next.js
export default function Page(): React.ReactElement {
  return (
    <div className="flex justify-center items-center h-screen">
      <CarouselPlugin />
    </div>
  );
}
