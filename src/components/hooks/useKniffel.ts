import { useState } from "react";
import { Player, Points } from "./types";

const initialPoints = {
  Einser: 0,
  Zweier: 0,
  Dreier: 0,
  Vierer: 0,
  Fünfer: 0,
  Sechser: 0,
  Dreierpasch: 0,
  Viererpasch: 0,
  "Full House": 0,
  "Kleine Straße": 0,
  "Große Straße": 0,
  Kniffel: 0,
  Chance: 0,
};

export const useKniffel = () => {
  const [players, setPlayers] = useState<Player[]>([
    {
      id: Date.now(),
      name: "Player 1",
      points: initialPoints,
    },
    {
      id: Date.now() + 1,
      name: "Player 2",
      points: initialPoints,
    },
  ]);

  const addPlayer = (name: string) => {
    setPlayers((prevPlayers) => [
      ...prevPlayers,
      {
        id: Date.now(),
        name,
        points: initialPoints,
      },
    ]);
  };

  const updatePoints = (playerId: number, points: Partial<Points>) => {
    console.log("Updating points for player:", playerId, points);
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        player.id === playerId
          ? { ...player, points: { ...player.points, ...points } }
          : player
      )
    );
  };

  const resetPoints = (playerId?: number) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        playerId === undefined || player.id === playerId
          ? {
              ...player,
              points: initialPoints,
            }
          : player
      )
    );
  };

  const removePlayer = (playerId: number) => {
    setPlayers((prevPlayers) =>
      prevPlayers.filter((player) => player.id !== playerId)
    );
  };

  const changeName = (playerId: number, newName: string) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        player.id === playerId ? { ...player, name: newName } : player
      )
    );
  };

  const moveToRight = (playerId: number) => {
    setPlayers((prevPlayers) => {
      const index = prevPlayers.findIndex((player) => player.id === playerId);
      if (index === -1 || index === prevPlayers.length - 1) return prevPlayers;

      const newPlayers = [...prevPlayers];
      const player = newPlayers[index];
      newPlayers.splice(index, 1);
      newPlayers.splice(index + 1, 0, player);
      return newPlayers;
    });
  };

  const moveToLeft = (playerId: number) => {
    setPlayers((prevPlayers) => {
      const index = prevPlayers.findIndex((player) => player.id === playerId);
      if (index <= 0) return prevPlayers;

      const newPlayers = [...prevPlayers];
      const player = newPlayers[index];
      newPlayers.splice(index, 1);
      newPlayers.splice(index - 1, 0, player);
      return newPlayers;
    });
  };

  const resetAllPoints = () => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) => ({
        ...player,
        points: initialPoints,
      }))
    );
  };

  const resetAll = () => {
    setPlayers([]);
  };

  return {
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
  };
};
