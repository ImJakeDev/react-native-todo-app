import * as React from "react";
import { ImageBackground, StyleSheet, Text, View, Button } from "react-native";

const image = {
  // uri: "https://images.unsplash.com/photo-1621146027714-e8921770f8d0",
  // uri: "https://images.unsplash.com/photo-1613058982958-49ce4bd14d1e",
  uri: "https://images.unsplash.com/photo-1550114535-9661885b0cf9",
};

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={image} style={styles.image}>
      <View style={styles.container}>
        <Text>🦧 This is Jake's React Native Todo app!</Text>
        <Button
          title="Go to Todo"
          onPress={() => navigation.navigate("Todo")}
        />
        <Button
          title="Go to Todo List with Context"
          onPress={() => navigation.navigate("TodoContext")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
