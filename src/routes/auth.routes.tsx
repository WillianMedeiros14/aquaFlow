import React from "react";

import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import Onboarding from "@features/onboarding/screens/Onboarding";
import SignIn from "@features/auth/screens/SignIn";
import SignUp from "@features/auth/screens/SignUp";

const { Navigator, Screen } = createNativeStackNavigator();

export type IAuthScreens =
  | "Onboarding"
  | "SignIn"
  | "SingUp"
  | "ForgotPassword";

export type RootAuthRoutesList = {
  Onboarding: undefined;
  SignIn: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  TermsOfUse: undefined;
  PrivacyPolicies: undefined;
};

export type AuthScreenNavigationProp =
  NativeStackNavigationProp<RootAuthRoutesList>;

export default function AuthRoutes() {
  return (
    <Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
    >
      <Screen name="Onboarding" component={Onboarding} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
      {/* <Screen name="TermsOfUse" component={TermsOfUse} />
      <Screen name="PrivacyPolicies" component={PrivacyPolicies} /> */}
    </Navigator>
  );
}
