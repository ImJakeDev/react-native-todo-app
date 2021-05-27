import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  Platform,
} from "react-native";

export default function CardItem({card}) {
  const [isLoading, setIsLoading] = useState(true)
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.text}>{JSON.stringify(card.name)}</Text>
        <Text style={styles.text}>
          {isLoading ? "____isLoading = True" : "_____isLoading = False"}
        </Text>
      </View>
      <View style={styles.wrapper}>
        {isLoading && (
          <ActivityIndicator style={styles.absoluteFill} size={"large"} />
        )}
        <Image
          style={styles.image}
          source={{
            uri: card.images.small,
          }}
          onLoad={() => setIsLoading(false)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  wrapper: {
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 17,
    flex: 1,
    height: 520,
    aspectRatio: Platform.OS === "ios" ? 0.72 : 0.7,
  },
  image: {
    flex: 1,
    resizeMode: "stretch",
    borderRadius: Platform.OS === "ios" ? 17 : 10,
  },
  absoluteFill: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
});