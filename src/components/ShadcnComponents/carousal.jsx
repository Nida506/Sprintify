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

// Sample reviews
const reviews = [
  {
    name: "Nida",
    role: "Customer",
    image: "/images/customer.png",
    message:
      "Sprintify has truly transformed how our team works together. The boards are clean and easy to customize. I especially love how smooth the drag-and-drop features are. Highly recommended for remote teams and creatives alike.",
  },
  {
    name: "Adeel",
    role: "Manager",
    image: "/images/b1.jpeg",
    message:
      "The best thing about Sprintify is how intuitive it is. From day one, my team adopted it without any need for extensive training. We’ve improved our delivery timelines significantly.",
  },
  {
    name: "Zainab",
    role: "Team Lead",
    image: "/images/g1.jpeg",
    message:
      "As a team lead, visibility into project progress is critical. Sprintify gives me that with ease. Its reporting tools and activity logs are particularly helpful for managing multiple teams.",
  },
  {
    name: "Faraz",
    role: "Developer",
    image: "/images/b2.jpeg",
    message:
      "I use Sprintify daily to track my tasks. I love how I can move things around quickly and it syncs instantly across my team. It’s fast, clean, and just works.",
  },
  {
    name: "Hira",
    role: "Designer",
    image: "/images/g2.jpeg",
    message:
      "Sprintify’s interface is a dream for designers—minimal but powerful. The visual layouts help me structure my creative work better, and collaboration has never been easier.",
  },
];

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="max-w-[16rem] sm:max-w-[20rem] md:max-w-[33rem] lg:max-w-4xl cursor-pointer"
      onMouseEnter={() => plugin.current.stop()}
      onMouseLeave={() => plugin.current.play()}
    >
      <CarouselContent>
        {reviews.map((review, index) => (
          <CarouselItem
            key={index}
            className="basis-full sm:basis-full md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-1">
              <Card className="bg-greish">
                <CardContent className="flex aspect-square items-center justify-center py-1 px-6">
                  <div className="flex-col">
                    <div className="mb-2 flex gap-4 items-center">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-12 h-12 border-2 border-gray-500 rounded-full"
                      />
                      <div>
                        <p className="font-bold text-xl">{review.name}</p>
                        <p className="text-orange-600 font-semibold">
                          {review.role}
                        </p>
                      </div>
                    </div>
                    <p className=" text-sm md:text-base line-clamp-5">
                      {review.message}
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
