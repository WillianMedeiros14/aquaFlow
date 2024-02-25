// import React from "react";

// import {
//   createNativeStackNavigator,
//   NativeStackNavigationProp,
// } from "@react-navigation/native-stack";
// import SignIn from "../features/auth/screen/SignIn";
// import Onboarding from "../features/onboarding/screens/Onboarding";
// import SignUp from "../features/auth/screen/SignUp";
// import { TermsOfUse } from "../features/TermsOfUseAndPrivacyPolicies/screens/TermsOfUse";
// import { PrivacyPolicies } from "../features/TermsOfUseAndPrivacyPolicies/screens/PrivacyPolicies";

// const { Navigator, Screen } = createNativeStackNavigator();

// export type IAuthScreens =
//   | "Onboarding"
//   | "SignIn"
//   | "SingUp"
//   | "ForgotPassword";

// export type RootAuthRoutesList = {
//   Onboarding: undefined;
//   SignIn: undefined;
//   SignUp: undefined;
//   ForgotPassword: undefined;
//   TermsOfUse: undefined;
//   PrivacyPolicies: undefined;
// };

// export type AuthScreenNavigationProp =
//   NativeStackNavigationProp<RootAuthRoutesList>;

// export default function AuthRoutes() {
//   return (
//     <Navigator
//       initialRouteName="Onboarding"
//       screenOptions={{
//         headerShown: false,
//         animation: "slide_from_right",
//       }}
//     >
//       <Screen name="Onboarding" component={Onboarding} />
//       <Screen name="SignIn" component={SignIn} />
//       <Screen name="SignUp" component={SignUp} />
//       <Screen name="TermsOfUse" component={TermsOfUse} />
//       <Screen name="PrivacyPolicies" component={PrivacyPolicies} />
//     </Navigator>
//   );
// }
