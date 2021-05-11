import React, { useReducer } from "react";
import { View } from "react-native";

import TodoList from '../components/TodoList';
import TodoInput from "../components/TodoInput";
import Title from "../components/Title";
import { actionCreators, reducer, initialState } from "../reducers/todos";

export default function Todo({ navigation }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <View>
      <Title>To-Do List 🌋</Title>
      <TodoInput
        placeholder={"Type a todo, then hit enter!"}
        onSubmitEditing={(title) => dispatch(actionCreators.add(title))}
      />
      <TodoList
        items={state.items}
        onPressItem={(id) => dispatch(actionCreators.remove(id))}
      />
    </View>
  );
}