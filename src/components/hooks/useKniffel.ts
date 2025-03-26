import { useEffect, useState } from "react";

export type Player = {
  id: number;
  name: string;
  points: Points;
};

export type Points = {
  Einser: number;
  Zweier: number;
  Dreier: number;
  Vierer: number;
  Fünfer: number;
  Sechser: number;
  Dreierpasch: number;
  Viererpasch: number;
  "Full House": number;
  "Kleine Straße": number;
  "Große Straße": number;
  Kniffel: number;
  Chance: number;
};

export const useKniffel = () => {
  const [players, setPlayers] = useState<Player[]>(() => {
    const savedPlayers = localStorage.getItem("players");
    return savedPlayers ? JSON.parse(savedPlayers) : [];
  });

  useEffect(() => {
    localStorage.setItem("players", JSON.stringify(players));
  }, [players]);

  const addPlayer = (name: string) => {
    setPlayers((prevPlayers) => [
      ...prevPlayers,
      {
        id: Date.now(),
        name,
        points: {
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
        },
      },
    ]);
  };

  const updatePoints = (playerId: number, points: Partial<Points>) => {
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
              points: {
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
              },
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
      const [player] = newPlayers.splice(index, 1);
      newPlayers.splice(index + 1, 0, player);
      return newPlayers;
    });
  };

  const moveToLeft = (playerId: number) => {
    setPlayers((prevPlayers) => {
      const index = prevPlayers.findIndex((player) => player.id === playerId);
      if (index <= 0) return prevPlayers;

      const newPlayers = [...prevPlayers];
      const [player] = newPlayers.splice(index, 1);
      newPlayers.splice(index - 1, 0, player);
      return newPlayers;
    });
  };

  const resetAllPoints = () => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) => ({
        ...player,
        points: {
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
        },
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
