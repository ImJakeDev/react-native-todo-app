import React from "react";
import { StyleSheet, Text, FlatList, ActivityIndicator } from "react-native";

import usePokemonCards from "../../hooks/usePokemonCards";

export default function List() {
  const { status, data, error, isFetching } = usePokemonCards();

  return !isFetching ? (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Text style={styles.text}>
          {(JSON.stringify(item, null, 4))}
        </Text>
      )}
    />
  ) : (
    // <Text style={styles.text}>{JSON.stringify(data[0].id)}</Text>
    <ActivityIndicator size="large" />
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 20,
  },
});
