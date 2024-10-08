import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LogoPage from "@/src/screens/LogoPage";
import Welcome from "@/src/screens/Welcome";
import SignUp from "@/src/screens/SignUp";
import SignIn from "@/src/screens/SignIn";
import Home from "@/src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthProvider } from "@/src/context/AuthContext";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <AuthProvider>
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="LogoPage">
          <Stack.Screen
            name="LogoPage"
            component={LogoPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  )
}

export default Navigation
