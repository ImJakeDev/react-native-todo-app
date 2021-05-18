import React, { useReducer } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

import TodoList from '../components/TodoList';
import TodoInput from "../components/TodoInput";
import Title from "../components/Title";
import { actionCreators, reducer, initialState } from "../reducers/todos";

const image = {
  uri: "https://images.unsplash.com/photo-1621146027714-e8921770f8d0"
};

export default function Todo({ navigation }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ImageBackground source={image} style={styles.image}>
      <View style={{ flex: 1, padding: 20 }}>
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
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    borderColor: "rgba(233, 236, 241, 0.5)",
    borderWidth: 3,
    padding: 20,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});