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
  description?: string;
  information?: string[];
  price?: number; // Add price property
};

const allKniffel = [
  5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
  26, 27, 28, 29, 30,
];
const allKniffelMini = [
  3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
];
const allKniffelPlus = [
  6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
  26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
];

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
    price: 0, // Free
  },
  MiniKniffel: {
    name: "Mini-Kniffel",
    description:
      "Kompakte Version mit nur 3 Würfeln. Für schnelle und spannende Runden.",
    information: [
      "Mini-Kniffel ist eine vereinfachte Version des klassischen Kniffels mit folgenden Änderungen:",
      "• Es werden nur 3 Würfel statt 5 verwendet.",
      "• Die Kategorien sind reduziert und passen zu den 3 Würfeln.",
      "• Die Punktewerte sind niedriger, um die schnelle Spielweise zu unterstützen.",
      "• Der Bonus für die oberen Felder ist auf 15 Punkte (also jeweils zwei pro Zahl) festgelegt.",
    ],
    fields: [
      { key: "Vierer", label: "Vierer", options: [4, 8, 12] },
      { key: "Fünfer", label: "Fünfer", options: [5, 10, 15] },
      { key: "Sechser", label: "Sechser", options: [6, 12, 18] },
      { key: "Zweierpasch", label: "Zweierpasch", options: allKniffelMini },
      { key: "Tiny House", label: "Tiny House", options: [15] },
      { key: "Mini Straße", label: "Mini Straße", options: [20] },
      { key: "Mini Kniffel", label: "Mini Kniffel", options: [30] },
      { key: "Chance", label: "Chance", options: allKniffelMini },
    ],
    bonus: {
      label: "",
      fields: ["Dreier", "Vierer", "Fünfer", "Sechser"],
      minSum: 30,
      bonus: 15,
    },
    price: 1.99, // Example price
  },
  KniffelPlus: {
    name: "KniffelPlus",
    description:
      "Erweiterter Modus mit 6 Würfeln, spannenden Kategorien und viel mehr Punkten.",
    information: [
      "KniffelPlus unterscheidet sich vom klassischen Kniffel in folgenden Punkten:",
      "• Es werden 6 Würfel statt 5 verwendet.",
      "• Die Zahlenfelder (Einser bis Sechser) können höhere Summen erreichen.",
      "• Neue Kategorien wie 'Fünferpasch', 'Dreifach-Paar', 'Full Villa' (zwei mal drei gleiche) und 'Riesige Straße' kommen hinzu.",
      "• Der Kniffel+ ist mit 100 Punkten deutlich höher bewertet.",
      "• Die Anforderungen für den Bonus steigen (mindestens 84 Punkte in den oberen Feldern, also jeweils vier pro Zahl).",
    ],
    fields: [
      { key: "Einser", label: "Einser", options: [1, 2, 3, 4, 5, 6] },
      { key: "Zweier", label: "Zweier", options: [2, 4, 6, 8, 10, 12] },
      { key: "Dreier", label: "Dreier", options: [3, 6, 9, 12, 15, 18] },
      { key: "Vierer", label: "Vierer", options: [4, 8, 12, 16, 20, 24] },
      { key: "Fünfer", label: "Fünfer", options: [5, 10, 15, 20, 25, 30] },
      { key: "Sechser", label: "Sechser", options: [6, 12, 18, 24, 30, 36] },
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
      { key: "Dreifach-Paar", label: "Dreifach-Paar", options: [30] },
      { key: "Full Villa", label: "Full Villa", options: [45] },
      { key: "Große Straße", label: "Große Straße", options: [40] },
      { key: "Riesige Straße", label: "Riesige Straße", options: [55] },
      { key: "Kniffel+", label: "Kniffel+", options: [100] },
      {
        key: "Chance",
        label: "Chance",
        options: allKniffelPlus,
      },
    ],
    bonus: {
      label: "",
      fields: ["Einser", "Zweier", "Dreier", "Vierer", "Fünfer", "Sechser"],
      minSum: 84,
      bonus: 50,
    },
    price: 2.99, // Example price
  },
};
