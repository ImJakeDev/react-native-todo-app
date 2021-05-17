import * as React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

import NewButton from '../components/Button'
import HeroTitle from "../components/HeroTitle";

const image = {
  // uri: "https://images.unsplash.com/photo-1621146027714-e8921770f8d0",
  // uri: "https://images.unsplash.com/photo-1613058982958-49ce4bd14d1e",
  uri: "https://images.unsplash.com/photo-1550114535-9661885b0cf9",
};

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={image} style={styles.image}>
      <View style={{ flex: 1, padding: 20 }}>
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
      </View>
    </ImageBackground>
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
