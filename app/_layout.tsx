import { Slot, Stack } from "expo-router";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/query-client";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LogBox } from "react-native";
import "../assets/global.css";

// Ignore harmless warnings from dependencies
LogBox.ignoreLogs([
  "SafeAreaView has been deprecated",
]);

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="+not-found" />
        </Stack>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}