import React from "react";
import { View } from "react-native";

import TodoListContext from "../components/TodoListContext";
import TodoInputContext from "../components/TodoInputContext";
import Title from "../components/Title";

export default function TodoContext() {
  return (
    <View>
      <Title>Contextual To-Do List ⛩</Title>
      
        <TodoInputContext
          placeholder={"Type a todo, then hit enter!"}
        />
        <TodoListContext />
      
    </View>
  );
}
