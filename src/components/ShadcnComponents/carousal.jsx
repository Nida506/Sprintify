import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false }) // Keep autoplay running
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="max-w-[16rem] sm:max-w-[20rem] md:max-w-[33rem] lg:max-w-4xl cursor-pointer"
      onMouseEnter={() => plugin.current.stop()} // Stop autoplay on hover
      onMouseLeave={() => plugin.current.play()} // Resume autoplay
    >
      <CarouselContent>
        {Array.from({ length: 20 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="basis-full sm:basis-full md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-1">
              <Card className="bg-greish">
                <CardContent className="flex aspect-square items-center justify-center py-1 px-6">
                  <div className="flex-col">
                    <div className="mb-2 flex gap-4">
                      <img
                        src="/images/customer.png"
                        alt="customer"
                        className="w-12 h-12 border-2 border-gray-500 rounded-full"
                      />
                      <div>
                        <p className="font-bold text-xl">Nida</p>
                        <p className="text-orange-600 font-semibold">
                          Customer
                        </p>
                      </div>
                    </div>
                    <p className="text-start">
                      Sprintify is an intuitive and flexible tool for organizing
                      tasks and projects. Its customizable boards and seamless
                      integrations make productivity effortless!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-white bg-blueish hover:border-black" />
      <CarouselNext className="text-white bg-blueish hover:border-black" />
    </Carousel>
  );
}
