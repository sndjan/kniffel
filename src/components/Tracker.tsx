"use client";

import CategoryIcons from "./CategoryIcons";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import PlayerCard from "./PlayerCard";

const Tracker = () => {
  return (
    <div className="flex">
      <CategoryIcons />
      <Carousel className="w-full">
        <CarouselContent className="-ml-6">
          <CarouselItem className="sm:basis-1/5 basis-2/5 pl-2">
            <PlayerCard name="Spieler 1"></PlayerCard>
          </CarouselItem>
          <CarouselItem className="sm:basis-1/5 basis-2/5 pl-0">
            <PlayerCard name="Spieler 2"></PlayerCard>
          </CarouselItem>
          <CarouselItem className="sm:basis-1/5 basis-2/5 pl-0">
            <PlayerCard name="Spieler 3"></PlayerCard>
          </CarouselItem>
          <CarouselItem className="sm:basis-1/5 basis-2/5 pl-0">
            <PlayerCard name="Spieler 4"></PlayerCard>
          </CarouselItem>
          <CarouselItem className="sm:basis-1/5 basis-2/5 pl-0">
            <PlayerCard name="Spieler 5"></PlayerCard>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Tracker;
