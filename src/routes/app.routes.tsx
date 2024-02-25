import React from "react";

import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";

import TabBar from "./TabBar";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import theme from "@theme/theme/theme";
import { HomeScreen } from "@features/home/screens/HomeScreen";

const Stack = createNativeStackNavigator();
const { Navigator, Screen } = createBottomTabNavigator();

export type RootAppRoutesList = {
  HomeScreenTab: undefined;
  AnalysisScreenTab: undefined;
  AlarmScreenTab: undefined;
  SettingsScreenTab: undefined;
  ProfileScreenTab: undefined;
};

export type AppScreenNavigationProp =
  BottomTabNavigationProp<RootAppRoutesList>;

export default function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name="AppRoutesTabs" component={AppRoutesTabs} />
      {/* <Stack.Screen name="ProfileRoutes" component={ProfileRoutes} />
      <Stack.Screen name="MealsRoutes" component={MealsRoutes} />
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
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Config.",
        }}
      />

      <Screen
        name="ProfileScreenTab"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Perfil",
        }}
      />
    </Navigator>
  );
}
