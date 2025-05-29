"use client";

import { gamemodes } from "@/components/gamemodes/gamemodes";
import { Menu } from "@/components/Menu";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dices } from "lucide-react";
import Link from "next/link";

export default function GamemodeSelect() {
  return (
    <>
      <Card className="m-4 p-4 flex flex-row justify-between items-center">
        <Link href="/" className="flex flex-row ">
          <Dices size={32} strokeWidth={2.5} />
          <h1 className="scroll-m-20 sm:text-2xl mb-1 ml-4 font-extrabold tracking-tight lg:text-3xl text-xl">
            Würfelkarte
          </h1>
        </Link>
        <div className="flex flex-row">
          <Menu />
        </div>
      </Card>
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {Object.entries(gamemodes).map(([key, mode]) => (
          <Link
            key={key}
            href={`/${mode.name.toLowerCase().replace(/[^a-z0-9]/g, "")}`}
            className="w-64"
          >
            <Card className="h-64 w-full p-6 hover:shadow-lg transition-shadow cursor-pointer flex flex-col items-center justify-between">
              <h2 className="text-xl font-bold mb-2">{mode.name}</h2>
              <div className="text-gray-500 text-sm mb-2 flex-1 flex items-center justify-center text-center">
                {mode.description}
              </div>
              <Button variant="outline">
                <Dices size={20} className="mr-2" />
                Spielen
              </Button>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}
