import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Todo({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Details Screen 🦙</Text>
      <Button
        title="Go Home homie"
        onPress={() => navigation.navigate("Home")}
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
