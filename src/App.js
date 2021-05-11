import { StatusBar } from 'expo-status-bar';
import "react-native-gesture-handler";
import * as React from "react";

import Navigation from "./navigation/Navigation";

export default function App() {
  return (
    <>
      <Navigation/>
      <StatusBar style="auto" />
    </>
  );
}
