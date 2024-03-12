import React from "react";

import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import SettingsHomeScreen from "@features/settings/screens/SettingsHomeScreen";
import Security from "@features/settings/screens/Security";

const { Navigator, Screen } = createNativeStackNavigator();

export type RootSettingsRoutesList = {
  Security: undefined;
};

export type SettingsScreenNavigationProp =
  NativeStackNavigationProp<RootSettingsRoutesList>;

export default function SettingsRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
    >
      <Screen name="Security" component={Security} />
    </Navigator>
  );
}
