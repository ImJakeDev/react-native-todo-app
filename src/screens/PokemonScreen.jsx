import React from "react";

import HeroTitle from "../components/HeroTitle";
import ScreenLayouts from "../components/ScreenLayouts";
import CardList from '../components/pokemon/CardList'

export default function TodoContext() {

  return (
    <ScreenLayouts image="jungle">
      <HeroTitle>Pokémon</HeroTitle>
      <CardList />
    </ScreenLayouts>
  );
}