import React from "react";
import { ImageBackground, View, StyleSheet } from "react-native";

const whichImage = (image) => {
  switch (image) {
    case "jungle":
      return {
        uri: "https://images.unsplash.com/photo-1621146027714-e8921770f8d0",
      };
    case "mountain":
      return {
        uri: "https://images.unsplash.com/photo-1613058982958-49ce4bd14d1e",
      };
    case "tree":
      return {
        uri: "https://images.unsplash.com/photo-1550114535-9661885b0cf9",
      };
    default:
      return {
        uri: "https://images.unsplash.com/photo-1550114535-9661885b0cf9",
      };
  }
}

export default function Button({ image, children }) {
  return (
    <ImageBackground source={whichImage(image)} style={styles.image}>
      <View style={{ flex: 1, padding: 20 }}>{children}</View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});