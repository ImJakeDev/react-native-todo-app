import React from "react";
import { View } from "react-native";

import TodoListContext from "../components/TodoListContext";
import TodoInput from "../components/TodoInput";
import Title from "../components/Title";
import { actionCreators } from "../reducers/todos";

import { TodoProvider } from "../global/todoContext";

export default function TodoContext() {
  return (
    <View>
      <Title>Contextual To-Do List ⛩</Title>
      <TodoProvider>
        <TodoInput
          placeholder={"Type a todo, then hit enter!"}
          onSubmitEditing={(title) => dispatch(actionCreators.add(title))}
        />
        <TodoListContext />
      </TodoProvider>
    </View>
  );
}
