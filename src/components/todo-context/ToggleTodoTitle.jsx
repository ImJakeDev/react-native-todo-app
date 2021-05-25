import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

export default function ToggleTodoTitle({ title, id, isEditable, onSubmitEditing }) {
  const [text, setText] = useState(title);

  return (
    <View>
      {isEditable ? (
        <TextInput
          // style={styles.input}
          value={text}
          // placeholder={placeholder}
          onChangeText={(value) => setText(value)}
          onSubmitEditing={() => {
            if (!text) return; // Don't submit if empty
            onSubmitEditing({ id: id, title: text });
            setText("");
          }}
        />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
  },
});