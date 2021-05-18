import * as React from "react";
import { StyleSheet, View } from "react-native";

import NewButton from '../components/Button'
import HeroTitle from "../components/HeroTitle";
import ScreenLayouts from "../components/ScreenLayouts";

export default function HomeScreen({ navigation }) {
  return (
    <ScreenLayouts image="tree">
        <View style={{ flex: 1 }}>
          <HeroTitle>🦧 This is Jake's React Native Todo app!</HeroTitle>
        </View>
        <View style={styles.container}>
          <NewButton
            title="Go to Todo"
            onPress={() => navigation.navigate("Todo")}
          />
          <NewButton
            title="Go to Todo List with Context"
            onPress={() => navigation.navigate("TodoContext")}
          />
        </View>
    </ScreenLayouts>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    borderColor: "rgba(233, 236, 241, 0.5)",
    borderWidth: 3,
    padding: 20
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
