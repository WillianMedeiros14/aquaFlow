import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import theme from "./src/theme/theme/theme";
import { ThemeProvider } from "styled-components";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { SplashScreen } from "@features/SplashSccreen";
import { useEffect, useState } from "react";
import { SignIn } from "@features/auth/SignIn";

const App = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  const [isLoading, setIsLoading] = useState(true);

  async function loadUser() {
    setIsLoading(true);
    try {
      // const storedUser = await SecureStore.getItemAsync("alimenteSeBem.user");
      // if (storedUser) {
      //   // const user = JSON.parse(storedUser) as IUser;
      //   // setUser(user, true);
      //   setIsLoading(false);
      // } else {
      //   setIsLoading(false);
      // }
      setTimeout(() => {
        setIsLoading(false);
      }, 10000);
    } catch (error) {
      setTimeout(() => {
        setIsLoading(false);
      }, 10000);
    }
  }

  useEffect(() => {
    loadUser();
    return () => {
      loadUser();
    };
  }, []);

  if (!fontsLoaded || isLoading) {
    return <SplashScreen />;
  }

  return (
    <ThemeProvider theme={theme}>
      <SignIn />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
};

export default gestureHandlerRootHOC(App);
