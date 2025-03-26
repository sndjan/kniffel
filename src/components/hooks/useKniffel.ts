import { useState } from "react";

export interface Player {
  id: number;
  name: string;
  points: Points;
}

export interface Points {
  Eins: 0 | 1 | 2 | 3 | 4 | 5;
  Zwei: 0 | 2 | 4 | 6 | 8 | 10;
  Drei: 0 | 3 | 6 | 9 | 12 | 15;
  Vier: 0 | 4 | 8 | 12 | 16 | 20;
  Fünf: 0 | 5 | 10 | 15 | 20 | 25;
  Sechs: 0 | 6 | 12 | 18 | 24 | 30;
  SummeOben:
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24
    | 25
    | 26
    | 27
    | 28
    | 29
    | 30;
  DreierPasch:
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24
    | 25
    | 26
    | 27
    | 28
    | 29
    | 30;
  ViererPasch:
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24
    | 25
    | 26
    | 27
    | 28
    | 29
    | 30;
  FullHouse: 0 | 25;
  KleineStraße: 0 | 30;
  GroßeStraße: 0 | 40;
  Kniffel: 0 | 50;
  Chance:
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24
    | 25
    | 26
    | 27
    | 28
    | 29
    | 30;
}

export const useKniffel = () => {
  const [players, setPlayers] = useState<Player[]>([]);

  const addPlayer = (name: string) => {
    setPlayers((prevPlayers) => [
      ...prevPlayers,
      {
        id: Date.now(),
        name,
        points: {
          Eins: 0,
          Zwei: 0,
          Drei: 0,
          Vier: 0,
          Fünf: 0,
          Sechs: 0,
          SummeOben: 0,
          DreierPasch: 0,
          ViererPasch: 0,
          FullHouse: 0,
          KleineStraße: 0,
          GroßeStraße: 0,
          Kniffel: 0,
          Chance: 0,
        },
      },
    ]);
  };

  const updatePoints = (
    playerId: number,
    points: Partial<Player["points"]>
  ) => {
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
                Eins: 0,
                Zwei: 0,
                Drei: 0,
                Vier: 0,
                Fünf: 0,
                Sechs: 0,
                SummeOben: 0,
                DreierPasch: 0,
                ViererPasch: 0,
                FullHouse: 0,
                KleineStraße: 0,
                GroßeStraße: 0,
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
          Eins: 0,
          Zwei: 0,
          Drei: 0,
          Vier: 0,
          Fünf: 0,
          Sechs: 0,
          SummeOben: 0,
          DreierPasch: 0,
          ViererPasch: 0,
          FullHouse: 0,
          KleineStraße: 0,
          GroßeStraße: 0,
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
