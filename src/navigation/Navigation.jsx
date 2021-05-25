import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from '../screens/HomeScreen'
import TodoScreen from "../screens/TodoScreen";
import TodoContextScreen from "../screens/TodoContextScreen";

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home 🗿" }}
        />
        <Stack.Screen
          name="TodoContext"
          component={TodoContextScreen}
          options={{ title: "Todo App" }}
        />
        <Stack.Screen
          name="Pokemon"
          component={PokemonScreen}
          options={{ title: "Pokemon App" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
