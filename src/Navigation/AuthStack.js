import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import ForgotPassWord from '../Screens/ForgotPassWord';
import InitialAuth from '../Screens/InitialAuth';
const AuthStack = () => {
const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      
    <Stack.Navigator>
    <Stack.Screen name="initialScreen" component={InitialAuth} 
      options={{headerShown:false}}
      />
      <Stack.Screen name="login" component={LoginScreen} 
      options={{headerShown:false}}
      />
      <Stack.Screen name="Register" component={RegisterScreen}
      options={{headerShown:false}}
      />
      <Stack.Screen name="Forgotpassword" component={ForgotPassWord} 
      options={{headerShown:false}}
      />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default AuthStack

