import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";

import { useTodo } from "../global/todoContext";

export default function List() {
  const { dispatch, state } = useTodo();

  return (
    <FlatList
      data={state}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item, index }) => (
        <View style={[styles.item, { backgroundColor: itemColor(index) }]}>
          <Text style={styles.title}>{item.title}</Text>
          <Icon
            name="trash-alt"
            type="font-awesome-5"
            color="#f50"
            onPress={() => dispatch({ type: "REMOVE_TODO", payload: item.id })}
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
});
