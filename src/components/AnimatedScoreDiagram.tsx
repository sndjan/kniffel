"use client";
import { useEffect, useMemo, useState } from "react";

interface Player {
  name: string;
  score: number;
}

export function AnimatedScoreDiagram() {
  const players: Player[] = useMemo(
    () =>
      [
        { name: "Alice", score: 152 },
        { name: "Bob", score: 212 },
        { name: "Charlie", score: 280 },
        { name: "David", score: 320 },
      ].sort((a, b) => b.score - a.score), // Sort players by score in descending order
    []
  );

  const [animatedScores, setAnimatedScores] = useState(players.map(() => 0));

  const maxScore = Math.max(...players.map((p) => p.score), 1); // Avoid division by zero

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedScores((prevScores) =>
        prevScores.map((score, index) =>
          score < players[index].score ? score + 1 : players[index].score
        )
      );
    }, 25);

    return () => clearInterval(interval);
  }, [players]);

  return (
    <div className="space-y-2">
      {players.map((player, index) => (
        <div key={player.name} className="relative w-full h-10 rounded">
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
              {animatedScores[index] === player.score && (
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
