import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../pages/Home/home";
import { Login } from "../pages/Login";
import { ContainerMovie } from "../pages/ContainerMovie";

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="movie" component={ContainerMovie} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
