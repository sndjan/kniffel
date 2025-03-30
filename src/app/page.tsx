"use client";

import CategoryIcons from "@/components/CategoryIcons";
import { Points } from "@/components/hooks/types";
import { useKniffel } from "@/components/hooks/useKniffel";
import { Menu } from "@/components/Menu";
import { ModeToggle } from "@/components/ModeToggle";
import PlayerCard from "@/components/PlayerCard";
import { Scoring } from "@/components/Scoring";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Dices } from "lucide-react";

export default function Home() {
  const {
    players,
    addPlayer,
    updatePoints,
    resetPoints,
    removePlayer,
    changeName,
    moveToRight,
    moveToLeft,
    resetAll,
    resetAllPoints,
  } = useKniffel();

  return (
    <>
      <Card className="m-4 p-4 flex flex-row justify-between items-center">
        <div className="flex flex-row space-x-4">
          <Dices size={32} strokeWidth={2.5} />
          <h1 className="scroll-m-20 sm:text-2xl mb-1 ml-1 font-extrabold tracking-tight lg:text-3xl text-xl">
            Kniffel-Tracker
          </h1>
        </div>
        <div className="flex flex-row space-x-4">
          <Button variant="outline">
            <Scoring players={players} />
          </Button>
          <ModeToggle />
          <Menu
            players={players}
            resetAll={resetAll}
            resetAllPoints={resetAllPoints}
          />
        </div>
      </Card>
      <div className="flex">
        <CategoryIcons addPlayer={addPlayer} />
        <Carousel className="w-full">
          <CarouselContent className="-ml-6">
            {players.map((player, index) => (
              <CarouselItem key={index} className="flex-1 pl-2">
                <PlayerCard
                  playerName={player.name}
                  playerPoints={player.points}
                  updatePoints={(points: Partial<Points>) =>
                    updatePoints(player.id, points)
                  }
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
    </>
  );
}
