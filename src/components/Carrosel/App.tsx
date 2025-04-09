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
// "use client";

// import React from "react";
// import Autoplay from "embla-carousel-autoplay";

// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/carousel";

// interface CarouselPluginProps {
//   fotos: string[];
// }

// export function CarouselPlugin({
//   fotos,
// }: CarouselPluginProps): React.ReactElement {
//   const autoplay = React.useRef(
//     Autoplay({ delay: 4000, stopOnInteraction: false })
//   );

//   return (
//     <Carousel plugins={[autoplay.current]} className="w-full max-w-5xl mx-auto">
//       <CarouselContent>
//         {fotos.map((foto, index) => (
//           <CarouselItem key={index}>
//             <Card className="w-full">
//               <CardContent className="flex items-center justify-center h-[500px] sm:h-[600px]">
//                 <img
//                   src={foto}
//                   alt={`Foto ${index + 1}`}
//                   className="max-h-full max-w-full object-contain rounded-xl shadow-md"
//                 />
//               </CardContent>
//             </Card>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//     </Carousel>
//   );
// }

// export default function Page(): React.ReactElement {
//   const fotos = ["eu (1).jpg", "eu (2).jpg", "eu (3).jpg", "eu (4).jpg"];

//   return (
//     <div className="px-4 sm:px-8">
//       <CarouselPlugin fotos={fotos} />
//     </div>
//   );
// }
