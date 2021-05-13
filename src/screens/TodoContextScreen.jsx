import React from "react";
import { View } from "react-native";

import TodoListContext from "../components/TodoListContext";
import TodoInputContext from "../components/TodoInputContext";
import Title from "../components/Title";

import { TodoProvider } from "../global/todoContext";

export default function TodoContext() {
  return (
    <View>
      <Title>Contextual To-Do List ⛩</Title>
      <TodoProvider>
        <TodoInputContext
          placeholder={"Type a todo, then hit enter!"}
        />
        <TodoListContext />
      </TodoProvider>
    </View>
  );
}
