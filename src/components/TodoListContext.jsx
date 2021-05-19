import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { useTodo } from "../global/todoContext";
import TodoItem from "./TodoItem";

export default function List() {
  const { dispatch, state } = useTodo();

  return (
    <FlatList
      data={state}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item, index }) => (
        <TodoItem
          item={item}
          index={index}
          dispatch={dispatch}
          itemColor={itemColor}
        />
      )}
    />
  );
}

function itemColor(index) {
  return `rgba(233, 236, 241, ${Math.max(1 - index / 10, 0.4)})`;
}

const styles = StyleSheet.create({
  item: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    padding: 20,
  },
  title: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
  },
});
