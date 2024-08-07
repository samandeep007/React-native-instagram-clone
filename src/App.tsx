import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

// Navigation Modules 
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Screens
import Home from './screens/Home';
import Details from './screens/Details'
import { Screen } from 'react-native-screens'

export type RootStackParamList = {
  Home: undefined; //will expect nothing
  Details: { productId: string }
}

const Stack = createNativeStackNavigator<RootStackParamList>(); //Stack Navigator




export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={Home} options={{ title: "Trending Products", headerStyle: {backgroundColor: "black"}, headerTitleStyle: {color: "#fff", fontSize: 20, fontWeight: "600" } }} />
          <Stack.Screen name='Details' component={Details} options={{ title: "Product Details" }} />
        </Stack.Navigator>

      </NavigationContainer>
  )
}

const styles = StyleSheet.create({})