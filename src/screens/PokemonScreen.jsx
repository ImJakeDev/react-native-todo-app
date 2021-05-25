import React from "react";

import HeroTitle from "../components/HeroTitle";
import ScreenLayouts from "../components/ScreenLayouts";

export default function TodoContext() {
  return (
    <ScreenLayouts image="jungle">
      <HeroTitle>Pokemons</HeroTitle>
    </ScreenLayouts>
  );
}
