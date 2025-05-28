export type PointField = {
  key: string;
  label: string;
  options?: Array<number | string>;
};

export type BonusConfig = {
  label: string;
  fields: string[];
  minSum: number;
  bonus: number;
};

export type GamemodeConfig = {
  name: string;
  fields: PointField[];
  bonus?: BonusConfig;
};

const allKniffel = [
  5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
  26, 27, 28, 29, 30,
];

const allKniffelPlus = [
  6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
  26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
];

export const gamemodes: Record<string, GamemodeConfig> = {
  Kniffel: {
    name: "Kniffel",
    fields: [
      { key: "Einser", label: "Einser", options: [0, 1, 2, 3, 4, 5] },
      { key: "Zweier", label: "Zweier", options: [0, 2, 4, 6, 8, 10] },
      { key: "Dreier", label: "Dreier", options: [0, 3, 6, 9, 12, 15] },
      { key: "Vierer", label: "Vierer", options: [0, 4, 8, 12, 16, 20] },
      { key: "Fünfer", label: "Fünfer", options: [0, 5, 10, 15, 20, 25] },
      { key: "Sechser", label: "Sechser", options: [0, 6, 12, 18, 24, 30] },
      {
        key: "Dreierpasch",
        label: "Dreierpasch",
        options: allKniffel,
      },
      {
        key: "Viererpasch",
        label: "Viererpasch",
        options: allKniffel,
      },
      { key: "Full House", label: "Full House", options: [0, 25] },
      { key: "Kleine Straße", label: "Kleine Straße", options: [0, 30] },
      { key: "Große Straße", label: "Große Straße", options: [0, 40] },
      { key: "Kniffel", label: "Kniffel", options: [0, 50] },
      { key: "Chance", label: "Chance", options: allKniffel },
    ],
    bonus: {
      label: "",
      fields: ["Einser", "Zweier", "Dreier", "Vierer", "Fünfer", "Sechser"],
      minSum: 63,
      bonus: 35,
    },
  },
  "Kniffel+": {
    name: "Kniffel+",
    fields: [
      { key: "Einser", label: "Einser", options: [0, 1, 2, 3, 4, 5, 6] },
      { key: "Zweier", label: "Zweier", options: [0, 2, 4, 6, 8, 10, 12] },
      { key: "Dreier", label: "Dreier", options: [0, 3, 6, 9, 12, 15, 18] },
      { key: "Vierer", label: "Vierer", options: [0, 4, 8, 12, 16, 20, 24] },
      { key: "Fünfer", label: "Fünfer", options: [0, 5, 10, 15, 20, 25, 30] },
      { key: "Sechser", label: "Sechser", options: [0, 6, 12, 18, 24, 30, 36] },
      {
        key: "Dreierpasch",
        label: "Dreierpasch",
        options: allKniffelPlus,
      },
      {
        key: "Viererpasch",
        label: "Viererpasch",
        options: allKniffelPlus,
      },
      {
        key: "Fünferpasch",
        label: "Fünferpasch",
        options: [0, 25, 30, 35, 40, 45, 50],
      },
      { key: "Full House", label: "Full House", options: [0, 25, 30] },
      { key: "Packed House", label: "Packed House", options: [0, 35] },
      { key: "Kleine Straße", label: "Kleine Straße", options: [0, 30, 35] },
      { key: "Große Straße", label: "Große Straße", options: [0, 40, 45] },
      { key: "Kniffel", label: "Kniffel", options: [0, 50, 60] },
      {
        key: "Chance",
        label: "Chance",
        options: allKniffelPlus,
      },
    ],
    bonus: {
      label: "",
      fields: ["Einser", "Zweier", "Dreier", "Vierer", "Fünfer", "Sechser"],
      minSum: 90,
      bonus: 50,
    },
  },
};
