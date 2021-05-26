import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function CardItem({card}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{JSON.stringify(card.name, null, 4)}</Text>
      <Image
        style={styles.image}
        source={{
          uri: card.images.large,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // resizeMode: "cover",
    justifyContent: "center",
    alignContent: "center"
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  image: {
    width: 300,
    height: 400,
  },
});