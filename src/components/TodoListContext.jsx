import React, { useReducer } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";

import { useTodo } from "../global/todoContext";

export default function List() {
  const { dispatch, state } = useTodo();

  return (
    <FlatList
      data={state}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          style={[styles.item, { backgroundColor: itemColor(index) }]}
          onPress={() => dispatch({ type: "remove", payload: item.id })}
        >
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

function itemColor(index) {
  return `rgba(233, 236, 241, ${Math.max(1 - index / 10, 0.4)})`;
}

const styles = StyleSheet.create({
  item: {
    marginBottom: 5,
    padding: 20,
  },
  title: {
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
  },
});
