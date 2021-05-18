import React from "react";

import TodoListContext from "../components/TodoListContext";
import TodoInputContext from "../components/TodoInputContext";
import HeroTitle from "../components/HeroTitle";
import ScreenLayouts from "../components/ScreenLayouts";

export default function TodoContext() {
  return (
    <ScreenLayouts image="mountain">
      <HeroTitle>Contextual To-Do List ⛩</HeroTitle>
      <TodoInputContext placeholder={"Type a todo, then hit enter!"} />
      <TodoListContext />
    </ScreenLayouts>
  );
}
