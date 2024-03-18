import { StatusBar } from "react-native";
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
import * as SecureStore from "expo-secure-store";

import theme from "./src/theme/theme/theme";
import { ThemeProvider } from "styled-components";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { SplashScreen } from "@features/SplashSccreen";
import { useEffect, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@global/config/react-query";
import Toast from "react-native-toast-message";
import Routes from "routes";

import { ILoggedInUserContext } from "@global/types/loggedInUserContext";
import { useAuth } from "@global/context/useAuth";

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

  const setUser = useAuth((state) => state.setUser);

  const [isLoading, setIsLoading] = useState(true);

  async function loadUser() {
    setIsLoading(true);
    try {
      const storedUser = await SecureStore.getItemAsync("AquaFLow.user");
      if (storedUser) {
        const user = JSON.parse(storedUser) as ILoggedInUserContext;
        setUser(user, true);
        setTimeout(() => {
          setIsLoading(false);
        }, 5000);
      } else {
        setTimeout(() => {
          setIsLoading(false);
        }, 5000);
      }
    } catch (error) {
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
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
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <StatusBar barStyle="dark-content" />

            <Routes />
            <Toast />
          </SafeAreaProvider>
        </NavigationContainer>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default gestureHandlerRootHOC(App);
