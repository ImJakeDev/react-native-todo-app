import React from "react";

import TodoListContext from "../components/TodoListContext";
import TodoInputContext from "../components/TodoInputContext";
import Title from "../components/Title";
import ScreenLayouts from "../components/ScreenLayouts";

export default function TodoContext() {
  return (
    <ScreenLayouts image="mountain">
      <Title>Contextual To-Do List ⛩</Title>
      <TodoInputContext placeholder={"Type a todo, then hit enter!"} />
      <TodoListContext />
    </ScreenLayouts>
  );
}
