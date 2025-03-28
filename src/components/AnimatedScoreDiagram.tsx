"use client";
import { Player } from "@/components/hooks/useKniffel";
import { useEffect, useState } from "react";

interface AnimatedScoreDiagramProps {
  players: Player[];
}

export function AnimatedScoreDiagram({ players }: AnimatedScoreDiagramProps) {
  const totalScores = players.map((player) =>
    Object.values(player.points).reduce((sum, value) => sum + value, 0)
  );

  const [animatedScores, setAnimatedScores] = useState(
    totalScores.map(() => 0)
  );

  const maxScore = Math.max(...totalScores, 1);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedScores((prevScores) =>
        prevScores.map((score, index) =>
          score < totalScores[index] ? score + 1 : totalScores[index]
        )
      );
    }, 25);

    return () => clearInterval(interval);
  }, [totalScores]);

  return (
    <div className="space-y-2">
      {players.map((player, index) => (
        <div key={player.id} className="relative w-full h-10 rounded">
          <div
            className="absolute top-0 left-0 h-full rounded"
            style={{
              width: `${(animatedScores[index] / maxScore) * 100}%`,
              transition: "width 0.5s ease",
              backgroundColor:
                index === 0
                  ? "#ffd700"
                  : index === 1
                  ? "#c0c0c0"
                  : index === 2
                  ? "#cd7f32"
                  : "#e5e5e5",
            }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-around dark:text-[#fafafa] text-[#0a0a0a] font-bold">
            <div>{animatedScores[index]} Punkte</div>
            <div>
              {animatedScores[index] === totalScores[index] && (
                <span className="ml-2">{player.name}</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AnimatedScoreDiagram;
