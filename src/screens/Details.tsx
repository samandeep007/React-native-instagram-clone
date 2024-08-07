import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Details() {
  return (
    <View>
      <Text>Details</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: '#fff',
       alignItems: 'center',
       justifyContent: 'center',
    },

    smallText: {
       color: "#000000",
    }
})