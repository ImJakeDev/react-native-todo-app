import { StatusBar } from 'expo-status-bar';
import "react-native-gesture-handler";
import * as React from "react";

import Navigation from "./navigation/Navigation";

import { TodoProvider } from "./global/todoContext";

export default function App() {
  return (
    <TodoProvider>
      <Navigation/>
      <StatusBar style="auto" />
    </TodoProvider>
  );
}
