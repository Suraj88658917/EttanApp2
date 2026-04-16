import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "../screens/authScreen/SplashScreen";
import LoginScreen from "../screens/authScreen/LoginScreen";
import RegisterScreen from "../screens/authScreen/RegisterScreen";
import TabNavigation from "../navigation/TabNavigation";
import SelectLanguageScreen from "../screens/authScreen/SelectLanguageScreen";
import OnboardingScreen from "../screens/authScreen/OnboardingScreen";
import PermissionScreen from "../screens/appScreen/PermissionScreen";
import ForgotScreen from "../screens/appScreen/ForgotScreen";
import NewPassword from "../screens/appScreen/NewPassword";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="SelectLanguageScreen" component={SelectLanguageScreen} />
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="PermissionScreen" component={PermissionScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="ForgotScreen" component={ForgotScreen} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
      <Stack.Screen name="MainApp" component={TabNavigation} />

    </Stack.Navigator>
  );
};

export default RootNavigator;