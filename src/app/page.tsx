"use client";

import AddPlayer from "@/components/AddPlayer";
import { Points } from "@/components/hooks/types";
import { useKniffel } from "@/components/hooks/useKniffel";
import { Menu } from "@/components/Menu";
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
import { useEffect, useState } from "react";

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

  const [showScoring, setShowScoring] = useState(false);

  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind's "sm" breakpoint
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Card className="m-4 p-4 flex flex-row justify-between items-center">
        <div className="flex flex-row ">
          <Dices size={32} strokeWidth={2.5} />
          <h1 className="scroll-m-20 sm:text-2xl mb-1 ml-4 font-extrabold tracking-tight lg:text-3xl text-xl">
            Würfelkarte
          </h1>
        </div>
        <div className="flex flex-row">
          <Button
            variant="outline"
            className="mr-4 hidden sm:block"
            onClick={() => setShowScoring(true)}
          >
            Punkteauswertung
            <Scoring
              players={players}
              open={showScoring}
              onOpenChange={(value) => setShowScoring(value)}
            />
          </Button>
          <div className="mr-4">
            <AddPlayer addPlayer={addPlayer} />
          </div>
          {/* <div className="hidden sm:block flex-row mr-4">
            <ModeToggle />
          </div> */}
          <Menu
            players={players}
            resetAll={resetAll}
            resetAllPoints={resetAllPoints}
            open={showScoring}
            onOpenChange={setShowScoring}
          />
        </div>
      </Card>
      <div className="flex px-4">
        {/* <CategoryIcons addPlayer={addPlayer} /> */}
        <Carousel className="w-full">
          <CarouselContent className="-ml-4">
            {players.map((player, index) => {
              const basisPercent = `${100 / players.length}%`;

              return (
                <CarouselItem
                  key={index}
                  className="pl-4 basis-1/2 sm:basis-auto"
                  style={!isMobile ? { flexBasis: basisPercent } : undefined}
                >
                  <PlayerCard
                    playerName={player.name}
                    playerPoints={player.points}
                    updatePoints={(points: Partial<Points>) =>
                      updatePoints(player.id, points)
                    }
                    resetPoints={() => resetPoints(player.id)}
                    removePlayer={() => removePlayer(player.id)}
                    changeName={(name) => changeName(player.id, name)}
                    moveToRight={() => moveToRight(player.id)}
                    moveToLeft={() => moveToLeft(player.id)}
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
}
