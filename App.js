import { StyleSheet, Text, View,StatusBar } from 'react-native'
import React from 'react'
import AuthStack from './src/Navigation/AuthStack'
import { UserProvider } from './src/UserProvider'
const App = () => {
  return (
   <>
    <StatusBar barStyle='dark-content' backgroundColor="white" />
    <UserProvider>
    <View style={{ flex: 1 }}>
      <AuthStack />
    </View>
  </UserProvider>
   </>
  )
}

export default App

const styles = StyleSheet.create({})