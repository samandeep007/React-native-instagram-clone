import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

export default function App() {
  return (
    <SafeAreaView>
    <View>
      <Text>App</Text>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})