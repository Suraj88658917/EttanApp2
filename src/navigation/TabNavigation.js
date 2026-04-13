import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ProfileScreen from "../screens/appScreen/ProfileScreen";
import DetailsScreen from "../screens/appScreen/DetailsScreen";
import HomeScreen from "../screens/appScreen/HomeScreen";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
        },
      }}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
      <Tab.Screen name="DetailsScreen" component={DetailsScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;