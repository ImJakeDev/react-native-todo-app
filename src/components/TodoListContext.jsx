import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { useTodo } from "../global/todoContext";

import ToggleTodoTitle from "./ToggleTodoTitle";
import TodoActions from "./TodoActions";

export default function List() {
  const { dispatch, state } = useTodo();
  const [isEditable, setIsEditable] = useState(false);

  return (
    <FlatList
      data={state}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item, index }) => (
        <View style={[styles.item, { backgroundColor: itemColor(index) }]}>
          <ToggleTodoTitle
            id={item.id}
            isEditable={isEditable}
            title={item.title}
            onSubmitEditing={(editedTodo) => {
              dispatch({ type: "EDIT_TODO", payload: editedTodo });
              setIsEditable(false);
            }}
          />
          <TodoActions
            dispatch={dispatch}
            item={item}
            setIsEditable={setIsEditable}
          />
        </View>
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
