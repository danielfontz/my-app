import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { FPassword, SignIn, SignUp } from "@screens/"
import DetailsModal from './src/components/modal';

const Stack = createNativeStackNavigator()

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={FPassword} />
      <Stack.Group screenOptions={{ 
        presentation: "transparentModal", animation: "slide_from_bottom" }}>
        <Stack.Screen
          name='DetailsModal' 
          component={DetailsModal} 
          options={{ headerShown: false }} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack/>
    </NavigationContainer>
  )
}