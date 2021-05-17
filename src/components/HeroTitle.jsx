import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HeroTitle({ children }) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "rgba(233, 236, 241, 0.5)",
    padding: 15,
  },
  title: {
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    fontSize: 25,
  },
});
