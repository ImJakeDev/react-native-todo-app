import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

import { useTodo } from "../global/todoContext";

export default function TodoInputContext({ placeholder }) {
  const [text, setText] = useState("");
  const { dispatch } = useTodo();

  return (
    <TextInput
      style={styles.input}
      value={text}
      placeholder={placeholder}
      onChangeText={(value) => setText(value)}
      onSubmitEditing={() => {
        if (!text) return; // Don't submit if empty
        dispatch({ type: "add", payload: text });
        setText("");
      }}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    height: 50,
  },
});
