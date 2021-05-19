import React from 'react';
import { StyleSheet, View } from "react-native";
import { Icon } from "react-native-elements";

export default function TodoActions({ setIsEditable, item, dispatch }) {
  const handleEdit = () => {
    setIsEditable(true);
  };

  return (
    <View style={styles.actions}>
      <Icon
        color="gray"
        name="edit"
        type="font-awesome-5"
        onPress={() => handleEdit()}
      />
      <Icon
        color="#f50"
        name="trash-alt"
        type="font-awesome-5"
        onPress={() => dispatch({ type: "REMOVE_TODO", payload: item.id })}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  actions: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});