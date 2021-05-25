import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import Navigation from "./navigation/Navigation";

import { TodoProvider } from "./global/todoContext";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TodoProvider>
        <Navigation />
        <StatusBar style="auto" />
      </TodoProvider>
    </QueryClientProvider>
  );
}
