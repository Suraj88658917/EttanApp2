import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "../screens/authScreen/SplashScreen"
import LoginScreen from "../screens/authScreen/LoginScreen";
import RegisterScreen from "../screens/authScreen/RegisterScreen";
import TabNavigation from "../navigation/TabNavigation";
import SelectLanguageScreen from "../screens/authScreen/SelectLanguageScreen";
import OnboardingScreen from "../screens/authScreen/OnboardingScreen";
import PermissionScreen from "../screens/authScreen/PermissionScreen";
import ForgotScreen from "../screens/authScreen/ForgotScreen";
import NewPassword from "../screens/authScreen/NewPassword";
import OTPScreen from "../screens/authScreen/OTPScreen";
import OTPVerify from "../screens/authScreen/OTPVerify";

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
      <Stack.Screen name="OTPScreen" component={OTPScreen} />

      <Stack.Screen name="OTPVerify" component={OTPVerify} />

      <Stack.Screen name="MainApp" component={TabNavigation} />

    </Stack.Navigator>
  );
};

export default RootNavigator;