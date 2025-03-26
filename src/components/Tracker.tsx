"use client";

import CategoryIcons from "./CategoryIcons";
import PlayerCard from "./PlayerCard";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
interface TrackerProps {
  players: Array<{ id: number; name: string; points: number }>;
  addPlayer: (name: string) => void;
  updatePoints: (id: number, points: number) => void;
  resetPoints: () => void;
  removePlayer: (id: number) => void;
  changeName: (id: number, name: string) => void;
  moveToRight: (id: number) => void;
  moveToLeft: (id: number) => void;
}

const Tracker: React.FC<TrackerProps> = ({
  players,
  addPlayer,
  updatePoints,
  resetPoints,
  removePlayer,
  changeName,
  moveToRight,
  moveToLeft,
}) => {
  return (
    <div className="flex">
      <CategoryIcons addPlayer={addPlayer} />
      <Carousel className="w-full">
        <CarouselContent className="-ml-6">
          {players.map((player) => (
            <CarouselItem key={player.id} className="flex-1 pl-2">
              <PlayerCard
                name={player.name}
                points={player.points}
                updatePoints={(points) => updatePoints(player.id, points)}
                resetPoints={() => resetPoints()}
                removePlayer={() => removePlayer(player.id)}
                changeName={(name) => changeName(player.id, name)}
                moveToRight={() => moveToRight(player.id)}
                moveToLeft={() => moveToLeft(player.id)}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Tracker;
