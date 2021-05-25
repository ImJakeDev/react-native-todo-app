import React from "react";
import { StyleSheet, Text, ScrollView, ActivityIndicator } from "react-native";

import HeroTitle from "../components/HeroTitle";
import ScreenLayouts from "../components/ScreenLayouts";

import usePokemonInfo from '../hooks/usePokemonInfo'

export default function TodoContext() {
  const { status, data, error, isFetching } = usePokemonInfo("caterpie");

  return (
    <ScreenLayouts image="jungle">
      <HeroTitle>Pokemons</HeroTitle>
      <ScrollView>
        {!isFetching ? (
          <Text style={styles.text}>{data.name}</Text>
        ) : (
          <ActivityIndicator size="large" />
        )}
      </ScrollView>
    </ScreenLayouts>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 20
  },
});