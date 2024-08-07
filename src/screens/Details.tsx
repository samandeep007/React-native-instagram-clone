import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

import {useNavigation} from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'


type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;


export default function Details({route}: DetailsProps) {
  const {productId} = route.params;
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View>
      <Text style={styles.smallText}>{productId}</Text>
      {/* <Button onPress={() => navigation.goBack()} title="Go to HOME"/> */}
      {/* <Button onPress={() => navigation.pop(1)} title="Go to HOME"/> */}
      <Button onPress={() => navigation.popToTop()} title="Go to HOME"/>
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
       padding: 20,
       fontSize: 28,
       fontWeight: "600",
       textAlign: "center"
    }
})