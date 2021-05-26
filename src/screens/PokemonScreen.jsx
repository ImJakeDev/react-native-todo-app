import React from "react";
import { StyleSheet } from "react-native";

import HeroTitle from "../components/HeroTitle";
import ScreenLayouts from "../components/ScreenLayouts";
import CardList from '../components/pokemon/CardList'

export default function TodoContext() {
  return (
    <ScreenLayouts image="jungle" style={styles.container}>
      <HeroTitle>Pokémon</HeroTitle>
      <CardList />
    </ScreenLayouts>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
  },
});