// components/FotoCarrossel.tsx
"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function FotoCarrossel({ fotos }: { fotos: string[] }) {
  const autoplay = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  return (
    <Carousel plugins={[autoplay.current]} className="w-full max-w-xs mx-auto">
      <CarouselContent>
        {fotos.map((foto, index) => (
          <CarouselItem key={index} className="flex justify-center">
            <Card className="w-[250px] h-[400px] overflow-hidden">
              <CardContent className="flex items-center justify-center p-0 h-full">
                <img
                  src={foto}
                  alt={`Foto ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
