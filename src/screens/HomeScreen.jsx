import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>🦧 This is Jake's React Native Todo app!</Text>
      <Button title="Go to Todo" onPress={() => navigation.navigate("Todo")} />
      <Button
        title="Go to Todo List with Context"
        onPress={() => navigation.navigate("TodoContext")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});