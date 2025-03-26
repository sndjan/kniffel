"use client";

import Header from "@/components/Header";
import { useKniffel } from "@/components/hooks/useKniffel";
import Tracker from "@/components/Tracker";

export default function Home() {
  const {
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
  } = useKniffel();

  return (
    <>
      <Header
        players={players}
        resetAll={resetAll}
        resetAllPoints={resetAllPoints}
      ></Header>
      <Tracker
        players={players}
        addPlayer={addPlayer}
        updatePoints={updatePoints}
        resetPoints={resetPoints}
        removePlayer={removePlayer}
        changeName={changeName}
        moveToRight={moveToRight}
        moveToLeft={moveToLeft}
      ></Tracker>
    </>
  );
}
