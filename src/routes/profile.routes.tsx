import React from "react";

import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import ProfileHomeScreen from "@features/profile/screens/ProfileHomeSreen";

const { Navigator, Screen } = createNativeStackNavigator();

export type RootProfileRoutesList = {
  ProfileHomeScreen: undefined;
};

export type ProfileScreenNavigationProp =
  NativeStackNavigationProp<RootProfileRoutesList>;

export default function ProfileRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
    >
      <Screen name="ProfileHomeScreen" component={ProfileHomeScreen} />
    </Navigator>
  );
}
