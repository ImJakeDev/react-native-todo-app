import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";

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
          <View></View>
          <Text style={styles.title}>{item.title}</Text>
          <Icon
            raised
            name="heartbeat"
            type="font-awesome"
            color="#f50"
            onPress={() => console.log("hello")}
          />
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
