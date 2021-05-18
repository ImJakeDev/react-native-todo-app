import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";

import { useTodo } from "../global/todoContext";

import ToggleTodoTitle from "./ToggleTodoTitle";

export default function List() {
  const { dispatch, state } = useTodo();

  const handleEdit = () => {
    console.log("edit me please");
  };

  return (
    <FlatList
      data={state}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item, index }) => (
        <View style={[styles.item, { backgroundColor: itemColor(index) }]}>
          <ToggleTodoTitle
            title={item.title}
            isEditable={true}
            id={item.id}
            onSubmitEditing={(editedTodo) =>
              dispatch({ type: "EDIT_TODO", payload: editedTodo })
            }
          />
          <View style={styles.actions}>
            <Icon
              name="edit"
              type="font-awesome-5"
              color="gray"
              onPress={handleEdit}
            />
            <Icon
              name="trash-alt"
              type="font-awesome-5"
              color="#f50"
              onPress={() =>
                dispatch({ type: "REMOVE_TODO", payload: item.id })
              }
            />
          </View>
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
    marginBottom: 5,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
