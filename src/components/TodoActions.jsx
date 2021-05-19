import React from 'react';
import { StyleSheet, View, Text } from "react-native";
import { Icon } from "react-native-elements";

export default function TodoActions({ dispatch, isEditable, item, setIsEditable }) {
  const handleEdit = () => {
    setIsEditable(true);
  };

  return (
    <View>
      {!isEditable ? (
        <View style={styles.actions}>
          <Icon
            color="gray"
            name="edit"
            type="font-awesome-5"
            style={styles.icon}
            onPress={() => handleEdit()}
          />
          <Icon
            color="#f50"
            name="trash-alt"
            type="font-awesome-5"
            style={styles.icon}
            onPress={() => dispatch({ type: "REMOVE_TODO", payload: item.id })}
          />
        </View>
      ) : (
        <Text>🙈</Text>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  actions: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    marginLeft: 10
  }
});