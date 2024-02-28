import React, { useMemo } from "react";

import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";

import TabBar from "./TabBar";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import theme from "@theme/theme/theme";
import { HomeScreen } from "@features/home/screens/HomeScreen";
import ProfileRoutes from "./profile.routes";
import ProfileHomeScreen from "@features/profile/screens/ProfileHomeSreen";
import { useAuth } from "@global/context/useAuth";
import { useGetUserDetails } from "@features/profile/hooks/useGetUserDetails";
import CompleteProfileHome from "@features/completeProfile/screens/CompleteProfileHome";
import SettingsHomeScreen from "@features/settings/screens/SettingsHomeScreen";

const Stack = createNativeStackNavigator();
const { Navigator, Screen } = createBottomTabNavigator();

export type RootAppRoutesList = {
  HomeScreenTab: undefined;
  AnalysisScreenTab: undefined;
  AlarmScreenTab: undefined;
  SettingsScreenTab: undefined;
  ProfileScreenTab: undefined;
  CompleteProfileHome: undefined;
};

export type AppScreenNavigationProp =
  BottomTabNavigationProp<RootAppRoutesList>;

export default function AppRoutes() {
  const user = useAuth((state) => state.user);

  const { data, isLoading, isRefetching } = useGetUserDetails({
    userId: user?.uid,
    isEnabled: true,
  });

  const verify = useMemo(() => {
    if (data?.gender !== undefined && data?.gender !== null) {
      return true;
    } else {
      return false;
    }
  }, [data, isLoading, isRefetching]);

  if (!verify) {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen
          name="CompleteProfileHome"
          component={CompleteProfileHome}
        />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name="AppRoutesTabs" component={AppRoutesTabs} />
      <Stack.Screen name="ProfileRoutes" component={ProfileRoutes} />

      {/* <Stack.Screen name="MealsRoutes" component={MealsRoutes} />
      <Stack.Screen name="ShoppingListRoutes" component={ShoppingListRoutes} />
      <Screen name="TermsOfUse" component={TermsOfUse} />
      <Screen name="PrivacyPolicies" component={PrivacyPolicies} /> */}
    </Stack.Navigator>
  );
}

export function AppRoutesTabs() {
  return (
    <Navigator
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        tabBarStyle: { paddingTop: 14, paddingBottom: 14, display: "none" },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Screen
        name="HomeScreenTab"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Início",
        }}
      />

      <Screen
        name="AnalysisScreenTab"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Análise",
        }}
      />

      <Screen
        name="AlarmScreenTab"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />

      <Screen
        name="SettingsScreenTab"
        component={SettingsHomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Config.",
        }}
      />

      <Screen
        name="ProfileScreenTab"
        component={ProfileHomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Perfil",
        }}
      />
    </Navigator>
  );
}
