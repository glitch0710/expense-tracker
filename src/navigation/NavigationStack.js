import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LandingScreen from "../screens/LandingScreen";

const Stack = createNativeStackNavigator();

const NavigationStack = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="LandingScree"
          component={LandingScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
