"use client";

import { Card } from "@/components/ui/card";
import JSConfetti from "js-confetti";
import { useEffect, useState } from "react";
import pointsJson from "../../public/points.json";
import { EditPlayer } from "./EditPlayer";
import { Points } from "./hooks/types";
import { Badge } from "./ui/badge";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface PlayerCardProps {
  playerName: string;
  playerPoints: Record<string, number | "X">;
  updatePoints: (points: Partial<Points>) => void;
  resetPoints: () => void;
  removePlayer: () => void;
  changeName: (name: string) => void;
  moveToRight: () => void;
  moveToLeft: () => void;
}

const PlayerCard: React.FC<PlayerCardProps> = ({
  playerName,
  playerPoints,
  updatePoints,
  resetPoints,
  removePlayer,
  changeName,
  moveToRight,
  moveToLeft,
}) => {
  const [jsConfetti, setJsConfetti] = useState<JSConfetti | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setJsConfetti(new JSConfetti());
    }
  }, []);

  useEffect(() => {
    if (playerPoints["Kniffel"] === 50 && jsConfetti) {
      jsConfetti.addConfetti({ emojis: ["⭐", "🎲"] });
    }
    return () => {
      jsConfetti?.clearCanvas();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerPoints["Kniffel"], jsConfetti]);

  return (
    <Card className="mx-4 p-4 flex flex-col justify-between items-center space-y-[-15px] h-full">
      <div className="flex flex-row justify-between w-full items-center mb-1">
        <div>{playerName}</div>
        <EditPlayer
          playerName={playerName}
          resetPoints={resetPoints}
          removePlayer={removePlayer}
          changeName={changeName}
          moveToRight={moveToRight}
          moveToLeft={moveToLeft}
        />
      </div>
      {["Einser", "Zweier", "Dreier", "Vierer", "Fünfer", "Sechser"].map(
        (key, index) => (
          <Select
            key={index}
            value={playerPoints[key] !== 0 ? playerPoints[key].toString() : ""}
            onValueChange={(value) => {
              if (value === "reset") {
                updatePoints({ [key]: 0 });
              } else if (value === "X") {
                updatePoints({ [key]: "X" });
              } else {
                updatePoints({ [key]: parseInt(value, 10) });
              }
            }}
          >
            <SelectTrigger className="w-full h-2">
              <SelectValue placeholder={key} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {pointsJson[key as keyof typeof pointsJson].map(
                  (value: number, idx: number) => (
                    <SelectItem key={idx} value={value.toString()}>
                      {value}
                    </SelectItem>
                  )
                )}
              </SelectGroup>
              <SelectGroup>
                <SelectItem value="reset" className="font-bold">
                  Zurücksetzen
                </SelectItem>
                <SelectItem value="X" className="font-bold">
                  ❌
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        )
      )}
      <div className="my-3">
        {(() => {
          const sum = [
            "Einser",
            "Zweier",
            "Dreier",
            "Vierer",
            "Fünfer",
            "Sechser",
          ].reduce(
            (acc, key) =>
              acc +
              (typeof playerPoints[key] === "number" ? playerPoints[key] : 0),
            0
          );
          return (
            <div className="">
              {sum}
              {sum >= 63 && (
                <Badge className="bg-green-600 ml-2 font-bold">+ 35</Badge>
              )}
            </div>
          );
        })()}
      </div>
      {[
        "Dreierpasch",
        "Viererpasch",
        "Full House",
        "Kleine Straße",
        "Große Straße",
        "Kniffel",
        "Chance",
      ].map((key, index) => (
        <Select
          key={index}
          value={playerPoints[key] !== 0 ? playerPoints[key].toString() : ""}
          onValueChange={(value) => {
            if (value === "reset") {
              updatePoints({ [key]: 0 });
            } else if (value === "X") {
              updatePoints({ [key]: "X" });
            } else {
              updatePoints({ [key]: parseInt(value, 10) });
            }
          }}
        >
          <SelectTrigger className="w-full h-2">
            <SelectValue placeholder={key} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {pointsJson[key as keyof typeof pointsJson].map(
                (value: number, idx: number) => (
                  <SelectItem key={idx} value={value.toString()}>
                    {value}
                  </SelectItem>
                )
              )}
            </SelectGroup>
            <SelectGroup>
              <SelectItem value="reset" className="font-bold">
                Zurücksetzen
              </SelectItem>
              <SelectItem value="X" className="font-bold">
                ❌
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      ))}
    </Card>
  );
};

export default PlayerCard;
