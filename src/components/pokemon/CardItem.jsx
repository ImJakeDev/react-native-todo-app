import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  Platform,
} from "react-native";

export default function CardItem({card}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{JSON.stringify(card.name, null, 4)}</Text>
      <View
        style={styles.wrapper}
      >
        <Image
          style={styles.image}
          source={{
            uri: card.images.large,
          }}
          onLoad={() => <ActivityIndicator size="large" />}
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
});