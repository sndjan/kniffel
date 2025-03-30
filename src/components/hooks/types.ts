export type Player = {
  id: number;
  name: string;
  points: Points;
};

export type Points = {
  Einser: number | "X";
  Zweier: number | "X";
  Dreier: number | "X";
  Vierer: number | "X";
  Fünfer: number | "X";
  Sechser: number | "X";
  Dreierpasch: number | "X";
  Viererpasch: number | "X";
  "Full House": number | "X";
  "Kleine Straße": number | "X";
  "Große Straße": number | "X";
  Kniffel: number | "X";
  Chance: number | "X";
};
