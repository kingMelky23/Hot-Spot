import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Register({navigation}) {
    return (
        <View style={styles.container}>
            <Text>hello from register</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
      },
})
