"use client";

import AddPlayer from "@/components/AddPlayer";
import GamemodeInfo from "@/components/GamemodeInfo";
import { gamemodes } from "@/components/gamemodes/gamemodes";
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
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const params = useParams();
  const router = useRouter();
  const param = (params.gamemode as string) || "";
  const gamemode =
    (Object.keys(gamemodes).find(
      (key) =>
        key.replace(/[^a-zA-Z0-9]/g, "").toLowerCase() ===
        param.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
    ) as keyof typeof gamemodes) || "Kniffel+";

  // Always call hooks at the top
  const [purchased, setPurchased] = useState<string[] | null>(null);
  const [showScoring, setShowScoring] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
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
  } = useKniffel(gamemode);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const bought = localStorage.getItem("purchasedGamemodes");
      setPurchased(bought ? JSON.parse(bought) : ["kniffel"]);
    }
  }, []);

  useEffect(() => {
    if (purchased === null) return;
    const normalizedKey = param.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const modePrice = gamemodes[gamemode]?.price ?? 0;
    const isUnlocked = modePrice === 0 || purchased.includes(normalizedKey);
    if (!isUnlocked) {
      router.replace(`/checkout/${normalizedKey}`);
    }
  }, [purchased, param, gamemode, router]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind's "sm" breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (purchased === null) {
    return null; // or loading spinner
  }
  const normalizedKey = param.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const modePrice = gamemodes[gamemode]?.price ?? 0;
  const isUnlocked = modePrice === 0 || purchased.includes(normalizedKey);
  if (!isUnlocked) {
    return null;
  }

  return (
    <>
      <Card className="m-4 p-4 flex flex-row justify-between items-center">
        <Link href="/" className="flex flex-row ">
          <Dices size={32} strokeWidth={2.5} />
          <h1 className="scroll-m-20 sm:text-2xl mb-1 ml-4 font-extrabold tracking-tight lg:text-3xl text-xl mr-4">
            {gamemodes[gamemode].name}
          </h1>
        </Link>
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
              gamemode={gamemode}
            />
          </Button>
          <div className="mr-4">
            <AddPlayer addPlayer={addPlayer} />
          </div>
          {gamemodes[gamemode].information && (
            <div className="mr-4 hidden sm:block">
              <GamemodeInfo gamemodeInfo={gamemodes[gamemode].information} />
            </div>
          )}
          {/* <div className="hidden sm:block flex-row mr-4">
            <ModeToggle />
          </div> */}
          <Menu
            players={players}
            resetAll={resetAll}
            resetAllPoints={resetAllPoints}
            open={showScoring}
            onOpenChange={setShowScoring}
            gamemode={gamemode}
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
                    gamemode={gamemode}
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
