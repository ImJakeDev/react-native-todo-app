import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

import TodoListContext from "../components/TodoListContext";
import TodoInputContext from "../components/TodoInputContext";
import Title from "../components/Title";

const image = {
  uri: "https://images.unsplash.com/photo-1613058982958-49ce4bd14d1e"
};

export default function TodoContext() {
  return (
    <ImageBackground source={image} style={styles.image}>
      <View style={{ flex: 1, padding: 20 }}>
        <Title>Contextual To-Do List ⛩</Title>
        <TodoInputContext placeholder={"Type a todo, then hit enter!"} />
        <TodoListContext />
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