import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

import { useTodo } from "../../global/todoContext";

export default function TodoInputContext({ placeholder }) {
  const [text, setText] = useState("");
  const { dispatch } = useTodo();

  return (
    <TextInput
      style={styles.input}
      value={text}
      placeholder={placeholder}
      placeholderTextColor="rgba(233, 236, 241, 1)"
      onChangeText={(value) => setText(value)}
      onSubmitEditing={() => {
        if (!text) return; // Don't submit if empty
        dispatch({ type: "ADD_TODO", payload: text });
        setText("");
      }}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: "rgba(233, 236, 241, 0.5)",
    borderWidth: 3,
    padding: 15,
    height: 50,
    marginTop: 10,
    marginBottom: 10,
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
  },
});
