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
  description?: string; // Add description for gamemode cards
};

const allKniffel = [
  5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
  26, 27, 28, 29, 30,
];
// const allKniffelMini = [
//   3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
// ];
const allKniffelPlus = [
  6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
  26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
];
// const allKniffelMega = [
//   8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
//   28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46,
//   47, 48,
// ];

export const gamemodes: Record<string, GamemodeConfig> = {
  Kniffel: {
    name: "Kniffel",
    description: "Das klassische Kniffel-Spiel.",
    fields: [
      { key: "Einser", label: "Einser", options: [1, 2, 3, 4, 5] },
      { key: "Zweier", label: "Zweier", options: [2, 4, 6, 8, 10] },
      { key: "Dreier", label: "Dreier", options: [3, 6, 9, 12, 15] },
      { key: "Vierer", label: "Vierer", options: [4, 8, 12, 16, 20] },
      { key: "Fünfer", label: "Fünfer", options: [5, 10, 15, 20, 25] },
      { key: "Sechser", label: "Sechser", options: [6, 12, 18, 24, 30] },
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
      { key: "Full House", label: "Full House", options: [25] },
      { key: "Kleine Straße", label: "Kleine Straße", options: [30] },
      { key: "Große Straße", label: "Große Straße", options: [40] },
      { key: "Kniffel", label: "Kniffel", options: [50] },
      { key: "Chance", label: "Chance", options: allKniffel },
    ],
    bonus: {
      label: "",
      fields: ["Einser", "Zweier", "Dreier", "Vierer", "Fünfer", "Sechser"],
      minSum: 63,
      bonus: 35,
    },
  },
  MiniKniffel: {
    name: "Mini-Kniffel",
    description:
      "Kompakte Version mit nur 3 Würfeln. Schnelle, spannende Runden.",
    fields: [
      { key: "Einser", label: "Einser", options: [1, 2, 3] },
      { key: "Zweier", label: "Zweier", options: [2, 4, 6] },
      { key: "Dreier", label: "Dreier", options: [3, 6, 9] },
      { key: "Kleines Full House", label: "Kleines Full House", options: [15] },
      { key: "Kleine Straße", label: "Kleine Straße", options: [20] },
      { key: "Kniffel Mini", label: "Kniffel Mini", options: [30] },
      { key: "Chance", label: "Chance", options: [3, 4, 5, 6, 7, 8, 9] },
    ],
    bonus: {
      label: "",
      fields: ["Einser", "Zweier", "Dreier"],
      minSum: 20,
      bonus: 10,
    },
  },
  KniffelPlus: {
    name: "KniffelPlus",
    description:
      "Erweiterter Modus mit 6 Würfeln, mehr Kategorien und Punkten.",
    fields: [
      { key: "Einser", label: "Einser", options: [1, 2, 3, 4, 5, 6] },
      { key: "Zweier", label: "Zweier", options: [2, 4, 6, 8, 10, 12] },
      { key: "Dreier", label: "Dreier", options: [3, 6, 9, 12, 15, 18] },
      { key: "Vierer", label: "Vierer", options: [4, 8, 12, 16, 20, 24] },
      { key: "Fünfer", label: "Fünfer", options: [5, 10, 15, 20, 25, 30] },
      { key: "Sechser", label: "Sechser", options: [6, 12, 18, 24, 30, 36] },
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
        options: allKniffelPlus,
      },
      { key: "Full House", label: "Full House", options: [25, 30] },
      { key: "Packed House", label: "Packed House", options: [35] },
      { key: "Kleine Straße", label: "Kleine Straße", options: [30, 35] },
      { key: "Große Straße", label: "Große Straße", options: [40, 45] },
      { key: "Kniffel", label: "Kniffel", options: [50, 60] },
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
  MegaKniffel: {
    name: "Mega-Kniffel",
    description: "Ein Modus mit 8 Würfeln – für Mega-Punkte und mehr Kombos!",
    fields: [
      { key: "Einser", label: "Einser", options: [1, 2, 3, 4, 5, 6, 7, 8] },
      { key: "Zweier", label: "Zweier", options: [2, 4, 6, 8, 10, 12, 14, 16] },
      {
        key: "Vierer",
        label: "Vierer",
        options: [4, 8, 12, 16, 20, 24, 28, 32],
      },
      {
        key: "Sechser",
        label: "Sechser",
        options: [6, 12, 18, 24, 30, 36, 42, 48],
      },
      { key: "Mega Straße", label: "Mega Straße", options: [50] },
      { key: "Super-Kniffel", label: "Super-Kniffel", options: [100] },
      {
        key: "Mega Chance",
        label: "Mega Chance",
        options: [10, 20, 30, 40, 50, 60, 70, 80],
      },
    ],
    bonus: {
      label: "",
      fields: ["Einser", "Zweier", "Vierer", "Sechser"],
      minSum: 120,
      bonus: 60,
    },
  },
};
