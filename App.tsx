import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

import { useFonts } from "expo-font";
import RoutesConfig from "./src/routes/routesconfig";
import AuthProvider from "./src/context/auth";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins: require("./src/Fonts/Poppins/Poppins-Regular.ttf"),
  });

  return (
    <AuthProvider>
      <RoutesConfig />
    </AuthProvider>
  );
}
