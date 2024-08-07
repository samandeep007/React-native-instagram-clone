import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'


type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;



export default function Home({ navigation }: HomeProps) {
    return (


        <ScrollView contentContainerStyle={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={{ flexDirection: "row", gap: 1 }}>

                    <Pressable style={styles.product} onPress={() => Alert.alert("Hello", "Your story is not available right now")}>
                        <Text style={styles.productTitle}>M</Text>
                    </Pressable>

                    <ScrollView horizontal={true}>
                        <View style={styles.productSection}>
                            <Pressable style={styles.product} onPress={() => Alert.alert("Hello", "The story is not available right now")}>
                                <Text style={styles.productTitle}>A</Text>
                            </Pressable>
                            <Pressable style={styles.product} onPress={() => Alert.alert("Hello", "The story is not available right now")}>
                                <Text style={styles.productTitle}>B</Text>
                            </Pressable>
                            <Pressable style={styles.product} onPress={() => Alert.alert("Hello", "The story is not available right now")}>
                                <Text style={styles.productTitle}>C</Text>
                            </Pressable>
                            <Pressable style={styles.product} onPress={() => Alert.alert("Hello", "The story is not available right now")}>
                                <Text style={styles.productTitle}>D</Text>
                            </Pressable>
                            <Pressable style={styles.product} onPress={() => Alert.alert("Hello", "The story is not available right now")}>
                                <Text style={styles.productTitle}>E</Text>
                            </Pressable>
                        </View>

                    </ScrollView>
                </View>
                <View style={styles.banner}>
                    <Text style={styles.bannerTitle}>Amazing Discounts. Avail Today!!</Text>
                    <Text style={styles.bannerDescription}>Hurry Up!! Offers are valid for limited time only</Text>
                </View>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Details', { "productId": "12" })}>
                    <Text style={styles.buttonText}>Go to product page</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => navigation.push('Details', { "productId": "12" })}>
                    <Text style={styles.buttonText}>Go to product page</Text>
                </Pressable>
            </View>
           
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 16,
        gap: 16
    },


    productSection: {
        flexDirection: "row",
        gap: 10,
        maxHeight: 200,
        paddingHorizontal: 10,

    },

    product: {
        width: 90,
        height: 90,
        backgroundColor: "#131313",
        borderColor: "#CF9FFF",
        borderWidth: 4,
        borderRadius: 90 / 2,
        justifyContent: "center",
        alignItems: "center"
    },

    productTitle: {
        color: "white",
        fontSize: 28
    },

    banner: {
        flex: 1,
        height: "auto",
        width: "100%",
        borderColor: "#CF9FFF",
        borderWidth: 2,
        borderRadius: 16,
        padding: 16,
        gap: 10,
        
    },

    bannerTitle: {
        fontSize: 23,
        color: "#ffffff",
        fontWeight: "600",

    },

    bannerDescription: {
        fontSize: 14,
        color: "#ffffff",
    },

    button: {
        backgroundColor: 'purple',
        borderRadius: 16,
        paddingHorizontal: 10,
        paddingVertical: 16,
        justifyContent: "center",
        alignItems: "center"
    },

    buttonText: {
        fontSize: 16,
        fontWeight: "600",
        color: "white"
    }

})