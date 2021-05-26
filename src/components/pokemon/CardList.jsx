import React from "react";
import { StyleSheet, FlatList, ActivityIndicator } from "react-native";

import usePokemonCards from "../../hooks/usePokemonCards";
import CardItem from "./CardItem";

export default function List() {
  const { status, data, error, isFetching } = usePokemonCards();

  return !isFetching ? (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <CardItem card={item}/>
      )}
    />
  ) : (
    <ActivityIndicator size="large" />
  );
}